import { LogIn,User,Mail,Eye,Lock,EyeOff } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {toast, ToastContainer} from 'react-toastify'
import { BUTTON_CLASSES, INPUTWRAPPER} from '../assets/dummy.jsx'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

  const INITIAL_FORM= {email:"", password: ""}
const Login = ({onSubmit, onSwitchMode}) => {
  const [showPassword, setShowPassword] =useState(false)
  const [loading,setLoading] = useState(false)
  const [formData,setFormData]=useState(INITIAL_FORM)
  const [rememberMe, setRememberMe]= useState(false)
  const navigate=useNavigate()
  const url= 'http://localhost:4000'

  useEffect(()=>{
    const token=localStorage.getItem("token")
    const userId=localStorage.getItem("userId")
    if(token){
      (async () => {
        try {
          const {data} =await axios.get(`${url}/api/user/me`,{
          headers: {Authorization: `Bearer ${token}` },
        });
        if(data.success){
          onSubmit?.({token,userId, ...data.user})
          toast.success("Session restored. Redirecting...")
          navigate('/')
        }
        else{
          localStorage.clear()
        }

        }
         catch (err) {
          toast.error(err.response?.data?.message || "Failed to restore session");
          localStorage.clear()
          
        }
      })();
    }

  }, [navigate, onSubmit])

const handleSubmit = async (e) => {
  e.preventDefault()
  if(!rememberMe){
    toast.error('You must enable "Remember me" to login.')
    return 
   }
   setLoading(true)

   try{
      const {data} =await axios.post(`${url}/api/user/login`, formData)
      if(!data.token) throw new Error(data.message||"Login Failed")
      
      localStorage.setItem("token",data.token)
      localStorage.setItem("userId",data.user.id)
      setFormData(INITIAL_FORM)
      onSubmit?.({token:data.token,userId:data.user.id, ...data.user})
      toast.success("Login successful! Redirecting...")
      setTimeout(() => navigate("/"), 1000)
   }
   catch(err){
    const msg=err.response?.data?.message || err.message
    toast.error(msg)

   }
   finally{
    setLoading(false)
   }
}

const handleSwitchMode=() => {
  toast.dismiss()
  onSwitchMode?.()
}

const FIELDS = [
  { name: "email", type: "email", placeholder: "  Email", icon: Mail },
  { name: "password", type: showPassword ? "text" :"password", placeholder: "  Password", icon: Lock, isPassword: true },
];

  return (
    <div className='max-w-md bg-white dark:bg-gray-800 w-full shadow-lg border border-purple-100 dark:border-gray-700 rounded-xl p-6'>
      <ToastContainer position='top-center' autocClose={3000} hideProgressBar/>
      <div className='mb-1 text-center'>
        <div className='w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-full
        mx-auto flex items-center justify-center mb-5'>
          <LogIn className='w-8 h-8 text-white'/>
        </div>
        <h2 className='text-2xl font-bold text-gray-800 dark:text-gray-200'>
          Tekrar Hoşgeldin
        </h2>
        <p className='text-gray-500 dark:text-gray-400 text-sm mt-1 mb-3'>
          WebGörev'e devam etmek için giriş yapınız.
        </p>
        <form onSubmit={handleSubmit} className='space-y-4'>
          {FIELDS.map(({name,type,placeholder,icon :Icon, isPassword}) =>(
            <div key={name} className={`${INPUTWRAPPER} dark:border-gray-600 dark:focus-within:border-purple-500 dark:focus-within:ring-purple-500`}>
              {Icon && <Icon className='text-purple-500 dark:text-purple-400 w-5 h-5'/>}

              <input type={type} placeholder={placeholder} value={formData[name]}
              onChange={(e) => setFormData({ ...formData, [name]: e.target.value})}
              className='w-full focus: outline-none text-sm text-gray-700 dark:text-gray-200 dark:placeholder-gray-400' required />

              {isPassword && (
                <button type='button' onClick={() => setShowPassword((prev) => !prev)}
                className='ml-2 text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors'>
                  {showPassword ? <EyeOff className='w-5 h-5'/>  :<Eye className='w-5 h-5'/>}
                </button>
              )}
            </div>
          ))}
          <div className='flex items-center'>
            <input type="checkbox" id='rememberMe' checked={rememberMe} onChange={() => setRememberMe(!rememberMe)}
            className='h-4 w-4 text-purple-500 focus:ring-purple-400 border-gray-300 dark:border-gray-600 rounded' required />
            <label htmlFor="rememberMe" className='ml-2 block text-sm text-gray-700 dark:text-gray-300'> Beni hatırla</label>
          </div>
          <button type='submit' className={BUTTON_CLASSES} disabled={loading}>
            {loading ? (
              "Logging in..."
            ): (
              <>
              <LogIn className='w-4 h-4'/> 
                Giriş Yap
              </>
            )}
          </button>
        </form>
        <p className='text-center text-sm text-gray-600 dark:text-gray-400 mt-4'>
          <button type='button' className='text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 hover:underline
          font-medium transition-colors' onClick={handleSwitchMode}>
            Yeni Hesap Oluştur
          </button>
        </p>
      </div>
    </div>
  )
}

export default Login