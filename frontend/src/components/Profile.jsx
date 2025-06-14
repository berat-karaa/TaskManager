import React, { useEffect, useState } from 'react'
import {toast, ToastContainer} from 'react-toastify'
import {BACK_BUTTON, DANGER_BTN, FULL_BUTTON, INPUT_WRAPPER, personalFields, SECTION_WRAPPER, securityFields} from '../assets/dummy.jsx'
import {ChevronLeft, UserCircle, Save, Shield, Icon, Lock, LogOut} from 'lucide-react'
import {UNSAFE_useFogOFWarDiscovery, useNavigate} from 'react-router-dom'
import axios from 'axios'

const API_URL= 'http://localhost:4000'

const Profile = ({setCurrentUser,onLogout}) => {



    const [profile, setProfile] =useState({name:"", email:""})
    const [passwords, setPasswords] =useState({current:"", new:"", confirm:""})
    const navigate=useNavigate();
    const initial =profile.name.charAt(0).toUpperCase()


    useEffect(()=> {
        const token =localStorage.getItem('token')
        if(!token) return
        axios
            .get(`${API_URL}/api/user/me`, {headers: {Authorization: `Bearer ${token}`}})
            .then(({data})=> {
                if(data.success)
                setProfile({name: data.user.name, email: data.user.email})
            else toast.error(data.message || "Hesap bilgileri yüklenemedi.")
        })
        .catch((err) => toast.error(err.response?.data?.message || "Hesap Yüklenemedi."))
    }, [])

    const saveProfile=async (e)=> {
        e.preventDefault()
        try {
            const token=localStorage.getItem('token')
            const{data} =await axios.put(
                `${API_URL}/api/user/profile`,
                {name: profile.name, email:profile.email},
                {headers: {Authorization: `Bearer ${token}`}}
            )
            if(data.success){
                setCurrentUser((prev) => ({
                    ...prev,
                    name:profile.name,
                    email:profile.email,
                    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name)}&background=random`
                }))
                toast.success("Profil başarıyla güncellendi")
                
            }else toast.error(data.message || "Profil güncellenemedi")
            
        }
         catch (err) {
            toast.error(err.response?.data?.message || "Hesap güncellemesi başarısız.")
            
        }


    }

    const changePassword =async (e) => {
        e.preventDefault()
        if(passwords.new !== passwords.confirm){
            return toast.error("Şifre eşleştirilemedi.")
        }
        try {
            const token =localStorage.getItem('token')
            const {data} =await axios.put(
                `${API_URL}/api/user/password`,
                {currentPassword: passwords.current, newPassword: passwords.new},
                {headers: {Authorization: `Bearer ${token}`}}
            )
            if(data.success){
                toast.success("Şifre başarıyla değiştirildi.")
                setPasswords({current:"", new:"",confirm:""})
            }
            else toast.error(data.messsage)

        } catch (err) {
            toast.error(err.response?.data?.messsage || "Şifre değiştirme başarısız oldu.")
            
        }
        
    }


  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
        <ToastContainer position='top-center' autoClose={3000}/>
        <div className='max-w-4xl mx-auto p-6'>
            <button onClick={() => navigate(-1)} className={BACK_BUTTON}>
                <ChevronLeft className='w-5 h-5 ml-185'/>
                Ana Sayfa
            </button>
            <div className='flex items-center gap-4 mb-8'>
                <div className='w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600
                flex items-center justify-center text-white text-2xl font-bold shadow-md'>
                    {initial}
                </div>
                <div>
                    <h1 className='text-3xl font-bold text-gray-800 dark:text-white'>Hesap Ayarları</h1>
                    <p className='text-gray-700 dark:text-gray-300 text-sm'>Hesabını Yönet ve Parolanı Güncelle</p>
                </div>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
                <section className={`${SECTION_WRAPPER} dark:bg-gray-800 dark:border-gray-700`}>
                    <div className='flex items-center gap-2 mb-6'>
                        <UserCircle className='text-purple-500 dark:text-purple-400 w-5 h-5'/>
                        <h2 className='text-xl font-semibold text-gray-800 dark:text-white'>Kişisel Bilgiler</h2>
                    </div>
                    <form onSubmit={saveProfile} className='space-y-4'>
                        {personalFields.map(({name,type,placeholder,icon: Icon})=> (
                            <div key={name} className={`${INPUT_WRAPPER} `}>
                                {Icon && <Icon className='text-purple-500 dark:text-purple-400 w-5 h-5 mr-2'/>}
                                <input type={type} placeholder={placeholder} value={profile[name]} 
                                onChange={(e) => setProfile({...profile, [name]: e.target.value})} 
                                className='w-full focus:outline-none text-sm cursor-pointer dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400' required/>
                                                                                           
                            </div>            
                        ))}
                        <button className={`${FULL_BUTTON} dark:from-fuchsia-600 dark:to-purple-700`}>
                            <Save className='w-4 h-4'/>Değişiklikleri Kaydet
                        </button>
                    </form>
                </section>
                <section className={`${SECTION_WRAPPER} dark:bg-gray-800 dark:border-gray-700`}>
                    <div className='flex items-center gap-2 mb-6'>
                        <Shield className='text-purple-500 dark:text-purple-400 w-5 h-5'/>
                        <h2 className='text-xl font-semibold text-gray-800 dark:text-white'>Güvenlik</h2>
                    </div>

                    <form onSubmit={changePassword} className='space-y-4'>
                        {securityFields.map(({name,placeholder}) => (
                            <div key={name} className={`${INPUT_WRAPPER} dark:border-gray-600 dark:focus-within:border-purple-500 dark:focus-within:ring-purple-500`}>
                                {Lock && <Lock className='text-purple-500 dark:text-purple-400 w-5 h-5 mr-2'/>}
                                <input type="password" placeholder={placeholder} value={passwords[name]} 
                                onChange={(e) => setPasswords({...passwords, [name]: e.target.value})} 
                                className='w-full focus:outline-none text-sm cursor-pointer dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400' required/>
                            </div>
                        ))}
                        <button className={`${FULL_BUTTON} dark:from-fuchsia-600 dark:to-purple-700`}>
                            <Shield className='w-4 h-4'/>Şifre Değiştirme
                        </button>
                        <div className='mt-8 pt-6 border-t border-purple-100 dark:border-gray-700'>
                            <h3 className='text-red-600 dark:text-red-400 font-semibold mb-4 flex items-center gap-2'>
                                <LogOut className='w-4 h-4'/>DİKKAT
                            </h3>
                            <button className={`${DANGER_BTN} dark:bg-red-900/50 dark:text-red-400 dark:hover:bg-red-900/70`} onClick={onLogout}>
                                Çıkış Yap
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Profile