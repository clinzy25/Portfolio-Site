let log = console.log
let calcTop = document.querySelector('.calculator-top');
let display = document.querySelector('.display');
let button = document.querySelectorAll(".button-primary");

let wasEqualsLastPress = false;
let nums = [];

button.forEach(function (button) {
  button.addEventListener('click', function inputToDisplay() {
    if (button.textContent.match(/[0-9]/) && !wasEqualsLastPress) {
      display.innerHTML += button.textContent;
    } 
    if (button.textContent.match(/[0-9]/) && wasEqualsLastPress) {
      display.innerHTML = '';
      display.innerHTML += button.textContent;
      wasEqualsLastPress = false
    }
    if (button.textContent.match(/\./) && !checkForDecimal()) {
      display.innerHTML += button.textContent;

    }
    if (display.textContent.length == 11) {
      display.innerHTML = display.textContent.substr(0, display.textContent.length - 1);
      calcTop.classList.toggle('calculator-top-animation')
    } 
    if (button.textContent.match(/[÷×+-]|[pow]/)) {
      nums.push(display.textContent);
      nums.push(button.textContent)
      display.innerHTML = '';
      log(nums)
    }
    if (button.textContent.match(/«/)) {
      display.innerHTML = display.textContent.substr(0, display.textContent.length - 1);
    }
    if (button.textContent.match(/C/)){
      clear();
    }
    if (button.textContent.match(/±/)) {
      display.innerHTML = -display.innerHTML;
    }
    if (button.textContent.match(/=/)) {
      wasEqualsLastPress = true
      nums.push(display.textContent)
      display.innerHTML = calculate(nums);
      nums = [];
    }
  });
})

let clear = () => {
  display.innerHTML = '';
  nums = [];
}

let calculate = (nums) => {
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] === '÷') {
      nums.splice(i, 1, '/')
    } else if (nums[i] === '×') {
      nums.splice(i, 1, '*')
    } else if (nums[i] === 'pow') {
      nums.splice(i, 1, '**')
    }
  }
  return Math.round(eval(nums.join('')) * 100000000000) / 100000000000;
};

const checkForDecimal = () => {
  let arr = []
  for (let i of display.textContent)
  arr.push(i)
  return arr.some(j => j == '.')
}