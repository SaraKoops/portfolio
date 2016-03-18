$(document).ready(function(){

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
  $('#p3 img:gt(0)').hide();
  $('#p4 img:gt(0)').hide();
  $('#p5 img:gt(0)').hide();
  $('#p6 img:gt(0)').hide();

  $("#p1").mouseenter(function(){
   $('#p1 :first-child').fadeOut().next('img').fadeIn().end().appendTo('#p1');
 });

  $("#p2").mouseenter(function(){
   $('#p2 :first-child').fadeOut().next('img').fadeIn().end().appendTo('#p2');
 });

  $("#p3").mouseenter(function(){
   $('#p3 :first-child').fadeOut().next('img').fadeIn().end().appendTo('#p3');
 });

  $("#p4").mouseenter(function(){
   $('#p4 :first-child').fadeOut().next('img').fadeIn().end().appendTo('#p4');
 });

  $("#p5").mouseenter(function(){
   $('#p5 :first-child').fadeOut().next('img').fadeIn().end().appendTo('#p5');
 });

  $("#p6").mouseenter(function(){
   $('#p6 :first-child').fadeOut().next('img').fadeIn().end().appendTo('#p6');
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

