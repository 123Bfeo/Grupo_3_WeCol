import React from 'react';
import './LabelInput.css';

const LabelInput = (props) => {
	return (
		<div className='LabelInput'>
			<label htmlFor={`${ props.id }`}>
				<input type={`${ props.type }`} placeholder={`${ props.placeholder }`} name={`${ props.name }`} id={`${ props.id }`} />
			</label>
		</div>
	)
}

export default LabelInput;

