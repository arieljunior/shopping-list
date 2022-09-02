import React from "react";
import { BodyCard, ContainerCard, FooterCard, HeaderCard } from "./styles";
interface IProps {
	title: string;
	subtitle?: string;
	children?: React.ReactElement | React.ReactElement[];
	footerText: string;
	onClickCard?: () => void;
}

export const CardBase: React.FC<IProps> = ({
	title,
	subtitle,
	children,
	footerText,
	onClickCard = () => {},
}) => {
	return (
		<ContainerCard onClick={onClickCard}>
			<HeaderCard>
				<h2>{title}</h2>
				{subtitle && <h4>{subtitle}</h4>}
			</HeaderCard>
			<BodyCard>{children}</BodyCard>
			<FooterCard>{footerText}</FooterCard>
		</ContainerCard>
	);
};
