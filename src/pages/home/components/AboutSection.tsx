import { AboutSectionProps } from '../../../interfaces';
import './AboutSection.css';

export const AboutSection = ({ sectionData: { heading, description, imageUrl } }: AboutSectionProps) => {
    return (
        <div className="about-section">
            <img className="about-section-logo" src={imageUrl} alt={heading + " logo"} />
            <h4 className="about-section-heading">{heading}</h4>
            <p className="about-section-desc">{description}</p>
        </div>
    )
};