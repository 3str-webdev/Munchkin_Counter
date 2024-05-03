import { CounterPage } from "@/pages/counter-page";
import { IndexPage } from "@/pages/index-page";
import { createHashRouter } from "react-router-dom";

export const router = createHashRouter([
	{
		path: "/",
		element: <IndexPage />,
	},
	{
		path: "counter/:id",
		element: <CounterPage />,
	},
]);
