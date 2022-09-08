import styled from 'styled-components';
import {Form} from 'formik';

export const FormArea = styled(Form)`
    display: grid;
    gap: 15px;
`

export const TwoFields = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
`;

export const ActionsArea = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
`;