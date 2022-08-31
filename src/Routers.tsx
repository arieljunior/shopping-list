import React from "react";
import { HomePage } from "./pages/Home";
import { Routes, Route } from "react-router-dom";

export const Routers: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
		</Routes>
	);
};
