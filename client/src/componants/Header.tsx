import React , {useEffect, useState}  from 'react';
import { useNavigate } from 'react-router-dom';
import { FcLock } from "react-icons/fc";
import { authUser } from '../services/userApi';
import { toast } from 'react-hot-toast';


const Header: React.FC = () => {
  const navigate = useNavigate();
  const [showDiv , setShowDiv] = useState(false) ;

  useEffect(() => {
    authUser().then((response)=>{
  
    if(!response.data.success){
      navigate('/')
    }
  }).catch((err)=>{
    console.log(err);
    
    toast.error("something went Wrong" , {position : 'top-center'})
     
  })

  }, [])

  return (


<div className="p-3" >
     <nav style={{ border: "1px solid #e5e7eb", position: 'fixed', width: '100%', top: '0', left: '0', right: '0' }} className="relative  z-50 px-4 py-4 flex justify-between items-center bg-white shadow-md">
                <a className="text-3xl font-bold leading-none flex " href="#">
                    <h1 className='text-violet-800 text-2xl'>PassGenie   </h1>  
                    <span className='m-auto'><FcLock size={22}/></span>
                </a>
          

               <div className="items-center md:order-2 cursor-pointer ">
                <img  onClick={()=> {setShowDiv(!showDiv)}} className="w-9 h-9 rounded-full object-cover"
                 src='https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png' alt="user img" 
                  />

                  <div style={true ? { display: 'block' } : { display: 'none' }} className="z-50 absolute right-2 top-12  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                 {
                  showDiv ? 
                  <>


                   <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                     <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          onClick={() => {
                   localStorage.removeItem('jwtToken');
                     navigate('/')
                            }}
                      >Logout</p>
                         </li>
                     </ul>
                
                
                  </> 
                  :"" }   
                 
                 
                  </div>
               </div>

      </nav>

    </div>
  )

}


export default Header
