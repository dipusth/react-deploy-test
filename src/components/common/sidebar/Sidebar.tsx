import { NavLink } from "react-router-dom";

interface MenuItem {
  title: string;
  url: string;
  items?: MenuItem[];
}
const Sidebar = () => {
  const menuItems = [
    { title: "Dashboard", url: "/dashboard" },
    { title: "Products", url: "/dashboard/products" },
    { title: "Analytics", url: "/dashboard/analytics" },
    { title: "Caching", url: "/dashboard/caching" },
  ];
  return (
    <div className="sidebar">
      <div className="mt-5 flex flex-col">
        {menuItems.map((item: MenuItem) => (
          <NavLink
            to={item.url}
            end
            key={item.title}
            className={({ isActive }: { isActive: boolean }) =>
              isActive
                ? "text-primary font-bold item bg-slate-100"
                : "text-gray-600 item"
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
