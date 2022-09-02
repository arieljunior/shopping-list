import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Container, ContentHeader } from "./styles";
import { useShopping } from "../../../hooks/request/useShopping.hook";
import { shoppingListBuilder } from "../../../builders/shoppingDetail.builder";

interface IProps {}

export const DetailShopping: React.FC<IProps> = () => {
	let { id } = useParams();
	const { data, isLoading } = useShopping(id!);

	const dataBuilded = useMemo(() => {
		return data ? shoppingListBuilder.build(data) : null;
	}, [data]);

	if (isLoading) {
		return <div>carregando...</div>;
	}

	return (
		<Container>
			<ContentHeader>
				<h2>{dataBuilded?.name}</h2>
				<h1>{dataBuilded?.totalPrice}</h1>
				<h2>{dataBuilded?.totalProducts} produtos</h2>
				<h4>ultima atualização: {dataBuilded?.dateLastUpdate}</h4>
			</ContentHeader>
		</Container>
	);
};
