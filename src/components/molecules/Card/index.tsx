import React from "react";
import { BodyCard, ContainerCard, FooterCard, HeaderCard, ButtonClose } from "./styles";

interface IProps {
	title: string;
	subtitle?: string;
	children?: React.ReactElement | React.ReactElement[];
	footerText: string;
	onClickDelete?: () => void;
}

export const CardBase: React.FC<IProps> = ({
	title,
	subtitle,
	children,
	footerText,
	onClickDelete
}) => {
	return (
		<ContainerCard>
			<HeaderCard>
				<h2>{title}</h2>
				{subtitle && <h4>{subtitle}</h4>}
				{!!onClickDelete && <ButtonClose type="button" onClick={onClickDelete}>X</ButtonClose>}
			</HeaderCard>
			<BodyCard>{children}</BodyCard>
			<FooterCard>{footerText}</FooterCard>
		</ContainerCard>
	);
};
