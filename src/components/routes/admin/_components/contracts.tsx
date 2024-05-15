
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Contract } from "@/data/db";

export default function Contracts() {
  return (
    <Card className="rounded-lg ">
      <CardHeader className="flex bg-black text-white flex-row gap-6 space-y-0">
        <div className="grid gap-2">
          <CardTitle>Contrats</CardTitle>
          <CardDescription
            className="bg-black text-white line-clamp-2"
            title=""
          >
            last Contracts
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="grid bg-black text-white gap-8">
        <Table>
          <TableHeader className="bg-black text-white">
            <TableRow className="text-gray-800  ">
              <TableHead>Date</TableHead>
              <TableHead>Contrat</TableHead>
              <TableHead>Transaction</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-black text-white">
            {Contract.map(({ dateContrat, idContrat, idTransaction }) => (
              <TableRow>
                <TableCell>{dateContrat}</TableCell>
                <TableCell>
                  <div>{idContrat}</div>
                </TableCell>
                <TableCell>{idTransaction}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
