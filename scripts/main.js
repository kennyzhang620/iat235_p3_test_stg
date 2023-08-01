// For those brave enough to touch Javascript, here is a skill testing question:
// How do linked lists work?

// As with CSS and HTML, touch only your own section to avoid merge conflicts.


// Script Section 1





// End of Section


// Script Section 2






// End of Section



// Script Section 3






// End of Section


// Script Section 4
    const doc = document;

    const songsList = [
        {
            title: "Le Festin",
            author: "Camille, Michael Giacchion",
            path: "https://open.spotify.com/track/02JIdsrod3BYucThfUFDUX?si=8ae11bfd8c0b4846",
            time: "03:25"
        },
        {
            title: "Welcome to Gusteau's",
            author: "Michael Giacchion",
            path: "https://open.spotify.com/track/5tppih5lpALVyHnWbRnMTo?si=d96fa7b5bf494871",
            time: "00:38"
        },
        {
            title: "This Is Me",
            author: "Michael Giacchion",
            path: "https://open.spotify.com/track/68qRMRZ25zC1C1QlGsVdg0?si=c4f9c980a6584daa",
            time: "01:41"
        },
        {
            title: "Granny Get Your Gun",
            author: "Michael Giacchion",
            path: "https://open.spotify.com/track/1quHYUV0FxwiikkUClTsZe?si=12eb51c780134761",
            time: "02:01"
        },
        {
            title: "100 Rat Dash",
            author: "Michael Giacchion",
            path: "https://open.spotify.com/track/1MfC8OLECebDZsBa2Jcnjg?si=11802ef2bd6249da",
            time: "01:47"
        },
        {
            title: "Wall Rat",
            author: "Michael Giacchion",
            path: "https://open.spotify.com/track/0nW8XVX13zTx58XcPvoLWb?si=463c402f6f99437a",
            time: "02:41"
        },
        {
            title: "Cast of Cooks",
            author: "Michael Giacchion",
            path: "https://open.spotify.com/track/7EXDfmnGVSA6tmFHldB6hv?si=f516f260d3b6474a",
            time: "01:41"
        },
        {
            title: "A Real Gourmet Kitchen",
            author: "Michael Giacchion",
            path: "https://open.spotify.com/track/6hl3QoeDknHZ1mg5s3Aw2V?si=999e46d1ae9044f5",
            time: "04:18"
        },
        {
            title: "Souped Up",
            author: "Michael Giacchion",
            path: "https://open.spotify.com/track/1ObCM8mvOZ0O1RvNNvcHdI?si=8843cc6dcb034bdc",
            time: "00:50"
        },
        {
            title: "Is It Soup Yet?",
            author: "Michael Giacchion",
            path: "https://open.spotify.com/track/2bu6DacVuCax3jfAN5Cnh1?si=1e94ebb1e13a45c6",
            time: "01:16"
        },
        {
            title: "A New Deal",
            author: "Michael Giacchion",
            path: "https://open.spotify.com/track/6ddWWAGUgZPBmi6Ezakha1?si=e62e8adf57224ff7",
            time: "01:56"
        },
        {
            title: "Remy Drives a Linguini",
            author: "Michael Giacchion",
            path: "https://open.spotify.com/track/0S11HEtyphdIwD6hyqKJ6k?si=65555d3d0aa94f8f",
            time: "02:26"
        },
        {
            title: "Colette Shows Him Le Ropes",
            author: "Michael Giacchion",
            path: "https://open.spotify.com/track/6p8lCOvTbSI4eijtyw6pW4?si=d5655afd89d44170",
            time: "02:56"
        }

    ];

    const audio = doc.querySelector('#audio');
    const controls = doc.querySelector('#controls');
    const title = doc.querySelector('#musicName');
    const time = doc.querySelector('#musicTime');
    const author = doc.querySelector('#musicAuthor');
    const playbtn = doc.querySelector('#play');
    const voicebtn = doc.querySelector('#voice');

    let curSongIndex = 0;
    let isPlay = false; 

    function init(){
        render(songsList[curSongIndex]);
    }

    function render(song){
        title.innerHTML = song.title;
        author.innerHTML = song.author;
        time.innerHTML = song.time;
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