// For those brave enough to touch Javascript, here is a skill testing question:
// How do linked lists work?

// As with CSS and HTML, touch only your own section to avoid merge conflicts.


// Script Section 1

console.log("Hello world!\n");




// End of Section


// Script Section 2

const def_nav = document.getElementById('def_nav')
const mobile_nav = document.getElementById('mobile_navigator')
const mobi_s = document.getElementById('nav_menu')
const mobi_btn = document.getElementById('mobile_btn')
const mobi_img = document.getElementById('img_button_nav_m')
var btnState = true;


function switchModesAuto(w, h) {
	console.log(w, h, w/h)
	
	if (w/h <= 16/10) {
		mobile_nav.style.display = "block";
		def_nav.style.display="none";
	}
	else {
		mobile_nav.style.display= "none";
		def_nav.style.display="block"
	}
}


function switchState() {
	if (btnState) {
		mobi_img.src = "icons/exit_ham.svg"
		mobi_s.style.animationDirection = "normal";
		mobi_s.style.animationName="open";
		mobi_s.style.width = "100%";
		mobi_s.style.animationPlayState = "running"
		mobi_s.style.display = "none"
		setTimeout(function() {		mobi_s.style.display= "block"
		btnState = false}, 1);
	}
	else {
		mobi_img.src = "icons/mobile_ham.svg"
		mobi_s.style.animationDirection = "reverse";
		mobi_s.style.animationName="open";
		mobi_s.style.width = "0%";
		mobi_s.style.animationPlayState = "running"
		mobi_s.style.display = "none"
		
		setTimeout(function() {		mobi_s.style.display= "block"
		btnState = true}, 1);
		
	}
}
mobi_btn.addEventListener('onclick', function() {
	if (btnState) {
		console.log(mobi_s.style)
		mobi_s.style.animationDirection = "normal";
		mobi_s.style.width = "100%";
	}
	else {
		console.log(mobi_s.style)
		mobi_s.style.animationDirection = "reverse";
		mobi_s.style.width = "0%";
	}
})

window.addEventListener('resize', switchModesAuto(window.innerWidth, window.innerHeight), false);

// End of Section



// Script Section 3






// End of Section


// Script Section 4






// End of Section


// Script Section 5
// for dissolve tabs
{/* <script> */}
    function openTabs(sect, section_name) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(section_name).style.display = "block";
        sect.currentTarget.className += " active";
    }
//   </script>

// End of Section

// Script Section 6



//End of Section