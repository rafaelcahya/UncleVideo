import React, { useRef, useState } from 'react'

export default function InputVideo(props) {
    const { height } = props;
    const inputRef = useRef();
    const [source, setSource] = useState();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setSource(url);
    };

    const handleChoose = (event) => {
        inputRef.current.click();
    };
    return (
        <div className="flex flex-col items-center gap-5 justify-center tracking-wide py-2 px-5 outline-none">
            <input
                ref={inputRef}
                className="hidden placeholder:text-[14px]"
                type="file"
                onChange={handleFileChange}
                accept=".mov,.mp4"
            />
            {
                !source && <div onClick={handleChoose} className="flex flex-col items-center gap-5 tracking-wide py-10 cursor-pointer w-[600px] border hover:border-[#FF7272] rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-[#575757]"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                    <p className='text-[14px] text-[#575757]'>Upload the video</p>
                </div>
            }
            {source && (
                <div className="flex flex-col gap-2 items-start">
                    <video className="block m-0" width="100%" height={height} controls src={source} />
                    <p onClick={() => setSource(!source)} className="nunito-600 text-[14px] text-[#FF5C58]">Delete</p>
                </div>
            )}
        </div>
    )
}
