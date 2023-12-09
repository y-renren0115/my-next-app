import React from 'react';
import Link from 'next/link';

// Sidebarで使用する型定義用のインターフェース
export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside style={{ width: isOpen ? '250px' : '0', transition: '0.3s', ...sidebarStyle }}>
      <button onClick={onClose}>Close</button>
      <ul style={sidebarListStyle}>
        <li style={sidebarItemStyle}><Link href="/">Home</Link></li>
        <li style={sidebarItemStyle}><Link href="/about">About</Link></li>
        <li style={sidebarItemStyle}><Link href="/contact">Contact</Link></li>
        {/* 他のナビゲーションリンクをここに追加 */}
      </ul>
    </aside>
  );
};

const sidebarStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '20px',
};

const sidebarListStyle = {
  listStyleType: 'none',
  padding: 0,
};

const sidebarItemStyle = {
  padding: '10px',
  borderBottom: '1px solid grey',
};

export default Sidebar;