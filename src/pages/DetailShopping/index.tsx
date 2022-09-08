import React from "react";
import { ContainerMobile } from "../../components/molecules/ContainerMobile";
import { Header } from "../../components/molecules/Header";
import { DetailShopping } from "../../components/organisms/DetailShopping";
import { CreateProductForm } from "../../components/organisms/CreateProductForm";
import { ModalCustom } from "../../components/molecules/Modal";
import { ButtonOpenCreateProduct } from "./styles";

interface IProps {}

export const DetailShoppingPage: React.FC<IProps> = () => {

	const [open, setOpen] = React.useState<boolean>(false);

	return (
		<ContainerMobile>
			<Header title='DETALHES' includeGoBak />
			<ButtonOpenCreateProduct onClick={()=> setOpen(true)} type="button">Adicionar produto</ButtonOpenCreateProduct>
			<DetailShopping />
			<ModalCustom removeButtonConfirm title="Novo produto" show={open} handleClose={()=> setOpen(false)}>
				<CreateProductForm />
			</ModalCustom>
		</ContainerMobile>
	);
};
