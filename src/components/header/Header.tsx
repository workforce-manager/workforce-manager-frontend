import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/sidebar/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const menuItems = [
  { label: "Profile" },
  { label: "Settings" },
  { label: "Logout" },
];

export function Header() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="bg-transparent px-4 py-2 flex items-center justify-between">
      <button 
        onClick={toggleSidebar} 
        className="hover:text-muted-foreground"
      >
        <Menu size={32} />
      </button>

      <h1 className="font-mono text-[20px]">Employees</h1>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="link" size="icon">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {menuItems.map((item) => (
            <DropdownMenuItem key={item.label}>
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
