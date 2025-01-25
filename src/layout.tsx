import {  NavLink, Outlet } from "react-router";
import { UnderlineText } from "./components/UnderlineText";

const routes = [
  {
    path: "/",
    name: "Gradient Border",
  },
  {
    path: "/underline",
    name: "Underline",
  },
  {
    path: "/collapsible",
    name: "Collapsible",
  },
  {
    path: "/scalingImg",
    name: "ScalingImg",
  },
 {
    path: "/typingText",
    name: "typingText",
  },
 {
    path: "/bgParalax",
    name: "bgParalax",
  },
];

export const Layout = () => {
  return (
    <div className="relative bg-gray-50 z-10 h-[100vh] w-full grid place-items-center">
      <nav className="absolute top-0 inset-x-0 m-1 z-50 min-h-16 bg-neutral-900 rounded-xl flex justify-center items-center gap-4">
        {routes.map((route) => (
          <NavLink to={route.path} className="text-white text-xl rounded-xl p-2" style={({isActive})=> (
            {
              background: isActive ? "cyan" : "transparent",
              color: isActive ? "black" : "white"
            }
          )}>
            <UnderlineText text={route.name} border={2} />
          </NavLink>
        ))}
      </nav>
      <Outlet />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </div>
  );
};
