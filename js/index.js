$(document).ready(function(){

  //intro
  $('#header').hide();
  $('div:not(#intro, #wrapper, #menu)').hide();
  $('#intro').appendTo('#wrapper');

  var t = setInterval(function(){
    $('#intro').fadeTo('slow', 0, 
      function(){ 
        $(this).remove();
        $('div:not(#intro, .dropdown-menu)').show();
      });
  },5000);

  //on click #name-left-corner skip intro
  $('#name-left-corner').click(function (){
    $('#intro').remove();
    $('div:not(#intro, .dropdown-menu)').show();
  })

  //hamburger icon animation
  var toggles = $(".hamburger")

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    $(".hamburger").on("click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

  //drop-down menu
  $( '#menu-btn' ).click(function(){
      $('.dropdown-menu').toggleClass('expand')
  })

  //images sliding in project div
    $('#p1 img:gt(0)').hide();
    $('#p2 img:gt(0)').hide();
    
    $("#p1").mouseenter(function(){
           $('#p1 :first-child').fadeOut().next('img').fadeIn().end().appendTo('#p1');
    });

    $("#p2").mouseenter(function(){
           $('#p2 :first-child').fadeOut().next('img').fadeIn().end().appendTo('#p2');
    });

     $("#p3").mouseenter(function(){
           $('#p3 :first-child').fadeOut().next('img').fadeIn().end().appendTo('#p3');
    });

     //link images to githubpage
     $("#p1").click(function(){
      window.location.href = "https://github.com/SaraKoops/user-management-application";
     })
    
     $("#p2").click(function(){
      window.location.href = "https://github.com/SaraKoops/user-management-application";
     })

      $("#p3").click(function(){
      window.location.href = "https://github.com/SaraKoops/user-management-application";
     })
})

