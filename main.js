let container = document.querySelector('.container');
let counter = 0;
let clicks = [];
createGrid();

let boxes = document.querySelectorAll('.box');
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click',game);
}

function game() {
  this.removeEventListener('click',game)
  clicks.push(this)
  counter++;
  let back = this.children[0];
  let front = this.querySelector('.front');

  back.style.transform = "perspective(900px) rotateY(0)";
  front.style.transform = "perspective(900px) rotateY(180deg)";

  if(counter == 2){
    checkTiles();
  }
}

function checkTiles() {
  clearAll();
  let box1Front = clicks[0].querySelector('.front');
  let box1Back= clicks[0].querySelector('.back');

  let box2Front = clicks[1].querySelector('.front');
  let box2Back= clicks[1].querySelector('.back');

  if (box1Back.innerHTML == box2Back.innerHTML) {
    counter = 0;
    if(kraj){
      level2()
    }
    clicks.length = 0;
    addAll()
  }else{
    setTimeout(function () {
      box1Front.style.transform = "perspective(900px) rotateY(0)";
      box1Back.style.transform = "perspective(900px) rotateY(180deg)";
      box2Front.style.transform = "perspective(900px) rotateY(0)";
      box2Back.style.transform = "perspective(900px) rotateY(180deg)";
      addAll();
    }, 700);
    counter = 0;
    clicks.length = 0;
  }
}


function createGrid() {
  let text = '';

  for (let i = 0; i < 36; i++) {
    let rand = Math.floor(Math.random()*icons.length);
    text += '<div class="box"><div class="back">'+icons[rand]+'</div><div class="front"></div></div>';
    icons.splice(rand,1);
  }
  container.innerHTML = text;
}


function clearAll() {
  for (let i = 0; i < boxes.length; i++)
    boxes[i].removeEventListener('click',game);
}
function addAll() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click',game);
  }
}
function level2() {
  
}
