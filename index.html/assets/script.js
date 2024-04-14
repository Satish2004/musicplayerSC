const playBtn = document.querySelector("#play");
const music = document.querySelector("audio");
const img = document.querySelector("img");
const PrevBtn= document.querySelector("#prev");
const nextBtn= document.querySelector("#next");
const artist= document.querySelector("#artist");
const title= document.querySelector("#title");
const suffleIcon= document.querySelector("#suffle");
const heartIcon= document.querySelector("#heart");



const songs =[{
    name: "3.mp3",
    title: "Tujhse Pyar",
    artist:"Satish Chandra",
   img: "3.jpg"
},
{
    name: "1.mp3",
    title: "Aathma-Raama",
    artist:"shree hari",
    img:"lord-krishna-8083043_640.png",

},

{
    name: "2.mp3",
    title: "Radha Kaise Na",
    artist:"krishna",
    img:"1.png"
   
},
{

    name: "5.mp3",
    title: "Hip-Hop",
    artist:"Satish Chandra",
   img: "sunset.webp",
},

{


    
    name: "4.mp3",
    title: "Achyutam",
    artist:"shree krishna",
   img: "shrrre krishna.jpg",
},

{

    name: "7.mp3",
    title: "kesariya",
    artist:"Arijit singh",
    img:"arijiitt.webp",
   
},


{

    name: "8.mp3",
    title: "siddhu",
    artist:"sidduMossewala",
    img:"siddhu.avif",
   
}



]

// for music play---------->
let isPlaying= false; // initially pahle false hai then addEvent lagane ke bad ise on kr diye

   const playMusic= ()=>{
music.play();

isPlaying=true;
img.classList.add("anime");
playBtn.classList.replace("fa-play","fa-pause");

   }


   const pauseMusic=()=>{
    music.pause();
 isPlaying=false
    img.classList.remove("anime");
    playBtn.classList.replace("fa-pause", "fa-play");

   }
   playBtn.addEventListener('click',()=>{
    if(isPlaying){ // if me yes wale case ayenge
     pauseMusic();

    }
    else{ // else me nahi wala case aata hai;

       playMusic();
     
    }
   })

   const loadSong= (songs)=>{
    title.textContent= songs.title;
    artist.textContent=songs.artist;
    music.src=`assets/music/${songs.name}`;
    img.src= "assets/img/"+songs.img;

   }
  songIndex =0;
  const nextSongs =()=>{
    songIndex++;
    loadSong(songs[songIndex]);
    playMusic();
  }
const PrevSongs =()=>{
    songIndex--;
    loadSong(songs[songIndex]);
    playMusic();
}


 nextBtn.addEventListener("click",nextSongs);
 PrevBtn.addEventListener("click", PrevSongs);



 suffleIcon.addEventListener("click",()=>{
 
  suffleIcon.style.color="yellow";


 })
 heartIcon.addEventListener("click",()=>{
    heartIcon.style.color="red";
 })