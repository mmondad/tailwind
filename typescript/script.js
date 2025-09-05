let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center'

function element(name_param, age_param)
{
                    /*elements*/
    let card = document.createElement('div');
    let img  = document.createElement('img');
    let name = document.createElement('h1');
    let age  = document.createElement('p');
                    /*content*/
        let name_node = document.createTextNode(name_param);
        let age_node = document.createTextNode(age_param);
        name.appendChild(name_node);
        age.appendChild(age_node);
        img.src = "../images/coca.png"
                    /*syle*/
    card.style.width = "200px";
    img.style.width = "100%";
    card.style.backgroundColor = "#444";
    name.style.color = 'red';
    card.style.margin = "10px";
    card.style.padding = "20px"
    card.style.display = "inline-block";
    


    card.appendChild(name);
    card.appendChild(age);
    card.appendChild(img);
    return card;
}


for(let i = 0; i  < 20;i++)
    container.appendChild(element("simo", "23"));


console.log(document.body);