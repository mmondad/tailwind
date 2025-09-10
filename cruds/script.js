let title = document.getElementsByClassName("title")[0];
let price = document.getElementsByClassName("price")[0];
let taxes = document.getElementsByClassName("taxes")[0];
let ads = document.getElementsByClassName("ads")[0];
let discount = document.getElementsByClassName("discount")[0];
let total = document.getElementsByClassName("total")[0];
let count = document.getElementsByClassName("count")[0];
let category = document.getElementsByClassName("category")[0];
let submit = document.getElementsByClassName("submit")[0];
let tbody = document.getElementsByClassName("tbody")[0];
let clear = document.getElementsByClassName("clear")[0];

let mood = 'create';
let tmp;

function getTotal() {
	if (price.value != "") {
		total.innerHTML =   (+price.value + +taxes.value + +ads.value) - +discount.value;
		total.style.background = "#040";
	}
	else
	{
		total.innerHTML = 0;
		total.style.background = "#a00";
	}
}

let products = localStorage.products ? JSON.parse(localStorage.products) : [];

submit.onclick = function() {
	let newPro = {
		title: title.value,
		price: price.value,
		taxes: taxes.value,
		ads: ads.value,
		discount: discount.value,
		total: total.innerHTML,
		count: count.value,
		category: category.value,    
	}
	if (mood === 'create')
	{
		if (newPro.count > 1)
		{
			for (let i = 0; i < newPro.count; i++)
				products.push(newPro);
		}
		else
			products.push(newPro);
	}
	else
	{
		products[tmp] = newPro;
		mood = 'create';
		submit.innerHTML = "Create";
		count.style.display  = "block";
	}
	localStorage.products = JSON.stringify(products);
	clearData();
	showData();
	console.log(products);
}

function clearData() {
	title.value = "";
	price.value = "";
	taxes.value = "";
	ads.value = "";
	discount.value = "";
	total.innerHTML = "";
	count.value = "";
	category.value = "";
}

showData();


function showData() {
	getTotal();
	let table = "";
	for (let i = 0; i < products.length; i++) {
		table += 
		`
			<tr>
				<td>${i}</td>
				<td>${products[i].title}</td>
				<td>${products[i].price}</td>
				<td>${products[i].taxes}</td>
				<td>${products[i].ads}</td>
				<td>${products[i].discount}</td>
				<td>${products[i].total}</td>
				<td>${products[i].category}</td>
				<td><button onclick="updateProduct(${i})" class="update bg-green-500 p-[4px] rounded-md">update</button></td>
				<td><button onclick="deleteProduct(${i})" class="delete bg-red-500 p-[4px] rounded-md">delete</button></td>
			</tr>
		`
	}
		tbody.innerHTML = table;
		if (products.length > 0)
		{
			clear.innerHTML = `Delete all (${products.length})`;
			clear.style.display = "block";
		}
		else
			clear.style.display = "none";
	}

clear.onclick = function()
{
	products.splice(0);
	localStorage.products = JSON.stringify(products);
	showData();
}

function deleteProduct(i)
{
	products.splice(i, 1);
	localStorage.products = JSON.stringify(products);
	showData();
}

function updateProduct(i)
{
	title.value = products[i].title;
	price.value = products[i].price;
	taxes.value = products[i].taxes;
	ads.value = products[i].ads;
	discount.value = products[i].discount;
	getTotal();
	count.style.display  = "none";
	category.value = products[i].category;
	submit.innerHTML = "Update";
	mood = "update";
	tmp = i;
	scroll({
		top: 0,
		behavior: "smooth",
	})
}

let searchMood = 'title';
let search = document.getElementsByClassName("search")[0];

function setSearchMood(Smood)
{
	search.focus();
	search.placeholder = 'search by ' + searchMood;
	search.value = "";
	searchMood = Smood;
}

search.onkeyup = function() {
	for(let i = 0; i < products.length;i++)
	{
		if (searchMood === 'title')
		{
			if (products[i].title.includes(search.value) === true)
				console.log('true');
		}
		else
			console.log('false');
	}

}