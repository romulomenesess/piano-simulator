const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volumeSlider = document.querySelector(".volume-slider");

const keysCheck = document.querySelector(".key-check input");

let audio = new Audio("audios/a.wav");
let mappedKey = [];


const playTune = (key) =>  {
    audio.src = `audios/${key}.wav`;
    audio.play();


    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
    mappedKey.push(key.datset,key);

});

document.addEventListener("keydown", (e) => {

    if(mappedKey.includes(e.key)) {
    playTune(e.key);
    }
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

const showHideKeys = () => {
    pianoKeys.keys.forEach((key) => key.classList.toggle("hide"))
};

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);