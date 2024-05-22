
import { Badge } from "@/components/ui/badge";
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

import { Transaction } from "@/data/db";

export default function Transactions() {
  return (
    <Card className="xl:max-w-xl bg-white text-black 2xl:max-w-full">
      <CardHeader className="flex flex-row gap-6 space-y-0">
        <div className="grid gap-2">
          <CardTitle>Transactions</CardTitle>
          <CardDescription
            className="line-clamp-2"
            title="Les cinq derniers transactions signés aujourd'hui"
          >
            Les cinq derniers transactions signés aujourd'hui
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transaction Id</TableHead>
              <TableHead>Propriete Id</TableHead>
              <TableHead>Vendeur Id</TableHead>
              <TableHead>Acheteur Id</TableHead>
              <TableHead>Transaction Type</TableHead>
              <TableHead className="text-right">Montant</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Transaction.map(
              ({
                idTransaction,
                idPropriete,
                idVendeur,
                idAcheteur,
                typeTransaction,
                montant,
              }) => (
                <TableRow>
                  <TableCell>
                    <div>{idTransaction}</div>
                  </TableCell>
                  <TableCell>{idPropriete}</TableCell>
                  <TableCell>{idVendeur}</TableCell>
                  <TableCell>{idAcheteur}</TableCell>
                  <TableCell>
                    <Badge
                      className="text-xs"
                      variant={
                        typeTransaction === "vente" ? "third" : "default"
                      }
                    >
                      {typeTransaction}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-right">{montant}DA</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
