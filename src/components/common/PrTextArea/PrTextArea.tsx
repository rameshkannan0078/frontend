import React from 'react';

interface PrTextAreaProps {
  label: string;
  // Add other common props here
}

const PrTextArea: React.FC<PrTextAreaProps> = ({ label, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-[16px]  font-bold text-gray-700" htmlFor={label}>
        {label}
      </label>
      <textarea
        className="mt-1 block w-full h-[10rem] p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        {...props}
      />
    </div>
  );
};

export default PrTextArea;
