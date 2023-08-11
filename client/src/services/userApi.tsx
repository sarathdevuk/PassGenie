import axiosInstance from "../axios/axios";

// check the user logged in 
export const authUser = () => {
  return axiosInstance().get('/auth') 
}

// signup 
export const signup = (values: object) => {
  return axiosInstance().post('/register' , {...values}) ;
}

export const login = (values: object) => {
  return axiosInstance().post('/login',{...values}) ;
};


export const addPassword = (appName: string, userName: string, password: string) => {
  return axiosInstance().post('/password/add', { appName, userName, password });
};

export const getPasswords = () => {
  return axiosInstance().get('/passwords');
}; 


export const deletePassword = ( id : string ) =>{
  return axiosInstance().patch(`/password/${id}` )
}