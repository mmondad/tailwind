let btn = document.getElementById('btn');

if (scrollY < 100)
    btn.style.display = 'none';

onscroll =  function()
{
    if (scrollY < 100)
        btn.style.display = 'none';
    else
        btn.style.display = 'block';
}

btn.onclick = function (){scroll({left:0,top:0,behavior:'smooth'})};