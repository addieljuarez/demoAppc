// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
// var textoTF = '';


$.botonCerrar.addEventListener('click', function(e){
    $.ventana2.close();
});


$.inputWeb.addEventListener('change', function(e){
    Ti.API.info(e.value);
    // textoTF = e.value;
});


$.botonWeb.addEventListener('click', function(e){
    alert($.inputWeb.value);
    $.web.url = $.inputWeb.value;
    $.inputWeb.blur();

    // $.web.hide();
    // setTimeout(function(){
    //     $.web.show();
    // }, 2000);

    // $.ventana2.remove($.web);

});


$.inputWeb.addEventListener('blur', function(e){
    // alert('teclado abajo')
    $.botonWeb.color = 'red';
    $.botonWeb.touchEnabled = false;
    $.inputWeb.touchEnabled = false;
    $.inputWeb.backgroundColor = 'black'
    $.inputWeb.color = 'white';
});