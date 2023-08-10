import { AboutSection, Banner, Brand, Row } from "../interfaces";

export const banners: Array<Banner> = [
    {id: 1, imageUrl: "banners/banner-1.jpg"},
    {id: 2, imageUrl: "banners/banner-2.jpg"},
    {id: 3, imageUrl: "banners/banner-3.jpg"}
];

export const sections: Array<AboutSection> = [
    {id: 1, imageUrl: "images/computer.svg", heading: "Computación", description: "Venta de equipos informáticos."},
    {id: 2, imageUrl: "images/repair.svg", heading: "Servicio técnico", description: "Reparaciones de hardware y software."},
    {id: 3, imageUrl: "images/wifi.svg", heading: "Redes", description: "Instalaciones de equipos y sistemas de redes."},
    {id: 4, imageUrl: "images/iphone.svg", heading: "iPhone", description: "iPhones y otros dispositivos de Apple."},
    {id: 5, imageUrl: "images/gaming.svg", heading: "Gaming", description: "Equipos para gaming de alta gama."},
    {id: 6, imageUrl: "images/printer.svg", heading: "Insumos", description: "Venta de insumos y accesorios para tu PC."},
    {id: 7, imageUrl: "images/speakers.svg", heading: "Sonido", description: "Equipos de audio de primera calidad."},
    {id: 8, imageUrl: "images/house.svg", heading: "Smart House", description: "Domótica con asistente virtual para el hogar."},
    {id: 9, imageUrl: "images/new_releases.svg", heading: "Novedades", description: "Vendemos lo último de lo último."},
];

export const brands: Brand[] = [
    { id: 1, imageUrl: 'logos/intel.png', altText: 'Intel logo' },
    { id: 2, imageUrl: 'logos/asus.png', altText: 'Asus logo' },
    { id: 3, imageUrl: 'logos/nvidia.png', altText: 'Nvidia logo' },
    { id: 4, imageUrl: 'logos/samsung.png', altText: 'Samsung logo' },
    { id: 5, imageUrl: 'logos/apple.png', altText: 'Apple logo' },
    { id: 6, imageUrl: 'logos/amd.png', altText: 'AMD logo' },
    { id: 7, imageUrl: 'logos/acer.png', altText: 'Acer logo' },
    { id: 8, imageUrl: 'logos/lenovo.png', altText: 'Lenovo logo' },
    { id: 9, imageUrl: 'logos/cisco.png', altText: 'Cisco logo' },
    { id: 10, imageUrl: 'logos/gigabyte.png', altText: 'Gigabyte logo' },
    { id: 11, imageUrl: 'logos/hp.png', altText: 'HP logo' },
    { id: 12, imageUrl: 'logos/logi.png', altText: 'Logi logo' },
    { id: 13, imageUrl: 'logos/dell.png', altText: 'Dell logo' },
    { id: 14, imageUrl: 'logos/msi.png', altText: 'MSI logo' },
    { id: 15, imageUrl: 'logos/sonos.png', altText: 'Sonos logo' },
    { id: 16, imageUrl: 'logos/sony.png', altText: 'Sony logo' },
    { id: 17, imageUrl: 'logos/thermaltake.png', altText: 'Thermaltake logo' },
    { id: 18, imageUrl: 'logos/tplink.png', altText: 'TP-Link logo' },
    { id: 19, imageUrl: 'logos/kingston.png', altText: 'Kingston logo' },
    { id: 20, imageUrl: 'logos/adata.png', altText: 'Adata logo' },
];

export const row1 : Row[] = [{text: "San Martín 575", isLink: false, id: 1}, {text: "3240, Villaguay", isLink: false, id: 2}, {text: "Provincia de Entre Ríos", isLink: false, id:3}, {text: "Argentina", isLink: false, id:4}];