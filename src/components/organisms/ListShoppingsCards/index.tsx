import React from "react";
import { ContainerShoppingList } from "./styles";
import { useShoppingList } from "../../../hooks/request/shoppingList.hook";
import { CardBase } from "../../molecules/Card";

interface IProps {}

export const ShoppingList: React.FC<IProps> = () => {
	const { data, isLoading } = useShoppingList();

	const handleClickCard = (id: string) => console.log(`Clickou no Card id: ${id}`);

	if (isLoading) {
		return <div>Carregando...</div>;
	}

	return (
		<ContainerShoppingList>
			{data &&
				data.map((item) => (
					<CardBase
						onClickCard={()=> handleClickCard(item.id.toString())}
						key={item.id}
						title={item.name}
						footerText='R$ 00,00'>
						{
							<ul>
								<li> Total de produtos: {item.products.length}</li>
							</ul>
						}
					</CardBase>
				))}
		</ContainerShoppingList>
	);
};
