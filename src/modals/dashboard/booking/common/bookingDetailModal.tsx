import PrModal from "@/components/common/PrModalBox/PrModalBox";
import { useState } from "react";
import products from '../../../common/booking_data.json';
import _ from "lodash";
import PrLabel from "@/components/common/PrLabel/PrLabel";
import DateFormat from "@/components/common/DateFormat/dateFormat";
import { BookingComponentStatusColor, CheckInStatusComponentColor, bookingStatusT, checkInStatusT } from "./bookingComponent";
import { ComissionCellComponentColor, PaymentStatusCellComponentColor } from "../../payment/paymentModal";
import { PaymentStatusT } from "../../payment/common/paymentCommon";
import PrButtonV2 from "@/components/common/PrButton/PrButtonV2";
interface BookingDetailModalProps {
    bookingId: string;
}




const RoomsSelectedComponent = (props:string[]) => {
    const distinctValues: string[] = _.uniq(props);

    const chunkedValues = _.chunk(distinctValues, 2);

    return (
        <div >
            {chunkedValues.map((chunk, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {chunk.map((value, index) => (
                        <div key={index} className="flex-1 mb-3">
                            <div className="flex">
                            <div className='font-bold'>{_.filter(props, item => item === value).length} X </div>
                            <div className='bg-black text-white rounded-full p-2 text-center'>{value}</div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}





function BookingDetailModal({ bookingId }: BookingDetailModalProps) {
    const [openModal, setOpenModal] = useState(true);

    const handleModal = () => {
        setOpenModal(!openModal);
    };

    const data=products.find((d)=>{if(d.bookingId===bookingId){return d}});

    return (
        <PrModal
            isOpen={openModal}
            onClose={handleModal}
            title={`Booking Detail (${bookingId})`}
            children={
            <div className="w-full">
                <div className="flex space-x-2 p-4 ">
                    <div className="flex-1">
                    <div className="font-semibold">Booking Id</div>
                    <div>{data?.bookingId}</div>
                    </div>
                    <div className="flex-1">
                     <div className="font-semibold">Customer Name</div>
                    <div>{data?.customerName}</div>
                    </div>
                    <div className="flex-1">
                     <div className="font-semibold">Property Name</div>
                    <div>{data?.propertyName}</div>
                    </div>
                    <div className="flex-1">
                     <div className="font-semibold">Room Type</div>
                    {RoomsSelectedComponent(data?.selectedRoomTypes as string[])}
                    </div>
                    <div className="flex-1">
                     <div className="font-semibold">Guest Count</div>
                <div className="font-bold">{data?.totalNumber}</div>
                    </div>
                    
                </div>
                <div className="flex space-x-2 mt-3 p-4 ">
                    <div className="flex-1">
                    <div className="font-semibold">Booking On</div>
                    <div><DateFormat date={data?.bookingDate as string} formatType={"dd MMM yyyy"}></DateFormat></div>
                    </div>
                    <div className="flex-1">
                     <div className="font-semibold">Check-IN</div>
                    <div><DateFormat date={data?.checkIn as string} formatType={"dd MMM yyyy"}></DateFormat></div>
                    </div>
                    <div className="flex-1">
                     <div className="font-semibold">Check-Out</div>
                    <div><DateFormat date={data?.checkOut as string} formatType={"dd MMM yyyy"}></DateFormat></div>
                    </div>
                    <div className="flex-1">
                     <div className="font-semibold">Booking Status</div>
                     <div><BookingComponentStatusColor data={data?.bookingStatus as bookingStatusT}></BookingComponentStatusColor></div>
                    </div>
                    <div className="flex-1">
                     <PrLabel text="Check-In-Status"></PrLabel>
                <div ><CheckInStatusComponentColor data={data?.checkInStatus as checkInStatusT } ></CheckInStatusComponentColor></div>
                    </div>
                    
                </div>
                <div className="border-b-2 border-gray-300 mt-8"></div>
                <div className="mt-6 p-3 font-bold text-[18px]"> Payment Details</div>
                <div className="flex space-x-2  p-3">
                    <div className="flex-1">
                <PrLabel text={'Total Amount'}/>
                    <div>{data?.finalAmount}</div>
                    </div>
                    <div className="flex-1">
                    <PrLabel text={`Tax`}/>
                    <div>{data?.taxAmount}</div>
                    </div>
                    <div className="flex-1">
                  <PrLabel text={"Commission"}></PrLabel>
                    <div><ComissionCellComponentColor data={data?.commission} ></ComissionCellComponentColor></div>
                    </div>
                    <div className="flex-1">
                    <PrLabel text={"Payment Status"}></PrLabel>
                <div ><PaymentStatusCellComponentColor data={data?.paymentStatus as PaymentStatusT} ></PaymentStatusCellComponentColor></div>
                    </div>
                    
                </div>
                <div className="mt-16 mx-auto flex justify-center items-center">
  <PrButtonV2 label={"Ok"} buttonStyle='danger' onClick={handleModal} className='rounded-md w-[20%]'></PrButtonV2>
</div>

            </div>}
        />
    );
}

export default BookingDetailModal;
