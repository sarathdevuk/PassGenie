import { useNavigate } from 'react-router-dom';
import Form from '../componants/AuthForm'
import { signup } from '../services/userApi';
import toast  from 'react-hot-toast'


function SignupPage() {

  const navigate = useNavigate() ;

  const handleSignup = ( values : object) => {
    console.log(values);
    signup(values).then((response) => {
      console.log(response);
      navigate('/')
    }).catch((err) => {
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
    >
    </Form>


  )
}

export default SignupPage