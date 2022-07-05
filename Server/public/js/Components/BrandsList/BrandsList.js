const BrandsList = document.getElementById('BrandsList');

fetch('http://localhost:3001/api/brands')
	.then((response) => response.json())
	.then((data) => {
		console.log(data.data.brands);
		data.data.brands.forEach((item) => {
			const span = document.createElement('span');
			span.innerHTML = `${item.name}`;
			BrandsList.appendChild(span);
		});
	});
