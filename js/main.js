/* global $, alert, console*/

$(function () {

    'use strict';

    //Adjust Header Height


    var mySlider = $('.slider'),
     myCarouselitem = $('.carousel-item ');

   /*
    mySlider.height($(window).height());
    myCarouselitem.height($(window).height());
   */
   $('.slider, .carousel-item').height($(window).height());

   $(window).resize(function() {

   $('.slider, .carousel-item').height($(window).height());

    /*
    mySlider.height($(window).height());
    myCarouselitem.height($(window).height());
   */
 });
/*
    var myHeader = $('.home');
     myHeader.height($(window).height());

    $(window).resize(function(){

    myHeader.height($(window).height());
  });
  */


  // Deal All Tabs
  $('.digital-switch li').click(function () {
    //Add selected class to active link
    $(this).addClass('selected').siblings().removeClass('selected');
    //Hide all div
    $('.digital-section .digital-content > div').hide();
    //show div connected with this link
    $($(this).data('class')).show();
  });


  $('.digital-switch li').on('click', function () {

        if ($(this).data('class') === '.digital-one') {

          document.getElementById("pink").innerHTML = "01,";
        }
      });

      $('.digital-switch li').on('click', function () {
            if ($(this).data('class') === '.digital-two') {

              document.getElementById("pink").innerHTML = "02,";

            }
          });



          $('.digital-switch li').on('click', function () {
                if ($(this).data('class') === '.digital-three') {

                  document.getElementById("pink").innerHTML = "03,";


                }
              });

         

          var menu = $('.show-menu-btn .span-menu');
          

          /* menu.css('background','#e80442');*/

          /*
           menu.on('click', function () {
            if($(this).css('background') === 'linear-gradient(100deg, #720082, #f1043d)') {

               $(this).css({
              'background' : "#e80442 "
            });

            } 
           });
           */

         
          menu.click(function () {
            $(this).css({
              'background' : "#e80442 "
            });
          });
       
          

     });
