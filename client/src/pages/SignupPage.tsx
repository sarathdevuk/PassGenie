import { useNavigate } from 'react-router-dom';
import Form from '../componants/AuthForm'
import { signup } from '../services/userApi';
import toast  from 'react-hot-toast'
import { useState } from 'react';


function SignupPage() {

  const [loading , setLoading] = useState(false)

  const navigate = useNavigate() ;

  const handleSignup = ( values : object) => {
    setLoading(!loading)
    signup(values).then(() => {
        toast.success("Account created" , {
          position: "bottom-center"
        })
      navigate('/') 
      setLoading(!loading)
    }).catch((err) => { 
      setLoading(false)
      toast.error(err.error.message , {
        position: "top-center", 
      
    
      })
    })
    
  }

  return (
    
    <Form 
    header={"Signup"} 
    redirect={"/"}
    buttonName={"Sign Up"}
    redirectBtnName={"Login"}
    handleFunction={handleSignup}
    formType={"signup"}
    loading = {loading}
    >
    </Form>


  )
}

export default SignupPage