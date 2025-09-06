let block = document.getElementById('block');
let content = document.getElementById('content');
let after = document.getElementById('after');
let before = document.getElementById('before');
let inside = document.getElementById('inside');


block.style.backgroundColor = 'red';
block.style.height = '100px';
block.style.marginTop = "20px";


            /* events */
after.onclick = _ => block.after(content);            
before.onclick = _ => block.before(content);
inside.onclick = _ => block.append(content);