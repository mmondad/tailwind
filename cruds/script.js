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
	products.push(newPro);
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
				<td><button class="update bg-green-500 p-[4px] rounded-md">update</button></td>
				<td><button onclick="deleteProduct(${i})" class="delete bg-red-500 p-[4px] rounded-md">delete</button></td>
			</tr>
		`
	}
		tbody.innerHTML = table;
		if (products.length > 0)
			clear.style.display = "block";
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