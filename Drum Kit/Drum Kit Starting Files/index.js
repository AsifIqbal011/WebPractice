numOfDurm = document.getElementsByClassName("drum").length;

for (let i = 0; i < numOfDurm; i++) {
  console.log(
    document.getElementsByClassName("drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        btnAnimation(this.innerHTML)
  })
  );
}

 document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    btnAnimation(event.key);
 })

 function makeSound(key){
 let audio;
switch (key) {
  case "w":
    audio = new Audio("sounds/crash.mp3");
    audio.play();
    break;
  case "a":
    audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;
  case "s":
    audio = new Audio("sounds/snare.mp3");
    audio.play();
    break;
  case "d":
    audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
  case "j":
    audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
  case "k":
    audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
  case "l":
    audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
  default:
    console.log(this.innerHTML);
    break;
}
 }

function btnAnimation(key){
   let activeBtn= document.querySelector('.'+key);
   activeBtn.classList.add('pressed')
   setTimeout(function(){
    activeBtn.classList.remove('pressed')
   },200)
}