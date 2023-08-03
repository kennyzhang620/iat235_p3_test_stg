// For those brave enough to touch Javascript, here is a skill testing question:
// How do linked lists work?

// As with CSS and HTML, touch only your own section to avoid merge conflicts.


// Script Section 1





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
    const doc = document;

    const songsList = [
        {
            title: "01 Le Festin",
            author: "Camille, Michael Giacchion",
            path: "music/Le_Festin.mp3",
            time: "03:25"
        },
        {
            title: "02 Welcome to Gusteau's",
            author: "Michael Giacchion",
            path: "music/Welcome_to_Gusteaus.mp3",
            time: "00:38"
        },
        {
            title: "03 This Is Me",
            author: "Michael Giacchion",
            path: "music/This_Is_Me.mp3",
            time: "01:41"
        },
        {
            title: "04 Granny Get Your Gun",
            author: "Michael Giacchion",
            path: "music/Granny_Get_Your_Gun.mp3",
            time: "02:01"
        },
        {
            title: "05 100 Rat Dash",
            author: "Michael Giacchion",
            path: "music/100_Rat_Dash.mp3",
            time: "01:47"
        },
        {
            title: "06 Wall Rat",
            author: "Michael Giacchion",
            path: "music/Wall_Rat.mp3",
            time: "02:41"
        },
        {
            title: "07 Cast of Cooks",
            author: "Michael Giacchion",
            path: "music/Cast_of_Cooks.mp3",
            time: "01:41"
        },
        {
            title: "08 A Real Gourmet Kitchen",
            author: "Michael Giacchion",
            path: "music/A_Real_Gourmet_Kitchen.mp3",
            time: "04:18"
        },
        {
            title: "09 Souped Up",
            author: "Michael Giacchion",
            path: "music/Souped_Up.mp3",
            time: "00:50"
        },
        {
            title: "10 Is It Soup Yet?",
            author: "Michael Giacchion",
            path: "music/Is_It_Soup_Yet.mp3",
            time: "01:16"
        },
        {
            title: "11 A New Deal",
            author: "Michael Giacchion",
            path: "music/A_New_Deal.mp3",
            time: "01:56"
        },
        {
            title: "12 Remy Drives a Linguini",
            author: "Michael Giacchion",
            path: "music/Remy_Drives_a_Linguini.mp3",
            time: "02:26"
        },
        {
            title: "13 Colette Shows Him Le Ropes",
            author: "Michael Giacchion",
            path: "music/Colette_Shows_Him_Le_Ropes.mp3",
            time: "02:56"
        }

    ];

    const audio = doc.querySelector('#audio');
    const controls = doc.querySelector('#musicControl');
    const title = doc.querySelector('#musicName');
    const time = doc.querySelector('#musicTime');
    const author = doc.querySelector('#musicAuthor');
    const playbtn = doc.querySelector('#playSong');
    const voicebtn = doc.querySelector('#songVoice');

    let curSongIndex = 0;
    let isPlay = false; 

    function init(){
        render(songsList[curSongIndex]);
    }

    controls.addEventListener('click', e => {
        switch(e.target?.id){
            case 'songVoice':
                voiceControl();
                break;
            case 'preSong':
                preSong();
                break;
            case 'playSong':
                btnPlay();
                break;
            case 'nextSong':
                nextSong();
                break;
            default:
                break;
        }
    });


    function btnPlay(){
        if(!isPlay){
            musicPlay();
        }
        else{
            musicPause();
        }
    }


    function musicPlay(){
        isPlay = true;
        playbtn.classList.remove('fa-play');
        playbtn.classList.add('fa-pause');
        audio.play();
    }

    function musicPause(){
        isPlay = false;
        playbtn.classList.remove('fa-pause');
        playbtn.classList.add('fa-play');
        audio.pause();
    }

    function preSong(){
        if(curSongIndex > 0){
            curSongIndex--;
            render(songsList[curSongIndex]);
            musicPlay();
        }
    }

    function nextSong(){
        if(curSongIndex < songsList.length - 1){
            curSongIndex++;
            render(songsList[curSongIndex]);
            musicPlay();
        }
    }

    function voiceControl(){
        if(audio.volume > 0){
            volumeOff();
        }
        else{
            volumeOn();
        }
    }

    function volumeOff(){
        audio.volume=0;
        voicebtn.classList.remove('fa-volume-high');
        voicebtn.classList.add('fa-volume-xmark');
    }

    function volumeOn(){
        audio.volume = 0.5;
        voicebtn.classList.remove('fa-volume-xmark');
        voicebtn.classList.add('fa-volume-high');
    }


    function render(song){
        title.innerHTML = song.title;
        author.innerHTML = song.author;
        time.innerHTML = song.time;
        audio.volume = 0.5;
        audio.src = song.path;
    }

    init();

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