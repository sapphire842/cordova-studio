export interface Service {
  title: string;
  description: string;
  icon: "consultation" | "planning" | "palette" | "furniture";
}

export const services: Service[] = [
  {
    title: "Design Consultation",
    description:
      "One-on-one sessions help clarify your vision, assess your space, and develop a clear design direction. Sessions are offered hourly for focused guidance.",
    icon: "consultation",
  },
  {
    title: "Space Planning & Layout",
    description:
      "Optimized floor plans and spatial arrangements maximize flow, function, and the feeling of a room. The service can include professional CAD renderings.",
    icon: "planning",
  },
  {
    title: "Color Palette & Paint Selection",
    description:
      "Curated color schemes that set the mood, unify your spaces, and complement natural light throughout the day.",
    icon: "palette",
  },
  {
    title: "Furniture Selection",
    description:
      "Hand-picked furnishings balance comfort, proportion, and style. Pieces are sourced from trusted manufacturers and artisan studios.",
    icon: "furniture",
  },
];
