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
    setTimeout(() => {
        _callback('revisar fondos');
        entregarDinero(_callback);
    }, 3000);
}


function entregarDinero(_callback){
    Ti.API.info('entra a la funcion Entregar dinero  y de espera 3 segundo');
    setTimeout(() => {
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

    var url = 'https://gist.githubusercontent.com/gcollazo/884a489a50aec7b53765405f40c6fbd1/raw/49d1568c34090587ac82e80612a9c350108b62c5/sample.json';
    var cliente = Ti.Network.createHTTPClient({
        onload: function(){
            alert('entro al onload');
            Ti.API.info(this.responseText);
            $.textoresult.text = this.responseText;
        },
        onerror: function(e){
            alert(e.error);
        },
        timeout: 5000,

    });
    cliente.open('GET', url);
    cliente.send();
});