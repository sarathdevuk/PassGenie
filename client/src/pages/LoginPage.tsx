import { useNavigate } from 'react-router-dom'
import AuthForm from '../componants/AuthForm'
import { login } from '../services/userApi'
import { toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';

function LoginPage() {

  const [loading , setLoading] = useState(false)

  const navigate = useNavigate() ;

  const handleLogin = (values : object) => { 
    console.log(values)
    setLoading(!loading)
    login(values).then((response)=> {
      console.log(response.data , "success");
      setLoading(!loading)
      localStorage.setItem('jwtToken' , response.data?.token)
      navigate('/home')
    })
    .catch((err) => {
      setLoading(false)

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
    loading = {loading}
    >
    </AuthForm>

  )
}

export default LoginPage