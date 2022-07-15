import React, { useRef, useState } from 'react'
import AdminSidebar from '../component/AdminSidebar'

function AdminUploadVideo() {
    const inputVideoRef = useRef();
    const inputPhotoRef = useRef();
    const [selectedImages, setSelectedImages] = useState([]);
    const [source, setSource] = useState();
    const [tags, setTags] = useState([])

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setSource(url);
    };

    const handleChooseVideo = (event) => {
        inputVideoRef.current.click();
    };

    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });

        setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    };

    const handleChoosePhoto = (event) => {
        inputPhotoRef.current.click();
    };

    function handleKeyDown(e){
        if(e.key !== 'Enter') return
        const value = e.target.value
        if(!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }

    function removeTag(index){
        setTags(tags.filter((el, i) => i !== index))
    }
    return (
        <>
            <AdminSidebar/>
            <div className='nunito-500 ml-[250px] tracking-wide'>
                <div className='fixed top-0 z-10 w-full bg-[#F9F9F9] pl-10 py-5'>
                    <p className='text-[20px] nunito-600 text-[#575757]'>Input Video</p>
                    <p className='text-[14px] text-[#7E7E7E]'>The video itself will be uploaded at uncleprepporn.com along with the details. Make sure all forms are entered correctly.</p>
                </div>
                <div className='px-10 py-32'>
                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col gap-2 w-[600px]'>
                            <div className="flex flex-col items-center gap-5 justify-center tracking-wide py-2 px-5 outline-none">
                                <input
                                    ref={inputVideoRef}
                                    className="hidden placeholder:text-[14px]"
                                    type="file"
                                    onChange={handleFileChange}
                                    accept=".mov,.mp4"
                                />
                                {
                                    !source && <div onClick={handleChooseVideo} className="flex flex-col items-center gap-5 tracking-wide py-10 cursor-pointer w-[600px] border hover:border-[#FF7272] rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-[#575757]"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                                        <p className='text-[14px] text-[#575757]'>Upload the video</p>
                                    </div>
                                }
                                {source && (
                                    <div className="flex flex-col gap-2 items-start">
                                        <video className="block m-0" width="100%" height={300} controls src={source} />
                                        <p onClick={() => setSource(!source)} className="nunito-600 text-[14px] text-[#FF5C58]">Delete</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 w-[600px]'>
                            <label htmlFor="" className='text-[#575757]'>Video Title</label>
                            <input type="text" placeholder='Input the video title' className='border border-[#DCDCDC] tracking-wide rounded-md py-2 px-5 outline-none placeholder:text-[14px]'/>
                        </div>
                        <div className='flex flex-col gap-2 w-[600px]'>
                            <label htmlFor="" className='text-[#575757]'>Video Tags</label>
                            <div className="flex items-center gap-5 border border-[#DCDCDC] tracking-wide rounded-md py-2 px-5 outline-none placeholder:text-[14px]">
                                { tags.map((tag, index) => (
                                    <div className="flex items-center gap-1" key={index}>
                                        <span>{tag}</span>
                                        <span className="hover:text-red-500 cursor-pointer" onClick={() => removeTag(index)}>&times;</span>
                                    </div>
                                )) }
                                <input onKeyDown={handleKeyDown} type="text" className="flex-grow border-0 outline-none" placeholder="Input the video tags" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 w-[600px]'>
                            <label htmlFor="" className='text-[#575757]'>Description</label>
                            <textarea name="" id="" cols="20" rows="5" placeholder='Input the video title' className='border border-[#DCDCDC] tracking-wide rounded-md py-2 px-5 outline-none placeholder:text-[14px] resize-y'></textarea>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-10'>
                                <input
                                    type="file"
                                    name="images"
                                    ref={inputPhotoRef}
                                    onChange={onSelectFile}
                                    className="hidden placeholder:text-[14px]"
                                    multiple
                                    accept="image/png , image/jpeg, image/webp"
                                />
                                <div onClick={handleChoosePhoto} className="flex flex-col items-center gap-5 tracking-wide py-10 cursor-pointer w-[200px] border hover:border-[#FF7272] rounded-md">
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
                        </div>
                    </div>
                    <p className='bg-[#FF7272] text-white nunito-600 text-[14px] py-3 px-5 rounded-md w-fit'>Upload video</p>
                </div>
            </div>
        </>
    )
}

export default AdminUploadVideo