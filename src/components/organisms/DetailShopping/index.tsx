import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Container, ContainerCards, ContentHeader } from "./styles";
import { useShopping } from "../../../hooks/request/useShopping.hook";
import { shoppingListBuilder } from "../../../builders/shoppingDetail.builder";
import { CardBase } from "../../molecules/Card";
import { ModalCustom } from "../../molecules/Modal";
import { CreateProductForm } from "../CreateProductForm";
import { ButtonCustom } from "../../atoms/Button";
import { Form, Formik, FormikHelpers } from "formik";
import { InputFormik } from "../../atoms/InputFormik";
import { useUpdateProductsMutation } from "../../../hooks/mutations/useCreateProduct.mutation";
import ShoppingEntity from '../../../entities/shopping.class';

interface IFormCardProduct {price: number, quantity: number}

interface IProps {}

export const DetailShopping: React.FC<IProps> = () => {
	let { id } = useParams();
	const { data, isLoading } = useShopping(id!);
	const { mutateAsync: updateProducts } = useUpdateProductsMutation();
	
	const [open, setOpen] = React.useState<boolean>(false);
	
	const handleUpdateProducts = async (values:IFormCardProduct, {setSubmitting}: FormikHelpers<IFormCardProduct>, idProduct: string) => {
		
		if(id){
			const shoppingEntity = new ShoppingEntity(id, data?.products || []);
			shoppingEntity.updatePriceAndQuantityById(idProduct, values.quantity, values.price);

			await updateProducts({
				idShopping: id,
				products: shoppingEntity.products,
			});
		}
		setSubmitting(false);
	} 

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
						subtitle={product.category}>
						<Formik
							initialValues={{
								price: product.price || 0,
								quantity: product.quantity,
							}}
							onSubmit={(values, helpers) => handleUpdateProducts(values, helpers, product.id)}>
							{({isSubmitting}) => <Form>
								<InputFormik
									name='price'
									placeholder='Valor'
									type='number'
									required
								/>
								<InputFormik
									name='quantity'
									placeholder='Quantidade'
									type='number'
									required
								/>
								<ButtonCustom type='submit' disabled={isSubmitting}>Atualizar</ButtonCustom>
							</Form>}
						</Formik>
					</CardBase>
				))}
			</ContainerCards>

			<ButtonCustom onClick={() => setOpen(true)} type='button'>
				Adicionar produto
			</ButtonCustom>
			<ModalCustom
				removeButtonConfirm
				title='Novo produto'
				show={open}
				handleClose={() => setOpen(false)}>
				<CreateProductForm
					idShopping={id!}
					products={data?.products || []}
					onCreated={() => setOpen(false)}
				/>
			</ModalCustom>
		</Container>
	);
};
