
export const checkUser = async (Email,Password,setUserName,setScreen)=>{
  try {
    const response = await fetch(`http://192.168.6.1:7676/mobile/isuser/${Email}/${Password}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    // data = {id:"NHuXe29M6l916z15w0rc",email:"med@mail.com",profile:"user",password:"0000",name:"med",found:true}
    console.log('welcome ', data.name);
    if(data){
      setUserName(data.name)
      setScreen(3)
      }
  } catch (error) {
    console.error('Error:', error.message);
  }
  }











  export const getModules = async (course)=>{
    try {
      const response = await fetch(`http://192.168.6.1:7676/mobile/modules/${course}`);
  
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

  
