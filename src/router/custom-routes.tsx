import { Routes, useLocation } from "react-router-dom";
import { useState, useEffect, Fragment, ReactNode } from "react";

import { ProgressBar } from "../common-components";

const CustomRoutes = ({ children }: { children: ReactNode }) => {
    const { pathname } = useLocation();
    const [prevPath, setPrevPath] = useState<string>("");
    const [progress, setProgress] = useState<boolean>(false);

    useEffect(() => {
        setPrevPath(pathname);
        setProgress(true);
        if (pathname === prevPath) {
            setPrevPath("");
        };
    }, [pathname]);

    useEffect(() => {
        setProgress(false);
    }, [prevPath]);

    return (
        <Fragment>
            {progress && <ProgressBar />}
            <Routes>
                {children}
            </Routes>
        </Fragment>
    );
};
export default CustomRoutes;