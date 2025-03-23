import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant
   */
  variant?: "primary" | "secondary" | "tertiary" | "danger" | "success";

  /**
   * Button size
   */
  size?: "sm" | "md" | "lg";

  /**
   * Optional left icon
   */
  leftIcon?: ReactNode;

  /**
   * Optional right icon
   */
  rightIcon?: ReactNode;

  /**
   * Loading state
   */
  isLoading?: boolean;

  /**
   * Children elements
   */
  children: ReactNode;
}

/**
 * Button component following Untitled UI design system
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      isLoading = false,
      children,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    // Base classes
    const baseClasses = "btn";

    // Variant classes
    const variantClasses = {
      primary: "btn-primary",
      secondary: "btn-secondary",
      tertiary: "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
      danger: "btn-danger",
      success:
        "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    };

    // Size classes
    const sizeClasses = {
      sm: "px-2.5 py-1.5 text-xs",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    };

    // Combine all classes
    const buttonClasses = [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      isLoading && "opacity-70 cursor-not-allowed",
      disabled && "opacity-50 cursor-not-allowed",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading...
          </div>
        ) : (
          <div className="flex items-center">
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </div>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
