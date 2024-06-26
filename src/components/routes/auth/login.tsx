import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { DEFAULT_LOGIN_VALUES, LoginValues, loginSchema } from "./data";
import axios from 'axios';
import { cn } from "@/lib/utils";;

export default function Login() {

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: DEFAULT_LOGIN_VALUES,
  });

  function onSubmit(data: LoginValues) {
    axios.post('https://soyed-back.onrender.com/auth/login', {
      email: data.email,
      password: data.password
    })
      .then(response => {
        console.log('Login successful:', response.data);
        localStorage.setItem("authToken", response.data.data);
        window.location.href = "/";
      })
      .catch(error => {
        console.error('Error logging in:', error);
      });
  }
  return (
    <div className="w-[100vw] lg:grid flex  bg-white text-black justify-center items-center min-h-screen">
      <div className="flex flex-col p-4 min-h-screen">
        <div className="flex-1 flex justify-center items-center py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mx-auto grid w-full max-w-[350px] gap-6">
                <div className="grid gap-2 text-center">
                  <h1 className="text-3xl text-black font-bold">welcome to omar immobilier</h1>
                </div>
                <div className="grid gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="name@company.com"
                            autoComplete="off"
                            className={cn(
                              form.getFieldState("email").error &&
                              "border-destructive placeholder:text-destructive/60 text-destructive"
                            )}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="•••••"
                            type="password"
                            className={cn(
                              form.getFieldState("password").error &&
                              "border-destructive placeholder:text-destructive/60 text-destructive"
                            )}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    submit
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  did u have account ?{" "}
                  <Link to="/signup" className="underline font-semibold">
                    join us
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
