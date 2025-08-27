import React, { useEffect, useState } from "react";

import { addNewUser, isUserAlreadyReistered } from "@/LocalStorage";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import type { IuserType } from "@/types/PostType";

// eslint-disable-next-line react-refresh/only-export-components
export const Roles = {
  Superadmin: "SuperAdmin",
  Admin: "Admin",
  User: "User",
};

// export const Roles = {
//   Superadmin: "SuperAdmin",
//   Admin: "Admin",
//   User: "User",
// } as const;

// export type Roles = (typeof Roles)[keyof typeof Roles];
export const Register = () => {
  const [data, setData] = useState<IuserType>({
    name: "",
    username: "",
    password: "",
  });
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const [message, setMessage] = useState<string>("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const value = event.target.value;
    setData({ ...data, [id]: value });
    setMessage("");
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (data.name == "" || data.username == "" || data.password == "") {
      setMessage("Please fill the form");
      return;
    }
    // If emnail Id already exist
    if (isUserAlreadyReistered(data.username)) {
      setMessage("User already exist.");
      return;
    }

    addNewUser(data);
    setMessage("User created succesfully. click on Login.");
    setData({
      name: "",
      username: "",
      password: "",
    });

    // Save the user in local storage
  };
  return (
    <div className="bg-wrapper bg-props bg-primary-400  h-full overflow-hidden ">
      <div className="flex item-center h-full">
        <div className="form-wrapper py-20 max-w-[400px] mx-auto z-10 relative">
          <Card className="border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Register</CardTitle>
              <CardDescription>
                Please enter the form details below
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFormSubmit}>
                <div className="grid gap-6">
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter Full Name"
                        value={data.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="username">username</Label>
                      <Input
                        id="username"
                        type="email"
                        placeholder="m@example.com"
                        value={data.username}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="grid gap-3">
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        value={data.password}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full btn">
                      Sign up
                    </Button>

                    <div className="text-center text-primary">
                      {message && <p>{message} </p>}
                    </div>
                  </div>
                  <div className="text-center text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary">
                      Log in
                    </Link>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
          <div className="mt-1  text-white text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
            By clicking continue, you agree to our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
};
