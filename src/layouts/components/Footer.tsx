import { FooterColumn } from '.';
import { row1 } from '../../data';
import './Footer.css';

export const Footer = () => {
    return (
    <footer className="footer">
        <FooterColumn title="Conectar" rows={row1} />
        {/* <FooterColumn />
        <FooterColumn />
        <FooterColumn /> */}
        <div className="footer-content">
            
        </div>
    </footer>
    )
};