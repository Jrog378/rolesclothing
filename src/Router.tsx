import { createBrowserRouter } from "react-router";
import App from "./App";
import Index from ".";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
        children: [
            {
                index: true,
                element: <App />,
            },
            {
                path:'/products',
                children: [
                    {
                        index: true,
                        element: <Products/>,
                    },
                    {
                        path: ":id",
                        element: <ProductPage/>
                    }
                ]
            },
        ]
    },
]);

export default Router;
