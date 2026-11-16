

 // code for menu expand/collapse

 $('.main-nav-links a.toggle').click(function(e) {
  e.preventDefault();

  var $this = $(this);
  $this.parent().parent().find('li').removeClass('expand');

  if ($this.next().hasClass('slide-down')) {
      $this.next().removeClass('slide-down');
      // $this.next().slideUp(350);
      $this.parent().removeClass('expand');
  } else {
      $this.parent().addClass('expand');
      $this.parent().parent().find('li .inner').removeClass('slide-down');
      // $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('slide-down');
      // $this.next().slideToggle(350);
      
  }

  $(".close-btn").click(function(){
    $(".main-nav-links .inner ").removeClass("slide-down");
  });


});




 // pullout menu code
 $( "#burgermenu a" ).click(function() {
  var thisParent = $(this).parent();
  $( thisParent).addClass( "out" );
  $( 'nav.main-nav').addClass( "open-menu" );
  $('header .menu a').addClass( "hidemenu" )
  $('body').addClass( "overlay" )
});

$( "#menuclose" ).click(function() {
  var thisParent = $("#burgermenu ");
  $( thisParent).removeClass( "out" );
  $( 'nav.main-nav').removeClass( "open-menu" );
  $('header .menu a').removeClass( "hidemenu" )
  $('body').removeClass( "overlay" )
});