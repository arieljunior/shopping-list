import React from "react";
import { ContainerHeader, ContainerAction } from "./styles";
import { useNavigate } from "react-router-dom";

interface IProps {
	title: string;
	includeGoBak?: boolean;
}

export const Header: React.FC<IProps> = ({ title, includeGoBak }) => {
	const navigate = useNavigate();
	return (
		<ContainerHeader>
			{includeGoBak && (
				<ContainerAction onClick={() => navigate(-1)}>Voltar</ContainerAction>
			)}
			<h1>{title}</h1>
		</ContainerHeader>
	);
};
