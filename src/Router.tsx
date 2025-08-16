import { createBrowserRouter } from "react-router";
import App from "./App";
import Index from ".";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import PrivacyPolicy from "./pages/Privacy";
import TermsOfService from "./pages/TOS";
import ShippingAndReturns from "./pages/shipping";
import Affiliates from "./pages/Affiliates";
import HoodieSizingGuide from "./pages/SizeGuide";
import CareGuide from "./pages/CareGuide";
import SpecialRequestsPage from "./pages/SpecialRequest";

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
            {
                path:'/privacy-policy',
                element: <PrivacyPolicy/>
            },
            {
                path:'/terms-of-service',
                element: <TermsOfService/>
            },
            {
                path:'/shipping-and-returns',
                element: <ShippingAndReturns/>
            },
            {
                path:'/affiliates',
                element: <Affiliates/>
            },
            {
                path:'/sizing-guide',
                element: <HoodieSizingGuide/>
            },
            {
                path:'/care-guide',
                element: <CareGuide/>
            },
            {
                path:'/special-request',
                element: <SpecialRequestsPage/>
            }
        ]
    },
]);

export default Router;
