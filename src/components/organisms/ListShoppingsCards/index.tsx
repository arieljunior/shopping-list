import React, { useMemo } from "react";
import { ContainerShoppingList } from "./styles";
import { useShoppingList } from "../../../hooks/request/useShoppingList.hook";
import { useCreateListMutation } from "../../../hooks/mutations/useCreateList.mutation";
import { useDeleteListMutation } from "../../../hooks/mutations/useDeleteList.mutation";
import { CardBase } from "../../molecules/Card";
import shoppingListBuilder from "../../../builders/shoppingList.builder";
import { useNavigate } from "react-router-dom";
import { ButtonCustom } from "../../atoms/Button";
import { ModalCustom } from "../../molecules/Modal";
import { Form, Formik } from "formik";
import { InputFormik } from "../../atoms/InputFormik";

interface IProps {}

export const ShoppingList: React.FC<IProps> = () => {
	let navigate = useNavigate();
	const { data, isLoading } = useShoppingList();
	const { mutateAsync: createList } = useCreateListMutation();
	const { mutateAsync: deleteList } = useDeleteListMutation();
	const [open, setOpen] = React.useState<boolean>(false);

	const handleClickCard = (id: string) => navigate(`/detailShopping/${id}`);

	const handleDeleteList = async (id: string) => {
		await deleteList(id);
	};

	const dataBuilded = useMemo(() => {
		return data ? shoppingListBuilder.build(data) : [];
	}, [data]);

	if (isLoading) {
		return <div>Carregando...</div>;
	}

	return (
		<ContainerShoppingList>
			<ButtonCustom onClick={() => setOpen(true)} type='button'>
				Criar Lista
			</ButtonCustom>

			{dataBuilded.map((item) => (
				<CardBase
					onClickDelete={() => handleDeleteList(item.id)}
					key={item.id}
					title={item.name}
					footerText={item.totalPrice}>
					<div>
						<ul>
							<li> Total de produtos: {item.totalProducts}</li>
						</ul>
						<ButtonCustom
							onClick={() => handleClickCard(item.id)}
							type='button'>
							abrir
						</ButtonCustom>
					</div>
				</CardBase>
			))}
			<ModalCustom
				removeButtonConfirm
				title='Nova lista'
				show={open}
				handleClose={() => setOpen(false)}>
				<Formik
					initialValues={{ listName: "" }}
					onSubmit={async (values, { setSubmitting }) => {
						await createList(values.listName);
						setSubmitting(false);
						setOpen(false);
					}}>
					{({ isSubmitting }) => (
						<Form>
							<InputFormik
								name='listName'
								placeholder='Nome da lista'
								required
							/>
							<ButtonCustom type='submit' disabled={isSubmitting}>
								Criar
							</ButtonCustom>
						</Form>
					)}
				</Formik>
			</ModalCustom>
		</ContainerShoppingList>
	);
};
