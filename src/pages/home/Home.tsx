import { banners } from "../../data";
import { About, BannerCarousel, BrandsCarousel } from "./components";
import './Home.css';

export const Home = () => {
    return (
    <div className="home">
        <BannerCarousel banners={banners} />
        <About />
        <BrandsCarousel />
    </div>
    )
};