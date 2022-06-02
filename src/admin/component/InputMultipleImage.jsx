import React, { useState } from 'react'

function InputMultipleImage() {
    const [selectedImages, setSelectedImages] = useState([]);
    const inputRef = React.useRef();
    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });

        setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    };
    const handleChoose = (event) => {
        inputRef.current.click();
    };
    return (
        <>  
            <div className='flex flex-col gap-10'>
                <input
                    type="file"
                    name="images"
                    ref={inputRef}
                    onChange={onSelectFile}
                    className="hidden placeholder:text-[14px]"
                    multiple
                    accept="image/png , image/jpeg, image/webp"
                />
                <div onClick={handleChoose} className="flex flex-col items-center gap-5 tracking-wide py-10 cursor-pointer w-[200px] border hover:border-[#FF7272] rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-[#575757]"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    <div className='text-center text-[14px] text-[#575757]'>
                        <p>Upload image</p>
                        <p>Maximum 10 images</p>
                    </div>
                </div>
                <div>
                    {
                        selectedImages.length > 0 ? (
                            <p>Uploaded {selectedImages.length} image{selectedImages.length === 1 ? "" : "s"}</p>
                        ) : null
                    }
                    {
                        selectedImages.length > 10 ? (
                            <p className="nunito-600 text-[#FF5C58]">You can't upload more than 10 images!</p>
                        ) : null
                    }
                </div>
                <div className="grid grid-cols-4 gap-5">
                    {selectedImages && selectedImages.map((image, index) => {
                        return (
                        <div key={image} className="flex flex-col gap-2 items-start">
                            <img src={image} height="200" alt="upload" />
                            <button onClick={() => setSelectedImages(selectedImages.filter((e) => e !== image))} className="nunito-600 text-[14px] text-[#FF5C58]">Delete</button>
                        </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default InputMultipleImage