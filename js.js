var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");
const wrapperVideo = document.querySelector(".vidik");

function toggleModal() {
    modal.classList.toggle("show-modal");
    wrapperVideo.play();
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
        
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
modal.addEventListener("click", windowOnClick);
closeButton.addEventListener("click",function(){
  wrapperVideo.pause();
});
