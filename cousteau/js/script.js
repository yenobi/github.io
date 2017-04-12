
$(function(){
  $('body').scrollspy({
     target: '#navbar',
   });

   // smooth scroll for logo
   $('.navbar-brand').bind('click', function() {
     $('html, body').stop().animate({
       scrollTop: $($(this).attr('href')).offset().top
     }, 1500, 'easeInOutExpo');
   })
   
   // smooth scroll for nav
   $('.navbar-nav a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top + 365
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

});
