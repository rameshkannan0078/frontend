import React, { InputHTMLAttributes, Ref } from 'react';

interface PrInputFieldV2Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string; // Optional className prop
  ref?: Ref<HTMLInputElement>; // Optional ref prop
}

const PrInputField: React.FC<PrInputFieldV2Props> = ({ label, className, ...inputProps }) => {
  const inputClasses = `mt-2 px-3 py-2 block w-[20.5rem] h-[3.5rem] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className || ''}`;

  return (
    <div className={`mb-4 ${className}`}>
      <label className="block font-semibold mb-2 mt-1 text-[#06164C]">{label}</label>
      <input {...inputProps} className={inputClasses} />
    </div>
  );
};

export default PrInputField;
