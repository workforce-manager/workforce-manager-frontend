import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/sidebar/sidebar";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const menuItems = [
  { label: "Profile" },
  { label: "Settings" },
  { label: "Logout" },
];

export function Header() {
  const { state, toggleSidebar } = useSidebar();

  return (
    <header className="flex items-center justify-between px-4 py-2">
      <button onClick={toggleSidebar} className="hover:text-muted-foreground">
        {state === "collapsed" ? (
          <ArrowRightToLine size={32} /> 
        ) : ( 
          <ArrowLeftToLine size={32} />
        )}
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
