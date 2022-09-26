import styled from 'styled-components';
import colors from '../../../styles/colors';

export const ContainerCard = styled.div`
    width: 80%;
    background-color: ${colors.green_main};
    color: ${colors.white_main};
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
`;

export const HeaderCard = styled.div`
    text-align: center;
`;

export const BodyCard = styled.div`
    padding: 15px;
`;

export const FooterCard = styled.div`
    text-align: end;
    border-top: 1px solid ${colors.white_main};
    border-radius: 5px;
    padding-right: 5px;
    font-size: 45px;
`;