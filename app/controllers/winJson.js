// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;



function pedirDinero(_callback){
    Ti.API.info('entra a la funcion Pedir dinero y de espera 2 segundo');

    setTimeout(function(e){
        _callback('Funcion Pedir dinero');
        revisarFondos(_callback);
    }, 2000);
    
}

function revisarFondos(_callback){
    Ti.API.info('entra a la funcion revisar fondos y de espera 3 segundo');
    setTimeout(function() {
        _callback('revisar fondos');
        entregarDinero(_callback);
    }, 3000);
}


function entregarDinero(_callback){
    Ti.API.info('entra a la funcion Entregar dinero  y de espera 3 segundo');
    setTimeout(function(){
        _callback('entregar dinero');
    }, 3000);
}


$.demoCallback.addEventListener('click', function(e){

    pedirDinero(todoCompleto);

    function todoCompleto(_texto){
        alert(_texto);
    }

});


// =====================================
// arguments
$.demoArgument.addEventListener('click', function(e){

    function sumar(_numero1, _numero2){
        var suma = _numero1  + _numero2;
        return suma;
    }
    
    var resultadoSuma = sumar(3, 5);
    var resultadoSuma2 = sumar(10, 5);

    Ti.API.info(resultadoSuma);
    alert(resultadoSuma2);
});


$.demoJSON.addEventListener('click', function(e){

    var url = 'https://gist.githubusercontent.com/addieljuarez/80f0b6f39ec98e8e8533eb445158f642/raw/7435b40d4da1b1e92a5bce47a4e1d80ca8b081da/demo.json';
    var cliente = Ti.Network.createHTTPClient({
        onload: function(){
            // alert('entro al onload');
            Ti.API.info(this.responseText);
            // $.textoresult.text = this.responseText;

            var objJson = JSON.parse(this.responseText);

            $.textoresult.text = 'numero de elementos: ' + objJson.length;

            // inicio
            // limite
            // avance


            for(var i=0; i<objJson.length; i++){
                var viewRow = Ti.UI.createView({
                    // height: 50,
                    height: Ti.UI.SIZE,
                    width: Ti.UI.FILL,
                    borderColor: 'blue',
                    borderWidth: 2,
                    top: 5
                });
    
                $.viewMain.add(viewRow);

                var titleRow = Ti.UI.createLabel({
                    height: Ti.UI.SIZE,
                    left: 20,
                    color: 'red',
                    text: objJson[i].arg ,
                });
                viewRow.add(titleRow);

                var iconoRow = Ti.UI.createImageView({
                    height: 50,
                    width: 50,
                    // height: Ti.UI.SIZE,
                    // width: 80,
                    right: 30,
                    image: objJson[i].imagen,
                    borderColor: 'black',
                    borderWidth: 2,
                    borderRadius: 25,
                });
                viewRow.add(iconoRow);

            }

            



        },
        onerror: function(e){
            alert('el error es: ' + e.error);
        },
        timeout: 10000,

    });
    cliente.open('GET', url);
    cliente.send();
});