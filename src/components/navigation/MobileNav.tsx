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
      color="black"
      size="30px"
      onClick={toggle}
    />
  );

  const CloseIcon = (
    <AiOutlineClose
      className="MobileNav__icon"
      size="30px"
      color="black"
      onClick={toggle}
    />
  );
  const closeMobileMenu = () => setIsOpen(false);
  return (
    <div className="MobileNav">
      {isOpen ? CloseIcon : OpenIcon}
      {isOpen && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </div>
  );
}

export default MobileNav;
