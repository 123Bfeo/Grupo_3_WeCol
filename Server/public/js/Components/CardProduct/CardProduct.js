const ProductsSectionHomeContent = document.getElementById('ProductsSectionHomeContent');

fetch('http://localhost:3001/api/products')
	.then((response) => response.json())
	.then((data) => {
		data.data.product.forEach((item) => {
			const CardProduct = document.createElement('section');
			CardProduct.innerHTML = `
			<div class="CardProduct">
        <picture class='CardProductHead'>
        <img src="/img/products/${ item.image }" alt="t-shirt">
    </picture>
        <section class="CardProductBody">
          <div class="CardProductBodyDetails">
            <span>${ item.name }</span>
            <h1 class="price">${ item.price }</h1>
        </div>
          <div class="CardProductBodyDescription">
            <p>${ item.description }</p>
        </div>
          <a href="#" class="btn">Añador al carrito</a>
        </section>
			</div>`;
			ProductsSectionHomeContent.appendChild(CardProduct);
		});
	});
