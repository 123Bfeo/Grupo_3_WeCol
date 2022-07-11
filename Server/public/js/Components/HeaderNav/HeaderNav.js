const submenu = document.getElementById('submenu');
const submenuItem_icon = document.getElementById('submenuItem_icon');

submenu.addEventListener('mouseleave', () => {
	submenu.classList.toggle('show');
	submenuItem_icon.classList.toggle('rotate');
});

fetch('http://localhost:3001/api/products')
	.then((response) => response.json())
	.then((data) => {
		data.data.product.forEach((item) => {
			const li = document.createElement('li');
			li.innerHTML = `<a href="">${item.category}</a>`;
			submenu.appendChild(li);
		});
	});
