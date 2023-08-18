

import axios from "axios";



export async function getData(current,translate,text){
    const encodedParams = new URLSearchParams();
encodedParams.set('source_language', current);
encodedParams.set('target_language', translate);
encodedParams.set('text', text);

const options = {
  method: 'POST',
  url: 'https://text-translator2.p.rapidapi.com/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key':'5b0c75fef4msh57e207a8ade3657p161ffcjsnc31f3f64ac2c',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
   
	return response
} catch (error) {
 
	return error
}

}


export async function getLanguage(){
    console.log(process.env.NEXT_APIKEY)

    const options = {
        method: 'GET',
        url: 'https://text-translator2.p.rapidapi.com/getLanguages',
        headers: {
          'X-RapidAPI-Key': '5b0c75fef4msh57e207a8ade3657p161ffcjsnc31f3f64ac2c',
          'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          return response.data.data
      } catch (error) {
          console.error(error);
      }

}