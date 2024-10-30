import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
    barColors: {
        "0": "#4253ed",
        "0.5": "white"
    }
});

export default function ProgressBar() {
    return <TopBarProgress />;
};