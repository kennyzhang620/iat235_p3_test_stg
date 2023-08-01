function changeImage(src) {
  var img = document.getElementById("seatingMapImage");
  img.style.opacity = 0; // make image invisible
  
  setTimeout(function() {
    img.src = src; // change image source
    img.style.opacity = 1; // make image visible
  }, 1000); // wait for 1s (this should be equal to transition duration)
}

window.onload = function() {
    // document.getElementById("map_backBalcony").style.backgroundColor = '#594030';
    // changeImage("images/ticket/Hall_seating_backBalcony.png");

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

document.getElementById("seatingMapImage").addEventListener("click", function(e){
  var popup = document.getElementById("popup");

  if (popup.style.display !== "block") {
    popup.style.left = `${e.pageX}px`;
    popup.style.top = `${e.pageY}px`;
    popup.style.display = "block";
  }
});

document.addEventListener('click', function(e) {
  var popup = document.getElementById("popup");

  if (popup) {
    var rect = popup.getBoundingClientRect();
    var dx = e.clientX - (rect.left + rect.width / 2);  // horizontal distance from center
    var dy = e.clientY - (rect.top + rect.height / 2); // vertical distance from center
    var dist = Math.sqrt(dx * dx + dy * dy); // calculate distance using Pythagorean theorem

    var maxDist = 1.002 * Math.sqrt(rect.width * rect.width + rect.height * rect.height) / 2; // calculate 1.5 times the diagonal of the popup

    // If the click is outside the threshold distance, hide the popup
    if (dist > maxDist) {
      popup.style.display = 'none';
    }
  }
}, false);

document.getElementById("crossIcon").addEventListener("click", function(e){
  e.stopPropagation();  // prevent the event from bubbling up to parent elements
  var popup = document.getElementById("popup");
  if (popup) {
    popup.style.display = 'none';
  }
});


document.getElementById("button1").addEventListener("click", function(){
  // Your code here
});

document.getElementById("button2").addEventListener("click", function(){
  // Your code here
});

document.getElementById("button3").addEventListener("click", function(){
  // Your code here
});

document.getElementById("button4").addEventListener("click", function(){
  // Your code here
});

// -----------------------------popup buttons--------------------------

function resetPopupColors() {
  var ids = ["button1", "button2", "button3", "button4"];
  for (var i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).style.backgroundColor = ''; // Reset color
  }
}

var buttonIds = ["button1", "button2", "button3", "button4"];
for (var i = 0; i < buttonIds.length; i++) {
  document.getElementById(buttonIds[i]).addEventListener("click", function(e){
    e.preventDefault();
    resetPopupColors();
    this.style.backgroundColor = '#594030';

    var nextButton = document.getElementById("nextButton");
    nextButton.style.display = 'block'; // Show "Next" button
  });
}

// --------------------------payment button---------------------------
// document.getElementById("nextButton").style.opacity = '1';
// document.getElementById("nextButton").style.visibility = 'visible';


document.getElementById("nextButton").addEventListener("click", function(e){
  e.preventDefault();
  window.location.href = "ticket_payment_18.html";
});






