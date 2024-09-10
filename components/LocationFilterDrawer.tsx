"use client";

import AngleDownIcon from "./ui/icons/angle/AngleDownIcon";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Root as VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Address } from "@/types/address";
import LocationFilterDrawerDescription from "./LocationFilterDrawerDescription";

interface Props {
  text: string;
  address1: Address[]; // 특별시, 광역시, 도
  address2?: Address[]; // 시, 군, 구
  address3?: Address[]; // 동, 면, 읍
}

export default function LocationFilterDrawer({
  text,
  address1,
  address2,
  address3,
}: Props) {
  return (
    <Drawer>
      <DrawerTrigger className="px-3 py-1 flex items-center gap-1 border border-input shadow-sm rounded-2xl hover:bg-accent hover:text-accent-foreground">
        {text || "전체"}
        <AngleDownIcon />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex">
          <VisuallyHidden>
            <DrawerTitle>주소 필터 선택창</DrawerTitle>
          </VisuallyHidden>
          <ScrollArea className="h-[200px] flex-1">
            <LocationFilterDrawerDescription address={address1} />
          </ScrollArea>
          {address2 && (
            <ScrollArea className="h-[200px] flex-1">
              <LocationFilterDrawerDescription address={address2} />
            </ScrollArea>
          )}
          {address3 && (
            <ScrollArea className="h-[200px] flex-1">
              <LocationFilterDrawerDescription address={address3} />
            </ScrollArea>
          )}
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
