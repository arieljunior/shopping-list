import React, { useMemo } from "react";
import { ContainerShoppingList } from "./styles";
import { useShoppingList } from "../../../hooks/request/shoppingList.hook";
import { CardBase } from "../../molecules/Card";
import shoppingListBuilder from "../../../builders/shoppingList.builder";

interface IProps {}

export const ShoppingList: React.FC<IProps> = () => {
	const { data, isLoading } = useShoppingList();

	const handleClickCard = (id: string) =>
		console.log(`Clickou no Card id: ${id}`);
		
	const dataBuilded = useMemo(() => {
		return data ? new shoppingListBuilder().build(data) : [];
	}, [data]);

	if (isLoading) {
		return <div>Carregando...</div>;
	}

	return (
		<ContainerShoppingList>
			{dataBuilded.map((item) => (
				<CardBase
					onClickCard={() => handleClickCard(item.id.toString())}
					key={item.id}
					title={item.name}
					footerText={item.totalPrice}>
					{
						<ul>
							<li> Total de produtos: {item.totalProducts}</li>
						</ul>
					}
				</CardBase>
			))}
		</ContainerShoppingList>
	);
};
