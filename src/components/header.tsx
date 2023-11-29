"use client";

import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
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

        <SheetContent side="right">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-2 flex flex-col gap-3">
            <Button className="w-full justify-start gap-2" variant="outline">
              Inicío
            </Button>

            <Button className="w-full justify-start gap-2" variant="outline">
              Sobre mim
            </Button>

            <Button className="w-full justify-start gap-2" variant="outline">
              Tecnologias
            </Button>

            <Button className="w-full justify-start gap-2" variant="outline">
              Projetos
            </Button>

            <Button className="w-full justify-start gap-2" variant="outline">
              Contato
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <Link href="/">
        <h1 className="text-2xl font-semibold">Pedro Henrique</h1>
      </Link>

      <ModeToggle />
    </Card>
  );
};

export default Header;
