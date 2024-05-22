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
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";

export default function Clients() {
    const [clients, setClients] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        role: "",
    });
    const [editClientId, setEditClientId] = useState(null);

    useEffect(() => {
        const fetchClientData = async () => {
            try {
                const res = await axios.get("https://soyed-back.onrender.com/client", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                    },
                });
                console.log(res.data);
                setClients(res.data.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchClientData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleRoleChange = (value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            role: value,
        }));
    };

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`https://soyed-back.onrender.com/client/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            });
            console.log("Client deleted:", res.data);
            setClients((prevClients) => prevClients.filter((client) => client.id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editClientId) {
            await handleUpdate(editClientId);
        } else {
            await handleAdd();
        }
    };

    const handleAdd = async () => {
        try {
            const res = await axios.post(
                "https://soyed-back.onrender.com/client",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                    },
                }
            );
            console.log("Client added:", res.data);
            setClients((prevClients) => [...prevClients, res.data]);
            resetForm();
        } catch (err) {
            console.error(err);
        }
    };

    const handleUpdate = async (id) => {
        try {
            const res = await axios.put(`https://soyed-back.onrender.com/client/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            });
            console.log("Client updated", res.data);
            setClients((prevClients) =>
                prevClients.map((client) => (client.id === id ? res.data : client))
            );
            resetForm();
        } catch (err) {
            console.error(err);
        }
    };

    const resetForm = () => {
        setFormData({
            name: "",
            phone: "",
            email: "",
            password: "",
            role: "",
        });
        setEditClientId(null);
    };

    const openEditDialog = (client) => {
        setFormData(client);
        setEditClientId(client.id);
    };

    return (
        <div className="mt-6 mx-5">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">List of Clients</h1>
                <div className="flex gap-2">
                    <Dialog>
                        <DialogTrigger className="px-4 py-2 bg-[#FF7000] text-white rounded-md">
                            Add Client
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>{editClientId ? "Edit Client" : "Add Client"}</DialogTitle>
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
                                                <Select
                                                    onValueChange={handleRoleChange}
                                                    value={formData.role}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Role" />
                                                    </SelectTrigger>
                                                    <SelectContent className="outline-none">
                                                        <SelectItem value="admin">admin</SelectItem>
                                                        <SelectItem value="Superadmin">Superadmin</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                        <Button type="submit" className="mt-4">
                                            Submit
                                        </Button>
                                    </form>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <div className="mt-6">
                {clients.length === 0 ? (
                    <p>No Clients found.</p>
                ) : (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Client ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {clients.map((client) => (
                                <TableRow key={client.id}>
                                    <TableCell>{client.id}</TableCell>
                                    <TableCell>{client.name}</TableCell>
                                    <TableCell>{client.email}</TableCell>
                                    <TableCell>
                                        <div className="gap-2 flex">
                                            <Button className="bg-red-500" onClick={() => handleDelete(client.id)}>
                                                <MdOutlineDelete className="text-white text-lg" />
                                            </Button>
                                            <Dialog>
                                                <DialogTrigger className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => openEditDialog(client)}>
                                                    <MdOutlineEdit className="text-white text-lg" />
                                                </DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>Edit client</DialogTitle>
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
                                                                        <Select
                                                                            onValueChange={handleRoleChange}
                                                                            value={formData.role}
                                                                        >
                                                                            <SelectTrigger>
                                                                                <SelectValue placeholder="Role" />
                                                                            </SelectTrigger>
                                                                            <SelectContent className="outline-none">
                                                                                <SelectItem value="admin">admin</SelectItem>
                                                                                <SelectItem value="Superadmin">Superadmin</SelectItem>
                                                                            </SelectContent>
                                                                        </Select>
                                                                    </div>
                                                                </div>
                                                                <Button type="submit" className="mt-4">
                                                                    Submit
                                                                </Button>
                                                            </form>
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                </DialogContent>
                                            </Dialog>
                                        </div>
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

