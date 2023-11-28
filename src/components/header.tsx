import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <h1 className="text-2xl font-semibold">Pedro Henrique</h1>

      <Button size="icon" variant="outline">
        <MenuIcon />
      </Button>
    </Card>
  );
};

export default Header;
