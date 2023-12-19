"use client";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div
      className="
     fixed
     w-full 
     z-10 
     shadow-md 
     bg-white"
    >
      <div
        className="
        py-4
        border-b-[1px]"
      >
        <Container>
          <div
            className="
            flex
            flex-row
            items-center
            justify-between
            gap-3
            md:gap-0"
          >
            <Logo />
            <div className="max-sm:w-full">
              <Search />
            </div>
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
