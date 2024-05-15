import { CircleGauge, LogOut, Package2 } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Link, NavLink, useLocation } from "react-router-dom";
import { SIDEBAR_ITEMS } from "./data";
import { cn } from "@/lib/utils";
import { isActiveSideBar } from "@/utils/paths";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="hidden bg-black text-white border-r bg-muted/40 lg:block">
      <div className="flex h-full bg-black text-white max-h-screen flex-col gap-2 px-2 lg:px-4 lg:gap-4">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px]">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span>omar immobilier</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid gap-1 items-start font-medium w-full">
            {SIDEBAR_ITEMS.map(({ Icon, label, to }) => (
              <NavLink
                key={label}
                to={to}
                end
                className={cn(
                  buttonVariants({
                    variant: isActiveSideBar(pathname, to)
                      ? "default"
                      : "ghost",
                  }),
                  "justify-start gap-2 items-center",
                  !isActiveSideBar(pathname, to) && "hover:bg-[#FF7000]"
                )}
              >
                <Icon className="h-5 w-5" />
                {label}
              </NavLink>
            ))}
            <NavLink
              to={"/dashboard"}
              end
              className={cn(
                buttonVariants({
                  variant: isActiveSideBar(pathname, "/dashboard")
                    ? "default"
                    : "ghost",
                }),
                "justify-start gap-2 items-center",
                !isActiveSideBar(pathname, "/dashboard") &&
                "hover:bg-[#FF7000]"
              )}
            >
              <CircleGauge className="h-5 w-5" />
              Tableau de bord
            </NavLink>
            <NavLink
              to={"/admin"}
              end
              className={cn(
                buttonVariants({
                  variant: isActiveSideBar(pathname, "/admin")
                    ? "default"
                    : "ghost",
                }),
                "justify-start gap-2 items-center",
                !isActiveSideBar(pathname, "/admin") && "hover:bg-[#FF7000]"
              )}
            >
              <CircleGauge className="h-5 w-5" />
              Administrateur
            </NavLink>
          </nav>
        </div>
        <div className="mt-auto pb-4 w-full">
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
