import styled from "styled-components";
import colors from "../../../styles/colors";

export const Container = styled.div`
`;

export const ContentHeader = styled.div`
	width: 100%;
	text-align: center;
	margin: 10px 0;
	display: grid;
	gap: 0px;

	h1 {
		color: ${colors.white_main};
		font-size: 70px;
	}
`;

export const ContainerCards = styled.div`
	display: flex;
    flex-direction: column;
    align-items: center;
	gap: 30px;
    overflow: scroll;
    overflow-x: hidden;
    height: 610px;
`;

export const ContainerButtonFloat = styled.div`
    position: absolute;
    bottom: 40px;
    left: 80px;

    width: 100px;
    
    button{
        font-size: 60px;
        width: 100%;
        border-radius: 10px;
        cursor: pointer;
        background-color: ${colors.orange_main};
        color: ${colors.grey};
    }
`
