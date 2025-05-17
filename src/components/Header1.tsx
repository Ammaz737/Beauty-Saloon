"use client";
import { useState } from "react";
import Link from "next/link";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Price", link: "/price" },
  { name: "Policy", link: "/privacy" },
];

export default function Headers1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar className="-mt-5">
      {/* Desktop Navbar */}
      <NavBody className="hidden sm:flex items-center justify-between mt-9 w-full">
        <NavbarLogo />
        <NavItems items={navLinks} />
        <NavbarButton href="/appointment">Book Appointment</NavbarButton>
      </NavBody>

      {/* Mobile Navbar */}
      <MobileNav>
        <MobileNavHeader className="text-white">
          <NavbarLogo />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex flex-col w-full gap-4">
            {navLinks.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-black dark:text-white px-4 py-2 text-lg">
                  {item.name}
                </span>
              </Link>
            ))}
           <NavbarButton href="/appointment">
  Book Appointment
</NavbarButton>

          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
