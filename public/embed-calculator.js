(function () {
	const calculatorContainerId = "daily-compound-calculator";

	// Check if the target container exists
	const container = document.getElementById(calculatorContainerId);
	if (!container) {
		console.error(
			`Embed Error: Container with ID "${calculatorContainerId}" not found.`
		);
		return;
	}

	// Create an iframe to load the calculator
	const iframe = document.createElement("iframe");
	iframe.src = "http://localhost:3000/calculators/daily-compound"; // Adjust for production
	iframe.width = "100%";
	iframe.height = "600px"; // Adjust height as needed
	iframe.style.border = "none";
	iframe.style.overflow = "hidden";

	// Inject the iframe into the container
	container.appendChild(iframe);
})();
