import { banners } from "../../data";
import { About, BannerCarousel, BrandsCarousel, ContactForm } from "./components";
import './Home.css';

export const Home = () => {
    return (
    <div className="home">
        <BannerCarousel banners={banners} />
        <ContactForm />
        <About />
        <BrandsCarousel />
    </div>
    )
};