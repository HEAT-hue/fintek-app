import "./Navlinks.css";

function NavLinks() {
  return (
    <ul className="Navlinks">
      <li>
        <a href="/">
          <p>Save</p>
        </a>
        <ul className="Hoveffect">
          <li>
            {/* <img src={require("../../pages/homePage/Images/piggy") alt="Name"} /> */}
            <a href="/">Piggybank</a>
          </li>
          <li>
            <a href="/">Safelock</a>
          </li>
          <li>
            <a href="/">Target Savings</a>
          </li>
          <li>
            <a href="/">Flex Naira</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="/">Invest</a>
      </li>
      <li>
        <a href="/">Stories</a>
      </li>
      <li>
        <a href="/">FAQs</a>
      </li>
      <li>
        <a href="/">Blog</a>
      </li>
      <li>
        <a href="/">E-book</a>
      </li>
      <li className="sevent">
        <a className="seven" href="/">
          Sign in
        </a>
      </li>
      <li className="nonpad">
        <a className="whitecolor" href="/">
          create free account
        </a>
      </li>
    </ul>
  );
}

export default NavLinks;
