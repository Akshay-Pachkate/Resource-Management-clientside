import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import axios from "axios";
import {Navigate} from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import { UserContext } from '../context/userContext';



const Login = () => {
    const {setUser} = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const {user} = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/login/', {email, password, withCredentials: true});

            if(response.data.status === 200){
                setRedirect(true);
                enqueueSnackbar("Login Successful", {variant: 'success'}, {autoHideDuration: 2000}) 
                setUser(response.data.userDetails);
            }else 
                enqueueSnackbar(`Login Failed ${response.data.message}`, {variant: 'error'}, {autoHideDuration: 2000})
        } catch (error) {
            console.error(error);
        }
    }

    if(user){
        return <Navigate to="/" />
    }

    if(redirect) {
        return <Navigate to="/" />
    }


    return (
        <>
        <form className='flex justify-center justify-items-center' > 


            <div className=' rounded-lg  flex flex-col justify-center justify-items-center  bg-gray-50 py-8 my-32 max-w-[500px] max-md:bg-white max-md:shadow-none max-md:border-none md:w-[70%] border sm:w-5/6 w-5/6'>

                <div className='text-center font-medium  md:text-4xl text-3xl mb-8'>Login
                </div>


                <div className='flex justify-center w-[60%] mx-auto max-sm:w-[90%]'>
                    <TextField
                        id="email"
                        label="Email"
                        required
                        value={email}
                        style={{ width: "100%", marginBottom: "20px" }}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div className='flex justify-center w-[60%] mx-auto max-sm:w-[90%]'>
                    <TextField
                        style={{ width: "100%", marginBottom: "12px" }}
                        required
                        type="password"
                        id="password"
                        label="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                <div className='mb-2 text-blue-500 flex justify-center'>
                    <div >
                        <a href="#" >Forgot Password?</a>
                    </div>
                </div>

                <div className='flex justify-center mt-4'>
                    <button onClick={(e) => handleSubmit(e)} className="text-md transition-all duration-300 text-center  font-semibold text-white border border-white px-4 py-2 cursor-pointer rounded-xl bg-primary w-[100px] " >Login</button>                
                </div>

            </div>

        </form>
        </>
    );
}

export default Login