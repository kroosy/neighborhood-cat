import React from "react";
import { DrawerDescription } from "./ui/drawer";
import { Button } from "./ui/button";
import { Address } from "@/types/address";

interface Props {
  address: Address[];
}
export default function LocationFilterDrawerDescription({ address }: Props) {
  return (
    <DrawerDescription className="text-center">
      {address.map((v, i) => (
        <li key={i} className="list-none">
          <Button className="w-full" variant="ghost" size="lg">
            {v.addr_name}
          </Button>
        </li>
      ))}
    </DrawerDescription>
  );
}
