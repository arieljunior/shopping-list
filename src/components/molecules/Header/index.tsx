import React from "react";
import { ContainerHeader } from "./styles";

interface IProps {
	title: string;
}

export const Header: React.FC<IProps> = ({ title }) => {
	return (
		<ContainerHeader>
			<h1>{title}</h1>
		</ContainerHeader>
	);
};
