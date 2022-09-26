import React from "react";
import { Formik, FormikHelpers } from "formik";
import { InputFormik } from "../../atoms/InputFormik";
import { ButtonCustom } from "../../atoms/Button";
import { FormArea, TwoFields, ActionsArea } from "./styles";
import { useUpdateProductsMutation } from "../../../hooks/mutations/useCreateProduct.mutation";
import { IProduct, IFormProduct } from "../../../interfaces/IProduct.interface";
import { createProductBuilder } from "../../../builders/createProduct.builder";
const INITIAL_VALUES: IFormProduct = {
	name: "",
	category: "",
	price: null,
	quantity: null,
};

interface IProps {
	products: IProduct[];
	idShopping: string;
	onCreated: () => void;
}

export const CreateProductForm: React.FC<IProps> = ({
	idShopping,
	products,
	onCreated,
}) => {
	const { mutateAsync: create } = useUpdateProductsMutation();

	return (
		<Formik
			initialValues={INITIAL_VALUES}
			onSubmit={async (values, { setSubmitting }) => {
				const myProducts = [...products];
				myProducts.push(
					createProductBuilder.buildDataToCreate(values, products.length)
				);
				await create({
					idShopping,
					products: myProducts,
				});
				setSubmitting(false);
				onCreated();
			}}>
			{({ isSubmitting }) => (
				<FormArea>
					<InputFormik name='name' placeholder='Nome do produto' required />
					<InputFormik
						name='category'
						placeholder='Nome da categoria'
						required
					/>
					<TwoFields>
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
					</TwoFields>
					<ActionsArea>
						<ButtonCustom type='submit' disabled={isSubmitting}>
							Criar
						</ButtonCustom>
						{/* <Button type='submit' disabled={isSubmitting}>
							Criar e Continuar
						</Button> */}
					</ActionsArea>
				</FormArea>
			)}
		</Formik>
	);
};
