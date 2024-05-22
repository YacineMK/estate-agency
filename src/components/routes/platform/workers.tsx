import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MdOutlineDelete } from "react-icons/md";

export default function Workers() {
  const [workers, setWorkers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    role: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get("https://soyed-back.onrender.com/agent", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        console.log(res.data);
        setWorkers(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`https://soyed-back.onrender.com/agent/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      console.log("Worker deleted:", res.data);
      // Update workers state by filtering out the deleted worker
      setWorkers((prevWorkers) => prevWorkers.filter(worker => worker.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://soyed-back.onrender.com/agent",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      console.log("Worker added:", res.data);
      setWorkers((prevWorkers) => [...prevWorkers, res.data]);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="mt-6 mx-5 ">
      <h1 className="text-xl font-semibold">List of Workers</h1>
      <div className="flex gap-2">
        <Dialog>
          <DialogTrigger className="px-4 py-2 bg-[#FF7000] text-white rounded-md">
            Add Worker
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Worker</DialogTitle>
              <DialogDescription className="px-5 py-4">
                <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="mb-2 text-black">Name</Label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <Label className="mb-2 text-black">Phone</Label>
                      <Input
                        type="number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone"
                      />
                    </div>
                    <div>
                      <Label className="mb-2 text-black">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <Label className="mb-2 text-black">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                      />
                    </div>
                    <div>
                      <Label className="mb-2 text-black">Role</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Role" />
                        </SelectTrigger>
                        <SelectContent className=" outline-none ">
                          <SelectItem value="admin">admin</SelectItem>
                          <SelectItem value="Superadmin">Superadmin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button type="submit" className="mt-4">Submit</Button>
                </form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mt-6">
        {workers.length === 0 ? (
          <p>No workers found.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Worker ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {workers.map((worker) => (
                <TableRow key={worker.id}>
                  <TableCell>{worker.id}</TableCell>
                  <TableCell>{worker.name}</TableCell>
                  <TableCell>{worker.email}</TableCell>
                  <TableCell>
                    <Button className="bg-red-500" onClick={() => handleDelete(worker.id)}>
                      <MdOutlineDelete className="text-white text-lg" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
