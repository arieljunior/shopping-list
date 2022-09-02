import styled from "styled-components";
import colors from "../../../styles/colors";

export const ContainerHeader = styled.div`
	display: flex;
	justify-content: center;
	padding: 20px 0;
	background-color: ${colors.black_light};
	color: ${colors.white_main};
	position: relative;
`;

export const ContainerAction = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	display: flex;
	align-items: center;
	margin-left: 14px;
	cursor: pointer;
`;
