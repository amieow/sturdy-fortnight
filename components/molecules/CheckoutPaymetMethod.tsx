import Typography from "../atoms/Typography";

const PAYMENT_METHOD = ["Bank Transfer", "E-Wallet", "Credit Card"];
const PaymentMethod = () => {
	return (
		<div className="flex flex-col gap-1">
			<Typography
				fontFamily={"poppins"}
				thick="semibold">
				Payment Method
			</Typography>
			<div className=" w-full overflow-scroll">
				<div className="flex gap-5 shrink-0">
					{PAYMENT_METHOD.map((item, index) => (
						<button
							className=" bg-transparent flex items-center p-4 border rounded-lg flex-shrink-0 border-neutral02"
							key={index}>
							<Typography fontFamily={"poppins"}>{item}</Typography>
						</button>
					))}
				</div>
			</div>
		</div>
	);
};
export { PaymentMethod };
