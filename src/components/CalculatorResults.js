import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export default function CalculatorResults({ results }) {
	const [view, setView] = useState("table");

	const totalProfit = results.slice(-1)[0].capital - results[0].capital;

	return (
		<div className='mt-8'>
			{/* Summary Section */}
			<div className='mb-8 p-4 bg-teal-100 text-black rounded shadow-md text-center'>
				<h2 className='text-xl font-bold'>Results Summary</h2>
				<p>
					Total Profit:{" "}
					<span className='font-semibold'>
						${totalProfit.toFixed(2)}
					</span>
				</p>
				<p>
					New Total Capital:{" "}
					<span className='font-semibold'>
						${results?.slice(-1)[0].capital.toFixed(2)}
					</span>
				</p>
			</div>

			{/* Tabs for Table/Chart */}
			<div className='mb-4 flex justify-center border-b border-gray-300'>
				<button
					onClick={() => setView("table")}
					className={`px-4 py-2 ${
						view === "table"
							? "border-b-2 border-teal-500 font-bold"
							: "text-gray-500"
					}`}
				>
					Table View
				</button>
				<button
					onClick={() => setView("chart")}
					className={`px-4 py-2 ${
						view === "chart"
							? "border-b-2 border-teal-500 font-bold"
							: "text-gray-500"
					}`}
				>
					Chart View
				</button>
			</div>

			{/* Table or Chart */}
			{view === "table" ? (
				<table className='w-full text-left border-collapse border'>
					<thead>
						<tr>
							<th className='border p-2'>Date</th>
							<th className='border p-2'>Daily Gain</th>
							<th className='border p-2'>Reinvested</th>
							<th className='border p-2'>
								Updated Total Capital
							</th>
						</tr>
					</thead>
					<tbody>
						{results.map((res, index) => (
							<tr key={index}>
								<td className='border p-2'>
									{res.date.toDateString()}
								</td>
								<td className='border p-2'>
									${parseFloat(res.dailyGain).toFixed(2)}
								</td>
								<td className='border p-2'>
									${parseFloat(res.reinvested).toFixed(2)}
								</td>
								<td className='border p-2'>
									${parseFloat(res.capital).toFixed(2)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<Line
					data={{
						labels: results.map((res) => res.date.toDateString()),
						datasets: [
							{
								label: "Total Capital",
								data: results.map((res) =>
									res.capital.toFixed(2)
								),
								borderColor: "teal",
								backgroundColor: "rgba(23, 195, 178, 0.5)",
								tension: 0.3,
							},
							{
								label: "Daily Profit/Loss",
								data: results.map((res) =>
									res.dailyGain.toFixed(2)
								),
								borderColor: "orange",
								backgroundColor: "rgba(255, 165, 0, 0.5)",
								tension: 0.3,
							},
						],
					}}
					options={{
						responsive: true,
						plugins: {
							legend: {
								position: "top",
							},
							title: {
								display: true,
								text: "Investment Growth Over Time",
							},
						},
						scales: {
							x: {
								type: "category",
								title: {
									display: true,
									text: "Date",
								},
							},
							y: {
								title: {
									display: true,
									text: "Amount ($)",
								},
							},
						},
					}}
				/>
			)}
		</div>
	);
}
