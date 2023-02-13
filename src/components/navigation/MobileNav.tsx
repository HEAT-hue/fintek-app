import "./MobileNav.css";
import NavLinks from "./NavLinks";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  const OpenIcon = (
    <AiOutlineMenu
      className="MobileNav__icon"
      size="30px"
      color="color"
      onClick={toggle}
    />
  );
  const CloseIcon = (
    <AiOutlineClose
      className="MobileNav__icon"
      size="30px"
      color="color"
      onClick={toggle}
    />
  );
  return (
    <div className="MobileNav">
      {isOpen ? CloseIcon : OpenIcon}
      {isOpen && <NavLinks />}
    </div>
  );
}

export default MobileNav;
