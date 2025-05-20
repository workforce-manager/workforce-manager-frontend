import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex justify-center items-center">
      <h3 className="text-center font-mono text-[20px]">
        Welcome to the Employee Manager Dashboard!
      </h3>
    </div>
  );
}
