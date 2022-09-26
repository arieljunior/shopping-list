import styled from 'styled-components';
import colors from '../../../styles/colors';

export const ContainerCard = styled.div<{hasCursorPointer?: boolean}>`
    width: 80%;
    background-color: ${colors.green_main};
    color: ${colors.white_main};
    padding: 5px 10px;
    border-radius: 5px;
`;

export const HeaderCard = styled.div`
    text-align: center;
    position: relative;
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

export const ButtonClose = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 15px;
    margin-right: 6px;
    padding: 3px 8px;
    cursor: pointer;
`;