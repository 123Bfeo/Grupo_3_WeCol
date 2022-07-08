const filterContainer = document.querySelector(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");
const row = document.querySelector("#row");

filterContainer.addEventListener("click", (event) =>{
	if(event.target.classList.contains("filter-item")){
		
		// deactivate existing active 'filter-item'
		// filterContainer.querySelector(".active").classList.remove("active");
		
		// activate new 'filter-item'
		// event.target.classList.add("active");
		
		const filterValue = event.target.getAttribute("data-filter");
		
		galleryItems.forEach((item) =>{
			
			if(item.classList.contains(filterValue) || filterValue === 'all'){
				item.classList.remove("hide");
				item.classList.add("show");
			}
			
			else{
				item.classList.remove("show");
				item.classList.add("hide");
			}
			
		});
	}
});

fetch('http://localhost:3001/api/products')
	.then((response) => response.json())
	.then((data) => {
		data.data.product.forEach((item) => {
			const span = document.createElement('span');
			const GalleryItem = document.createElement('div');
			const GalleryItemInner = document.createElement('div');
			GalleryItem.setAttribute("class", `gallery-item ${ item.category }`);
			GalleryItemInner.setAttribute("class", "gallery-item-inner");
			GalleryItemInner.innerHTML = `<img src="/img/products/${ item.image }" alt="${ item.category }">`;
			span.setAttribute('class', 'filter-item');
			span.setAttribute('data-filter', `${ item.category }`);
			span.innerText = `${ item.category }`;
			filterContainer.appendChild(span);
			row.appendChild(GalleryItem);
			GalleryItem.appendChild(GalleryItemInner);
		})
	});

