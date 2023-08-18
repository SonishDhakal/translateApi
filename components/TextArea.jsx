import React from 'react'

const TextArea = ({
    languages,disabled,setData,data,text,title,lan,name, setLanData,Landata
}) => {
  return (
    <div className='flex flex-col gap-4 justify-center flex-1' >
      <select value={lan}  onChange={(e) => setLanData({...Landata,[name]:e.target.value})}  id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option>Choose a Language</option>

  {
    languages?.map(lan => (
        <option  key={lan.code} value={lan.code}>{lan.name}</option>
    ))
  }
  {/* <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option> */}
</select>
<textarea value={text}  onChange={(e) => setData({...data,currrent:e.target.value})} disabled={disabled} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={title}></textarea>
       
    </div>
  )
}

export default TextArea