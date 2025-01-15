"use client";

import { useState } from "react";

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className='bg-teal text-black p-4'>
			<div className='container mx-auto flex items-center justify-between'>
				{/* Logo */}
				<a href='/' className='text-xl font-bold'>
					Investly
				</a>

				{/* Desktop Navigation */}
				<nav className='hidden md:flex space-x-6'>
					<a href='/calculators' className='hover:underline'>
						Calculators
					</a>
					<a href='/about' className='hover:underline'>
						About
					</a>
					<a href='/learn' className='hover:underline'>
						Learn
					</a>
					<a href='/contact' className='hover:underline'>
						Contact
					</a>
				</nav>

				{/* Hamburger Menu Button (Mobile) */}
				<button
					className='md:hidden focus:outline-none'
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</button>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<nav className='md:hidden bg-teal-100 text-black p-4'>
					<a
						href='/calculators'
						className='block mb-2 hover:underline'
					>
						Calculators
					</a>
					<a href='/about' className='block mb-2 hover:underline'>
						About
					</a>
					<a href='/learn' className='block mb-2 hover:underline'>
						Learn
					</a>
					<a href='/contact' className='block hover:underline'>
						Contact
					</a>
				</nav>
			)}
		</header>
	);
}
