import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="bg-gray-50">
            <div className="container px-2 md:px-0 py-4">
                <Outlet />
            </div>
        </div>
    );
};