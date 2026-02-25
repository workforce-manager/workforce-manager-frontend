import { ArrowRightToLine } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";

export function SidebarToggle() {
  const { isMobile, toggleSidebar } = useSidebar();

  if (!isMobile) return null;

  return (
    <button
      onClick={toggleSidebar}
      className="absolute top-4 left-4 z-5 cursor-pointer"
    >
      <ArrowRightToLine size={24} />
    </button>
  );
}
