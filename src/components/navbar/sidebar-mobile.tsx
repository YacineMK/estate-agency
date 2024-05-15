import { CircleGauge, LogOut, Menu, Package2 } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { SIDEBAR_ITEMS } from "./data";

const SidebarMobile = () => {

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
          <Menu className="h-5 w-5 text-black" />
          <span className="sr-only">menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col w-full xs:max-w-sm p-4 lg:hidden"
        overlayClassName="lg:hidden"
      >
        <nav className="grid gap-8 bg-black text-white text-lg font-medium">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold px-4"
          >
            <span>omar immobilier</span>
          </Link>
          <div className="flex flex-col gap-1">
            {SIDEBAR_ITEMS.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}

              >
                {label}
              </NavLink>
            ))}

            <NavLink
              to={"/dashboard"}
              z
            >
              dashboard
            </NavLink>


            <NavLink
              to={"/admin"}
            >
              Admin
            </NavLink>

          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default SidebarMobile;
