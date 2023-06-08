import React from 'react';

const FormInput = ({
	inputLabel,
	labelFor,
	inputType,
	inputId,
	inputName,
	placeholderText,
	ariaLabelName,
}) => {
	return (
		<div className="font-general-regular mb-4">
			{/* <label
				className="text-left block text-sm text-primary-light mb-1"
				htmlFor={labelFor}
			>
				{inputLabel}
			</label> */}
			<input
				className="w-full py-2 border-b border-gray-200 border-opacity-50 text-secondary-light bg-[#2c2c37] shadow-sm text-sm focus:outline-none"
				type={inputType}
				id={inputId}
				name={inputName}
				placeholder={placeholderText}
				aria-label={ariaLabelName}
				required
			/>
		</div>
	);
};

export default FormInput;
