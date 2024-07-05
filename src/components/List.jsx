import React from 'react'

const List = ({heading,listname1,listname2,listname3,className}) => {
  return (
    <>
    <div>
    <h1  className={` text-[#FFFFFF] text-2xl font-bold pb-4 ${className}`}>{heading}</h1>
    <ul  className={`text-[#9291A1] font-bold text-xl pb-3 ${className}`}>
    <li className={`pb-2 ${className}`}><a href="#" > {listname1}</a></li>
       <li className={`pb-2 ${className}`} ><a href="#" > {listname2}</a></li>
        <li className={`pb-2 ${className}`}><a href="#"> {listname3}</a></li>
    </ul>
    </div>
    </>
  )
}

export default List