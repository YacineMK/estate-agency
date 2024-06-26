import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import axios from "axios";

const data = [
  {
    name: 'Day 1',
    uv: 0,
    pv: 24,
    amt: 2400,
  },
  {
    name: 'Day 2',
    uv: 40,
    pv: 98,
    amt: 2210,
  },
  {
    name: 'Day 3',
    uv: 42,
    pv: 800,
    amt: 2290,
  },
  {
    name: 'Day 4',
    uv: 280,
    pv: 39,
    amt: 2000,
  },
  {
    name: 'Day 5',
    uv: 890,
    pv: 48,
    amt: 2181,
  },
  {
    name: 'Day 6',
    uv: 0,
    pv: 38,
    amt: 2500,
  },
  {
    name: 'Day 7',
    uv: 0,
    pv: 4300,
    amt: 2100,
  },
];

const dato = [
  {
    subject: 'janvier',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'fevrier',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'march',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'may',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'juin',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'aout',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const Dashboard = () => {
  const [transactions, setTransactions] = useState(0);
  const [clients, setClients] = useState(0);
  const [agents, setAgents] = useState(0);
  const [properties, setProperties] = useState(0);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get('https://soyed-back.onrender.com/transaction');
        setTransactions(res.data.length);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchAgents = async () => {
      try {
        const res = await axios.get('https://soyed-back.onrender.com/agent');
        setAgents(res.data.length);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchClients = async () => {
      try {
        const res = await axios.get('https://soyed-back.onrender.com/client');
        setClients(res.data.length);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchProperties = async () => {
      try {
        const res = await axios.get('https://soyed-back.onrender.com/property');
        setProperties(res.data.length);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTransactions();
    fetchAgents();
    fetchClients();
    fetchProperties();
  }, []);

  return (
    <div className="flex flex-col mx-[2%]">
      <h1 className='font-semibold text-xl mb-8'>Dashboard</h1>
      <h1 className='pl-4 font-medium text-lg mb-8'>Weekly Rapport</h1>

      <div className="flex w-full justify-center mb-10 gap-8">
        <Card className="w-[350px] py-2 text-left">
          <CardHeader>
            <CardTitle className="mb-2">Agents</CardTitle>
            <CardDescription className="text-md font-medium">All Agents</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-bold text-4xl">{agents}</p>
          </CardContent>
        </Card>
        <Card className="w-[350px] py-2 text-left">
          <CardHeader>
            <CardTitle className="mb-2">Clients</CardTitle>
            <CardDescription className="text-md font-medium">All Clients</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-bold text-4xl">{clients}</p>
          </CardContent>
        </Card>
        <Card className="w-[350px] py-2 text-left">
          <CardHeader>
            <CardTitle className="mb-2">Property</CardTitle>
            <CardDescription className="text-md font-medium">All Property</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-bold text-4xl">{properties}</p>
          </CardContent>
        </Card>
        <Card className="w-[350px] py-2 text-left">
          <CardHeader>
            <CardTitle className="mb-2">Transaction</CardTitle>
            <CardDescription className="text-md font-medium">All Transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-bold text-4xl">{transactions}</p>
          </CardContent>
        </Card>
      </div>

      <h1 className='pl-4 font-medium text-lg mb-10'>Rapport</h1>
      <div className="flex justify-around">
        <div className='w-[700px] h-[400px] rounded-md border border-black'>
          <ResponsiveContainer className="pt-6 pb-4 px-4" width="100%" height="100%">
            <LineChart
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
        <div className='w-[700px] h-[400px] rounded-md border border-black'>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dato}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="Mike" dataKey="A" stroke="#FF7000" fill="#FF7000" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
