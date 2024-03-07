
let songIndex=0;
let audioElement =new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from( document.getElementsByClassName('songItem'));

console.log("Welcome to spotify");
let songs =[
    {songName : "mercy", fiePath: "1.mp3", coverPath: "mercy.jpg" },
    {songName : "Treat You Better", fiePath: "2.mp3", coverPath: "shawn.webp" },
    {songName : "Senorita", fiePath: "3.mp3", coverPath: "shawn.webp" },
    {songName : "Stiches", fiePath: "4.mp3", coverPath: "shawn.webp" },
    {songName : "Ther's nothing holdin me back ", fiePath: "5.mp3", coverPath: "shawn.webp" },
]
   songItems.forEach((element,i) => {
       //console.log(element,i);
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
    })




//document.addEventListener('time');
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
       masterPlay.classList.remove(' fa-circle-play');
        masterPlay.classList.add(' fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        //font-awesome website
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value =progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime =myProgressBar.value * audioElement.duration/100;
})

const makeallPlays = ()=>{
   
    Array.from( document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
})
}
Array.from( document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeallPlays();
        
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${songIndex}.mp3`;
       // masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove(' fa-circle-play');
        masterPlay.classList.add(' fa-circle-pause');

    })

    
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 5){
        songIndex =0;
    }else{
        songIndex +=1;
    }
    audioElement.src = `${songIndex}.mp3`;
   // masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove(' fa-circle-play');
        masterPlay.classList.add(' fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <=0){
        songIndex =0;
    }else{
        songIndex -=1;
    }
    audioElement.src = `${songIndex}.mp3`;
   // masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove(' fa-circle-play');
        masterPlay.classList.add(' fa-circle-pause');
})
