$(document).ready(function () {
    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();

    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function () {
        $('.image-section').show();
        $('#btn-predict').show();
        $('#result').text('');
        $('#result').hide();
        readURL(this);
    });

    // Predict
    $('#btn-predict').click(function () {
        var form_data = new FormData($('#upload-file')[0]);

        // Show loading animation
        $(this).hide();
        $('.loader').show();

        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('.loader').hide();
                $('#result').fadeIn(600);
                $('#result').text(' Result:  ' + data);
                // if(data=="Rose"){
                //     $('#pics').show();
                // }
                console.log('Success!');
                if(data=="Astilbe"){
                    // $('#astible').modal('show');
                    $('#img1').attr("src", "static/astible (1).jpg");
                    $('#a1').attr("href", "static/astible (1).jpg");
                    $('#img2').attr("src", "static/astible (2).jpg");
                    $('#a2').attr("href", "static/astible (2).jpg");
                    $('#img3').attr("src", "static/astible (3).jpg");
                    $('#a3').attr("href", "static/astible (3).jpg");
                    $('#mymodel').modal('show');
                }
                else if(data=="Bell Flower"){
                    // $('#bell_flower').modal('show');
                    $('#img1').attr("src", "static/bell_flower (1).jpg");
                    $('#a1').attr("href", "static/bell_flower (1).jpg");
                    $('#img2').attr("src", "static/bell_flower (2).jpg");
                    $('#a2').attr("href", "static/bell_flower (2).jpg");
                    $('#img3').attr("src", "static/bell_flower (3).jpg");
                    $('#a3').attr("href", "static/bell_flower (3).jpg");
                    $('#mymodel').modal('show');
                }
                else if(data=="Black-Eyed Susan"){
                    // $('#black_eyed_susan').modal('show');
                    $('#img1').attr("src", "static/black_eyed_susan (1).jpg");
                    $('#a1').attr("href", "static/black_eyed_susan (1).jpg");
                    $('#img2').attr("src", "static/black_eyed_susan (2).jpg");
                    $('#a2').attr("href", "static/black_eyed_susan (2).jpg");
                    $('#img3').attr("src", "static/black_eyed_susan (3).jpg");
                    $('#a3').attr("href", "static/black_eyed_susan (3).jpg");
                    $('#mymodel').modal('show');
                }
                else if(data=="Calendula"){
                    // $('#calendula').modal('show');
                    $('#img1').attr("src", "static/calendula (1).jpg");
                    $('#a1').attr("href", "static/calendula (1).jpg");
                    $('#img2').attr("src", "static/calendula (2).jpg");
                    $('#a2').attr("href", "static/calendula (2).jpg");
                    $('#img3').attr("src", "static/calendula (3).jpg");
                    $('#a3').attr("href", "static/calendula (3).jpg");
                    $('#mymodel').modal('show');
                }
                else if(data=="California Poppy"){
                    // $('#california_poppy').modal('show');
                    $('#img1').attr("src", "static/california_poppy (1).jpg");
                    $('#a1').attr("href", "static/california_poppy (1).jpg");
                    $('#img2').attr("src", "static/california_poppy (2).jpg");
                    $('#a2').attr("href", "static/california_poppy (2).jpg");
                    $('#img3').attr("src", "static/california_poppy (3).jpg");
                    $('#a3').attr("href", "static/california_poppy (3).jpg");
                    $('#mymodel').modal('show');
                }
                else if(data=="Carnation"){
                    // $('#carnation').modal('show');
                    $('#img1').attr("src", "static/carnation (1).jpg");
                    $('#a1').attr("href", "static/carnation (1).jpg");
                    $('#img2').attr("src", "static/carnation (2).jpg");
                    $('#a2').attr("href", "static/carnation (2).jpg");
                    $('#img3').attr("src", "static/carnation (3).jpg");
                    $('#a3').attr("href", "static/carnation (3).jpg");
                    $('#mymodel').modal('show');
                }
                else if(data=="Common Daisy"){
                    // $('#common_daisy').modal('show');
                    $('#img1').attr("src", "static/common_daisy (1).jpg");
                    $('#a1').attr("href", "static/common_daisy (1).jpg");
                    $('#img2').attr("src", "static/common_daisy (2).jpg");
                    $('#a2').attr("href", "static/common_daisy (2).jpg");
                    $('#img3').attr("src", "static/common_daisy (3).jpg");
                    $('#a3').attr("href", "static/common_daisy (3).jpg");
                    $('#mymodel').modal('show');
                }
                else if(data=="Coreopsis"){
                    // $('#coreopsis').modal('show');
                    $('#img1').attr("src", "static/coreopsis (1).jpg");
                    $('#a1').attr("href", "static/coreopsis (1).jpg");
                    $('#img2').attr("src", "static/coreopsis (2).jpg");
                    $('#a2').attr("href", "static/coreopsis (2).jpg");
                    $('#img3').attr("src", "static/coreopsis (3).jpg");
                    $('#a3').attr("href", "static/coreopsis (3).jpg");
                    $('#mymodel').modal('show');
                }
                else if(data=="Daisy"){
                    // $('#daisy').modal('show');
                    $('#img1').attr("src", "static/daisy (1).jpg");
                    $('#a1').attr("href", "static/daisy (1).jpg");
                    $('#img2').attr("src", "static/daisy (2).jpg");
                    $('#a2').attr("href", "static/daisy (2).jpg");
                    $('#img3').attr("src", "static/daisy (3).jpg");
                    $('#a3').attr("href", "static/daisy (3).jpg");
                    $('#mymodel').modal('show');
                }
                else if(data=="Dandelion"){
                    // $('#dandelion').modal('show');
                    $('#img1').attr("src", "static/dandelion (1).jpg");
                    $('#a1').attr("href", "static/dandelion (1).jpg");
                    $('#img2').attr("src", "static/dandelion (2).jpg");
                    $('#a2').attr("href", "static/dandelion (2).jpg");
                    $('#img3').attr("src", "static/dandelion (3).jpg");
                    $('#a3').attr("href", "static/dandelion (3).jpg");
                    $('#mymodel').modal('show');
                }
                else if(data=="Iris"){
                    // $('#iris').modal('show');
                    $('#img1').attr("src", "static/iris (1).jpg");
                    $('#a1').attr("href", "static/iris (1).jpg");
                    $('#img2').attr("src", "static/iris (2).jpg");
                    $('#a2').attr("href", "static/iris (2).jpg");
                    $('#img3').attr("src", "static/iris (3).jpg");
                    $('#a3').attr("href", "static/iris (3).jpg");
                    $('#mymodel').modal('show');
                }
                else if(data=="Lilly"){
                    // $('#lilly').modal('show');
                    $('#img1').attr("src", "static/lilly (1).jpg");
                    $('#a1').attr("href", "static/lilly (1).jpg");
                    $('#img2').attr("src", "static/lilly (2).jpg");
                    $('#a2').attr("href", "static/lilly (2).jpg");
                    $('#img3').attr("src", "static/lilly (3).jpg");
                    $('#a3').attr("href", "static/lilly (3).jpg");
                    $('#mymodel').modal('show');
                }
                else if(data=="Rose"){
                    // $('#rose').modal('show');
                    $('#img1').attr("src", "static/rose (1).jpg");
                    $('#a1').attr("href", "static/rose (1).jpg");
                    $('#img2').attr("src", "static/rose (2).jpg");
                    $('#a2').attr("href", "static/rose (2).jpg");
                    $('#img3').attr("src", "static/rose (3).jpg");
                    $('#a3').attr("href", "static/rose (3).jpg");
                    $('#mymodel').modal('show');
                }
                else if(data=="Sun Flower"){
                    // $('#sunflower').modal('show');
                    $('#img1').attr("src", "static/sunflower (1).jpg");
                    $('#a1').attr("href", "static/sunflower (1).jpg");
                    $('#img2').attr("src", "static/sunflower (2).jpg");
                    $('#a2').attr("href", "static/sunflower (2).jpg");
                    $('#img3').attr("src", "static/sunflower (3).jpg");
                    $('#a3').attr("href", "static/sunflower (3).jpg");
                    $('#mymodel').modal('show');
                }
                else if(data=="Tulip"){
                    // $('#tulip').modal('show');
                    $('#img1').attr("src", "static/tulip (1).jpg");
                    $('#a1').attr("href", "static/tulip (1).jpg");
                    $('#img2').attr("src", "static/tulip (2).jpg");
                    $('#a2').attr("href", "static/tulip (2).jpg");
                    $('#img3').attr("src", "static/tulip (3).jpg");
                    $('#a3').attr("href", "static/tulip (3).jpg");
                    $('#mymodel').modal('show');
                }
                else if(data=="Water Lilly"){
                    // $('#water_lilly').modal('show');
                    $('#img1').attr("src", "static/water_lilly (1).jpg");
                    $('#a1').attr("href", "static/water_lilly (1).jpg");
                    $('#img2').attr("src", "static/water_lilly (2).jpg");
                    $('#a2').attr("href", "static/water_lilly (2).jpg");
                    $('#img3').attr("src", "static/water_lilly (3).jpg");
                    $('#a3').attr("href", "static/water_lilly (3).jpg");
                    $('#mymodel').modal('show');
                }
            },
        });
    });

});
