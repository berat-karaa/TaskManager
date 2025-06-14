import React, {useState} from 'react'
import {UserPlus,User,Mail,Lock,} from 'lucide-react'
import {Inputwrapper,MESSAGE_ERROR,MESSAGE_SUCCESS,BUTTONCLASSES} from '../assets/dummy.jsx'
import axios from 'axios'



  const API_URL = "http://localhost:4000"
  const INITIAL_FORM= {name:"", email:"", password: ""}
const SignUp = ({onSwitchMode}) => {
  const [formData, setFormData]= useState(INITIAL_FORM);
  const [loading,setLoading] = useState(false);
  const [message, setMessage]= useState({text: "", type:""});


  const handleSubmit=async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage({text:"", type:""})

    try{
      const{data} =await axios.post(`${API_URL}/api/user/register`,formData)
      console.log("Signup Successfull", data)
      setMessage({text:"Registration successful! You can now log in", type:"success"})
      setFormData(INITIAL_FORM)
    }
    catch(err){
      console.error("Signup error:", err)
      setMessage({text: err.response?.data?.message || "An error occoured. Please try again.", type:"error"})
    }
    finally{
      setLoading(false)
    }
  }
  const FIELDS = [
  { name: "name", type: "text", placeholder: "Full Name", icon: User },
  { name: "email", type: "email", placeholder: "Email", icon: Mail },
  { name: "password", type: "password", placeholder: "Password", icon: Lock },
];

  return (
    <div className='max-w-md w-full bg-white dark:bg-gray-800 shadow-lg border border-purple-100 dark:border-gray-700 rounded-xl p-8'>
      <div className='mb-6 text-center'>
        <div className='w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-full
        mx-auto flex items-center justify-center mb-4'>
          <UserPlus className='w-8 h-8 text-white'/>

        </div>
        <h2 className='text-2xl font-bold text-gray-800 dark:text-gray-200'>
          Hesap Oluştur
        </h2>
        <p className='text-gray-500 dark:text-gray-400 text-sm mt-1'>
          WebGöreve Katıl ve Görevlerini Yönet
        </p>

      </div>
      {message.text &&(
        <div className={message.type==='success' ? MESSAGE_SUCCESS: MESSAGE_ERROR}>
          {message.text}
        </div>
      )}
      <form onSubmit={handleSubmit} className='space-y-4'>
        {FIELDS.map(({name,type,placeholder,icon: Icon}) => (
          <div key={name} className={`${Inputwrapper} dark:border-gray-600 dark:focus-within:border-purple-500 dark:focus-within:ring-purple-500`}>
            {Icon && <Icon className='text-purple-500 dark:text-purple-400 w-5 h-5 mr-2'/>}

            <input type={type} placeholder={placeholder} value={formData[name]} 
            onChange={(e) => setFormData({...formData, [name]: e.target.value})} 
            className='w-full focus:outline-none text-sm text-gray-700 dark:text-gray-200 dark:placeholder-gray-400' required/>
          </div>
        ))}
        <button type='submit' className={BUTTONCLASSES} disabled={loading}>
          {loading ? "Signing Up..." : <><UserPlus className='w-4 h-4' />Sign Up</>}

        </button>
      </form>
      <p className='text-center text-sm text-gray-600 dark:text-gray-400 mt-6'>
        
        <button onClick={onSwitchMode} className='text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 hover:underline
        font-medium transition-colors'>
          Hesabın zaten var mı?
        </button>
      </p>
    </div>
  )
}

export default SignUp