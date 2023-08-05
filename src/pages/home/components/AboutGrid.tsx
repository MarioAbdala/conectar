import './AboutGrid.css';
import { AboutSection } from './';
import { sections } from '../../../data/data';

export const AboutGrid = () => {
    return (
    <div className="about-grid">
        {sections.map(section => (
            <AboutSection sectionData={section} key={section.id} />
        ))}
    </div>
    )
};