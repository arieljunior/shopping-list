import React from "react";
import { Container, Main } from "./styles";

interface IProps {
	children: React.ReactElement | React.ReactElement[];
}

export const ContainerMobile: React.FC<IProps> = ({ children }) => {
	return (
		<Container>
			<Main>{children}</Main>
		</Container>
	);
};
