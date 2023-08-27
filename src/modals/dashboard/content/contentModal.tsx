import { H1, H3 } from "@/components/common/Header/header";
import PrTable from "@/components/common/PrTable/PrTable";
import content from '../../common/content.json';
import { TableCellPropsT } from "@/components/common/PrTable/PrTableCommon";
import Image from "next/image";
import PrIconV2 from "@/components/common/PrIcon/PrIconV2";
import DateFilter from "@/components/common/DateFilter/dateFilter";
import PrButton from "@/components/common/PrButton/PrButton";
import PrSearch from "@/components/common/PrSearch/PrSearch";
import { LANG } from "@/components/lang/Lang";
import { ChangeEvent, useState } from "react";
import AddContentModal from "./addContentModal";

const ImageCellComponent = (props:TableCellPropsT)=>{
    return(
        <div>
            <Image src={props.data} alt='content' width={100} height={100} ></Image>
        </div>
    );
}

const ActionCellComponent =(props:TableCellPropsT)=>{
    return(
        <div className="flex space-x-3">
                       <PrIconV2 name={'Create'} size={'large'}  color={'blue'}></PrIconV2>
            <PrIconV2 name={'Delete'} size={'large'} color='blue'></PrIconV2>
 
        </div>
    );
}


function ContentModal(){

    const [openModal,setOpenModal]=useState(false);

    const handleModal=()=>{
        setOpenModal(!openModal);
    }
    return( 
        <div className="p-4">
           <div className="h-[4rem] flex">
                <H1>{LANG.COMMON.CONTENTMANAGEMENT}</H1>
                <div className="ml-auto flex items-center space-x-4">
                    <DateFilter onDateRangeChange={function (startDate: Date | null, endDate: Date | null): void {
                        throw new Error("Function not implemented.");
                    } }  />
                    <PrButton label={'Add'} iconName={'Plus'} onClick={handleModal} iconPosition='right' />
                    <PrSearch onSearch={function (e: ChangeEvent<HTMLInputElement>): void {
                        throw new Error("Function not implemented.");
                    } } value={""}                     ></PrSearch>
                </div>
            </div>

            <PrTable headers={
                [
                    {
                        name:'#',
                        id:'index'
                    },{
                        name:'Title',
                        id:'title'
                    },{
                        name:'Content',
                        id:'content'
                    },
                    {
                        name:'Image',
                        id:'image',
                        renderComponent:ImageCellComponent,
                        renderProps:{dataField:'image'}
                    },
                    {
                        name:'Action',
                        id:'action',
                        renderComponent:ActionCellComponent,
                        renderProps:{dataField:'action'}
                    }
                ]
                } data={content}></PrTable>
                {openModal && <AddContentModal handleModal={handleModal}></AddContentModal>}
        </div>
    );
}
export default ContentModal;