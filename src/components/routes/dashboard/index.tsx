import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Day 1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Day 2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Day 3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Day 4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Day 5',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Day 6',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Day 7',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col mx-[2%]">
      
      <h1 className='font-semibold text-xl mb-8 '>Dashboard</h1>
      <h1 className='pl-4 font-medium text-lg mb-8 '>wekly raports</h1>

      <div className="flex w-full justify-center mb-20 gap-8">
        <Card className="w-[350px] py-2 text-left">
          <CardHeader>
            <CardTitle className="mb-2">Agents</CardTitle>
            <CardDescription className="text-md font-medium">all Agents</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-bold text-4xl">+30</p>
          </CardContent>
        </Card>
        <Card className="w-[350px] py-2 text-left">
          <CardHeader>
            <CardTitle className="mb-2">Clients</CardTitle>
            <CardDescription className="text-md font-medium">all Clients</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-bold text-4xl">+600</p>
          </CardContent>
        </Card>
        <Card className="w-[350px] py-2 text-left">
          <CardHeader>
            <CardTitle className="mb-2">Property</CardTitle>
            <CardDescription className="text-md font-medium ">all property</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-bold text-4xl">+54</p>
          </CardContent>
        </Card>
        <Card className="w-[350px] py-2 text-left">
          <CardHeader>
            <CardTitle className="mb-2">Transaction</CardTitle>
            <CardDescription className="text-md font-medium">all Transaction</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-bold text-4xl">+200</p>
          </CardContent>
        </Card>
        
      </div>
      <div className=' w-[600px] h-[300px] '>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#FF7000" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
