import React from 'react'

const TableDummy = (props) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className=' uppercase text-xl font-bold'>
            {props.title}
        </div>
        <div className="max-w-[470px] m-2 py-8 px-8 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6relative overflow-x-auto shadow-md sm:rounded-lg ">
            
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
                            John Smith
                        </th>
                        <td className="px-6 max-w-[90px]">
                            FrontEnd
                        </td>
                        
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="px-2 py-5">
                            2
                        </td>
                        <th scope="row" className=" w-[250px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            Daniel GLo
                        </th>
                        <td className="px-6 py-4 max-w-[90px]">
                            Web 3
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="px-2 py-5">
                            3
                        </td>
                        <th scope="row" className=" w-[250px] px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            Mo Salah
                        </th>
                        <td className="px-6 max-w-[90px]">
                            Designer
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="px-2 py-5">
                            4
                        </td>
                        <th scope="row" className="w-[250px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            Jan Doe
                        </th>
                        <td className="px-6 max-w-[90px]">
                            BackEnd
                        </td>
                    </tr>
                    <tr>
                        <td className="px-2 py-5">
                            5
                        </td>
                        <th scope="row" className="w-[250px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            Donald Trump
                        </th>
                        <td className="px-6 max-w-[90px]">
                            FrontEnd
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

  )
}

export default TableDummy