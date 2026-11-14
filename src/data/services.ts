// Service order follows the client's request: painting + renovation lead,
// then post-renovation cleaning, then the wider cleaning catalogue.
export type LeadService = {
  title: string;
  blurb: string;
  image: string; // key matched in index.astro image map
  icon: string; // tabler icon name
};

export const leadServices: LeadService[] = [
  {
    title: "Building painting",
    blurb:
      "Surface prep, colour consultation and durable finishes that refresh and protect your property inside and out.",
    image: "painting",
    icon: "tabler:paint",
  },
  {
    title: "Renovation",
    blurb:
      "Fit-outs and upgrades for residential, commercial and developer projects, delivered on time and on budget.",
    image: "renovation",
    icon: "tabler:tools",
  },
  {
    title: "Post-renovation cleaning",
    blurb:
      "Industrial floor machines and extraction equipment remove every trace of dust, debris and residue — with eco-friendly, SDS-certified chemicals.",
    image: "postreno",
    icon: "tabler:sparkles",
  },
];

// The wider catalogue, shown as compact chips below the lead services.
export const moreServices: { title: string; icon: string }[] = [
  { title: "Contract basis cleaning", icon: "tabler:calendar-repeat" },
  { title: "Post-construction cleaning", icon: "tabler:building-skyscraper" },
  { title: "Factory & industrial", icon: "tabler:building-factory-2" },
  { title: "High-rise building", icon: "tabler:building" },
  { title: "Carpet cleaning", icon: "tabler:wash-machine" },
  { title: "Landscaping", icon: "tabler:plant-2" },
];

// ---------------------------------------------------------------------------
// Full service catalogue — powers the /services hub and /services/[slug] pages.
// Content adapted from the Island Shine company profile.
// `image` / `gallery` are keys resolved to ImageMetadata in the page frontmatter.
// `accent` drives per-page theming: blue | yellow | cyan.
// ---------------------------------------------------------------------------
export type Service = {
  slug: string;
  title: string;
  tagline: string;
  short: string;
  intro: string;
  icon: string;
  image: string;
  gallery: string[];
  features: string[];
  idealFor: string[];
  accent: "blue" | "yellow" | "cyan";
};

