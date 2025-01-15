export default function CalculatorsPage() {
	return (
		<div className='min-h-screen bg-black text-white p-8'>
			<h1 className='text-3xl font-bold mb-6'>Available Calculators</h1>
			<ul className='space-y-4'>
				<li>
					<a
						href='/calculators/daily-compound'
						className='block p-4 bg-teal text-black rounded hover:bg-teal-300 transition'
					>
						Daily Compound Calculator
					</a>
				</li>
			</ul>
		</div>
	);
}
