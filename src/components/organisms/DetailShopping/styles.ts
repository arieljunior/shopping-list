import styled from "styled-components";
import colors from "../../../styles/colors";

export const Container = styled.div``;

export const ContentHeader = styled.div`
	width: 100%;
	text-align: center;
	margin: 15px 0;
	display: grid;
	gap: 10px;

	h1 {
		color: ${colors.white_main};
		font-size: 70px;
	}
`;
