function changeImage(src) {
  var img = document.getElementById("seatingMapImage");
  img.style.opacity = 0; // make image invisible
  
  setTimeout(function() {
    img.src = src; // change image source
    img.style.opacity = 1; // make image visible
  }, 1000); // wait for 1s (this should be equal to transition duration)
}

window.onload = function() {
    document.getElementById("map_backBalcony").style.backgroundColor = '#594030';
    changeImage("images/ticket/Hall_seating_backBalcony.png");

    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get('section');

    if (section) {
        document.getElementById("map_" + section).style.backgroundColor = '#594030';
        changeImage("images/ticket/Hall_seating_" + section + ".png");
    }
};



document.getElementById("map_backBalcony").addEventListener("click", function(e){
  e.preventDefault();
  resetColors();
  this.style.backgroundColor = '#594030';
  changeImage("images/ticket/Hall_seating_backBalcony.png");
});

document.getElementById("map_frontBalcony").addEventListener("click", function(e){
  e.preventDefault();
  resetColors();
  this.style.backgroundColor = '#594030';
  changeImage("images/ticket/Hall_seating_frontBalcony.png");
});

document.getElementById("map_backOrchestra").addEventListener("click", function(e){
  e.preventDefault();
  resetColors();
  this.style.backgroundColor = '#594030';
  changeImage("images/ticket/Hall_seating_backOrchestra.png");
});

document.getElementById("map_frontOrchestra").addEventListener("click", function(e){
  e.preventDefault();
  resetColors();
  this.style.backgroundColor = '#594030';
  changeImage("images/ticket/Hall_seating_frontOrchestra.png");
});

function resetColors(){
  var ids = ["map_backBalcony", "map_frontBalcony", "map_backOrchestra", "map_frontOrchestra"];
  for(var i=0; i<ids.length; i++){
    document.getElementById(ids[i]).style.backgroundColor = ''; // Reset color
  }
}
// -----------------------------pop up----------------------------------------

document.body.addEventListener('click', function(event) {
  const popup = document.getElementById('popup');

  popup.style.left = event.clientX + 'px';
  popup.style.top = event.clientY + 'px';
  popup.style.transform = 'scale(1)'; // Animate popup to its normal size
  popup.style.display = 'block'; // Show the popup
});

popup.addEventListener('click', function(event) {
  event.stopPropagation();
});









