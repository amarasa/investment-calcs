"use client";

import { useState } from "react";

export default function EmbedInstructions() {
	const [copiedScript, setCopiedScript] = useState(false);
	const [copiedDiv, setCopiedDiv] = useState(false);

	// Embed script content
	const embedScript = `
<!-- Add this script to your <head> or just before the </body> tag -->
<script src="http://localhost:3000/embed-calculator.js" async></script>
`;

	// Embed div content
	const embedDiv = `
<!-- Place this div wherever you want the calculator to appear -->
<div id="daily-compound-calculator"></div>
`;

	// Copy functions
	const handleCopyScript = () => {
		navigator.clipboard.writeText(embedScript).then(() => {
			setCopiedScript(true);
			setTimeout(() => setCopiedScript(false), 2000); // Reset after 2 seconds
		});
	};

	const handleCopyDiv = () => {
		navigator.clipboard.writeText(embedDiv).then(() => {
			setCopiedDiv(true);
			setTimeout(() => setCopiedDiv(false), 2000); // Reset after 2 seconds
		});
	};

	return (
		<div className='mt-8 p-6 bg-gray-800 text-white rounded-lg'>
			<h3 className='text-lg font-bold mb-4'>
				Want to use this calculator on your site?
			</h3>
			<p className='mb-4'>
				Embed the daily compound calculator on your own website for
				free! Follow the steps below:
			</p>

			{/* Script Section */}
			<div className='mb-6'>
				<h4 className='text-md font-semibold mb-2'>
					Step 1: Add the following script
				</h4>
				<div className='bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto mb-4'>
					<pre>{embedScript}</pre>
				</div>
				<button
					onClick={handleCopyScript}
					className='px-4 py-2 bg-teal-600 hover:bg-teal-500 rounded text-white'
				>
					{copiedScript ? "Copied!" : "Copy Script"}
				</button>
			</div>

			{/* Div Section */}
			<div>
				<h4 className='text-md font-semibold mb-2'>
					Step 2: Add this div where the calculator should appear
				</h4>
				<div className='bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto mb-4'>
					<pre>{embedDiv}</pre>
				</div>
				<button
					onClick={handleCopyDiv}
					className='px-4 py-2 bg-teal-600 hover:bg-teal-500 rounded text-white'
				>
					{copiedDiv ? "Copied!" : "Copy Div"}
				</button>
			</div>
		</div>
	);
}
