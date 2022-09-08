import styled from "styled-components";
import colors from "../../../styles/colors";

export const Modal = styled.div`
	position: fixed; /* Stay in place */
	z-index: 1; /* Sit on top */
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgb(0, 0, 0);
	background-color: rgba(0, 0, 0, 0.4);
`;

export const Body = styled.div`
	padding: 20px 5px;
`;

export const Content = styled.div`
	background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
`;

export const Header = styled.div`
	border-bottom: 1px solid ${colors.grey};
	padding-bottom: 8px;
`;

export const Footer = styled.div`
	display: flex;
    flex-direction: row;
    justify-content: end;
    gap: 16px;
	border-top: 1px solid ${colors.grey};
	padding-top: 8px;
	button{
		padding: 5px;
	}
`;
export const Title = styled.h1``;
