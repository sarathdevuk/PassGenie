import React , {useState}  from 'react';
import { useNavigate } from 'react-router-dom';
import { FcLock } from "react-icons/fc";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [showDiv , setShowDiv] = useState(false) ;

  return (

//     <nav className="bg-white border-gray-200 dark:bg-gray-900">
//     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//       <a href="https://flowbite.com/" className="flex items-center">
//         <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
//         <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//       </a>
//       <div className="flex items-center md:order-2">
//         <button
//           type="button"
//           className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
//           id="user-menu-button"
//           aria-expanded="false"
//           data-dropdown-toggle="user-dropdown"
//           data-dropdown-placement="bottom"
//         >
//           <span className="sr-only">Open user menu</span>
//           <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
//         </button>
//         {/* Dropdown menu */}
//         <div
//           className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
//           id="user-dropdown"
//         >
//           <div className="px-4 py-3">
//             <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
//             <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
//           </div>
//           <ul className="py-2" aria-labelledby="user-menu-button">
//             <li>
//               <a
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//               >
//                 Dashboard
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//               >
//                 Settings
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//               >
//                 Earnings
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//               >
//                 Sign out
//               </a>
//             </li>
//           </ul>
//         </div>
//         <button
//           data-collapse-toggle="navbar-user"
//           type="button"
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-user"
//           aria-expanded="false"
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>
//       </div>
//       <div
//         className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//         id="navbar-user"
//       >
    
//       </div>
//     </div>
//   </nav>
// );

//   } 
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
