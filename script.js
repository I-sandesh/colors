alert("Click on the screen to play music");
alert("Kabhi comments v kr diya kro 😕");
var audio = new Audio('https://docs.google.com/uc?export=download&id=1pCMMsd9owOxeLvIQvkbs3kjJV9bNc_cf');
window.onclick = () => {
    audio.play();
}