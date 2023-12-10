// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-700 text-white p-4 flex justify-between">
      <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">
        ホーム
      </Link>
      <Link href="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md">
        アバウト
      </Link>
      <Link href="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md">
        コンタクト
      </Link>
    </nav>
  );
};

export default Navbar;