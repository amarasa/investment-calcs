export default function Home() {
	return (
		<div className='bg-black text-white min-h-screen flex flex-col'>
			{/* Main Content */}
			<main className='flex-1 p-8 flex flex-col items-center justify-center'>
				<h2 className='text-2xl font-semibold mb-4'>
					Welcome to Investly
				</h2>
				<p className='text-center max-w-lg'>
					Explore our powerful investment calculators and take control
					of your financial future. Start with the Daily Compound
					Calculator and see your money grow!
				</p>
				<a
					href='#calculator'
					className='mt-6 px-6 py-3 inline-block bg-teal text-black font-bold rounded transition hover:bg-teal-300'
				>
					Try the Calculator
				</a>
			</main>

			{/* Footer */}
			<footer className='bg-teal p-4 text-center'>
				<p className='text-sm'>© 2025 Investly. All rights reserved.</p>
			</footer>
		</div>
	);
}
