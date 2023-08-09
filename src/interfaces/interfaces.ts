export interface Banner {
    id: number;
    imageUrl: string;
}

export interface BannerCarouselProps {
    banners: Banner[];
}

export interface AboutSection {
    id: number;
    imageUrl: string;
    heading: string;
    description: string;
}

export interface AboutSectionProps {
    sectionData: AboutSection;
};

export interface Brand {
    id: number;
    imageUrl: string;
    altText: string;
}

export interface FormValues {
    nombre: string;
    email: string;
    telefono?: string;
    consulta: string;
};