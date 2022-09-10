import React from "react";
import { useFormikContext, FieldProps } from "formik";
import {
	InputStyled,
	InputContainer,
	InputLabel,
	InputError,
	Container,
} from "./styles";

interface IProps {
	placeholder: string;
	name: string;
	type?: string;
	required?: boolean;
}

export const InputFormik: React.FC<IProps> = ({ name, placeholder, type, required }) => {
	const { getFieldMeta } = useFormikContext();
	const { touched, value, error } = getFieldMeta(name);
	const isWarning = !!error && touched;
	const isDanger = !!value && isWarning;
	const isSuccess = !isWarning && !isDanger && !!value;

	return (
		<Container>
			<InputContainer
				data-success={isSuccess}
				data-warning={isWarning}
				data-danger={isDanger}>
				{(isWarning || isDanger || isSuccess) && (
					<InputLabel htmlFor={name}>{placeholder}</InputLabel>
				)}
				<InputStyled
					id={name}
					name={name}
					placeholder={placeholder}
					type={type || "text"}
					required={required}
				/>
				{error && touched && <InputError>{error}</InputError>}
			</InputContainer>
		</Container>
	);
};
