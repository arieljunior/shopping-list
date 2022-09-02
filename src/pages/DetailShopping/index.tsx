import React from "react";
import { ContainerMobile } from "../../components/molecules/ContainerMobile";
import { Header } from "../../components/molecules/Header";
import { DetailShopping } from "../../components/organisms/DetailShopping";

interface IProps {}

export const DetailShoppingPage: React.FC<IProps> = () => {
	return (
		<ContainerMobile>
			<Header title='DETALHES' includeGoBak/>
			<DetailShopping/>
		</ContainerMobile>
	);
};
