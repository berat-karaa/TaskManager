import React, { useCallback, useEffect, useState } from 'react'
import { baseControlClasses, DEFAULT_TASK, priorityStyles } from '../assets/dummy.jsx'
import { Calendar, CheckCircle, Flag, PlusCircle, Save, SquarePen, X } from 'lucide-react'

const API_BASE='http://localhost:4000/api/tasks'

const TaskModal = ({isOpen, onClose, taskToEdit, onSave, onLogout}) => {

  const [taskData, setTaskData] =useState(DEFAULT_TASK)
  const [loading, setLoading] =useState(false)
  const [error, setError] =useState(null)
  const today =new Date().toISOString().split('T')[0];
  

  useEffect(()=> {
    if(!isOpen) return;
    if(taskToEdit) {
      const normalized =taskToEdit.completed === 'Yes' || taskToEdit.completed === true ? 'Yes' : 'No';
      setTaskData({
        ...DEFAULT_TASK,
        title: taskToEdit.title || '',
        description: taskToEdit.description || '',
        priority: taskToEdit.priority || 'Low',
        dueDate: taskToEdit.dueDate?.split('T')[0] || '',
        completed: normalized,
        id: taskToEdit._id,
      });
    }

    else{
      setTaskData(DEFAULT_TASK)

    }
    setError(null)
  }, [isOpen,taskToEdit])

  const handleChange= useCallback((e) => {
    const {name,value} = e.target;
    setTaskData(prev =>({ ...prev, [name]: value}))
  }, [])

  const getHeaders=useCallback(() => {
    const token =localStorage.getItem('token')
      if(!token) throw new Error('No auth Token Found')
        return{
      'Content-Type' : 'application/json',
      Authorization: `Bearer ${token}`,     
      }
    
  }, [])

  const handleSubmit =useCallback(async (e) => {


    e.preventDefault();
    if(taskData.dueDate <today) {
      setError('Due date cannot be in the past.');
      return;
    }
    setLoading(true)
    setError(null)
    try {
      const isEdit =Boolean(taskData.id);
      const url=isEdit ? `${API_BASE}/${taskData.id}/gp` : `${API_BASE}/gp`;
      const resp=await fetch(url, {
        method: isEdit ? 'PUT' : 'POST',
        headers: getHeaders(),
        body: JSON.stringify(taskData),
      });
      if(!resp.ok){
        if(resp.status === 401) return onLogout?.();
        const err =await resp.json();
        throw new Error(err.message || 'Görev kaydedilemedi')
      }
      const saved=await resp.json();
      onSave?.(saved);
      onClose();

    } catch (err) {
      console.error(err)
      setError(err.message || 'Beklenmedik bir hata meydana geldi.');
      
    }
    finally{
      setLoading(false)
    }
  }, [taskData, today, getHeaders, onLogout, onSave, onClose])

  if(!isOpen) return null;



  return (
    <div className='fixed inset-0 backdrop-blur-sm bg-black/20 z-50 flex items-center justify-center
    p-4'>
      <div className='bg-white dark:bg-gray-800 border border-purple-100 dark:border-gray-700 rounded-xl max-w-md w-full
      shadow-lg relative p-6 animate-fadeIn'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-bold text-gray-800 dark:text-gray-200 flex items-center pt-1 gap-3 py-1 '>
            {taskData.id ? <Save className='text-purple-500 w-5 h-5' /> :
            <PlusCircle className='text-purple-500 w-5 h-5' />}
            {taskData.id ? 'Görevini Düzenle' : 'Yeni bir Görev Oluştur'}
          </h2>
          <button onClick={onClose} className='p-2 hover:bg-purple-100 dark:hover:bg-gray-700 rounded-lg
          transition-colors text-gray-500 dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-400'>
            <X className='w-5 h-5'/>
          </button>

        </div>
        {/*FORM TO FILL TO CREATE A TASK*/}
        <form onSubmit={handleSubmit} className='space-y-4'>
          {error && <div className='text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg
          border border-red-100 dark:border-red-800'>{error}</div>}
          <div>
            <label className='flex items-center gap-2 text-m font-medium text-gray-700 dark:text-gray-300 mb-1 '>
              <SquarePen className='w-4 h-4 text-purple-500'/> Görev İsmi
              
            </label>
            <div className='flex items-center border border-purple-100 dark:border-gray-700 rounded-lg px-3 py-2.5
            focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500
            transition-all duration-200'>
              <input type="text" name="title" required value={taskData.title}
              onChange={handleChange} className='w-full focus:outline-none text-sm cursor-pointer bg-transparent dark:text-gray-200'
              placeholder='Görevine bir isim ver' />

            </div>
          </div>



          <div>
            <label className='flex items-center gap-1.5 text-m font-medium text-gray-700 dark:text-gray-300 mb-1'>
              <Flag className='w-4 h-4 text-purple-500'/> Açıklama
            </label>
            <textarea name="description" rows="3"
            onChange={handleChange} value={taskData.description}
              className={`${baseControlClasses} dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200`} 
              placeholder='Görevinin detaylarını yazabilirsin'/>
          </div>

          
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='flex items-center gap-1 text-m font-medium text-gray-700 dark:text-gray-300 mb-2 cursor-pointer '>
                <Flag className='w-4 h-4 text-purple-500 border-'/> Öncelik
              </label>
              <select name='priority' value={taskData.priority} onChange={handleChange}
            className={`${baseControlClasses} ${priorityStyles[taskData.priority]} dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200`}>
              <option >Low</option>
              <option >Medium</option>
              <option >High</option>
            </select>
          </div>
    
          <div >
             <label className='flex items-center gap-1 text-m font-medium text-gray-700 dark:text-gray-300 mb-2 cursor-pointer'>
              <Calendar className='w-4 h-4 text-purple-500'/> Bitiş Tarihi
            </label>
            <input type="date" name='dueDate' required min={today} value={taskData.dueDate}
            onChange={handleChange} className={`${baseControlClasses} dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200`} />
          </div>
        </div>

         <div>
            <label className='flex items-center gap-1 text-m font-medium text-gray-700 dark:text-gray-300 mb-5'>
            <CheckCircle className='w-4 h-4 text-purple-500'/> Durum
            </label>
            <div className='flex gap-4 mb-7'>
              {[{val: 'Yes', label: 'Tamamlandı'}, {val: 'No', label: 'Devam Ediyor'}].map(({val, label })=> (
                <label key={val} className='flex items-center'>
                  <input type='radio' name='completed' value={val} checked={taskData.completed===val}
                  onChange={handleChange} className='h-4 w-4 text-purple-600
                  focus:ring-purple-500 border-y-gray-500 rounded' />
                  <span className='ml-2 text-sm text-gray-700 dark:text-gray-300'> {label}</span>
                </label>
              ))}

            </div>

         </div>
         <button type='submit' disabled={loading}
         className='w-full bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white
         font-medium py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50
         hover: shadow-md transition-all duration-200'>
          {loading ? 'Saving...' : (taskData.id ? <>
          <Save className='w-4 h-4'/> Görev Güncelle
          </>:<>
          <PlusCircle className='w-4 h-4'/> Yeni Görev Oluştur
          </>)}

         </button>
        </form>
      </div>
    </div>
  )
}

export default TaskModal