import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingCart, User, Menu } from "lucide-react";

interface HeaderProps {
  cartItemCount?: number;
  onSearch?: (query: string) => void;
  userName?: string;
  isLoggedIn?: boolean;
}

const Header = ({
  cartItemCount = 3,
  onSearch = () => {},
  userName = "John Doe",
  isLoggedIn = true,
}: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full h-[72px] bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-green-600">ShopEase</h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 border-green-200 focus:border-green-500"
                onChange={(e) => onSearch(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Button variant="ghost" className="relative">
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-green-500">
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  <span className="hidden md:inline">
                    {isLoggedIn ? userName : "Account"}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {isLoggedIn ? (
                  <>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Orders</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem>Login</DropdownMenuItem>
                    <DropdownMenuItem>Register</DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button variant="ghost" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Search (visible on mobile only) */}
      <div className="md:hidden px-4 py-2 bg-white">
        <Input
          type="search"
          placeholder="Search for products..."
          className="w-full"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Header;