export const serviceCatalog: Service[] = [
  {
    slug: "building-painting",
    title: "Building Painting",
    tagline: "A fresh, lasting finish inside and out",
    short: "Surface prep, colour consultation and durable finishes that refresh and protect your property.",
    intro:
      "Transform your building with our professional painting services. Our skilled team specialises in comprehensive painting solutions tailored to enhance the aesthetics and protect the integrity of your property. From surface preparation and colour consultation to precise application and durable finishes, we deliver exceptional results that leave a lasting impression.",
    icon: "tabler:paint",
    image: "service-painting",
    gallery: ["painter", "gal-04", "gal-15"],
    features: [
      "Thorough surface preparation and repair",
      "Colour consultation and matching",
      "Interior and exterior application",
      "Durable, weather-resistant finishes",
      "Clean, low-disruption work practices",
    ],
    idealFor: ["Homes & condominiums", "Offices & retail", "Developer hand-overs"],
    accent: "yellow",
  },
  {
    slug: "renovation",
    title: "Renovation",
    tagline: "Fit-outs and upgrades, delivered end-to-end",
    short: "Fit-outs and upgrades for residential, commercial and developer projects, on time and on budget.",
    intro:
      "From minor refreshes to full fit-outs, our renovation team upgrades residential, commercial and developer spaces with a single accountable point of contact. We plan carefully, work cleanly and hand back spaces that are ready to use — backed by CIDB certification and full insurance.",
    icon: "tabler:tools",
    image: "service-renovation",
    gallery: ["gal-16", "gal-02", "gal-18"],
    features: [
      "Residential, commercial & developer projects",
      "Single accountable project lead",
      "Transparent, budget-friendly quotes",
      "CIDB-certified workmanship",
      "Finished with post-renovation cleaning",
    ],
    idealFor: ["Home owners", "Offices & shops", "New builds"],
    accent: "blue",
  },
  {
    slug: "post-renovation-cleaning",
    title: "Post-Renovation & Construction Cleaning",
    tagline: "Every trace of dust, debris and residue — gone",
    short: "Industrial machines and deep extraction remove dust, debris and residue for a flawless hand-over.",
    intro:
      "Experience seamless post-renovation cleaning with our expert services. Our team works with industrial floor machines, extraction equipment and heavy-duty vacuums to eliminate dust, debris and residue far beyond what surface cleaning can reach. Combined with eco-friendly products and SDS-certified chemicals, we deliver a safe, healthy environment without compromising on sustainability.",
    icon: "tabler:sparkles",
    image: "service-postreno",
    gallery: ["fb-postreno-vac", "gal-01", "gal-12"],
    features: [
      "Fine construction-dust removal with industrial vacuums",
      "Machine floor scrubbing & polishing",
      "Debris and residue clearing",
      "Detailed fixture & glass cleaning",
      "Eco-friendly, SDS-certified chemicals",
    ],
    idealFor: ["Post-renovation homes", "New offices & studios", "Developer hand-overs"],
    accent: "cyan",
  },
  {
    slug: "contract-cleaning",
    title: "Contract Basis Cleaning",
    tagline: "Pristine premises, every single day",
    short: "Tailored, ongoing cleaning for malls, condominiums, offices and schools.",
    intro:
      "Experience our trusted contract cleaning services that consistently exceed expectations. Building long-term partnerships, our tailored solutions deliver pristine and hygienic premises for commercial, residential and facility spaces. With trained professionals, commercial-grade cleaning machines and eco-friendly products, we tackle any cleaning challenge with meticulous attention to detail.",
    icon: "tabler:calendar-repeat",
    image: "corridor",
    gallery: ["fb-buffer", "gal-07", "gal-11"],
    features: [
      "Daily, weekly or custom schedules",
      "Trained, vetted full-time teams",
      "Machine scrubbing, polishing & extraction",
      "Eco-friendly products throughout",
      "Dedicated account follow-up",
    ],
    idealFor: ["Malls & retail", "Condominiums", "Offices & schools"],
    accent: "blue",
  },
  {
    slug: "factory-industrial-cleaning",
    title: "Factory & Industrial Cleaning",
    tagline: "Heavy-duty cleaning built for production floors",
    short: "Expert industrial cleaning that boosts safety, efficiency and productivity in your facility.",
    intro:
      "We specialise in expert industrial cleaning solutions tailored to transform your factory. From equipment cleaning and floor maintenance to high-pressure washing and customised cleaning plans, our experienced team has the expertise and tools to tackle the unique challenges of factory cleaning — delivering results that enhance safety, efficiency and productivity.",
    icon: "tabler:building-factory-2",
    image: "fb-industrial",
    gallery: ["fb-industrial", "gal-13", "gal-08"],
    features: [
      "Equipment & machinery cleaning",
      "Machine floor scrubbing & maintenance",
      "High-pressure washing",
      "Customised cleaning plans",
      "Safety-first, productivity-focused",
    ],
    idealFor: ["Factories", "Warehouses", "Industrial facilities"],
    accent: "cyan",
  },
  {
    slug: "high-rise-cleaning",
    title: "High-Rise Building Cleaning",
    tagline: "Reach new heights of cleanliness, safely",
    short: "Exterior window, façade and common-area cleaning for tall structures.",
    intro:
      "Reach new heights of cleanliness with our specialised high-rise building cleaning services. Our skilled team is equipped with the expertise and equipment to tackle the unique challenges of cleaning tall structures — from exterior window cleaning and façade maintenance to pressure washing and common-area upkeep — so your building shines while its integrity is maintained.",
    icon: "tabler:building-skyscraper",
    image: "facade",
    gallery: ["fb-skylift", "facade-worker", "gal-17"],
    features: [
      "Exterior window cleaning",
      "Façade maintenance & pressure washing",
      "Common-area upkeep",
      "Trained, safety-certified crews",
      "Specialised access equipment",
    ],
    idealFor: ["Condominiums & towers", "Commercial high-rises", "Hotels"],
    accent: "blue",
  },
  {
    slug: "carpet-cleaning",
    title: "Carpet Cleaning",
    tagline: "Bring tired carpets back to life",
    short: "Deep extraction, stain removal and odour treatment that leaves carpets like new.",
    intro:
      "Experience the revitalising power of our expert carpet cleaning. From machine deep-extraction cleaning to stain removal and odour treatment, our dedicated team has the expertise and professional extraction machines to deliver exceptional results — restoring the beauty and freshness of your carpets and leaving them looking and feeling like new.",
    icon: "tabler:wash-machine",
    image: "polisher",
    gallery: ["extractor", "gal-10", "gal-06"],
    features: [
      "Machine deep-extraction cleaning",
      "Stain & spot removal",
      "Odour treatment",
      "Professional extraction machines",
      "Safe for homes & offices",
    ],
    idealFor: ["Homes", "Offices", "Hotels & venues"],
    accent: "cyan",
  },
  {
    slug: "landscaping",
    title: "Landscaping",
    tagline: "Outdoor spaces that stay vibrant year-round",
    short: "Lawn care, trimming, pruning and weed control for inviting outdoor environments.",
    intro:
      "Transform your outdoor spaces into stunning landscapes with our expert maintenance services. Specialising in comprehensive lawn care, trimming, pruning and weed control, our meticulous attention to detail and eco-friendly practices guarantee vibrant and inviting outdoor environments year-round — for both residential and commercial properties.",
    icon: "tabler:plant-2",
    image: "gallery-outdoor",
    gallery: ["gal-20", "gal-14", "gal-03"],
    features: [
      "Comprehensive lawn care",
      "Trimming & pruning",
      "Weed control",
      "Eco-friendly practices",
      "Residential & commercial",
    ],
    idealFor: ["Homes & gardens", "Commercial grounds", "Developer landscapes"],
    accent: "yellow",
  },
];

export function getService(slug: string): Service | undefined {
  return serviceCatalog.find((s) => s.slug === slug);
}
