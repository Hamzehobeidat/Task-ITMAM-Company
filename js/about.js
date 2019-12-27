/* global $, alert, console*/

$(function () {

    'use strict';

   

    var myhome = $('.home');
    

    myhome.height($(window).height());

    $(window).resize(function (){ 

    myhome.height($(window).height());
        
         });
     });