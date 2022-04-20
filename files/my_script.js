



function hide_image(id) {
  var box = document.getElementById(id);

  var opacity = 1
  for (let trans = 0; trans < 100; trans++) {
    opacity -= 0.1 
    box.style.opacity = opacity;

}
}
