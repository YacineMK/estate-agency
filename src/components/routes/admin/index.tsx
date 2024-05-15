
import { Agent } from "http";
import Contracts from "./_components/contracts";
import Transactions from "./_components/transactions";
import AGents from "./_components/Agent";

const Admin = () => {
  return (
    <div className="space-y-4">

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_3fr] 2xl:grid-cols-[3fr_2fr] gap-4">
        <Transactions />
        <Contracts />
        <AGents />
      </div>
    </div>
  );
};

export default Admin;
