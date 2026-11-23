export type CampaignCard = {
  id: string;
  title: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
  badge: string;
};

/** Campañas home — moda / prendas (mock alineado a futuro módulo campaigns). */
export const mockCampaigns: CampaignCard[] = [
  {
    id: "camp-1",
    title: "Hombre",
    href: "/categoria/hombre",
    imageUrl:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=900&q=80",
    imageAlt: "Look hombre con camisa y pantalón",
    badge: "OFERTA | -40% DSCTO.",
  },
  {
    id: "camp-2",
    title: "Calzado",
    href: "/categoria/calzado",
    imageUrl:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=900&q=80",
    imageAlt: "Calzado y zapatillas en exhibición",
    badge: "OFERTA | -40% DSCTO.",
  },
  {
    id: "camp-3",
    title: "Mujer",
    href: "/categoria/mujer",
    imageUrl:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80",
    imageAlt: "Look mujer con vestido",
    badge: "OFERTA | -40% DSCTO.",
  },
];
