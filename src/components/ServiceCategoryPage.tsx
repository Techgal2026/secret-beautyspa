
"use client";

import Nav from "@/components/Navbar";
import { WHATSAPP_NUMBER, ServiceGroup } from "../app/data/services";

type Props = {
  title: string;
  subtitle: string;
  image: string;
  groups: ServiceGroup[];
};

export default function ServiceCategoryPage({
  title,
  subtitle,
  image,
  groups,
}: Props) {
  const bookOnWhatsApp = (service: string, price: string) => {
    const message = `Bonjour Secret Beauty & Spa, je souhaite réserver cette prestation : ${service} au prix de ${price}. Pouvez-vous me donner les disponibilités ?`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="service-page">
      <Nav />

      <section
        className="hero"
        style={{ backgroundImage: `linear-gradient(rgba(35,25,20,.48), rgba(35,25,20,.48)), url(${image})` }}
      >
        <div className="hero-content">
          <span className="eyebrow">SECRET BEAUTY & SPA</span>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <a href="#prestations" className="hero-button">
            Découvrir nos prestations
          </a>
        </div>
      </section>

      <section className="intro" id="prestations">
        <span className="eyebrow">NOS PRESTATIONS</span>
        <h2>Un moment rien que pour vous</h2>
        <p>
          Découvrez nos prestations et choisissez le soin qui vous convient.
          Cliquez sur une prestation pour effectuer votre demande de réservation
          directement sur WhatsApp.
        </p>
      </section>

      <section className="groups">
        {groups.map((group) => (
          <div className="service-group" key={group.title}>
            <h2>{group.title}</h2>

            <div className="service-grid">
              {group.services.map((service) => (
                <article className="service-card" key={service.name}>
                  <div>
                    <h3>{service.name}</h3>
                    {service.description && (
                      <p className="description">{service.description}</p>
                    )}
                    <p className="price">{service.price}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      bookOnWhatsApp(service.name, service.price)
                    }
                  >
                    Réserver sur WhatsApp
                    <span> ↗</span>
                  </button>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      

      <style jsx global>{`
        * { box-sizing: border-box; }

        .service-page {
          background: #FAF7F5;
          color: #2A2421;
          min-height: 100vh;
        }

        .hero {
          min-height: 480px;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 70px 20px;
          color: white;
        }

        .hero-content { max-width: 760px; }
        .eyebrow {
          color: #B99478;
          letter-spacing: 3px;
          font-size: 12px;
          font-weight: 700;
        }

        .hero h1 {
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(38px, 6vw, 66px);
          font-weight: 500;
          margin: 18px 0;
        }

        .hero p {
          font-size: 17px;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .hero-button {
          display: inline-block;
          background: #C9A58B;
          color: white;
          text-decoration: none;
          padding: 15px 26px;
          border-radius: 30px;
          font-size: 14px;
        }

        .intro {
          max-width: 760px;
          margin: 75px auto 45px;
          padding: 0 20px;
          text-align: center;
        }

        .intro h2, .contact h2 {
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(27px, 4vw, 38px);
          font-weight: 500;
          margin: 15px 0;
        }

        .intro p, .contact p {
          color: #796D65;
          line-height: 1.8;
        }

        .groups {
          max-width: 1120px;
          margin: auto;
          padding: 0 22px 70px;
        }

        .service-group { margin-bottom: 55px; }

        .service-group > h2 {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 29px;
          font-weight: 500;
          border-bottom: 1px solid #EAE3DE;
          padding-bottom: 15px;
          margin-bottom: 24px;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 18px;
        }

        .service-card {
          background: #fff;
          border: 1px solid #EAE3DE;
          border-radius: 17px;
          padding: 23px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 22px;
          transition: transform .2s, box-shadow .2s;
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(70, 48, 35, .08);
        }

        .service-card h3 {
          font-size: 17px;
          font-weight: 600;
          margin: 0 0 10px;
        }

        .description {
          font-size: 13px;
          color: #82756C;
          line-height: 1.6;
          margin: 0 0 12px;
        }

        .price {
          color: #8B624A;
          font-weight: 700;
          font-size: 17px;
          margin: 12px 0 0;
        }

        .service-card button {
          border: none;
          border-radius: 30px;
          background: #684838;
          color: white;
          padding: 13px 16px;
          font-size: 13px;
          cursor: pointer;
          transition: background .2s;
        }

        .service-card button:hover { background: #4D3529; }

        .contact {
          background: #EAE3DE;
          text-align: center;
          padding: 65px 20px;
        }

        .contact h2 { max-width: 650px; margin: 15px auto; }

        @media (max-width: 600px) {
          .hero { min-height: 390px; }
          .intro { margin-top: 50px; }
          .service-group > h2 { font-size: 25px; }
          .service-card { padding: 20px; }
        }
      `}</style>
    </main>
  );
}
