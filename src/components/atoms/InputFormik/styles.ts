import styled from "styled-components";
import { Field } from "formik";
import colors from "../../../styles/colors";

export const InputContainer = styled.div`
	display: flex;
	position: relative;
	height: 39px;

	> input {
		border-radius: 3px;
		border: 1px solid ${colors.green_main};
	}
	&[data-warning="true"] {
		> input {
			color: ${colors.orange_main};
			border-color: ${colors.orange_main};
		}
	}
	&[data-danger="true"] {
		> input {
			color: ${colors.danger};
			border-color: ${colors.danger};
		}
	}

	&[data-success="true"] {
		> input {
			color: ${colors.green_main};
			border-color: ${colors.green_main};
		}
	}
`;

export const InputLabel = styled.label`
	position: absolute;
	top: -6px;
	left: 10px;
	background: white;
	color: ${colors.black_main};
	font-size: 12px;
	padding: 0px 3px;
	border-radius: 3px;
`;

export const InputStyled = styled(Field)`
	width: 100%;
	height: 100%;
	color: ${colors.black_main};
	font-size: 16px;
	padding: 0 10px;

	&::placeholder {
		color: #a6a6a6;
	}
	&:focus {
		outline: none;
		border: 1px solid ${colors.orange_main};
	}
`;

export const InputError = styled.span`
	position: absolute;
	bottom: -15px;
	left: 10px;
	font-size: 12px;
`;

export const Container = styled.div`
	width: 100%;
`;
