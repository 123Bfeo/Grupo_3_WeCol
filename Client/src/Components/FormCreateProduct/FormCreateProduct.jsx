import { useState }  from "react";

const FormCreateProduct = () => {
	const [data, setData] = useState({
		name: "",
		description: "",
	});
	
	const handleInputChange = (event) => {
		setData({
			...data,
			[event.target.name]: event.target.value,
		});
	}
	
	let { name, description } = data;
	
	const handleSendData = (event) => {
		event.preventDefault();
		if (name === "" || description === "") {
			alert("Todos los campos son obligatorios");
		}
		const config = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		};
		console.log(JSON.stringify(data));
		fetch("http://localhost:3001/product/create", config)
			.then((response) => response.json())
			.then(response => console.log(response.json()))
			.catch((error) => console.log(error));
		
		setData({
			name: "",
			description: "",
		});
	}
	
	return (
			<section className="FormCreateProduct">
						<form onSubmit={ handleSendData } encType='multipart/form-data'>
							<label htmlFor='name'>
								<span>Nombre</span>
								<input value={ name } type="text" id="name" name='name' onChange={ handleInputChange } />
							</label>
							<label htmlFor='description'>
								<span>Descripción</span>
								<textarea value={ description } id="description" name='description' onChange={ handleInputChange }></textarea>
							</label>
							<button type="submit">Enviar</button>
						</form>
			</section>
	);
}

export default FormCreateProduct;

