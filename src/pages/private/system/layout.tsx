import { NavLink, Outlet } from 'react-router';

const SystemLayout = () => {
  return (
    <div className="flex gap-x-2">
      <aside className="flex flex-col gap-6 px-3 border-r border-neutral-300 max-w-[200px] min-h-[500px]">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive
                ? ' text-blue-700 font-semibold border-b border-blue-700'
                : ''
            }
          >
            {label}
          </NavLink>
        ))}
      </aside>
      <Outlet />
    </div>
  );
};

export default SystemLayout;

const links = [
  {
    to: '/system/dashboard',
    label: 'Dashboard',
  },
  {
    to: '/system/users',
    label: 'Users',
  },
];
