import React from "react";
import { ContainerMobile } from "../../components/molecules/ContainerMobile";
import { Header } from "../../components/molecules/Header";
import { ShoppingList } from "../../components/organisms/ListShoppingsCards";

export const ListShopping: React.FC = () => {
	return (
		<ContainerMobile>
			<Header title="Lista de compras"/>
			<ShoppingList />
		</ContainerMobile>
	);
};
