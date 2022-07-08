const ProductsSectionHomeContent = document.getElementById('ProductsSectionHomeContent');

fetch('http://localhost:3001/api/products')
	.then((response) => response.json())
	.then((data) => {
		data.data.product.forEach((item) => {
			const CardProduct = document.createElement('section');
			CardProduct.innerHTML = `
			<a href='http://localhost:3001/api/details/${ item.id }' class="CardProduct">
        <picture class='CardProductHead'>
          <img src="/img/products/${ item.image }" alt="t-shirt">
        </picture>
        <section class="CardProductBody">
          <div class="CardProductBodyDetails">
            <span>${ item.name }</span>
        </div>
          <div class="CardProductBodyDescription">
            <p>${ item.description }</p>
        </div>
        <div class='CardProductBodyPrice'>
          <span class="price">${ item.price }</span>
          <button class="AddToCartButton">
            Añadir al carrito
          </button>
        </div>
        </section>
			</a>`;
			ProductsSectionHomeContent.appendChild(CardProduct);
		});
	});
