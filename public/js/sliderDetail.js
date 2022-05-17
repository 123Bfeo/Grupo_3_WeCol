
const slidersProductDetail = document.querySelector(".slidersProduct-Detail");
const flecha = document.querySelectorAll(".flecha");
const imgRemplazo = document.querySelector(".img-remplazar");

const imgSliderPrincipal = document.querySelectorAll(".img-slider-principal");

// cuando click en la flecha
//saber la posicion de ese punto
//aplicar un trasnformX al grande
//quitar el id activo de todos los puntos
//añadir id al punto que hemos click

//recorremos todas las flechas
flecha.forEach((cadaFlecha, i) => {
	//asignamos un click a cada flecha
	flecha[i].addEventListener("click", () => {
		//posicion es 0 transformX es 0
		//posicion es 1 trasformsx es -50
		//operacion = posicion * -50
		
		//guardar posicion de cada flecha
		let posicion = i;
		
		//espacio que debe desplazarse  slidersProductDetail
		let operacion = posicion * -50;
		
		slidersProductDetail.style.transform = `translateX(${operacion}%)`;
		
		//recorremos todas flechas
		flecha.forEach((cadaFlecha, i) => {
			//quitamos clase activo a todas flechas
			flecha[i].classList.remove("activo");
		});
		//añadimos la clase activo al punto que hemos hecho click
		flecha[i].classList.add("activo");
	});
	
	imgSliderPrincipal.forEach((cadaimg, i) => {
		imgSliderPrincipal[i].addEventListener("click", () => {
			imgSliderPrincipal.forEach((cadaimg, i) => {
				imgSliderPrincipal[i].classList.remove("img-activa");
			});
			imgSliderPrincipal[i].classList.add("img-activa");
			imgRemplazo.src = imgSliderPrincipal[i].src;
			
			console.log(imgSliderPrincipal[i].src);
		});
	});
});
