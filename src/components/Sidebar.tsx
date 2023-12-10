// components/Sidebar.tsx
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link href="/" className="block p-2 rounded hover:bg-gray-700">
              ホーム
            </Link>
          </li>
          <li>
            <Link href="/about" className="block p-2 rounded hover:bg-gray-700">
              アバウト
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block p-2 rounded hover:bg-gray-700">
              コンタクト
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;