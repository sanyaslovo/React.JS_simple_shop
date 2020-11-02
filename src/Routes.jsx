import React, {
    lazy,
    Suspense,
    Fragment
} from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from "react-loader";

const routesConfig = [
    {
        exact: true,
        path: '/',
        component: lazy(() => import('./pages/home-page/HomePage'))
    },
    {
        exact: true,
        path: '/shop',
        component: lazy(() => import('./pages/shop-page/ShopPage'))
    },
    {
        exact: true,
        path: '/contact',
        component: lazy(() => import('./pages/contact-page/ContactPage'))
    },
    {
        exact: true,
        path: '/sign-in',
        component: lazy(() => import('./pages/sign-in-page/SignInPage'))
    },
    {
        exact: true,
        path: '/checkout',
        component: lazy(() => import('./pages/checkout-page/CheckoutPage'))
    },
    {
        exact: true,
        path: '/shop/:category',
        component: lazy(() => import('../src/pages/category-page/CategoryPage'))
    },
    {
        exact: true,
        path: '*',
        component: lazy(() => import('./pages/not-found-page/NotFoundPage'))
    }
]


const renderRoutes = (routes) => (routes ? (
    <Suspense fallback={
        <Loader
            loaded={true}
            lines={13}
            length={20}
            width={10}
            radius={30}
            corners={1}
            rotate={0}
            direction={1}
            color="#000"
            speed={1}
            trail={60}
            shadow={false}
            hwaccel={false}
            className="spinner"
            zIndex={2e9}
            top="50%"
            left="50%"
            scale={1.0}
            loadedClassName="loadedContent"
        />
    }>
        <Switch>
            {routes.map((route, i) => {
                const Guard = route.guard || Fragment;
                const Layout = route.layout || Fragment;
                const Component = route.component;

                return (
                    <Route
                        key={i}
                        path={route.path}
                        exact={route.exact}
                        render={(props) => (
                            <Guard>
                                <Layout>
                                    {route.routes
                                        ? renderRoutes(route.routes)
                                        : <Component {...props} />}
                                </Layout>
                            </Guard>
                        )}
                    />
                );
            })}
        </Switch>
    </Suspense>
) : null);



function Routes() {
    return renderRoutes(routesConfig);
}

export default Routes;
