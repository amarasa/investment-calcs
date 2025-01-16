"use client";

import { useState } from "react";
import CalculatorContent from "../../../components/CalculatorContent";
import DailyCompoundCalculator from "../../../components/DailyCompoundCalculator";
import CalculatorResults from "../../../components/CalculatorResults";

export default function DailyCompoundCalculatorPage() {
	const [results, setResults] = useState(null);

	const handleCalculate = (input) => {
		const {
			startingCapital,
			dailyInterest,
			reinvestRate,
			startDate,
			endDate,
			selectedDays,
		} = input;

		let currentCapital = startingCapital;
		const breakdown = [];

		// Adjust start and end dates by adding a day
		let adjustedStartDate = new Date(startDate);
		adjustedStartDate.setDate(adjustedStartDate.getDate() + 1);

		let adjustedEndDate = new Date(endDate);
		adjustedEndDate.setDate(adjustedEndDate.getDate() + 1);

		let currentDate = new Date(adjustedStartDate);

		// Add initial starting day WITH growth
		const dailyGain = currentCapital * dailyInterest; // Calculate daily gain for the first day
		const reinvested = dailyGain * reinvestRate; // Calculate reinvested amount for the first day
		currentCapital += reinvested; // Update capital for the first day

		breakdown.push({
			date: new Date(currentDate),
			capital: parseFloat(currentCapital.toFixed(2)), // Updated capital after reinvestment
			dailyGain: parseFloat(dailyGain.toFixed(2)), // Daily gain for the first day
			reinvested: parseFloat(reinvested.toFixed(2)), // Reinvested amount for the first day
		});

		// Move to the next day for calculations
		currentDate.setDate(currentDate.getDate() + 1);

		while (currentDate <= adjustedEndDate) {
			// Map day of week (0-6) to corresponding day names
			const dayNames = [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
			];
			const currentDayName = dayNames[currentDate.getDay()];

			// Skip days not selected by the user
			if (!selectedDays.includes(currentDayName)) {
				currentDate.setDate(currentDate.getDate() + 1);
				continue;
			}

			const dailyGain = currentCapital * dailyInterest;
			const reinvested = dailyGain * reinvestRate;
			currentCapital += reinvested;

			breakdown.push({
				date: new Date(currentDate),
				capital: parseFloat(currentCapital.toFixed(2)),
				dailyGain: parseFloat(dailyGain.toFixed(2)),
				reinvested: parseFloat(reinvested.toFixed(2)),
			});

			currentDate.setDate(currentDate.getDate() + 1);
		}

		setResults(breakdown);
	};

	return (
		<div className='min-h-screen bg-black text-white p-8'>
			<CalculatorContent />
			<DailyCompoundCalculator onCalculate={handleCalculate} />
			{results && <CalculatorResults results={results} />}
		</div>
	);
}
