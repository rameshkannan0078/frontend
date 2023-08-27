export type PaymentStatusT = 'Pending' | 'Cancelled' | 'Completed';
export type RefundStatusT = 'Initiated' | 'Processed' | 'Failed' | 'Completed';

const getPaymentStatusBackgroundColor = (status: PaymentStatusT): string => {
    switch (status) {
        case 'Pending':
            return 'bg-orange-500';
        case 'Cancelled':
            return 'bg-gray-700';
        case 'Completed':
            return 'bg-green-500';
        default:
            return 'bg-black'; // Default color if status doesn't match any case
    }
};


const  getRefundStatusColor: Record<RefundStatusT, { textColor: string; backgroundColor: string }> = {
    'Initiated': { textColor: 'text-blue-500', backgroundColor: 'bg-blue-500' },
    'Processed': { textColor: 'text-orange-500', backgroundColor: 'bg-orange-500' },
    'Failed': { textColor: 'text-red-500', backgroundColor: 'bg-red-500' },
    'Completed': { textColor: 'text-green-500', backgroundColor: 'bg-green-500' }
};


export {
    getPaymentStatusBackgroundColor,
    getRefundStatusColor,
    
}