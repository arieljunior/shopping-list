import React from "react";
import { Body, Content, Footer, Header, Modal, Title } from "./styles";
import { ButtonCustom } from "../../atoms/Button";

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
								<ButtonCustom onClick={handleClose}>Fechar</ButtonCustom>
								{!removeButtonConfirm && (
									<ButtonCustom onClick={handleConfirm}>Confirmar</ButtonCustom>
								)}
							</Footer>
						)}
					</Content>
				</Modal>
			)}
		</>
	);
};
