import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Routers } from "./Routers";
import "react-toastify/dist/ReactToastify.css";
import "./styles/global.css";
import { QueryClient, QueryClientProvider, QueryCache } from "react-query";

const queryClient = new QueryClient({
	defaultOptions: { queries: { refetchOnWindowFocus: false } },
	queryCache: new QueryCache({
		onError: () => {
			toast.error("Ocorreu um erro no servidor.");
		},
	}),
});

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
	<QueryClientProvider client={queryClient}>
		<ToastContainer />
		<BrowserRouter>
			<Routers />
		</BrowserRouter>
	</QueryClientProvider>
);
