"use client";

import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-2 flex flex-col gap-3">
            <SheetClose asChild>
              <Link href="/">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  Início
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  Sobre mim
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/technologies">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  Tecnologias
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/projects">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  Projetos
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/contact">
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

      <Link href="/">
        <h1 className="text-3xl font-semibold md:text-4xl">Pedro Henrique</h1>
      </Link>

      <ModeToggle />
    </Card>
  );
};

export default Header;
