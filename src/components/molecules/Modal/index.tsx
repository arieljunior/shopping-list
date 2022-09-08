import React from "react";
import { Body, Content, Footer, Header, Modal, Title } from "./styles";
import { Button } from "../../atoms/Button";

interface IModalCustom {
	show: boolean;
	handleClose: () => void;
	handleConfirm?: () => void;
	title: string;
	children: React.ReactNode;
	removeActions?: boolean;
	removeButtonConfirm?: boolean;
}

export const ModalCustom: React.FC<IModalCustom> = ({
	show,
	handleClose,
	handleConfirm,
	title,
	children,
	removeActions = false,
	removeButtonConfirm = false,
}: IModalCustom) => {
	return (
		<>
			{show && (
				<Modal>
					<Content>
						<Header>
							<Title>{title}</Title>
						</Header>
						<Body>{children}</Body>
						{!removeActions && (
							<Footer>
								<Button onClick={handleClose}>Fechar</Button>
								{!removeButtonConfirm && (
									<Button onClick={handleConfirm}>Confirmar</Button>
								)}
							</Footer>
						)}
					</Content>
				</Modal>
			)}
		</>
	);
};
