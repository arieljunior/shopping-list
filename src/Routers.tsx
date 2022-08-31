import React from "react";
import { ListShopping } from "./pages/ListShopping";
import { Routes, Route } from "react-router-dom";

export const Routers: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<ListShopping />} />
		</Routes>
	);
};
