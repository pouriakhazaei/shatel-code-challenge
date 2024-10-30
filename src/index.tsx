import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "assets/css/global.css";
import AppRouter from "./router";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </Provider>
);