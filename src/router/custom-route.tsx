import { Route } from "react-router-dom";
import { Suspense, ReactNode } from "react";

import Pages from "constants/pages";
import { ProgressBar } from "../common-components";

type Props = {
    path: Pages | "*";
    element: ReactNode;
};

const CustomRoute = ({ path, element }: Props) => (
    <Route
        path={path}
        element={
            <Suspense fallback={<ProgressBar />}>
                {element}
            </Suspense>
        }
    />
);
export default CustomRoute;