import {useEffect, useState} from 'react';

const FormCreateProduct = () => {
	const [selectOptions, setSelectOptions] = useState([]);
	
	
	useEffect(() => {
		fetch('http://localhost:3001/api/products')
			.then(response => response.json())
			.then(data => {
				console.log(data.data.category);
				setSelectOptions(data.data.category);
			});
	}, []);

	
	const [data, setData] = useState({
		name: "",
		description: "",
		price: "",
	});
	
	const handleInputChange = (event) => {
		setData({
			...data,
			[event.target.name]: event.target.value,
		});
	}
	
	let { name, description, price } = data;
	
	const handleSendData = (event) => {
		event.preventDefault();
		if (name === "" || description === "" || price === "") {
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
			price: "",
		});
	}
	
	return (
			<section className="FormCreateProduct">
						<form onSubmit={ handleSendData } encType='multipart/form-data'>
							<label htmlFor='name'>
								<span>Nombre</span>
								<input value={ name } type="text" id="name" name='name' onChange={ handleInputChange } />
							</label>
							<label htmlFor='price'>
								<span>Precio</span>
								<input value={ price } type="number" id="price" name='price' onChange={ handleInputChange } />
							</label>
							<label htmlFor='category'>
								<span>Categoría</span>
								<select id="category" name='category' onChange={ handleInputChange }>
									{
										selectOptions.map((option, index) => {
											return (
												<option key={ index } value={ option.id }>{ option.name }</option>
											)
										})
										}
									}
								</select>
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

