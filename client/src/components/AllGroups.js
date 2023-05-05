import React, {useState, useEffect } from 'react'
import TableDummy from './TableDummy'
import {MdVideoCall} from "react-icons/md"
import {BiPhoneCall} from "react-icons/bi"

const AllGroups = () => {
    // const [adder, setAdder] = useState(true);
    const [data, setData] = useState([]);
    const [myLink, setMyLink] = useState(
        {
            linkurl: "", 
        }
      )
      useEffect(() => {
        fetch('https://school-list.onrender.com/form')
          .then(response => response.json())
          .then(data => {
            setData(data)
            console.log(data)
        })
          .catch(error => console.error(error));
      }, []);

      function handleChange(event) {
        const {name, value} = event.target
        setMyLink(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
      }

      function handleSubmit(e) {
        e.preventDefault();
        console.log(myLink);
      }
    
  return (
    <form id='formlink' onSubmit={handleSubmit} className="flex flex-col justify-center items-center py-10 mt-16">
        <div className='flex justify-between items-center p-1 fixed top-0 left-0 right-0 border-2 border-gray-200 dark:border-gray-700 bg-white opacity-75 shadow-md'>
            <span className='w-1/5'></span>
            <h3 className='font-bold text-xl'>CREATE GROUPS</h3>
            <button className='shadow bg-gray-300 hover:bg-gray-300 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded-full'>copy link</button>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 grid-cols-1">
            <TableDummy title="Group 1 - Team 1"/>
            <TableDummy title="Group 2 - Team 2"/>
            <TableDummy title="Group 3 - Team 3"/>
            <div className='flex flex-col justify-center items-center'>
                <div className=' uppercase text-xl font-bold'>
                    Group 4 -{data.length > 0 ? data[0].group_title: "No Title"}
                </div>
                <div className="max-w-[470px] flex-col m-2 py-8 px-8 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6relative overflow-x-auto shadow-md sm:rounded-lg ">
            
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-2 py-3 bg-gray-400 dark:bg-gray-800">
                                    SN
                                </th>
                                <th scope="col" className="px-6 py-3 bg-gray-400 dark:bg-gray-800">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 bg-gray-400 dark:bg-gray-800">
                                    Role
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-2 py-5">
                                    1
                                </td>
                                <th scope="row" className="w-[250px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    {data.length > 0 ? data[0].user1: "Empty Group"}
                                </th>
                                <td className="px-6 max-w-[90px]">
                                {data.length > 0 ? data[0].role1: "Empty"}
                                </td>
                                
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-2 py-5">
                                    2
                                </td>
                                <th scope="row" className=" w-[250px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                {data.length > 0 ? data[0].user2: "Empty Group"}
                                </th>
                                <td className="px-6 py-4 max-w-[90px]">
                                {data.length > 0 ? data[0].role2: "Empty"}
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-2 py-5">
                                    3
                                </td>
                                <th scope="row" className=" w-[250px] px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    {data.length > 0 ? data[0].user3: "Empty Group"}
                                </th>
                                <td className="px-6 max-w-[90px]">
                                    {data.length > 0 ? data[0].role3 : "Empty"}
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-2 py-5">
                                    4
                                </td>
                                <th scope="row" className="w-[250px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                {data.length > 0 ? data[0].user4 : "Empty Group"}
                                </th>
                                <td className="px-6 max-w-[90px]">
                                {data.length > 0 ? data && data[0].role4 : "Empty"}
                                </td>
                            </tr>
                            <tr>
                                <td className="px-2 py-5">
                                    5
                                </td>
                                <th scope="row" className="w-[250px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                {data.length > 0 ? data && data[0].user5 : "Empty Group"}
                                </th>
                                <td className="px-6 max-w-[90px]">
                                {data.length > 0 ? data[0].role5 : "Empty"}
                                </td>
                            </tr>
                        </tbody>
                        
                    </table>
                    <div className='w-full flex justify-between items-center'>
                        <input
                            value={myLink.user1} 
                            onChange={handleChange} 
                            type='text' 
                            name='linkurl' 
                            placeholder="Enter Meeting Link" 
                            required 
                            className='px-2 max-w-[200px] h-8 outline-1 outline-slate-300'
                        />
                        <button form='formlink' className="my-2 shadow bg-[#17255A] hover:bg-[#223785] focus:shadow-outline focus:outline-none text-white py-2 px-1 rounded-full w-full">Submit Link</button>
                    </div>
                    <div className='flex justify-start w-full text-xl text-slate-400 cursor-pointer'>
                        <span className='text-2xl cursor-pointer'> <MdVideoCall/></span>
                        <span className='cursor-pointer'> <BiPhoneCall/></span>
                    </div>
                </div>
            </div>
            
        </div>
    </form>

  )
}

export default AllGroups