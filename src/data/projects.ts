export interface Project {
  slug: string;
  title: string;
  company: string;
  accentColor: string;
  accentBg: string;
}

export const projects: Project[] = [
  {
    slug: "boldin-withdrawal-order",
    title: "Withdrawal Order Feature",
    company: "Boldin",
    accentColor: "#04b477",
    accentBg: "#0d3f4a",
  },
  {
    slug: "boldin-design-system",
    title: "Design System",
    company: "Boldin",
    accentColor: "#04b477",
    accentBg: "#0d3f4a",
  },
  {
    slug: "boldin-brand-social",
    title: "Brand & Social",
    company: "Boldin",
    accentColor: "#e14805",
    accentBg: "#0d3f4a",
  },
  {
    slug: "blockfi",
    title: "BlockFi",
    company: "BlockFi",
    accentColor: "#0032eb",
    accentBg: "#001435",
  },
  {
    slug: "jetblue",
    title: "JetBlue",
    company: "JetBlue",
    accentColor: "#0d99ff",
    accentBg: "#0d3f4a",
  },
  {
    slug: "ubs",
    title: "UBS",
    company: "UBS",
    accentColor: "#c70039",
    accentBg: "#0f0e0e",
  },
  {
    slug: "kidventure-hub",
    title: "Kidventure Hub",
    company: "Kidventure Hub",
    accentColor: "#d4edc8",
    accentBg: "#0f0e0e",
  },
];
