import React from "react";
import { Formik } from "formik";
import { InputFormik } from "../../atoms/InputFormik";
import { Button } from "../../atoms/Button";
import { FormArea, TwoFields, ActionsArea } from "./styles";

interface IProps {}

export const CreateProductForm: React.FC<IProps> = () => {
	return (
		<Formik
			initialValues={{ name: "", category: "", price: '', quantity: '' }}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
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
						<Button type='submit' disabled={isSubmitting}>
							Criar e Continuar
						</Button>
					</ActionsArea>
				</FormArea>
			)}
		</Formik>
	);
};
