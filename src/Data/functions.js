const ip = '192.168.6.1'
const port = '7676'


export const checkUser = async (Email,Password,setUserName,navigation)=>{
  try {
    const response = await fetch(`http://${ip}:${port}/mobile/isuser/${Email}/${Password}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    // data = {id:"NHuXe29M6l916z15w0rc",email:"med@mail.com",profile:"user",password:"0000",name:"med",found:true}
    console.log('welcome ', data.name);
    if(data){
      setUserName(data.name)
      navigation.navigate('Home')
      }
  } catch (error) {
    console.error('Error:', error.message);
  }
  }











  export const getModules = async (course)=>{
    try {
      const response = await fetch(`http://${ip}:${port}/mobile/modules/${course}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      // data =[{"id":1,"description":"Concepts fondamentaux des réseaux informatiques.","course":1,"title":"Introduction aux Réseaux"}]
      if(data){
          return data
        }else{
          console.log('no courses')
        }
    } catch (error) {
      console.error('Error:', error.message);
    }
    }






    
    export const getChapters = async (moduleId)=>{
      try {
        const response = await fetch(`http://${ip}:${port}/mobile/chapters/${moduleId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // data =[{"id":2,"title":"Types de réseaux","module_id":1}]
        if(data){
            return data
          }else{
            console.log('no Chapters')
          }
      } catch (error) {
        console.error('Error:', error.message);
      }
      }
  
  

      export const getQuizes = async (chapterId = 1)=>{
        try {
          const response = await fetch(`http://${ip}:${port}/mobile/tests/${chapterId}`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          // data =[{"id":2,"title":"Types de réseaux","module_id":1}]
          if(data){
              return data
            }else{
              console.log('no Chapters')
            }
        } catch (error) {
          console.error('Error:', error.message);
        }
        }
    
    
  