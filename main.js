function myFunction() {
  var x = document.getElementById("clotheslist");
  if (x.className.indexOf("w3-show") == -1) { 
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

/* https://codepen.io/LOTUSMS/pen/VebWbb */

$(document).on('click',function(){
  $('.collapse').toggleClass('in');
})
const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',


  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',

  },
});
