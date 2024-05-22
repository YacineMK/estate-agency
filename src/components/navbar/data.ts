import { IoHomeSharp } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { GrUserWorker } from "react-icons/gr";

export const SIDEBAR_ITEMS = [
  { label: "Home", to: "/", Icon: IoHomeSharp },
  { label: "workers", to: "/workers", Icon: GrUserWorker },
  { label: "Clients", to: "/client", Icon: FiUsers },
];
