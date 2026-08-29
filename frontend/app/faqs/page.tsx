import { Section } from "../../components/ui/Section";
import { Grid, GridItem } from "../../components/ui/Grid";

export const metadata = {
  title: "SANKET FAQs | Landslide Early Warning & Risk Intelligence",
  description:
    "Explore answers about how SANKET integrates satellite remote sensing, rainfall predictions, computer vision, and NDMA alert dissemination.",
  alternates: {
    canonical: "/faqs",
  },
};

const faqs = [
  {
    question: "How does SANKET predict landslides before they occur?",
    answer: "SANKET continuously aggregates multispectral satellite imagery (Sentinel-2), real-time rainfall forecasts, digital elevation terrain models (DEM), and soil moisture sensor telemetry. Our AI models analyze the dynamic balance between pore water pressure and slope shear strength to flag impending failure hours before mass movement occurs."
  },
  {
    question: "What satellites and data sources are integrated?",
    answer: "SANKET ingests ESA Sentinel-2 (optical & InSAR radar interferometry), IMD high-resolution meteorological precipitation feeds, IoT piezometers, and geo-tagged photographic field reports from response teams on the ground."
  },
  {
    question: "How does the Computer Vision pipeline work?",
    answer: "Our computer vision models run both at the edge and in cloud pipelines to detect physical surface deformation indicators — including tension cracks, toe bulges, debris accumulation, and road subsidence — from roadside cameras, drone feeds, and field uploads."
  },
  {
    question: "How are early warnings delivered to authorities and communities?",
    answer: "Warnings are formatted according to the Common Alerting Protocol (CAP) and dispatched across multiple redundant channels: high-priority SMS broadcasts, mobile app push notifications with live evacuation routing, GIS dashboard alerts, and automated IVR voice calls."
  },
  {
    question: "Is SANKET aligned with NDMA and state disaster protocols?",
    answer: "Yes. SANKET is built specifically around the operational needs of National and State Disaster Management Authorities (NDMA/SDMA), Border Roads Organisation (BRO), and first responders, supporting multi-tier coordination from central command to field units."
  },
  {
    question: "Can SANKET operate in offline or low-connectivity mountain regions?",
    answer: "Yes. The SANKET field reporting mobile app features offline cryptographic caching and localized mesh sync so that field observations are securely captured without internet and synced the moment connectivity is re-established."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#FFFFFF] selection:bg-[#C8EA3B] selection:text-[#1A2614]">
      <Section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-[#213318] mb-4">
            Platform & Intelligence FAQ
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-[#1A2614] mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-[#586650] max-w-2xl mx-auto">
            Everything you need to know about SANKET&apos;s landslide prediction algorithms, data pipelines, and alert dissemination networks.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12 grid gap-4 md:grid-cols-3">
          {[
            "AI predictive physics & modeling",
            "Satellite & ground sensor fusion",
            "Multi-channel disaster alert protocol",
          ].map((item) => (
            <div key={item} className="rounded-xl border border-[#E3E8DF] bg-[#F8F9F6] p-4 text-xs font-mono font-bold text-[#1A2614] text-center">
              {item}
            </div>
          ))}
        </div>

        <Grid className="max-w-5xl mx-auto gap-6 md:gap-8">
          {faqs.map((faq, index) => (
            <GridItem key={index} mdColSpan={12} className="bg-white border border-[#E3E8DF] rounded-2xl shadow-xs overflow-hidden">
              <details className="group" open={index === 0}>
                <summary className="cursor-pointer list-none p-6 md:p-8 text-lg font-display font-bold text-[#1A2614] flex items-start justify-between gap-4">
                  <span className="flex items-start gap-4">
                    <span className="text-[#C8EA3B] bg-[#213318] w-6 h-6 rounded-md flex items-center justify-center text-xs shrink-0 font-mono font-bold">
                      Q
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <span className="text-xl text-[#586650] transition group-open:rotate-45 font-mono">+</span>
                </summary>
                <div className="border-t border-[#E3E8DF] px-6 pb-6 pt-5 md:px-8 md:pb-8 bg-[#F8F9F6]">
                  <p className="text-sm text-[#586650] leading-relaxed flex items-start gap-4">
                    <span className="text-[#213318] bg-[#C8EA3B] w-6 h-6 rounded-md flex items-center justify-center text-xs shrink-0 font-mono font-bold">
                      A
                    </span>
                    <span>{faq.answer}</span>
                  </p>
                </div>
              </details>
            </GridItem>
          ))}
        </Grid>
      </Section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
