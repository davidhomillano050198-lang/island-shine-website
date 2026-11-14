// Single source of truth for contact + links. Edit here, not in components.
export const site = {
  name: "Island Shine Cleaning Services & Renovation",
  shortName: "Island Shine",
  tagline: "Painting & renovation specialists, with machine-powered professional cleaning across Penang, Butterworth & Kulim.",
  // Floating chat + click-to-chat target. TODO: confirm with client which number to use.
  whatsapp: {
    number: "60164729797", // Mr. Muru
    label: "+60 16-472 9797",
    prefill: "Hi Island Shine, I would like to ask about your services.",
  },
  phones: [
    { name: "Mr. Muru", tel: "+60164729797", display: "+60 16-472 9797" },
    { name: "Maria Anthony", tel: "+60164092865", display: "+60 16-409 2865" },
  ],
  email: "islandshine97@gmail.com",
  address: {
    lines: ["3Y Lorong Delima 11", "Taman Island Glades", "11700 Gelugor", "Pulau Pinang, Malaysia"],
  },
  facebook: "https://www.facebook.com/share/1CxVVoSmUr/",
  // Opens the FB page (with its Message button / Messenger). For one-tap
  // Messenger, swap to "https://m.me/<page-username-or-id>" once known.
  messenger: "https://www.facebook.com/share/1CxVVoSmUr/",
  serviceArea: "Penang, Butterworth & Kulim",
};

export function waLink(number: string, text: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
