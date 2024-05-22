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
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [name, setName] = useState('');
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

    const fetchPropertiesData = async () => {
      try {
        const res = await axios.get('https://soyed-back.onrender.com/property', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        console.log(res.data);
        setProperties(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserData();
    fetchPropertiesData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ml-6 mt-6">
      <div className="flex justify-between mx-4 items-center">
        <h1 className="text-xl font-semibold">HI {name}</h1>
        <Input
          type="text"
          placeholder="Search"
          className="w-[400px]"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Dialog>
          <DialogTrigger className="px-4 py-2 bg-[#FF7000] text-white rounded-md">Add Realestate</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add RealState</DialogTitle>
              <DialogDescription className="px-5 py-4">
                <form className="w-full flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="mb-10 text-black">Property Type</Label>
                      <Input type="text" placeholder="PropertyType" />
                    </div>
                    <div>
                      <Label className="mb-10 text-black">Area</Label>
                      <Input type="number" placeholder="Area" />
                    </div>
                    <div>
                      <Label className="mb-10 text-black">Title</Label>
                      <Input type="text" placeholder="Title" />
                    </div>
                    <div>
                      <Label className="mb-10 text-black">Description</Label>
                      <Input type="text" placeholder="Description" />
                    </div>
                    <div>
                      <Label className="mb-10 text-black">Price</Label>
                      <Input type="number" placeholder="Price" />
                    </div>
                    <div>
                      <Label className="mb-10 text-black">Location</Label>
                      <Input type="text" placeholder="Location" />
                    </div>
                    <div>
                      <Label className="mb-10 text-black">Property Status</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent className="outline-none">
                          <SelectItem value="NotAssigned">NotAssigned</SelectItem>
                          <SelectItem value="Assigned">Assigned</SelectItem>
                          <SelectItem value="Confirmed">Confirmed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="mb-10 text-black">Media</Label>
                      <Input type="file" placeholder="Media" />
                    </div>
                    <div>
                      <Label className="mb-10 text-black">Owner Name</Label>
                      <Input type="text" placeholder="OwnerName" />
                    </div>
                    <div>
                      <Label className="mb-10 text-black">Owner Email</Label>
                      <Input type="email" placeholder="OwnerEmail" />
                    </div>
                    <div>
                      <Label className="mb-10 text-black">Owner Phone</Label>
                      <Input type="text" placeholder="OwnerPhone" />
                    </div>
                  </div>
                  <Button className="mt-4">Submit</Button>
                </form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mx-6 mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProperties.map((property) => (
          <Card key={property.id} className="w-[350px]">
            <CardHeader>
              <img alt="property" className="mb-10 rounded-md" src={property.imageUrl || "1.png"} />
              <CardTitle>{property.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{property.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <h1 className="text-lg font-semibold">{property.price} DZD</h1>
              <Button>
                <Select >
                  <SelectTrigger className="bg-[#FF7000] outline-none text-white border-none">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#FF7000] text-white outline-none">
                    <SelectItem value="NotAssigned">NotAssigned</SelectItem>
                    <SelectItem value="Assigned">Assigned</SelectItem>
                    <SelectItem value="Confirmed">Confirmed</SelectItem>
                  </SelectContent>
                </Select>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
