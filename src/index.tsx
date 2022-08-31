import React from "react";
import ReactDOM from "react-dom";
import { Routers } from "./Routers";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import './styles/global.css'
ReactDOM.render(
	<React.StrictMode>
		<ToastContainer />
		<BrowserRouter>
			<Routers />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
