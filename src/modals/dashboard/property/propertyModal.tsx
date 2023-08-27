import React, { useState } from 'react';
import {H1} from '../../../components/common/Header/header';
import PrSearch from '../../../components/common/PrSearch/PrSearch';
import PrButton from '../../../components/common/PrButton/PrButton';
import PrTable from '../../../components/common/PrTable/PrTable';
import DateFilter from '../../../components/common/DateFilter/dateFilter';
import { LANG } from '../../../components/lang/Lang';
import propertydata from '../../common/property_data.json';
import AddProperty from './common/addProperty';
import { AddressCell, GpsLocationCell, AvilableCell, ActionCell } from './common/propertyTableComponents';




const PropertyModal = () => {

    const [openAddProperty,setOpenAddProperty]=useState(false);
    const handleAddProperty = ()=>{
        setOpenAddProperty(!openAddProperty);
    }
    return (
        <div className="p-3">
            <div className="h-[4rem] flex">
                <H1>{LANG.COMMON.PROPERTYMANGEMENT}</H1>
                <div className="ml-auto flex items-center space-x-4">
                    <PrSearch onSearch={function (e: React.ChangeEvent<HTMLInputElement>): void {
                        throw new Error('Function not implemented.');
                    }} value={''}></PrSearch>
                    <PrButton label={'Add'} iconName={'Plus'} onClick={handleAddProperty}  buttonStyle='primary'></PrButton>
                    <DateFilter onDateRangeChange={function (startDate: Date | null, endDate: Date | null): void {
                        throw new Error('Function not implemented.');
                    }}></DateFilter>
                </div>
            </div>
            <PrTable
                headers={[
                    {
                        id: 'id',
                        name: '#'
                    },
                    {
                        name: 'Property Name',
                        id: 'propertyName'
                    },
                    {
                        name: 'Address',
                        id: 'address',
                        renderComponent:AddressCell,
                        renderProps:{dataField:'address'}
                    },
                    {
                        name: 'Gps Location',
                        id: 'gps',
                        renderComponent:GpsLocationCell,
                        renderProps:{dataField:'gps'}
                    },
                    {
                        name:'Number Of Rooms',
                        id:'noOfRooms',
                    },
                    {
                        name:'Avilable',
                        id:'Available',
                        renderComponent:AvilableCell,
                        renderProps:{dataField:'Available'}
                    },
                    {
                        name:'Action',
                        id:'Action',
                        renderComponent:ActionCell,
                        renderProps:{dataField:'Action'}
                    }
                ]}
                data={propertydata}

            ></PrTable>

            {openAddProperty && <AddProperty closeModal={handleAddProperty}></AddProperty>}
        </div>
    );
}

export default PropertyModal;
