import React, { useState } from 'react'

const InputTags = props => {
    const [tags, setTags] = useState(props.tags);
	const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};
	const addTags = event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
			props.selectedTags([...tags, event.target.value]);
			event.target.value = "";
		}
	};
    return (
        <div className="flex gap-2 border border-[#DCDCDC] py-2 px-5 tracking-wide rounded-md outline-none">
			<ul className='flex gap-2'>
				{tags.map((tag, index) => (
					<li key={index} className="flex gap-2 py-1 px-2 bg-[#FF7272] text-[14px] text-white rounded">
						<span>{tag}</span>
						<span className='cursor-pointer'
							onClick={() => removeTags(index)}
						>
							x
						</span>
					</li>
				))}
			</ul>
			<input
				type="text"
				onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
				placeholder="Input the video tags"
                className='outline-none w-full placeholder:text-[14px]'
			/>
		</div>
    )
}

export default InputTags