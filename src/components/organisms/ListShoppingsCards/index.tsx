import React, { useMemo } from "react";
import { ContainerShoppingList } from "./styles";
import { useShoppingList } from "../../../hooks/request/useShoppingList.hook";
import { CardBase } from "../../molecules/Card";
import shoppingListBuilder from "../../../builders/shoppingList.builder";
import { useNavigate } from "react-router-dom";

interface IProps {}

export const ShoppingList: React.FC<IProps> = () => {
	let navigate = useNavigate();
	const { data, isLoading } = useShoppingList();

	const handleClickCard = (id: string) => navigate(`/detailShopping/${id}`);

	const dataBuilded = useMemo(() => {
		return data ? shoppingListBuilder.build(data) : [];
	}, [data]);

	if (isLoading) {
		return <div>Carregando...</div>;
	}

	return (
		<ContainerShoppingList>
			{dataBuilded.map((item) => (
				<CardBase
					onClickCard={() => handleClickCard(item.id)}
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
