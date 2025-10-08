import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";
import styles from "./Header.module.css";
import { useAuth } from "@/hooks/useAuth";
import { useSidebar } from "@/components/sidebar/sidebar";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const menuItems = [
  { label: "Profile", isLogout: false },
  { label: "Settings", isLogout: false },
  { label: "Logout", isLogout: true },
];

export function Header() {
  const { state, toggleSidebar } = useSidebar();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className={styles.header}>
      <button onClick={toggleSidebar} className={styles.toggleButton}>
        {state === "collapsed" ? (
          <ArrowRightToLine size={24} /> 
        ) : ( 
          <ArrowLeftToLine size={24} />
        )}
      </button>

      <div className={styles.userSection}>
        <span className={styles.userName}>
          {user?.name || "Username"}
        </span>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className={styles.avatarButton}>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>
                  {user?.name?.charAt(0)?.toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className={styles.dropdownContent}>
            {menuItems.map((item) => (
              <DropdownMenuItem 
                key={item.label}
                className={clsx(styles.dropdownItem, {
                  [styles.logout]: item.isLogout,
                })}
                onClick={item.isLogout ? handleLogout : undefined}
              >
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
