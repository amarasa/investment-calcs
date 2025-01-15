import { useState } from "react";

export default function DailyCompoundCalculator({ onCalculate }) {
	const [startingCapital, setStartingCapital] = useState("");
	const [dailyInterest, setDailyInterest] = useState("5");
	const [reinvestRate, setReinvestRate] = useState("100");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [dayType, setDayType] = useState("Weekdays");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!startingCapital || !startDate || !endDate) {
			alert("Please fill in all required fields.");
			return;
		}
		onCalculate({
			startingCapital: parseFloat(startingCapital),
			dailyInterest: parseFloat(dailyInterest) / 100,
			reinvestRate: parseFloat(reinvestRate) / 100,
			startDate: new Date(startDate),
			endDate: new Date(endDate),
			weekdaysOnly: dayType === "Weekdays",
		});
	};

	return (
		<form
			className='bg-white text-black p-6 rounded shadow-md w-full max-w-lg mx-auto'
			onSubmit={handleSubmit}
		>
			<div className='mb-4'>
				<label className='block mb-2 font-bold'>Starting Capital</label>
				<input
					type='number'
					value={startingCapital}
					onChange={(e) => setStartingCapital(e.target.value)}
					className='w-full p-2 border rounded'
				/>
			</div>

			<div className='mb-4'>
				<label className='block mb-2 font-bold'>
					Daily Interest (%)
				</label>
				<select
					value={dailyInterest}
					onChange={(e) => setDailyInterest(e.target.value)}
					className='w-full p-2 border rounded'
				>
					{Array.from({ length: 20 }, (_, i) => (i + 1) * 5).map(
						(value) => (
							<option key={value} value={value}>
								{value}%
							</option>
						)
					)}
				</select>
			</div>

			<div className='mb-4'>
				<label className='block mb-2 font-bold'>
					Reinvestment Rate (%)
				</label>
				<select
					value={reinvestRate}
					onChange={(e) => setReinvestRate(e.target.value)}
					className='w-full p-2 border rounded'
				>
					{Array.from({ length: 20 }, (_, i) => (i + 1) * 5).map(
						(value) => (
							<option key={value} value={value}>
								{value}%
							</option>
						)
					)}
				</select>
			</div>

			<div className='mb-4'>
				<label className='block mb-2 font-bold'>Start Date</label>
				<input
					type='date'
					value={startDate}
					onChange={(e) => setStartDate(e.target.value)}
					className='w-full p-2 border rounded'
				/>
			</div>

			<div className='mb-4'>
				<label className='block mb-2 font-bold'>End Date</label>
				<input
					type='date'
					value={endDate}
					onChange={(e) => setEndDate(e.target.value)}
					className='w-full p-2 border rounded'
				/>
			</div>

			<div className='mb-4'>
				<label className='block mb-2 font-bold'>Days to Include</label>
				<select
					value={dayType}
					onChange={(e) => setDayType(e.target.value)}
					className='w-full p-2 border rounded'
				>
					<option value='Weekdays'>Weekdays</option>
					<option value='Weekdays and Weekends'>
						Weekdays and Weekends
					</option>
				</select>
			</div>

			<button
				type='submit'
				className='w-full bg-teal text-black font-bold py-2 rounded hover:bg-teal-300 transition'
			>
				Calculate
			</button>
		</form>
	);
}
