import { Link } from "react-router";

export default function Header() {
  return (
    <header className="mb-1 border-b bg-slate-50 shadow-md">
      <div className="container flex items-stretch justify-between gap-4">
        <h1 className="flex items-center p-1">
          <img src="/vite.svg" alt="logo" />
          LOGO
        </h1>
        <div className="flex items-stretch *:transition-colors">
          {[
            {
              path: "/",
              text: "Home",
            },
            {
              path: "/about",
              text: "About",
            },
            {
              path: "/contact",
              text: "Contact",
            },
          ].map((menu) => (
            <Link
              key={menu.path}
              className="flex h-full items-center justify-center border-r px-4 first:border-l hover:bg-green-700 hover:text-white"
              to={menu.path}
            >
              {menu.text}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
