import React, {useState} from 'react'
import TableDummy from './TableDummy'
import { BsPlusLg } from "react-icons/bs";
import EmptyTable from './EmptyTable';

const Table = () => {
    const [adder, setAdder] = useState(true);
    const [formData, setFormData] = useState(
        {
            user1: "", 
            role1: "", 
            user2: "", 
            role2: "", 
            user3: "", 
            role3: "", 
            user4: "", 
            role4: "", 
            user5: "", 
            role5: "", 
            group_title: "", 
        }
      )

      function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
      }

      function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        fetch('https://school-list.onrender.com/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setFormData({
            user1: "", 
            role1: "", 
            user2: "", 
            role2: "", 
            user3: "", 
            role3: "", 
            user4: "", 
            role4: "", 
            user5: "", 
            role5: "", 
            group_title: ""
          });
        })
        .catch(error => console.error(error));
      }
    function handleAdder() {
        setAdder(false) 
    }
  return (
    <form id='formid' onSubmit={handleSubmit} className="flex flex-col justify-center items-center py-10 mt-16">
        <div className='flex justify-between items-center p-1 fixed top-0 left-0 right-0 border-2 border-gray-200 dark:border-gray-700 bg-white opacity-75 shadow-md'>
            <span className='w-1/5'></span>
            <h3 className='font-bold text-xl'>CREATE GROUPS</h3>
            <button className='shadow bg-gray-300 hover:bg-gray-300 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded-full'>copy link</button>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 grid-cols-1">
            <TableDummy title="Group 1 - Team 1"/>
            <TableDummy title="Group 2 - Team 2"/>
            <div  className='flex flex-col justify-center items-center'>
                <div className=' uppercase text-xl font-bold'>
                    Group 3 - 
                    <input
                        value={formData.group_title} 
                        onChange={handleChange} 
                        type='text' 
                        name='group_title' 
                        placeholder="Enter Name" 
                        required 
                        className='px-2 h-8 text-lg outline-1 outline-slate-300 max-w-[170px]'
                    />
                    </div>
                <div className="max-w-[460px] m-2 py-8 px-8 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6relative overflow-x-auto shadow-md sm:rounded-lg ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    
                        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                            
                            <tr>
                                <th scope="col" className="px-2 py-3 text-center bg-gray-400 dark:bg-gray-800">
                                    SN
                                </th>
                                <th scope="col" className="px-6 py-3 text-center bg-gray-400 dark:bg-gray-800">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-center bg-gray-400 dark:bg-gray-800">
                                    Role
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-2 py-4">
                                    1
                                </td>
                                <th scope="row" className="px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    <input
                                        value={formData.user1} 
                                        onChange={handleChange} 
                                        type='text' 
                                        name='user1' 
                                        placeholder="Enter Name" 
                                        required 
                                        className='px-2 h-8 outline-1 outline-slate-300'
                                    />
                                </th>
                                <td className="px-2">
                                    <input
                                        value={formData.role1} 
                                        onChange={handleChange} 
                                        type='text' 
                                        name='role1' 
                                        placeholder="Enter Role" 
                                        required 
                                        className='max-w-[90px] h-8 outline-1 outline-slate-300'
                                    />
                                </td>
                                
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-2 py-4">
                                    2
                                </td>
                                <th scope="row" className="px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    <input
                                        value={formData.user2} 
                                        onChange={handleChange} 
                                        type='text' 
                                        name='user2' 
                                        placeholder="Enter Name" 
                                        required 
                                        className='px-2 h-8 outline-1 outline-slate-300'
                                    />
                                </th>
                                <td className="px-2">
                                    <input
                                        value={formData.role2} 
                                        onChange={handleChange} 
                                        type='text' 
                                        name='role2' 
                                        placeholder="Enter Role" 
                                        required 
                                        className='max-w-[90px] h-8 outline-1 outline-slate-300'
                                    />
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-2 py-4">
                                    3
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    <input
                                        value={formData.user3} 
                                        onChange={handleChange} 
                                        type='text' 
                                        name='user3' 
                                        placeholder="Enter Name" 
                                        required 
                                        className='px-2 h-8 outline-1 outline-slate-300'
                                    />
                                </th>
                                <td className="px-2">
                                    <input
                                        value={formData.role3} 
                                        onChange={handleChange} 
                                        type='text' 
                                        name='role3' 
                                        placeholder="Enter Role"  
                                        required 
                                        className='max-w-[90px] h-8 outline-1 outline-slate-300'
                                    />
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-2 py-4">
                                    4
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    <input
                                        value={formData.user4} 
                                        onChange={handleChange} 
                                        type='text' 
                                        name='user4' 
                                        placeholder="Enter Name" 
                                        required 
                                        className='px-2 h-8 outline-1 outline-slate-300'
                                    />
                                </th>
                                <td className="px-2">
                                    <input
                                        value={formData.role4} 
                                        onChange={handleChange} 
                                        type='text' 
                                        name='role4' 
                                        placeholder="Enter Role" 
                                        required 
                                        className='max-w-[90px] h-8 outline-1 outline-slate-300'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="px-2 py-4">
                                    5
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    <input
                                        value={formData.user5} 
                                        onChange={handleChange} 
                                        type='text' 
                                        name='user5' 
                                        placeholder="Enter Name" 
                                        required 
                                        className='px-2 h-8 outline-1 outline-slate-300'
                                    />
                                </th>
                                <td className="px-2">
                                    <input
                                        value={formData.role5} 
                                        onChange={handleChange} 
                                        type='text' 
                                        name='role5' 
                                        placeholder="Enter Role" 
                                        required 
                                        className='max-w-[90px] h-8 outline-1 outline-slate-300'
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {adder ? <div className='flex flex-col justify-center items-center mt-6'>
                <div className='w-full flex flex-col justify-center items-center h-96'>
                    <button onClick={handleAdder}  className='bg-[#f4f5f8] text-7xl h-48 w-48 flex flex-col justify-center items-center shadow-sm rounded-full'>
                        <BsPlusLg />
                        <p className=' text-lg'>Add New Group</p>
                    </button>
                </div>
            </div> : <EmptyTable title="Group 4 - Team 4"/>}  
        </div>
        <button form='formid' className="my-7 shadow bg-[#17255A] hover:bg-[#223785] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full w-full">Create Groups</button>
    </form>

  )
}

export default Table