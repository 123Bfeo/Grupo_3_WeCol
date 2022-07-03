import React from "react";
import Swal from "sweetalert2";

const Sweetalertdemo = () => {

	
	const HandleClick = () => {
		Swal.fire({
			title: 'Success',
			type: 'success',
			text: 'Your work has been saved.',
		});
	}

		return (
			<div>
				<div className="hdr">
					<div>
						SweetAlert2 In React
					
					</div>
				</div>
				<div style={{ "paddingTop": "10px" }}>
					<button onClick={ () => HandleClick() }>Success</button>
			
				</div>
			</div>
		);
}


export default Sweetalertdemo;
