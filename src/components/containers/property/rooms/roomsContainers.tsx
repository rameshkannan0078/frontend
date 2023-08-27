import PrButtonV2 from "@/components/common/PrButton/PrButtonV2"
import PrInputField from "@/components/common/PrInputField/PrInputField"

export const RoomsContainers=({ onDelete }: { onDelete: () => void })=>{
    return (
        <div className=" mt-8  space-y-6">
        <div className="grid grid-cols-9 gap-4">
          <div className="col-span-4">
            <PrInputField className="w-full" label="Room Name" />
          </div>
          <div className="col-span-3">
            <PrInputField className="w-full" label="Room Type" />
          </div>
          <div className="col-span-1">
            <PrInputField className="w-full" label="No. of Rooms" />
          </div>
          <div className="col-span-1">
            <PrInputField className="w-full" label="Price/Night" />
          </div>
        </div>
      
        <div className="grid grid-cols-9 gap-4">
       
          <div className="col-span-4">
            <PrInputField className="w-full" label="Bed Type" />
          </div>
          <div className="col-span-3">
            <PrInputField className="w-full" label="Room Size" />
          </div>
          <div className="col-span-1">
            <PrInputField className="w-full" label="No. of Adults" />
          </div>
          <div className="col-span-1">
            <PrInputField className="w-full" label="No. of Children" />
          </div>
        </div>
        
        <div className="flex justify-center space-x-4">
          <PrInputField className="w-full" label="Extra Bed Allowed" />
          <div className="m-auto w-[74%]">
          <PrInputField className="w-full" label="No. of Extra Bed" />
            </div>
            <div className="flex justify-center items-center w-[48%]">
  <PrButtonV2 label={"Delete"} buttonStyle='danger' onClick={onDelete} className="rounded-md" />
</div>

      </div>  
      </div>
    )
}