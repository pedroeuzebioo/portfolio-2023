"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navegation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navegation-menu";
import Link from "next/link";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";

const Header = () => {
  return (
    <Card className="relative top-0 z-50 w-full">
      <div className="m-auto flex max-w-screen-xl items-center justify-between p-[1.875rem]">
        <Link href="/">
          <h1 className="text-3xl font-semibold">Pedro Euzebio</h1>
        </Link>

        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <MenuIcon />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[21.875rem]">
              <SheetHeader className="text-left text-lg font-semibold">
                Menu
              </SheetHeader>

              <div className="mt-4 flex flex-col gap-2">
                <SheetClose asChild>
                  <Link href="#about">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                    >
                      Sobre mim
                    </Button>
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="#technologies">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                    >
                      Tecnologias
                    </Button>
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="#projects">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                    >
                      Projetos
                    </Button>
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="#contact">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                    >
                      Contato
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="#about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Sobre mim
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#technologies" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Tecnologias
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#projects" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Projetos
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="#contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contato
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </Card>
  );
};

export default Header;
