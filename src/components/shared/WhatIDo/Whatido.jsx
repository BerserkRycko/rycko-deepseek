import { Link } from "react-router-dom";
import { useLanguage } from "../../../hooks/useLanguage";

const Wido = () => {
    // Llamar al hook como función
    const { t } = useLanguage();
    
    // Datos para las cards de "Lo que hago"
    const services = [
        { 
            key: 'webDev', 
            icon: '💻', 
            color: '#13c3d9',
            link: '/gallery'
        },
        { 
            key: 'seoAnalytics', 
            icon: '📊', 
            color: '#016982',
            link: '/blog'
        },
        { 
            key: 'automation', 
            icon: '⚙️', 
            color: '#003d4b',
            link: '/contact'
        },
        { 
            key: 'content', 
            icon: '🎓', 
            color: '#13c3d9',
            link: '/blog'
        }
    ];

    return (
        <section className="services-section">
            <div className="container">
                <h2 className="section-title">{t("home.whatIDo")}</h2>
                <div className="services-grid">
                    {services.map((service) => (
                        <div 
                            key={service.key} 
                            className="service-card"
                            style={{ '--accent-color': service.color } }
                        >
                            <div className="service-icon" style={{ backgroundColor: service.color }}>
                                {service.icon}
                            </div>
                            <h3 className="service-title">{t(`home.services.${service.key}.title`)}</h3>
                            <p className="service-description">{t(`home.services.${service.key}.description`)}</p>
                            <Link to={service.link} className="service-cta">
                                {t(`home.services.${service.key}.cta`)}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Wido;