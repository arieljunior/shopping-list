import React from "react";
import { Formik } from "formik";
import { InputFormik } from "../../atoms/InputFormik";
import { Button } from "../../atoms/Button";
import { FormArea, TwoFields, ActionsArea } from "./styles";
import {useCreateProductMutation} from '../../../hooks/mutations/useCreateProduct.mutation';
import { IProduct, IFormProduct } from "../../../interfaces/IProduct.interface";
import {createProductBuilder} from '../../../builders/createProduct.builder';
const INITIAL_VALUES:IFormProduct = { 
	name: "", 
	category: "", 
	price: null, 
	quantity: null 
}

interface IProps {
	products: IProduct[],
	idShopping: string,
	onCreated: ()=>void
}

export const CreateProductForm: React.FC<IProps> = ({idShopping, products, onCreated}) => {
	const {mutateAsync: create} = useCreateProductMutation();

	return (
		<Formik
			initialValues={INITIAL_VALUES}
			onSubmit={async (values, { setSubmitting }) => {

				const myProducts = [...products];
				myProducts.push(createProductBuilder.buildDataToCreate(values, products.length));
				await create({
					idShopping,
					products: myProducts
				})
				setSubmitting(false);
				onCreated();
			}}>
			{({ isSubmitting }) => (
				<FormArea>
					<InputFormik name='name' placeholder='Nome do produto' />
					<InputFormik name='category' placeholder='Nome da categoria' />
					<TwoFields>
						<InputFormik name='price' placeholder='Valor' type='number' />
						<InputFormik
							name='quantity'
							placeholder='Quantidade'
							type='number'
						/>
					</TwoFields>
					<ActionsArea>
						<Button type='submit' disabled={isSubmitting}>
							Criar
						</Button>
						{/* <Button type='submit' disabled={isSubmitting}>
							Criar e Continuar
						</Button> */}
					</ActionsArea>
				</FormArea>
			)}
		</Formik>
	);
};
