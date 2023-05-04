import React, {useState} from 'react'
import TableDummy from './TableDummy'

const Table = () => {
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
    //     fetch('https://scuudu-app.onrender.com/api/v1/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    //   })
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(data);
    //       setFormData({
    //         user1: "", 
    //         role1: "", 
    //         user2: "", 
    //         role2: "", 
    //         user3: "", 
    //         role3: "", 
    //         user4: "", 
    //         role4: "", 
    //         user5: "", 
    //         role5: "", 
    //         group_title: ""
    //       });
    //     })
    //     .catch(error => console.error(error));
      }
  return (
    <form id='formid' onSubmit={handleSubmit} className="flex flex-col justify-center items-center py-10">
        <div className="grid lg:grid-cols-2 gap-6 grid-cols-1">
            <div  className='flex flex-col justify-center items-center'>
                <div className=' uppercase text-xl font-bold'>
                    Group 1 - 
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
                <div className="max-w-[470px] m-2 py-8 px-8 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6relative overflow-x-auto shadow-md sm:rounded-lg ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    
                        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                            
                            <tr>
                                <th scope="col" className="px-2 py-3 text-center">
                                    SN
                                </th>
                                <th scope="col" className="px-6 py-3 text-center bg-gray-50 dark:bg-gray-800">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
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
            <TableDummy title="Group 2 - Team 2"/>
            <TableDummy title="Group 3 - Team 3"/>
            <TableDummy title="Group 4 - Team 4"/>
        </div>
        <button form='formid' className=" my-6 shadow bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Create Groups</button>
    </form>

  )
}

export default Table