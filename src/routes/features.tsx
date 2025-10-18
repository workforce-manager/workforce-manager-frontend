import { createFileRoute } from "@tanstack/react-router";
import { FeaturesPage } from "@/components/landing/features/FeaturesPage";

export const Route = createFileRoute("/features")({
  component: Features,
});

function Features() {
  return <FeaturesPage />;
}
