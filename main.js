function myFunction() {
  var x = document.getElementById("clotheslist");
  if (x.className.indexOf("w3-show") == -1) { 
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

const swiper = new Swiper('.swiper-container', {

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',

  },
});
