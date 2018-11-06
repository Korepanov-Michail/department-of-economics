
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
    $(".nav_mobile").css({ display:"block"});
    $(".nav_mobile ").css({ position:"absolute"});
    $(".nav_mobile ").css({ top:62});
    $(".nav_mobile ").css({ left:0});
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
      $(".nav_mobile").css({ display:"none"});
    }
    flag_schow_menu = flag_schow_menu * (-1)
  }

  function Use_pagination_large_left(){
    
    $(".slider_foto_1 ").css({ opacity: 0});
    $(".slider_foto_2 ").css({ opacity: 0});
    $(".dot_1 div ").css({ display:"block"});
    $(".dot_2 div ").css({ display:"none"}); 

      var d = document.getElementById("f_1");
      d.classList.add("slider_show_item");
      var r = document.getElementById("f_2");
      r.classList.remove("slider_show_item");
    }

  function Use_pagination_large_right(){
    
    $(".slider_foto_1 ").css({ opacity: 0});
    $(".slider_foto_2 ").css({ opacity: 0});
    $(".dot_1 div ").css({ display:"none"});
    $(".dot_2 div ").css({ display:"block"}); 

      var d = document.getElementById("f_2");
      d.classList.add("slider_show_item");
      var r = document.getElementById("f_1");
      r.classList.remove("slider_show_item");
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
