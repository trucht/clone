"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b-2 h-[var(--nav-height)] fixed top-0 left-0 right-0 z-50">
      <nav className="h-full px-4 lg:px-8 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white hover:text-emerald-500 transition-colors"
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[var(--nav-height)] bg-black/95 z-40">
            <div className="p-4 space-y-4">
              <Link
                href="/races"
                className="block py-2 text-white hover:text-emerald-500 transition-colors text-lg"
              >
                Races
              </Link>
              <Link
                href="/betting"
                className="block py-2 text-white hover:text-emerald-500 transition-colors text-lg"
              >
                Betting
              </Link>
              <Link
                href="/results"
                className="block py-2 text-white hover:text-emerald-500 transition-colors text-lg"
              >
                Results
              </Link>
            </div>
          </div>
        )}

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          <Link
            href="/races"
            className="text-white hover:text-emerald-500 transition-colors"
          >
            Races
          </Link>
          <Link
            href="/betting"
            className="text-white hover:text-emerald-500 transition-colors"
          >
            Betting
          </Link>
          <Link
            href="/results"
            className="text-white hover:text-emerald-500 transition-colors"
          >
            Results
          </Link>
        </div>

        {/* CTA Button - Always Visible */}
        <Link
          href="/betting"
          className="px-4 py-2 bg-emerald-500 text-black font-bold hover:bg-emerald-400 
                   transition-colors text-sm lg:text-base lg:px-6"
        >
          Place Bet
        </Link>
      </nav>
    </header>
  );
}
