
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
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";

const name = "lawlawi"

const Home = () => {
  return (
    <div className="ml-6 mt-6">
      <div className="flex justify-between mx-4 items-center ">
        <h1 className="text-xl font-semibold">HI {name}</h1>
        <Dialog>
          <DialogTrigger className="px-4 py-2 bg-[#FF7000] text-white rounded-md">Add Realestate</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mx-6 mt-10 grid grid-cols-4 gap-4">
        <Card className="w-[250]">
          <CardHeader>
            <img alt="property image" className="mb-4 rounded-md" src="/bg.jpg" />
            <CardTitle>F3 dergana</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content description lwalawi hhhh nigro ...</p>
          </CardContent>
          <CardFooter className="flex justify-between ">
            <h1 className="text-lg font-semibold">{124000}dzd</h1>
            <Button>Buy</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
};

export default Home;
