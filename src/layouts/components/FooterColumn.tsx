import { FooterColumnProps } from '../../interfaces';
import './FooterColumn.css';

export const FooterColumn = ({title, rows} : FooterColumnProps) => {
    return (
    <div className="footer-column">
        <h3>{title}</h3>
        {rows.map(({isLink, text, id, url}) => (
            isLink ? (
                <a href={url} key={id}>{text}</a>
            ) : (
                <p key={id}>{text}</p>
            )
        ))}
    </div>
    )
};