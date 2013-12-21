// Responsive Nav
$(document).ready( function( $ ) {
  var $menu = $('#menu'),
      $menulink = $('.nav-link'),
      $menuTrigger = $('.has-submenu > a');
  $menulink.click(function(e) {
    e.preventDefault();
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
  });
  $menuTrigger.click(function(e) {
    e.preventDefault();
    var $this = $(this);
    $this.toggleClass('active').next('ul').toggleClass('active');
  });
});

// Scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 80
        }, 400);
        return false;
      }
    }
  });
});

function placeholders(){
  $(".show-hide").each(function(){
    var e = $(this);
    var val = e.val();
    console.log(e + "   " + val)
    e.focus(function(){
      console.log("focus: " + this);
      placeholderFocus(this, val);
    });
    e.blur(function(){
      placeholderBlur(this, val);
    });   
  });
}

function placeholderFocus(e, str) {
  if(e.value == str){ 
    e.value = ''; 
  }
}

function placeholderBlur(e, str) {
  if(e.value == '') { 
    e.value = str; 
  }
}

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-1738300-17', 'wptriage.com');
ga('send', 'pageview');