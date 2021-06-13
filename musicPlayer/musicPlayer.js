const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')

// Song titles
const songs = ['hey', 'summer', 'ukulele']

// Keep track of songs  
let songIndex = 2 // set ukulele as a default

//Initially load song info DOM
loadSong(songs[songIndex])

//Update song details 
function loadSong(song){
    title.innerHTML = song
    audio.src = `music/${song}.mp3`
    cover.src = `image/${song}.jpg`
}