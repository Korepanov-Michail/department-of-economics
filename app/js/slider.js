window.onload = function() {
  // выравниваем блоки по высоте самого высоког блока ,
  // вызвать функцию Height_block(".item"); 
  //и вместо .productItem поставить свoй класс

  function Height_block(blok_clas){  
  var blok = []
  var blok = $(blok_clas)
  var heig = $(blok_clas).css("height")
  for (var i = 0; i < blok.length; i++) {
    var h = ($(blok[i]).css("height"))
       if(heig < h){
           heig =  h
       }
  }
  $(blok_clas).css({ height: heig})
  }
  Height_block(".item");

  $( ".course_1 hr" ).hover(function(){ // задаем функцию при наведении курсора на элемент 
      $( ".course_1 hr" ).css( "width", "590" ) // 
      }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента  
      $( ".course_1 hr" ).css( "width", "425" ) // 
    });
 
 var flag_schow_menu = 1

  function Show_menu(){
    if(flag_schow_menu == 1){
    $(".nav").css({ display:"block"});
    $(".nav ul li").css({ float:"none"});
    $(".nav ").css({ position:"absolute"});
    $(".nav ").css({ top:52});
    $(".nav ").css({ left:0});
    $(".container_figure_4 ").css({ float:"none"});
   $(".container_figure_4 ").css({ position:"absolute"});
   $(".container_figure_4 ").css({ top:0});
   $(".container_figure_4 ").css({ left: '72%'});
   $(".container_figure_5 ").css({ position:"absolute"});
   $(".container_figure_5 ").css({ top:0});
   $(".container_figure_5 ").css({ left: '87%'});
    }else {
      $(".container_figure_4 ").css({ position:"static"});
      $(".container_figure_4 ").css({ float:"right"});
      $(".container_figure_5 ").css({ position:"static"});
      $(".container_figure_5 ").css({ float:"right"});
      $(".nav").css({ display:"none"});
    }
    flag_schow_menu = flag_schow_menu * (-1)
  }

  function Use_pagination_large_left(){
    var boxElement_3 = document.querySelector('.slider_foto .img_1');
    var animation = boxElement_3.animate([
    {transform: 'translate(-604px, 0px)'},
    {transform: 'translate(0px, 0px)'}
    ], 1000);
    animation.addEventListener('finish', function() {
    boxElement_3.style.transform = 'translate(0px, 0px)';
    });

    var boxElement_2 = document.querySelector('.slider_foto .img_2');
    var animation = boxElement_2.animate([
    {transform: 'translate(-604px, 0px)'},
    {transform: 'translate(0px, 0px)'}
    ], 1000);
    animation.addEventListener('finish', function() {
    boxElement_2.style.transform = 'translate(0px, 0px)';
    });

    $(".dot_1 div ").css({ display:"block"});
    $(".dot_2 div ").css({ display:"none"}); 
    }

  function Use_pagination_large_right(){
    var boxElement_1 = document.querySelector('.slider_foto .img_1');
    var animation = boxElement_1.animate([
    {transform: 'translate(0)'},
    {transform: 'translate(-604px, 0px)'}
    ], 1000);
    animation.addEventListener('finish', function() {
    boxElement_1.style.transform = 'translate(-604px, 0px)';
    });

    var boxElement_2 = document.querySelector('.slider_foto .img_2');
    var animation = boxElement_2.animate([
    {transform: 'translate(0)'},
    {transform: 'translate(-604px, 0px)'}
    ], 1000);
    animation.addEventListener('finish', function() {
    boxElement_2.style.transform = 'translate(-604px, 0px)';
    });

    $(".dot_1 div ").css({ display:"none"});
    $(".dot_2 div ").css({ display:"block"}); 
    }
   
   $(".control_right").click(function(){ 
     Use_pagination_large_left() 
  })

  $(".dot_1").click(function(){ 
     Use_pagination_large_left() 
  })

  $(".control_left").click(function(){ 
     Use_pagination_large_right() 
  })
 
  $(".dot_2").click(function(){ 
     Use_pagination_large_right() 
  })

  $(".mobile_menu").click(function(){ 
     Show_menu()   
  })

}; //window.onload = function()