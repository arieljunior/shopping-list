import React from "react";
import { Body, Footer, Header, Modal, Title } from "./styles";
import { Button } from '../../atoms/Button';

interface IModalCustom {
	show: boolean;
	handleClose: () => void;
	handleConfirm?: () => void;
	title: string;
	children: React.ReactNode;
	removeActions?: boolean;
}

export const ModalCustom: React.FC<IModalCustom> = ({
	show,
	handleClose,
	handleConfirm,
	title,
	children,
	removeActions = false,
}: IModalCustom) => {
	return (
		<>
			{show && (
				<Modal>
					<Header>
						<Title>{title}</Title>
					</Header>
					<Body>{children}</Body>
					{!removeActions && (
						<Footer>
							<Button onClick={handleClose}>Fechar</Button>
							<Button onClick={handleConfirm}>Confirmar</Button>
						</Footer>
					)}
				</Modal>
			)}
		</>
	);
};
