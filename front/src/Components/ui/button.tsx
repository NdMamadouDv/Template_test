import clsx from "clsx";

interface Props {
	size?: "small" | "medium" | "large";
	variant?: "primary" | "secondary" | "ico";
	icon?: { icon: React.ElementType };
	iconTheme?: "primary" | "secondary" | "gray";
	iconPosition?: "left" | "right";
	disabled?: boolean;
	isLoading?: boolean;
	onClick?: () => void;
	children?: React.ReactNode;
}

export const Button = ({
	size = "medium",
	variant = "primary",
	icon,
	iconTheme = "primary",
	iconPosition = "right",
	disabled = false,
	isLoading,
	onClick = () => {},
	children,
}: Props) => {
	let variantStyles: string = "",
		sizeStyles: string = "",
		icoSize: number = 0;

	switch (variant) {
		case "primary":
			variantStyles =
				"bg-primary hover:bg-primary-400 text-white rounded-[100rem]";
			break;
		case "secondary":
			variantStyles =
				"bg-primary-200 hover:bg-primary-300/50 text-primary rounded-[100rem]";
			break;
		case "ico":
			if (iconTheme === "primary") {
				variantStyles =
					"bg-primary-600 hover:bg-primary-400 text-white rounded-full";
				break;
			}
			if (iconTheme === "secondary") {
				variantStyles =
					"bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
				break;
			}
			if (iconTheme === "gray") {
				variantStyles = "bg-gray-400 hover:bg-gray-600 text-black rounded-full";
				break;
			}
	}

	switch (size) {
		case "small":
			sizeStyles = `text-caption3 font-medium ${
				variant === "ico"
					? "flex items-center justify-center w-[40px] h-[40px]"
					: "px-[14px] py-[12px]"
			}`;
			icoSize = 17;
			break;
		case "medium":
			sizeStyles = `text-caption2 font-medium ${
				variant === "ico"
					? "flex items-center justify-center w-[50px] h-[50px]"
					: "px-[18px] py-[15px]"
			}`;
			icoSize = 20;
			break;
		case "large":
			sizeStyles = `text-caption1 font-medium ${
				variant === "ico"
					? "flex items-center justify-center w-[60px] h-[60px]"
					: "px-[22px] py-[18px]"
			}`;
			icoSize = 24;
			break;
	}

	return (
		<button
			className={clsx(variantStyles, sizeStyles, icoSize, "")}
			onClick={onClick}
			disabled={disabled}>
			{icon && variant === "ico" ? (
				<icon.icon />
			) : (
				<div className={clsx(icon && "flex items-center gap-2")}>
					{icon && iconPosition === "left" && <icon.icon size={icoSize} />}
					{children}
					{icon && iconPosition === "right" && <icon.icon size={icoSize} />}
				</div>
			)}
		</button>
	);
};
