interface IMenuItem {
  label: string;
  isLogout: boolean;
  isLogin: boolean;
}

export const HEADER_MENU_ITEMS: IMenuItem[] = [
  {
    label: "Profile",
    isLogout: false,
    isLogin: false,
  },
  {
    label: "Settings",
    isLogout: false,
    isLogin: false,
  },
  {
    label: "Logout",
    isLogout: true,
    isLogin: false,
  },
  {
    label: "Login",
    isLogout: false,
    isLogin: true,
  },
];
