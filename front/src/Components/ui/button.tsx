import clsx from "clsx";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "ico";
  icon?: { icon: React.ElementType };
  iconTheme?: "primary" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  rounded?: "full" | boolean;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  className?: string;
}

export const Button = ({
  size = "medium",
  variant = "primary",
  icon,
  iconTheme = "primary",
  iconPosition = "right",
  rounded = true,
  disabled = false,
  isLoading,
  onClick = () => {},
  children,
  className = "",
}: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "",
    roundStyle: string = "",
    icoSize: number = 0;

  switch (variant) {
    case "primary":
      variantStyles = "bg-primary hover:bg-primary/90 text-white rounded-xl";
      break;
    case "secondary":
      variantStyles = "bg-night hover:bg-night/90 text-white rounded-[100rem]";
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

  switch (rounded) {
    case "full":
      roundStyle = "rounded-[100rem]";
      break;
    case true:
      roundStyle = "rounded-xl lg: rounded-2xl";
      break;
    default:
      roundStyle = "";
  }

  switch (size) {
    case "small":
      sizeStyles = `text-md font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[40px] h-[40px]"
          : "px-[14px] py-[12px]"
      }`;
      icoSize = 17;
      break;
    case "medium":
      sizeStyles = `text-lg font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[50px] h-[50px]"
          : "px-[18px] py-[15px]"
      }`;
      icoSize = 20;
      break;
    case "large":
      sizeStyles = `text-xl font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[60px] h-[60px]"
          : "px-[22px] py-[18px]"
      }`;
      icoSize = 24;
      break;
  }

  return (
    <button
      className={clsx(
        variantStyles,
        sizeStyles,
        roundStyle,
        icoSize,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
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
