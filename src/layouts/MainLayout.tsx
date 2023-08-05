import { Home } from "../pages";
import { Footer, Header } from "./components";
import './MainLayout.css';

export const MainLayout = () => {
    return (
    <div className="main">
        <Header />
        <Home />
        <Footer />
    </div>
    )
};