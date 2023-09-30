export const formatThousand = (input: number): string => {
	const options = {
		style: "decimal",
		maximumFractionDigits: 0,
		minimumFractionDigits: 0,
	};
	return input.toLocaleString("id-ID", options);
};

export const formatRupiah = (input: number): string => {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		maximumFractionDigits: 0,
		minimumFractionDigits: 0,
	}).format(input);
};

export const formatUpperFirstcharSplit = (input: string): string => {
	let str = "";
	const splitStr = input.split(" ");
	splitStr.forEach((item) => {
		str += item.charAt(0).toUpperCase() + item.slice(1) + " ";
	});
	return str.trim();
};

export const millisecondsToHoursMinutesSeconds = (
	milliseconds: number,
): {
	hours: string;
	minutes: string;
	seconds: string;
} => {
	// Calculate hours
	const hours = String(Math.floor(milliseconds / (1000 * 60 * 60))).padStart(
		2,
		"0",
	);

	// Calculate remaining milliseconds after subtracting hours
	const remainingMilliseconds =
		milliseconds - parseInt(hours, 10) * 1000 * 60 * 60;

	// Calculate minutes
	const minutes = String(
		Math.floor(remainingMilliseconds / (1000 * 60)),
	).padStart(2, "0");

	// Calculate remaining milliseconds after subtracting minutes
	const remainingMilliseconds2 =
		remainingMilliseconds - parseInt(minutes, 10) * 1000 * 60;

	// Calculate seconds
	const seconds = String(Math.floor(remainingMilliseconds2 / 1000)).padStart(
		2,
		"0",
	);

	return { hours, minutes, seconds };
};

export const StringToUrlFormat = (
	str: string,
	option: "decrypt" | "encrypt",
): string => {
	if (option == "encrypt") {
		return str.replaceAll(" ", "-").toLocaleLowerCase().trim();
	}
	return str.replaceAll("-", " ").toLocaleLowerCase().trim();
};
