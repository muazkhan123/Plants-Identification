{% extends "header.html" %} {% block content %}
    
<div class="wrapper wrapper-content">
    <div class="row">
        <div class="col-lg-12">
        <div class="ibox ">

            <div class="ibox-content">
            
                <h2>Identified Plants</h2>

                <div class="lightBoxGallery">
                    {% for hist in hists %}
                    <!-- <img src="{{url_for('static', filename=hist)}}" alt="{{hist}}"> -->
                    <a href="static\uploads\{{hist}}" title="{{Flower}}" data-gallery=""><img src="static\uploads\{{hist}}" width="128" height="128"></a>
                    {% endfor %}

                    <!-- The Gallery as lightbox dialog, should be a child element of the document body -->
                    <div id="blueimp-gallery" class="blueimp-gallery">
                        <div class="slides"></div>
                        <h3 class="title"></h3>
                        <a class="prev">‹</a>
                        <a class="next">›</a>
                        <a class="close">×</a>
                        <a class="play-pause"></a>
                        <ol class="indicator"></ol>
                    </div>

                </div>
            </div>
        </div>
    </div>
    
    </div>
</div>


{% endblock %}
