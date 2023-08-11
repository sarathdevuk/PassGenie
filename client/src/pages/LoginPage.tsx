import { useNavigate } from 'react-router-dom'
import AuthForm from '../componants/AuthForm'
import { authUser, login } from '../services/userApi'
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';

function LoginPage() {
  const navigate = useNavigate() ;

  const handleLogin = (values : object) => { 
    console.log(values)
    login(values).then((response)=> {
      console.log(response.data , "success");
      
      localStorage.setItem('jwtToken' , response.data?.token)
      navigate('/home')
    })
    .catch((err) => {
      console.log(err);
      
      toast.error(err.error.message , {
        position: "top-center",
        // id:"error"
      })
    })
  }

  useEffect(()=> {
    const token = localStorage.getItem('jwtToken')
    if(token) {
      navigate('/home')
    }
  })

  return (
    <AuthForm 
    header={"Login"}
    redirect={"/signup"}
    buttonName={"Login"}
    redirectBtnName={"Sign up"}
    handleFunction={handleLogin}
    formType={'login'}
    >
    </AuthForm>

  )
}

export default LoginPage