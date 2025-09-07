let open = document.getElementById('open');
let close = document.getElementById('close');
let container = document.getElementsByClassName('container')[0];

close.onclick = function(){
    close.classList.add('hide');
    container.classList.add('hide');
    open.classList.remove('hide');
}

open.onclick = function ()
{
    open.classList.add('hide');
    container.classList.remove('hide');
    close.classList.remove('hide');
    
}
