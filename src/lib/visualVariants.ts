export type IndustryVisualVariant =
  | "hospitality"
  | "professional"
  | "ecommerce"
  | "realestate"
  | "healthcare"
  | "fitness"
  | "travel";

export const industryVisualVariant = (slug?: string): IndustryVisualVariant => {
  switch (slug) {
    case "restaurants":
      return "hospitality";
    case "travel":
      return "travel";
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
