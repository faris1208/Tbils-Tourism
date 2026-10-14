import Image from "next/image";

const whatsappNumber = "2349038797700";
const whatsappMessage = "Hello TBILS, I am interested in the Qatar holiday package. Please share more details.";

export function QatarLanding() {
  return (
    <section className="qatar-campaign" aria-label="Qatar holiday package">
      <div className="qatar-campaign__content">
        <div className="qatar-campaign__image-frame">
          <Image
            className="qatar-campaign__creative qatar-campaign__creative--desktop"
            src="/qatar_tourism_desktop.jpeg"
            alt="Christmas in Qatar holiday package from Lagos"
            fill
            sizes="100vw"
            priority
          />
          <Image
            className="qatar-campaign__creative qatar-campaign__creative--tablet"
            src="/qatar_tourism_tablet.jpeg"
            alt=""
            fill
            sizes="100vw"
          />
          <Image
            className="qatar-campaign__creative qatar-campaign__creative--mobile"
            src="/qatar_tourism_mobile.jpeg"
            alt=""
            fill
            sizes="100vw"
          />
        </div>
        <a
          className="qatar-campaign__cta"
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noreferrer"
        >
          <span className="qatar-campaign__cta-label">Limited slots available</span>
          <span className="qatar-campaign__cta-text"><span aria-hidden="true" className="qatar-campaign__cta-icon">◉</span> Apply now on WhatsApp <span aria-hidden="true" className="qatar-campaign__cta-arrow">↗</span></span>
        </a>
      </div>
    </section>
  );
}
