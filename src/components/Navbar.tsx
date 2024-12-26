import { NavLink } from 'react-router';

const links = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/forms',
    label: 'Forms',
  },
  {
    to: '/about',
    label: 'About',
  },
  {
    to: '/system/dashboard',
    label: 'System',
  },
  {
    to: '/professional/dashboard',
    label: 'Professional',
  },
];

const Navbar = () => {
  return (
    <nav className="flex gap-6 items-center py-3 border-b border-neutral-300">
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            isActive
              ? ' text-blue-700 font-semibold border-y border-blue-700'
              : ''
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
