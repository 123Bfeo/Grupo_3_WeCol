const ProductsSectionHomeContent = document.getElementById('ProductsSectionHomeContent');

fetch('http://localhost:3001/api/products')
	.then((response) => response.json())
	.then((data) => {
		data.data.product.forEach((item) => {
			const CardProduct = document.createElement('section');
			CardProduct.innerHTML = `
        <article class="CardProduct">
		    <picture class='CardProductHead'>
		        <a href='/api/details/${item.id}' target="_blank">
                    <img src="/img/products/${item.image}" alt="${ item.name }" title="${ item.name }">
                </a>
            </picture>
            <section class="CardProductBody">
                <span class="CardProductBodyNameProduct">${ item.name }</span>
                <div class="CardProductBodyDescription">
                <p>${item.description}</p>
                </div>
                <div class='CardProductBodyPrice'>
                <span class="price">${item.price}</span>
                <button class="AddToCartButton">
                    <i class="fa-solid fa-cart-plus"></i>
                </button>
                </div>
            </section>
        </article>`;
			ProductsSectionHomeContent.appendChild(CardProduct);
		});
	});
