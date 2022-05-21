from __future__ import division, print_function
# coding=utf-8
import sys
import os
import glob
import re
from typing import Any
import numpy as np
from flask import jsonify

# Keras
from keras.applications.imagenet_utils import preprocess_input, decode_predictions
from keras.models import load_model
from keras.preprocessing import image

# Flask utils
from flask import Flask, redirect, url_for, request, render_template
from werkzeug.utils import secure_filename
from gevent.pywsgi import WSGIServer

# Define a flask app
app = Flask(__name__)

# Model saved with Keras model.save()
MODEL_PATH = 'models/inception16.h5'

# Load your trained model
model = load_model(MODEL_PATH)
# model._make_predict_function()          # Necessary
# print('Model loaded. Start serving...')

# You can also use pretrained model from Keras
# Check https://keras.io/applications/
#from keras.applications.resnet50 import ResNet50
#model = ResNet50(weights='imagenet')
#model.save('')
print('Model loaded. Check http://127.0.0.1:5000/')

def index_2d(myList, v):
    index = 0
    for i, x in enumerate(myList):
        index = index + 1
        for j, y in enumerate(x):
            if v == myList[i][j]:
                return j

def model_predict(img_path, model):
    img = image.load_img(img_path, target_size=(200, 200))

    # Preprocessing the image
    x = image.img_to_array(img)
    # x = np.true_divide(x, 255)
    x = np.expand_dims(x, axis=0)

    # Be careful how your trained model deals with the input
    # otherwise, it won't make correct prediction!
    x = preprocess_input(x, mode='caffe')

    preds = model.predict(x)
    return preds

@app.route('/logout', methods=['GET'])
def logout():
    return render_template('login.html')

@app.route('/my-plants', methods=['GET'])
def my_plants():
    hists = os.listdir('static/uploads')
    hists = [file for file in hists]
    # print(hists)
    return render_template('my_plants.php', hists = hists)
    #return render_template('my_plants.php')

@app.route('/basic-gallery', methods=['GET'])
def basic_gallery():
    return render_template('basic_gallery.html')

@app.route('/take-photo', methods=['GET'])
def take_photo():
    return render_template('take-photo.html')

@app.route('/', methods=['GET'])
def index():
    # Main page
    return render_template('index.html')


@app.route('/predict', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        # Get the file from post request
        f = request.files['file']

        # Save the file to ./uploads
        basepath = os.path.dirname(__file__)
        file_path = os.path.join(
            basepath, 'static/uploads', secure_filename(f.filename))
        f.save(file_path)

        test_image = image.load_img(file_path,target_size=(200,200))
        test_image = image.img_to_array(test_image)
        test_image = np.expand_dims(test_image,axis=0)
        # Make prediction
        test_image = test_image.astype('float32') # this line was missing
        test_image /= 255 # this line was missing too
        #preds = model_predict(file_path, model)
        preds = model.predict(test_image)
        #prediction = model.predict_proba(test_image)
        print(preds)

        # Process your result for human
        #pred_class = preds.argmax(axis=-1)            # Simple argmax
        #pred_class = decode_predictions(preds, top=1)   # ImageNet Decode
        #result = str(pred_class[0][0][1])               # Convert to string
        #maxx=np.max(preds)
        prob=np.max(preds)
        print(prob)
        # result=[]
        ind=index_2d(preds, prob)
        classes = ['Astilbe','Bell Flower','Black-Eyed Susan','Calendula','California Poppy','Carnation','Common Daisy','Coreopsis','Daisy','Dandelion','Iris','Lilly','Rose','Sun Flower','Tulip','Water Lilly']
        result=classes[ind]
        # preds[0][ind]=0
        # prob=np.max(preds)
        # ind1=index_2d(preds, prob)
        # preds[0][ind1]=0
        # prob=np.max(preds)
        # ind2=index_2d(preds, prob)
        # result.append(classes[ind1])
        # result.append(classes[ind2])
        # print(result)


        # return jsonify(plant1=result[0], plant2=result[1], plant3=result[2])
        return result
        # result = "Other Class"
        # if preds[0][0]==1:
        #     result='Astilbe'
        # elif preds[0][1]==1:
        #     result='Bell Flower'
        # elif preds[0][2]==1:
        #     result='Black-Eyed Susan'
        # elif preds[0][3]==1:
        #     result='Calendula'
        # elif preds[0][4]==1:
        #     result='California Poppy'
        # elif preds[0][5]==1:
        #     result='Carnation'
        # elif preds[0][6]==1:
        #     result='Common Daisy'
        # elif preds[0][7]==1:
        #     result='Coreopsis'
        # elif preds[0][8]==1:
        #     result='Daisy'
        # elif preds[0][9]==1:
        #     result='Dandelion'
        # elif preds[0][10]==1:
        #     result='Iris'
        # elif preds[0][11]==1:
        #     result='Lilly'
        # elif preds[0][12]==1:
        #     result='Rose'
        # elif preds[0][13]==1:
        #     result='SunFlower'
        # elif preds[0][14]==1:
        #     result="Tulip"
        # elif preds[0][15]==1:
        #     result="Water Lilly"
        # return result
    return None


if __name__ == '__main__':
    app.debug=True
    app.run(host='0.0.0.0',port=5000)
    # app.run(debug=True)

