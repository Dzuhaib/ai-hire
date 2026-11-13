export type IndustryVisualVariant =
  | "hospitality"
  | "professional"
  | "ecommerce"
  | "realestate"
  | "healthcare"
  | "fitness";

export const industryVisualVariant = (slug?: string): IndustryVisualVariant => {
  switch (slug) {
    case "restaurants":
    case "travel":
      return "hospitality";
    case "real-estate":
      return "realestate";
    case "ecommerce":
      return "ecommerce";
    case "healthcare":
      return "healthcare";
    case "fitness":
      return "fitness";
    default:
      return "professional";
  }
};
