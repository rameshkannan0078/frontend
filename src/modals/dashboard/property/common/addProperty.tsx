import React, { useState } from 'react';
import PRInputField from '@/components/common/PrInputField/PrInputField';
import PrInputFieldV2 from '@/components/common/PrInputField/PrInputFieldV2';
import PrIcon from '@/components/common/PrIcon/PrIcon';

import { CountryIso2 } from 'react-international-phone';
import { PrCountryInputField } from '@/components/common/PrCountryInputField/PrCountryInputField';
import PrMapComponent from '@/components/common/PrMapComponent/PrMapComponent';
import PrButton from '@/components/common/PrButton/PrButton';
import AddPropertySuccessFully from '@/components/common/Card/PropertyCard/AddPropertySuccessFully';




interface AddPropertyProps {
    closeModal: () => void;
  }
  


const AddProperty = (props:AddPropertyProps) => {

  const [phoneValue, setPhoneValue] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<CountryIso2 | ''>('');
  const [modal,setModal]=useState(false);
  
  const handlePhoneChange = (phone: string, country: CountryIso2): void => {
    setPhoneValue(phone); // Update the phoneValue state
  };

  const ModalChange = ()=>{
    setModal(!modal);
  }
  
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 ">
    {modal ?   <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className='flex items-center justify-between border-b border-black mb-4'>
  <h2 className="text-xl font-semibold mb-4">Add Property</h2>
  <PrIcon onClick={props.closeModal} className='hover:cursor-pointer' name={'X'}></PrIcon>
</div>

        <form className='flex'>
            <div>
            <PRInputField label="Property Name" placeholder="Enter property name" />
          <div className='text-bg-[#061D30] font-bold text-[1rem] mb-4'>Property Address</div>
          <PrInputFieldV2 label={'Address Line 1'}></PrInputFieldV2>
          <PrInputFieldV2 label={'Address Line 2'}></PrInputFieldV2>
          <PrInputFieldV2 label={'City/Town'}></PrInputFieldV2>
          <PrInputFieldV2 label={'State/Province/Region'}></PrInputFieldV2>
            </div>
            <div className='ml-12'>
            <PrInputFieldV2 label={'Pin/Zip/Postal Code'}></PrInputFieldV2>
            <PrCountryInputField />
            <label className='block font-semibold mt-4'>GPS Location</label>
            <PrMapComponent latitude={0} longitude={0} className={'mt-2 w-[20.5rem] h-[10rem]'}></PrMapComponent>
            <PRInputField label="Total No Of Rooms"  placeholder="Enter number of rooms" />
            </div>
            <div  className='ml-12'>
            <PRInputField label="Username"  placeholder="The Country Resort I" />
            <PRInputField label="Create Password"  placeholder="000000000000" />
            <PRInputField label="Confirm Password"  placeholder="000000000000" />
            </div>
       
        </form>
        <div className="flex justify-center mt-6"> 
          <PrButton label={'Create'} iconName='ArrowUpCircle' buttonStyle='danger' className='rounded-md'></PrButton>
        </div>

      </div> :
      <AddPropertySuccessFully closeModal={ModalChange}></AddPropertySuccessFully>
      }
      
    </div>
  );
};

export default AddProperty;
