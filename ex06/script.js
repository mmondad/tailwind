let red = document.getElementById('red');
let blue = document.getElementById('blue');
let yellow = document.getElementById('yellow');
let black = document.getElementById('black');

if (localStorage.length > 0)
        document.body.style.background = localStorage.background;

red.onclick  = _ =>localStorage.background = document.body.style.background = 'red';
blue.onclick  = _ => localStorage.background = document.body.style.background = 'blue';
yellow.onclick  = _ => localStorage.background = document.body.style.background = 'yellow';
black.onclick  = _ => localStorage.background = document.body.style.background = 'black';