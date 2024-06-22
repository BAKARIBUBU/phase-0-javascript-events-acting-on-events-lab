// Your code here
let dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  let left = parseInt(dodger.style.left);
  dodger.style.left = `${left - 10}px`;
}

function moveDodgerRight() {
  let left = parseInt(dodger.style.left);
  dodger.style.left = `${left + 10}px`;
}