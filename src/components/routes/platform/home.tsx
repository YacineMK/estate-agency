import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react";
import axios from "axios";



const Home = () => {
  const [name, setName] = useState('');
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get('https://soyed-back.onrender.com/auth/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        console.log(res.data);
        setName(res.data.data.name);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchpropertiesData = async () => {
      try {
        const reso = await axios.get('https://soyed-back.onrender.com/property', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        console.log(reso.data);
        setProperties(reso.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserData();
    fetchpropertiesData();

  }, []);

  return (
    <div className="ml-6 mt-6">
      <div className="flex justify-between mx-4 items-center ">
        <h1 className="text-xl font-semibold">HI {name}</h1>
        <Dialog>
          <DialogTrigger className="px-4 py-2 bg-[#FF7000] text-white rounded-md">Add Realestate</DialogTrigger>
          <DialogContent >
            <DialogHeader>
              <DialogTitle>Add RealState</DialogTitle>
              <DialogDescription className="px-5 py-4" >
                <form className=" w-full flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="mb-10 text-black" >Property Type</Label>
                      <Input type="text" placeholder="PropertyType" />
                    </div>
                    <div>
                      <Label className="mb-10 text-black" >Area</Label>
                      <Input type="number" placeholder="Area" />
                    </div>
                    <div>
                      <Label className="mb-10 text-black" >title</Label>
                      <Input type="text" placeholder="title" />
                    </div>
                    <div>
                      <Label className="mb-10 text-black" >description</Label>
                      <Input type="text" placeholder="description" />
                    </div>
                    <div>
                      <Label className="mb-10 text-black" >Price</Label>
                      <Input type="number" placeholder="PropertyType" />
                    </div>
                    <div>
                      <Label className="mb-10 text-black" >location</Label>
                      <Input type="text" placeholder="location" />
                    </div>
                    <div>
                      <Label className="mb-10 text-black" >Property Status</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent className=" outline-none ">
                          <SelectItem value="NotAssigned">NotAssigned</SelectItem>
                          <SelectItem value="Assigned">Assigned</SelectItem>
                          <SelectItem value="Confirmed">Confirmed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="mb-10 text-black" >Media</Label>
                      <Input type="file" placeholder="media" />
                    </div>
                    <div>
                      <Label className="mb-10 text-black" >Owner Name</Label>
                      <Input type="text" placeholder="ownerName" />
                    </div>
                    <div>
                      <Label className="mb-10 text-black" >Owner Email</Label>
                      <Input type="email" placeholder="ownerEmail" />
                    </div>
                    <div>
                      <Label className="mb-10 text-black" >Owner Phone</Label>
                      <Input type="text" placeholder="ownerPhone" />
                    </div>
                  </div>
                  <Button className="mt-4">submit</Button>
                </form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mx-6 mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {properties.map((property) => (
          <Card key={property.id} className="w-[350px]">
            <CardHeader>
              <img alt="property image" className="mb-10 rounded-md" src={property.imageUrl || "1.png"} />
              <CardTitle>{property.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{property.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <h1 className="text-lg font-semibold">{property.price} DZD</h1>
              <Button>Buy</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
};

export default Home;
