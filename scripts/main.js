// For those brave enough to touch Javascript, here is a skill testing question:
// How do linked lists work?

// As with CSS and HTML, touch only your own section to avoid merge conflicts.


// Script Section 1

console.log("Hello world!\n");




// End of Section


// Script Section 2






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