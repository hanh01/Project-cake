import RootLayout from '../layouts';
import Home from '../layouts/Home';
import Cake from '../components/cake';
import Mochi from "../components/mochi";
import routes from "../constants/routes";
import Macaron from "../components/macaron";
import Detail from "../components/detail-product";
import TermRevenue from "../components/term-revenue";
import TopProduct from "../components/top-product";
import Product from "../components/product";
import Dev from "../components/dev";


export default [
    {
        component: RootLayout,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true,
            },
            {
                path: routes.cake,
                component: Cake,

            },
            {
                path: routes.mochi,
                component: Mochi,

            },
            {
                path: routes.macaron,
                component: Macaron,

            },
            {
                path: `${routes.getDetailProduct}:piid`,
                component: Detail,
            },
            {
                path: routes.getTermRevenue,
                component: TermRevenue,
            },
            {
                path: routes.getTopProduct,
                component: TopProduct,
            },
            {
                path: routes.getProduct,
                component: Product,
            },
            {
                path: routes.getDev,
                component: Dev,
            },
        ],
    },
];
