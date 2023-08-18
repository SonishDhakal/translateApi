'use client'


import {useState,useEffect} from 'react'
import TextArea from '@components/TextArea'
import { getData, getLanguage } from '@lib/server'
import Loading from '@components/Loading'

TextArea
const page = () => {
    const [textDate,setTextData] = useState({
        currrent:'',
        translate:''

    })
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const [language,setLanguage] = useState([])
    const [lanData,setlanData] = useState({
        currrent:'',
        translate:''
    })


    async function fetchText(){
       const res = await getData(lanData.currrent, lanData.translate, textDate.currrent)
    
       if(res?.response?.status ===400){
        return setError("Something Went Wrong")
        setLoading(false)
       }

       setTextData({
        ...textDate,
        translate:res.data.data.translatedText
       })
       setLoading(false)

    }

    async function fetchlanguage(){
        const languages = await getLanguage()
   
        setLanguage(languages?.languages)
    }

    useEffect(() =>{
       fetchlanguage()
    }, [])

    function handelSubmit(e){
        console.log(textDate)
       if(!textDate.currrent){
        return setError("Invalid Text")
       }
       if(!lanData.currrent || !lanData.translate){
        return setError("Select A language")
       }

fetchText()




    }





  return ( 
  <main className='h-screen w-screen grid place-content-center gap-4' >
   { language?.length===0 ? <Loading / > :
     <div className="w-[300px] sm:-w-[300px] p-8 md:w-[600px] xl:w-[800px] border flex flex-col gap-4">
     <h2 className='font-bold text-blue-400 text-3xl text-center mb-4'>Translate Your Text</h2>
   <div className='flex gap-4 flex-start'>
   <TextArea Landata={lanData} name='currrent' setLanData={setlanData} lan={lanData.currrent} title='Enter your text' text={textDate.currrent}  languages={language} disabled={false} setData={setTextData} data={textDate}/>
     <TextArea Landata={lanData} setLanData={setlanData} name='translate' lan={lanData.translate} text={textDate.translate}  languages={language} disabled={true} />
   </div>

 <div>
     <button onClick={handelSubmit} className='px-8 py-2 bg-blue-500 rounded-md text-white border-none'>Translate</button>
    </div>
 </div>}


<p className='text-center text-red-400 '>  {error && error}</p>

 </main>
 
  )
}

export default page