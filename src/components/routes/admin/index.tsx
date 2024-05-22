import React, { useState } from 'react';
import Contracts from "./_components/contracts";
import Transactions from "./_components/transactions";
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
import axios from 'axios';
import { Button } from '@/components/ui/button';

const Admin = () => {
  const [formData, setFormData] = useState({
    contractId: '',
    date: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('https://soyed-back.onrender.com/transaction', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      console.log('Transaction added successfully:', res.data);
    } catch (err) {
      console.error('Error adding transaction:', err);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex h-[70px] justify-between items-center">
        <h1 className='font-semibold text-xl mb-12'>Admin</h1>
        <Dialog>
          <DialogTrigger className="px-4 py-2 bg-[#FF7000] text-white rounded-md">Add Transactions</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription className="px-5 py-4">
                <div>
                  <Label className="mb-2 text-black">Contract ID</Label>
                  <Input
                    type="text"
                    name="contractId"
                    placeholder="Contract ID"
                    value={formData.contractId}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label className="mb-2 text-black">Date</Label>
                  <Input
                    type="date"
                    name="date"
                    placeholder="Date"
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </div>
              </DialogDescription>
            </DialogHeader>
            <Button className='w-full' onClick={handleSubmit}>Submit</Button>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_3fr] 2xl:grid-cols-[3fr_2fr] gap-4">
        <Transactions />
        <Contracts />
      </div>
    </div>
  );
};

export default Admin;
