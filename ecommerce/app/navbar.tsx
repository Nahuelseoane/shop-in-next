// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link href="/products">MyShop</Link>
      </div>

      {/* Nav Links */}
      <div className="space-x-6">
        <Link href="/products" className="hover:text-gray-400">Home</Link>
        <Link href="/cart" className="hover:text-gray-400">Cart</Link>
        <Link href="/checkout" className="hover:text-gray-400">Check Out</Link>
        <Link href="/contact" className="hover:text-gray-400">Contact</Link>
      </div>
    </nav>
  );
}
