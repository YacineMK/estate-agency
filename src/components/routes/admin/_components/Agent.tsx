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
import { Agents } from "@/data/db";

export default function AGents() {
    return (
        <Card className="rounded-lg w-full ">
            <CardHeader className="flex bg-white text-black flex-row gap-6 space-y-0">
                <div className="grid gap-2">
                    <CardTitle>Top Agents</CardTitle>
                    <CardDescription
                        className="  line-clamp-2"
                        title=""
                    >
                        last Contracts
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent className="grid bg-white text-black gap-8">
                <Table className="w-[1200px]">
                    <TableHeader className="bg-white w-[1200px] text-black">
                        <TableRow className="text-gray-800">
                            <TableHead>id</TableHead>
                            <TableHead>name</TableHead>
                            <TableHead>Transactions by Agent</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="bg-white w-[1200px] text-black">
                        {Agents.map(({ idAgent, Agentname, TransactionsbyAgent }) => (
                            <TableRow>
                                <TableCell>
                                    <div>{idAgent}</div>
                                </TableCell>
                                <TableCell>{Agentname}</TableCell>
                                <TableCell>{TransactionsbyAgent}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
