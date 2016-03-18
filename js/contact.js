$(document).ready(function(){

  $('.confetti-container').hide();
  $("#wrapper").css("margin", "1em 1em 0 1em");

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

  //you've got mail, yeey

  $("#mail").click(function(){
    $("#wrapper").css("margin", "7em 1em 0 1em");
    $('.confetti-container').show();  
    $('#header').html("<h1><a id='sara' href='#'>Sara</a> /thanks!</h1>")
  });

    //drop-down menu
    $( '#menu-btn' ).click(function(){
      $('.dropdown-menu').toggleClass('expand')
    })

})