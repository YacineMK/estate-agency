import { CircleUser } from "lucide-react";
import { Link, useLocation } from "react-router-dom";


import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import SidebarMobile from "./sidebar-mobile";
import { generateBreadcrumbPaths } from "@/utils/paths";
import React from "react";

const Navbar = () => {
  const { pathname } = useLocation();
  const breadcrumbItems = generateBreadcrumbPaths(pathname);
  return (
    <header className="flex h-[90px] items-center gap-4 border-b bg-white text-black px-4 lg:h-[60px] lg:px-6">
      <SidebarMobile />
      <div className="w-full bg-white text-black flex-1">
        <Breadcrumb className="hidden lg:flex">
          <BreadcrumbList>
            {breadcrumbItems.length > 0 ? (
              <>
                {breadcrumbItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      {item.isLast ? (
                        <BreadcrumbPage>{item.name}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link to={item.path}>{item.name}</Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {!item.isLast && <BreadcrumbSeparator />}
                  </React.Fragment>
                ))}
              </>
            ) : (
              <>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
};

export default Navbar;
