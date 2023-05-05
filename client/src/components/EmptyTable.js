import React from 'react'

const EmptyTable = () => {
  return (
    <div  className='flex flex-col justify-center items-center'>
                <div className=' uppercase text-xl font-bold'>
                    Group 4 - 
                    <input
                        type='text' 
                        name='group_title' 
                        placeholder="Enter Name" 
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
                                        type='text' 
                                        name='user1' 
                                        placeholder="Enter Name" 
                                        className='px-2 h-8 outline-1 outline-slate-300'
                                    />
                                </th>
                                <td className="px-2">
                                    <input
                                        type='text' 
                                        name='role1' 
                                        placeholder="Enter Role" 
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
                                        type='text' 
                                        name='user2' 
                                        placeholder="Enter Name" 
                                        className='px-2 h-8 outline-1 outline-slate-300'
                                    />
                                </th>
                                <td className="px-2">
                                    <input
                                        type='text' 
                                        name='role2' 
                                        placeholder="Enter Role" 
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
                                        type='text' 
                                        name='user3' 
                                        placeholder="Enter Name" 
                                        className='px-2 h-8 outline-1 outline-slate-300'
                                    />
                                </th>
                                <td className="px-2">
                                    <input
                                        type='text' 
                                        name='role3' 
                                        placeholder="Enter Role" 
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
                                        type='text' 
                                        name='user4' 
                                        placeholder="Enter Name" 
                                        className='px-2 h-8 outline-1 outline-slate-300'
                                    />
                                </th>
                                <td className="px-2">
                                    <input
                                        type='text' 
                                        name='role4' 
                                        placeholder="Enter Role" 
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
                                        type='text' 
                                        name='user5' 
                                        placeholder="Enter Name"
                                        className='px-2 h-8 outline-1 outline-slate-300'
                                    />
                                </th>
                                <td className="px-2">
                                    <input
                                        type='text' 
                                        name='role5' 
                                        placeholder="Enter Role"
                                        className='max-w-[90px] h-8 outline-1 outline-slate-300'
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
  )
}

export default EmptyTable