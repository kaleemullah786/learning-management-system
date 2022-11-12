import React from 'react'
import { useState } from 'react'
import Card from '../Card/Card'
const NewCourses = () => {
    const tabs = ['Bootcamps', "Master's Degree", "Bachelor's Degree"]
    const content = [[{ heading: "Bootcamp1", details: "" }, { heading: "Bootcamp2", details: "" }, { heading: "Bootcamp3", details: "" }], [{ heading: "Master's Degree1", details: "" }, { heading: "Master's Degree2", details: "" }, { heading: "Master's Degree3", details: "" }], [{ heading: "Bachelor's Degree1", details: "" }, { heading: "Bachelor's Degree2", details: "" }, { heading: "Bachelor's Degree3", details: "" }]]
    const [active, setactive] = useState(0)
    function handleClick(i) {
        setactive(i)
        document.getElementById('indicator').style.translate = (i * 100) + '%'
    }
    return (
        <div className='bg-gray-100'>
            <h1 className='text-5xl md:text-7xl font-bold px-2 py-5'><span className='text-red-700'>New</span> on XYZ</h1>

            {/* Mobile View */}

            {tabs.map((t, i) => {
                return (<div className='md:hidden' key={i}>
                    <h1 className='px-2 font-semibold text-3xl'>{t}</h1>
                    <div className='flex gap-3 px-2 pt-7 pb-1 w-full overflow-x-auto'>
                        {content[i].map((item, index) => { return <Card data={item} key={index} /> })}
                    </div></div>
                )
            })}

            {/* Desktoop View */}

            <div className='hidden md:block'>
                <div className='flex'>
                    {tabs.map((item, index) => { return <button onClick={() => handleClick(index)} className='outline-none w-[25%] text-lg font-semibold my-2 min-w-max' key={index}>{item}</button> })}
                </div>
                <div id='indicator' className='w-[25%] transition-all h-[2px] bg-black'></div><hr className='border-gray-400' />
                <div className='flex gap-3 px-2 py-7 w-full overflow-x-auto'>
                    {content[active] ? content[active].map((item, index) => { return <Card data={item} key={index} /> }) : 'No items to display'}
                </div>
            </div>
        </div>
    )
}

export default NewCourses