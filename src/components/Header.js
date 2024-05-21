import { NavLink } from "react-router-dom";

const Heaader = () => {
  return (
    <div className="fixed top-0 left-0 bg-white w-full pt-5 pb-6 z-3000">
      <div className="relevant w-90p max-w-1800px mx-auto">
        <div className="flex">
          <div className="w-27p mr-2">
            <NavLink to="/">
              <h1 className="text-3xl leading-none font-bold">
                LINK<span className="font-light"> Arkitectur</span>
              </h1>
            </NavLink>
          </div>
          <div>
            <ul className="flex gap-4 lead-none text-lg">
              <li className="hover-effect">
                <NavLink to="/all-projects">Projects</NavLink>
              </li>
              <li className="hover-effect">
                <NavLink to="/architecture">Services</NavLink>
              </li>
              <li className="hover-effect">
                <NavLink to="/development">Sustainability</NavLink>
              </li>
              <li className="hover-effect">
                <NavLink to="/content">About</NavLink>
              </li>

              <li className="hover-effect">
                <NavLink to="/about">Career</NavLink>
              </li>
              <li className="hover-effect">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heaader;