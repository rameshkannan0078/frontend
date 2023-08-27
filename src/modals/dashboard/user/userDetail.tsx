
import { useRouter } from "next/router";
import customerData from "./sampleProduct";
import UserAddressCard from "@/components/common/Card/UserCard/UserAddressCard";
import UserDetailCard from "@/components/common/Card/UserCard/UserDetailCard";
import DateFilter from "@/components/common/DateFilter/dateFilter";
import PrButton from "@/components/common/PrButton/PrButton";
import PrIcon from "@/components/common/PrIcon/PrIcon";
import PrTable from "@/components/common/PrTable/PrTable";
import { LANG } from "@/components/lang/Lang";


const UserDetail = () =>{
    const router = useRouter();
    const { id } = router.query;
    const handleNavigate = () => {
        router.push('/dashboard/user');
    };
    const userData=customerData?.find((d)=>d.customer_id===id) ;

    function handleDateRangeChange(startDate: Date | null, endDate: Date | null): void {
        throw new Error("Function not implemented.");
    }

    return(
        <div className="bg-[#f6f7fa]">
            <div className="flex">
                <div className="p-2.5 font-semibold cursor-pointer" onClick={handleNavigate}>
                 <PrIcon name={'ArrowLeft'} size={28} ></PrIcon>
                </div>
                <div className="p-2 text-[1.5rem] font-semibold">{userData?.first_name || ' '}</div>
                
            </div>
            <div className="flex space-x-4">
            <UserDetailCard
    items={[
        { icon:"User", iconType:'feather', title: "Name", subtitle:userData?.first_name || ' '},
        { icon:'Mail',iconType:'feather', title: "Email", subtitle:userData?.email_address || ' ' },
        { icon: 'Smartphone',iconType:'feather', title: "Mobile", subtitle:userData?.mobile_number|| ' ' }

    ]}
/>
<UserAddressCard icon={"Airplay"} 
title={"Address"}
 subtitle={"Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678"} 
 items={[
    { title: 'City', subtitle: 'Vellore' },
    { title: 'State', subtitle: 'Tamil Nadu' },
    { title: 'Pincode', subtitle: '6333344' },
    { title: 'Country', subtitle: 'India' }
]}
 ></UserAddressCard>

<UserDetailCard
    items={[
        { icon: 'TransgenderSharp',iconType:'material', title: "Gender", subtitle: "Male" },
        { icon: "Gift",iconType:'feather', title: "Date Of Birth", subtitle: "10 March 1998" },
        { icon: 'LocalAtmSharp',iconType:'material', title: "Curreny", subtitle: "₹ INR" }
    ]}
/>
<div className="bg-transparent w-[1rem]"></div>

</div>
<div className="p-4 bg-white">
<div className="h-[4rem] flex">
                <label className="text-[20px] font-bold">{LANG.COMMON.BOOKINGHISTORY}</label>
                <div className="ml-auto flex items-center space-x-4">
                    <DateFilter onDateRangeChange={handleDateRangeChange} />
                    <PrButton label={'Excel'} iconName={'Download'} />
                    {/* <PrSearch onSearch={function (query: string): void {
                        throw new Error('Function not implemented.');
                    } }></PrSearch> */}
                </div>
            </div>
    <PrTable headers={[
        {
            name:'#',
            id:'index'
        },
        {
            name:'Booking Id',
            id:'booking_id'
        },
        {
            name:'Property Name',
            id:'property_name'
        },
        {
            name:'Booking On',
            id:'booking_on'
        },
        {
            name:'Rooms Selected',
            id:'rooms_selected'
        },{
            name:'Guests',
            id:'guests'
        },{
            name:'Check In',
            id:'check_in'
        },
        {
            name:'Check Out',
            id:'check_out'
        },
        {
            name:'Booking Status',
            id:'booking_status'
        },
        {
            name:'Check In Status',
            id:'check_in_status'
        }
    ]} data={userData?.bookings || []}></PrTable>
</div>

        </div>
    );
}

export default UserDetail;