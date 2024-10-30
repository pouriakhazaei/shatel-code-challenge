import { lazy } from "react";
import { Route } from "react-router-dom";

import Pages from "../constants/pages";
import AuthLayout from "../layouts/auth";
import MainLayout from "../layouts/main";
import CustomRoute from "./custom-route";
import CustomRoutes from "./custom-routes";

const Posts = lazy(() => import("../pages/posts"));
const Login = lazy(() => import("../pages/auth/login"));
const NotFound = lazy(() => import("../pages/not-found-404"));
const Register = lazy(() => import("../pages/auth/register"));
const AboutUs = lazy(() => import("../pages/marketing/about-us"));
const ContactUs = lazy(() => import("../pages/marketing/contact-us"));
const ForgotPassword = lazy(() => import("../pages/auth/forgot-password"));

const AppRouter = () => {
    return (
        <CustomRoutes>
            <Route element={<MainLayout />}>
                {CustomRoute({ path: Pages.Posts, element: <Posts /> })}
                {CustomRoute({ path: Pages.AboutUs, element: <AboutUs /> })}
                {CustomRoute({ path: Pages.ContactUs, element: <ContactUs /> })}
            </Route>
            <Route element={<AuthLayout />}>
                {CustomRoute({ path: Pages.Login, element: <Login /> })}
                {CustomRoute({ path: Pages.Register, element: <Register /> })}
                {CustomRoute({ path: Pages.ForgotPassword, element: <ForgotPassword /> })}
            </Route>
            {CustomRoute({ path: "*", element: <NotFound /> })}
        </CustomRoutes>
    );
};
export default AppRouter;