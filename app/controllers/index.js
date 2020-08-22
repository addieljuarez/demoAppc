

$.ventana.open();

$.viewImage2.top = 50;
$.viewImage2.height = 100;
$.viewImage2.width = 100,
$.viewImage2.backgroundColor = 'pink';
$.viewImage2.backgroundImage = 'https://lh3.googleusercontent.com/oXwS_Jo1xrUhkZRxtTTvRH4Avartfj6PVjlveBMIHCryeKwV-aj_N4lpPzx37DLi5Bg';


var imagen4 = Titanium.UI.createImageView({
	height: 100,
	width: 100,
	backgroundColor: 'brown',
	top: 50,
	image: 'https://i.blogs.es/4fdfc8/recoveryyy/450_1000.jpg',
});

$.ventana.add(imagen4);



// ========================================
// Eventos
// ========================================

$.ventana.addEventListener('touchmove', function(e){
	Ti.API.info('lado x: ' + e.x + ', lado y: ' + e.y);
});


var animation1 = Ti.UI.createAnimation({
	height: 200,
	width: 200,
	duration: 2000,
});


var animation2 = Ti.UI.createAnimation({
	top: -200,
	duration: 3000,
});

$.viewImage.addEventListener('click', function(e){
	// alert('click me');
	$.viewImage2.animate(animation1);
});


animation1.addEventListener('complete', function(e){
	imagen4.animate(animation2);
});

animation2.addEventListener('complete', function(e){
	alert('terminó las animaciones')
});



$.boton.addEventListener('click', function(e){
	// manera 1
	// var windows2 = Ti.UI.createWindow({
	// 	backgroundColor: 'gray',
	// });
	// windows2.open();

	// manera 2
	var windows2 = Alloy.createController('ventana2').getView();
	windows2.open();
	
	// manera 3
	// var windows2_demo = Alloy.createController('ventana2_demo');
	// windows2_demo.openWindows();
});