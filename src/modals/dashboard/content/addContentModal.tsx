import PrButtonV2 from "@/components/common/PrButton/PrButtonV2";
import PrIcon from "@/components/common/PrIcon/PrIcon";
import PrInputField from "@/components/common/PrInputField/PrInputField";
import PrTextArea from "@/components/common/PrTextArea/PrTextArea";

interface AddContentModalProps {
    handleModal: () => void;
}

function AddContentModal(props: AddContentModalProps) {
    return (
        <div className="fixed inset-0  flex justify-center items-center bg-black bg-opacity-50 ">
            <div className="bg-white w-[40%] p-8 rounded-lg shadow-lg">
                <div className='flex items-center justify-between border-b border-black mb-4'>
                    <h2 className="text-xl font-semibold mb-4">Add Content</h2>
                    <PrIcon onClick={props.handleModal} className='hover:cursor-pointer' name={'X'}></PrIcon>
                </div>
                <PrInputField label={"Title"} className="w-full"></PrInputField>
                <PrTextArea label={"Content"}></PrTextArea>
                <div className={`w-full h-[10rem] border-dotted border-2 border-gray-300 rounded-lg mr-4 mb-4 `}>
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <PrIcon name={'Upload'} size={28} />
                        </div>
                        <input id="dropzone-file" type="file" accept="image/*" className="hidden" />
                    </label>
                </div>
                <div className="flex justify-center"> {/* Center align the button */}
                    <PrButtonV2 label={"Ok"} buttonStyle='danger' className="rounded-md "></PrButtonV2>
                </div>
            </div>
        </div>
    );
}

export default AddContentModal;
