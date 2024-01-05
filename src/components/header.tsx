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

const Header = () => {
  return (
    <header>
      <Card className="flex max-w-7xl items-center justify-between p-[1.875rem]">
        <Link href="/">
          <h1 className="text-3xl font-semibold">Pedro Euzebio</h1>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent side="right">
            <SheetHeader className="text-left text-lg font-semibold">
              Menu
            </SheetHeader>

            <div className="mt-2 flex flex-col gap-3">
              <SheetClose asChild>
                <Link href="/">
                  <Button variant="outline" className="w-full justify-start">
                    Início
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/about">
                  <Button variant="outline" className="w-full justify-start">
                    Sobre mim
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/technologies">
                  <Button variant="outline" className="w-full justify-start">
                    Tecnologias
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/projects">
                  <Button variant="outline" className="w-full justify-start">
                    Projetos
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/contact">
                  <Button variant="outline" className="w-full justify-start">
                    Contato
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </Card>
    </header>
  );
};

export default Header;
