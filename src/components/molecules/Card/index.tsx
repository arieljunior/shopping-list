import React from "react";
import { BodyCard, ContainerCard, FooterCard, HeaderCard } from "./styles";
interface IProps {
	title: string;
	children?: React.ReactElement | React.ReactElement[];
    footerText: string;
    onClickCard: () => void;
}

export const CardBase: React.FC<IProps> = ({ title, children, footerText, onClickCard }) => {
	return (
		<ContainerCard onClick={onClickCard}>
			<HeaderCard>
				<h2>{title}</h2>
			</HeaderCard>
			<BodyCard>{children}</BodyCard>
			<FooterCard>{footerText}</FooterCard>
		</ContainerCard>
	);
};
