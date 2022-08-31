import React from "react";
import { Container } from "./styles";
import {Header} from '../../components/organisms/Header';

export const HomePage: React.FC = () => {
	return (
		<Container>
			<Header/>
			<h1>HELLO WORLD</h1>
		</Container>
	);
};
