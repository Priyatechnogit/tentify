import { useRouter } from "next/router";
import {
  NavBar,
  NavLink,
  NavIcon,
  NavLabel,
  ActiveIndicator,
} from "./BottomNav.styled";

const NAV_ITEMS = [
  { label: "Home", path: "/", icon: "⌂" },
  { label: "Bookings", path: "/bookings", icon: "📋" },
  { label: "About", path: "/about", icon: "ℹ" },
];

export default function BottomNav() {
  const router = useRouter();

  return (
    <NavBar>
      {NAV_ITEMS.map((item) => {
        const isActive = router.pathname === item.path;

        return (
          <NavLink
            key={item.path}
            href={item.path}
            $active={isActive}
            aria-label={`Go to ${item.label}`}
          >
            <NavIcon>{item.icon}</NavIcon>
            <NavLabel $active={isActive}>{item.label}</NavLabel>
            <ActiveIndicator $active={isActive} />
          </NavLink>
        );
      })}
    </NavBar>
  );
}
