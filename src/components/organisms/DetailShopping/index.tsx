import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Container, ContainerCards, ContentHeader } from "./styles";
import { useShopping } from "../../../hooks/request/useShopping.hook";
import { shoppingListBuilder } from "../../../builders/shoppingDetail.builder";
import { CardBase } from "../../molecules/Card";
import { ModalCustom } from "../../molecules/Modal";
import { CreateProductForm } from "../CreateProductForm";
import { Button } from "../../atoms/Button";

interface IProps {}

export const DetailShopping: React.FC<IProps> = () => {
	let { id } = useParams();
	const { data, isLoading } = useShopping(id!);
	const [open, setOpen] = React.useState<boolean>(false);

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
			<ContainerCards>
				{dataBuilded?.products.map((product) => (
					<CardBase
						key={product.id}
						title={product.name}
						footerText={product.totalPriceBRL}
                        subtitle={product.category}
                        >
						<div>children</div>
					</CardBase>
				))}
			</ContainerCards>

			<Button onClick={()=> setOpen(true)} type="button">Adicionar produto</Button>
			<ModalCustom removeButtonConfirm title="Novo produto" show={open} handleClose={()=> setOpen(false)}>
				<CreateProductForm idShopping={id!} products={data?.products || []} onCreated={()=> setOpen(false)}/>
			</ModalCustom>
		</Container>
	);
};
