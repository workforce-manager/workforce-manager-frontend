import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";
import styles from "./Header.module.css";
import { useAuth } from "@/hooks/useAuth";
import { useSidebar } from "@/components/ui/sidebar";
import { useNavigate } from "@tanstack/react-router";
import { HEADER_MENU_ITEMS } from "./menu/header-menu.data";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { state, toggleSidebar } = useSidebar();

  const handleLogout = () => {
    logout();
    navigate({ to: "/", replace: true });
  };

  const handleLogin = () => {
    navigate({ to: "/auth/login" });
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
            {HEADER_MENU_ITEMS.filter((item) => {
              if (item.isLogin) {
                return !user;
              }
              return !!user;
            }).map((item) => (
              <DropdownMenuItem 
                key={item.label}
                className={clsx(styles.dropdownItem, {
                  [styles.logout]: item.isLogout,
                })}
                onClick={
                  item.isLogout
                    ? handleLogout
                    : item.isLogin
                      ? handleLogin
                      : undefined
                }
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
