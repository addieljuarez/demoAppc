// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

$.imageLocal.image = 'images/imageandroid.png';
$.imageRemote.image = 'https://w7.pngwing.com/pngs/994/168/png-transparent-android-computer-icons-mobile-phones-mobile-app-metro-free-icon-android-text-logo-grass.png';



$.imageGallery.addEventListener('click', function(e){
    // Ti.API.info(e);

    Ti.Media.openPhotoGallery({
        success: function(event){

            // Ti.API.info(event);

            // alert('entro a success');
            // alert(event.media);
            
            // $.imageGallery.image = event.media;
            e.source.image = event.media;
            e.source.height = Ti.UI.SIZE;
        },
        cancel: function(){
            // alert('entro a cancelar');
        },
        error: function(error){
            alert('entro a Error');
        }
    });
});