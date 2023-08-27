import React from 'react';

// Define a custom type for button types
type ButtonType = 'button' | 'submit' | 'reset';

// Define a custom type for button styles
type ButtonStyle = 'primary' | 'danger' | 'success' | 'info' | 'warning' | 'gray' | 'white';

interface PrButtonV2Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  buttonType?: ButtonType;
  buttonStyle?: ButtonStyle;
  dangerLink?: boolean;
}

const PrButtonV2: React.FC<PrButtonV2Props> = ({
  label,
  buttonType = 'button',
  buttonStyle = 'primary',
  dangerLink = false,
  ...props
}) => {
  const getButtonClassName = () => {
    switch (buttonStyle) {
      case 'danger':
        return dangerLink
          ? ' border-red-600 border font-semibold  py-2 px-4 text-red-600 hover:bg-red-200'
          : 'bg-red-600  py-2 px-4 text-white hover:bg-red-700';
          case 'success':
            return 'bg-green-600  py-2 px-4 text-white';
          case 'info':
            return 'bg-blue-600  py-2 px-4 text-white';
          case 'warning':
            return 'bg-yellow-500  py-2 px-4 text-white';
          case 'gray':
            return 'bg-gray-400  py-2 px-4 text-white';
          case 'white':
            return 'bg-white border border-gray-300  py-2 px-4 text-gray-700';
      // Other button styles...
      // Default to primary style
      default:
        return 'bg-blue-600  py-2 px-4 text-white hover:bg-blue-700';
    }
  };

  return (
    <button
      {...props}
      type={buttonType}
      className={`w-[8rem] h-[3rem] ${getButtonClassName()} text-center ${props.className}`}
    >
      {label}
    </button>
  );
};

export default PrButtonV2;
