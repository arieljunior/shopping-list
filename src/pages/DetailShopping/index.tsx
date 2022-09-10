import React from "react";
import { ContainerMobile } from "../../components/molecules/ContainerMobile";
import { Header } from "../../components/molecules/Header";
import { DetailShopping } from "../../components/organisms/DetailShopping";
import { CreateProductForm } from "../../components/organisms/CreateProductForm";
import { ModalCustom } from "../../components/molecules/Modal";
import { ButtonOpenCreateProduct } from "./styles";

interface IProps {}

export const DetailShoppingPage: React.FC<IProps> = () => {

	return (
		<ContainerMobile>
			<Header title='DETALHES' includeGoBak />
			<DetailShopping />
		</ContainerMobile>
	);
};
