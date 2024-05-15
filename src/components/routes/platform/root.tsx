import { Outlet } from "react-router-dom";
import { ScrollArea } from "../../ui/scroll-area";

import { Sidebar, Navbar } from "@/components/navbar";

export default function Root() {
  const isAuth = true;
  const isAdmin = true;
  return (
    <ScrollArea className="w-screen h-screen">
      <div className="grid bg-black text-white h-screen w-full lg:grid-cols-[280px_1fr]">
        <Sidebar />
        <div className="flex flex-col bg-black text-white ">
          <Navbar />
          <ScrollArea className="w-full h-[calc(100vh-56px)] lg:h-[calc(100vh-60px)]">
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 min-h-[calc(100vh-56px)] lg:min-h-[calc(100vh-60px)]">
              <Outlet />
            </main>
          </ScrollArea>
        </div>
      </div>
    </ScrollArea>
  );
}
