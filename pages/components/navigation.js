/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: 'Home Page', href: '/storefront', current: false },
  { name: 'Product Page', href: '/product', current: false },
  { name: 'Category Page', href: '/category', current: false },
  { name: 'Shopping Cart Page', href: '/shopping-cart', current: false },
  { name: 'Checkout Page', href: '/checkout', current: false },
  { name: 'Order Detail Page', href: '/order', current: false },
  { name: 'Order History Page', href: '/history', current: false },
];

import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navigation() {
  return (
    <nav className="space-y-1" aria-label="Sidebar">
      {navigation.map((item) => (
        <Link key={item.name} href={item.href}>
          <a
            className={classNames(
              item.current
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
              'flex items-center px-3 py-2 text-sm font-medium rounded-md'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            <span className="truncate">{item.name}</span>
          </a>
        </Link>
      ))}
    </nav>
  );
}
