import styled from "styled-components";
import colors from '../../../styles/colors'

export const Container = styled.div`
	justify-content: center;
	display: flex;
	height: 100vh;
	background-color: ${colors.grey_1};
`;

export const Main = styled.main`
	width: 100%;
	height: 100vh;
	background-color: ${colors.grey};
	max-width: 500px;
	max-height: 914px;
    border-radius: 6px;
`;
