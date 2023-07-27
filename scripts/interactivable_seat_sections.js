var enableHover = true;

function updateImage(src) {
    if (enableHover) {
        document.getElementById("seatingImage").src = src;
    }
}

// ---------------------------------------Mouse over--------------------------------
document.getElementById("backBalcony").addEventListener("mouseover", function(event){
  event.preventDefault();
  updateImage("images/ticket/new/Back_Balcony.png");
});

document.getElementById("frontBalcony").addEventListener("mouseover", function(event){
  event.preventDefault();
  updateImage("images/ticket/new/Front_Balcony.png");
});

document.getElementById("backOrchestra").addEventListener("mouseover", function(event){
  event.preventDefault();
  updateImage("images/ticket/new/Back_Orchestra.png");
});

document.getElementById("frontOrchestra").addEventListener("mouseover", function(event){
  event.preventDefault();
  updateImage("images/ticket/new/Front_Orchestra.png");
});
// ---------------------------------------Mouse out-------------------------------------

document.getElementById("backBalcony").addEventListener("mouseout", function(event){
  event.preventDefault();
  if (enableHover) {
    document.getElementById("seatingImage").src = "images/ticket/new/empty.png";
  }
});

document.getElementById("frontBalcony").addEventListener("mouseout", function(event){
  event.preventDefault();
  if (enableHover) {
    document.getElementById("seatingImage").src = "images/ticket/new/empty.png";
  }
});

document.getElementById("backOrchestra").addEventListener("mouseout", function(event){
  event.preventDefault();
  if (enableHover) {
    document.getElementById("seatingImage").src = "images/ticket/new/empty.png";
  }
});

document.getElementById("frontOrchestra").addEventListener("mouseout", function(event){
  event.preventDefault();
  if (enableHover) {
    document.getElementById("seatingImage").src = "images/ticket/new/empty.png";
  }
});

// -------------------------------------Click---------------------------------------

document.getElementById("backBalcony").addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("seatingImage").src = "images/ticket/Hall_seating_backBalcony_1698x1312.png";
  enableHover = false;
});

document.getElementById("frontBalcony").addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("seatingImage").src = "images/ticket/Hall_seating_frontBalcony_1698x1158.png";
  enableHover = false;
});

document.getElementById("backOrchestra").addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("seatingImage").src = "images/ticket/Hall_seating_backOrchestra_1698x965.png";
  enableHover = false;
});

document.getElementById("frontOrchestra").addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("seatingImage").src = "images/ticket/Hall_seating_frontOrchestra_1698x1099.png";
  enableHover = false;
});

// document.getElementById("returnLink").addEventListener("click", function(event){
//   event.preventDefault();
//   enableHover = true;
//   document.getElementById("seatingImage").src = "images/ticket/BackBalcony.png";
// });
// -------------------------------------------------------------------------------
