import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


const data = [
  { name: '', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Day 1', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Day 2', uv: 300, pv: 1398, amt: 2210 },
  { name: 'Day 3', uv: 200, pv: 9800, amt: 2290 },
  { name: 'Day 4', uv: 278, pv: 3908, amt: 2000 },
  { name: 'Day 5', uv: 189, pv: 4800, amt: 2181 },
  { name: 'Day 6', uv: 239, pv: 3800, amt: 2500 },
  { name: 'Day 7', uv: 349, pv: 4300, amt: 2100 },
  { name: 'Day 8', uv: 239, pv: 2900, amt: 2100 },

];

const Dashboard = () => {
  return (
    <div className="flex flex-col mx-[2%]">
      <h1 className='font-semibold text-xl mb-8 '>Dashboard</h1>
      <div></div>
      <div className='  w-auto '>
        <LineChart className='pl-4 pr-6 py-4 border border-black ' width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="#000" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Dashboard;
