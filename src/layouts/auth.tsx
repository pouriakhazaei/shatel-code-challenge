import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        // auth styles
        <div className="bg-gray-200">
            <Outlet />
        </div>
    );
};