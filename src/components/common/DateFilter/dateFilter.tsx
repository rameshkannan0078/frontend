import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PrIcon from '../PrIcon/PrIcon';

interface ReactDatePickerDateRangePickerProps {
  onDateRangeChange: (startDate: Date | null, endDate: Date | null) => void;
}

// ...
const DateFilter: React.FC<ReactDatePickerDateRangePickerProps> = ({ onDateRangeChange }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateRangeChange = (dates: [Date | null, Date | null]) => {
    const [newStartDate, newEndDate] = dates;
    setStartDate(newStartDate);
    setEndDate(newEndDate);
    onDateRangeChange(newStartDate, newEndDate);
  };

  const formatDate = (date: Date | null) => {
    return date;
  };

  const dateRangeDisplay = startDate && endDate ? `${formatDate(startDate)} - ${formatDate(endDate)}` : '';

  const handleIconClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  const datePickerRef = useRef<DatePicker | null>(null);

  return (
    <div className='flex rounded-full bg-white h-[3rem] p-1 outline-none'>
      <div className='flex items-center pr-2' onClick={handleIconClick}>
        <PrIcon name='Calendar' className='ml-2 cursor-pointer' size={21} color='blue' />
      </div>
      <DatePicker
        selected={startDate}
        onChange={handleDateRangeChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        dateFormat='dd-MM-yyyy'
        placeholderText='dd-MM-yyyy - dd-MM-yyyy'
        className='custom-datepicker p-1 mt-1 bg-transparent text-black  outline-none'
        customInput={<input value={dateRangeDisplay} readOnly />}
        onInputClick={handleIconClick}
        ref={datePickerRef}
      />
    </div>
  );
};

export default DateFilter;


