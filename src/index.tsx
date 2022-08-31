import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Routers } from "./Routers";
import "react-toastify/dist/ReactToastify.css";
import "./styles/global.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
	<React.StrictMode>
		<ToastContainer />
		<BrowserRouter>
			<Routers />
		</BrowserRouter>
	</React.StrictMode>
);
