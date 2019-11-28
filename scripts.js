jQuery(document).ready(function() {

  var btn = $('#back_to_top');
  var btnMenu=$('#postMenu')
  var box =$('#box_immagini');
  var immagine=$('#im');
  var altezza= immagine.height;
  var larghrzza=immagine.width;
  var prova=$('#prova');
  var top=$('#top');
  var tool=$('#tool');
  $('#Menu').hide();


  var timer;
  var timer2;
  $('#indice').hover(function() {
    timer = setTimeout(function() {
       $('#Menu').show("1000");
     },200);
  }, function() {
    //if leaves early then clear the timer
    clearTimeout(timer);
  })


  //$('#indice').mouseenter(function() {
    //  $('#Menu').show("1000");
    //});
  //
    $('#indice').mouseleave(function() {
          $('#Menu').hide("1000");
      });

  $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
    btn.addClass('show');
    } else {
    btn.removeClass('show');
    }
  });

  $('#postMenu').hover(function() {
    timer2 = setTimeout(function() {
         $('#aperto').show("1000");
     },200);
  }, function() {
    //if leaves early then clear the timer
    clearTimeout(timer2);
  });
    //$('#postMenu').mouseenter(function(){
  //  if (k==0){
  //    k=1;
  //  $('#aperto').show("1000");
  //  k=0;
  //}});


  $('#postMenu').mouseleave(function(){
    $('#aperto').hide("1000");

  });



  $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
    btnMenu.addClass('show');
    $('#aperto').hide();
    $('#apertoMenu').hide();
    } else {
    btnMenu.removeClass('show');
    }
  });



  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });


  top.ready(function(){
    box.height($('#im').width()*0.75);
    prova.height((prova.width())*0.45);
  });

  $(window).resize(function(){
    prova.height(prova.width()*0.75);
    box.height($('#im').width()*0.45);
  });



});
