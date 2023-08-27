import React from 'react';
import { TableCellPropsT } from "@/components/common/PrTable/PrTableCommon";
import PrIcon from '@/components/common/PrIcon/PrIcon';
import _ from 'lodash';

export type bookingStatusT = 'upcoming' | 'completed' | 'cancelled';
export type checkInStatusT='noshow' | 'checkedIn';

const statusColors: Record<bookingStatusT, { textColor: string; backgroundColor: string }> = {
    'upcoming': { textColor: 'text-orange-500', backgroundColor: 'bg-orange-500' },
    'completed': { textColor: 'text-green-500', backgroundColor: 'bg-green-500' },
    'cancelled': { textColor: 'text-black', backgroundColor: 'bg-black' }
};

 const CheckInStatusColors : Record<checkInStatusT,{bgColor:string}>={
    'checkedIn':{bgColor:'bg-green-500'},
    'noshow':{bgColor:'bg-[#7B7B7B]'}
}

interface BookingComponentStatusColorProps {
    data: bookingStatusT;
  }
  
  const BookingComponentStatusColor: React.FC<BookingComponentStatusColorProps> = ({ data }) => {
    const { textColor, backgroundColor } = statusColors[data] || {};
  
    if (!textColor || !backgroundColor) {
      return null; 
    }
  
    return (
      <div className='flex space-x-2'>
        <div className={`rounded-full ${backgroundColor} w-4 h-4`}></div>
        <div className={`font-bold ${textColor}`}>
          {data}
        </div>
      </div>
    );
  };
  
  const BookingComponentStatus: React.FC<TableCellPropsT> = (props) => {
    return <BookingComponentStatusColor data={props.data} />;
  };


  interface CheckInStatusComponentProps {
    data: checkInStatusT;
  }
  
  const CheckInStatusComponentColor: React.FC<CheckInStatusComponentProps> = (props) => {
    const { bgColor } = CheckInStatusColors[props.data];
    
    return (
      <div className={`${bgColor} w-[90%] text-white p-2 rounded-full text-center`}>
        {props.data}
      </div>
    );
  };



const CheckInStatusComponent:React.FC<TableCellPropsT>=(props)=>{
    return <CheckInStatusComponentColor data={props.data}></CheckInStatusComponentColor>
}


const RoomsSelectedComponent: React.FC<TableCellPropsT> = (props) => {
    const distinctValues: string[] = _.uniq(props.data);

    const chunkedValues = _.chunk(distinctValues, 2);

    return (
        <div >
            {chunkedValues.map((chunk, rowIndex) => (
                <div key={rowIndex} className="flex space-x-4">
                    {chunk.map((value, index) => (
                        <div key={index} className="flex-1">
                            <div className='font-bold'>{_.filter(props.data, item => item === value).length} X </div>
                            <div className='bg-black text-white rounded-full p-1 text-center'>{value}</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}





export { BookingComponentStatus,CheckInStatusComponent,RoomsSelectedComponent,BookingComponentStatusColor,CheckInStatusComponentColor};
