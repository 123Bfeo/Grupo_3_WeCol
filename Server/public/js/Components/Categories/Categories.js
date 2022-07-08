/* const GalleryFilter = document.getElementById('GalleryFilter');

fetch('http://localhost:3001/api/products')
	.then((response) => response.json())
	.then((data) => {
		data.data.category.forEach((item) => {
			const span = document.createElement('span');
			span.setAttribute('class', 'filter-item active');
			span.innerText = `${ item.name }`;
			GalleryFilter.appendChild(span);
		});
	});*/
