import React from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./NavBarStyles";
import Image from "next/image";
import Logo from "@/assets/logo.png";

import { useState } from "react";

const NavBar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <>
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              <NavbarLink href="/">Home</NavbarLink>
              <NavbarLink href="/products">Products</NavbarLink>
              <NavbarLink href="/contact">Contact</NavbarLink>
              <NavbarLink href="/about">About Us</NavbarLink>
              <OpenLinksButton
                onClick={() => {
                  console.log(extendNavbar);
                  setExtendNavbar((curr) => !curr);
                }}
              >
                {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
              </OpenLinksButton>
            </NavbarLinkContainer>
          </LeftContainer>
          <RightContainer>
            <Image src={Logo} alt="efse" width="180" height="auto" />
          </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
          <NavbarExtendedContainer>
            <NavbarLinkExtended href="/"> Home</NavbarLinkExtended>
            <NavbarLinkExtended href="/products"> Products</NavbarLinkExtended>
            <NavbarLinkExtended href="/contact"> Contact Us</NavbarLinkExtended>
            <NavbarLinkExtended href="/about"> About Us</NavbarLinkExtended>
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
    </>
  );
};

export default NavBar;
