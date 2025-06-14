import React, { useMemo, useState } from 'react'
import {layoutClasses, SORT_OPTIONS} from '../assets/dummy.jsx'
import {Clock, Filter, ListChecks, Plus} from 'lucide-react'
import {useOutletContext} from 'react-router-dom'
import TaskItem from '../components/TaskItem.jsx'
import TaskModal from '../components/TaskModal.jsx'


const PendingPage = ({handleDelete,handleToggleComplete,t}) => {
    const {tasks=[], refreshTasks}=useOutletContext();
    const [sortBy,setSortBy] =useState('newest')
    const [selectedTask,setSelectedTask] =useState(null)
    const [showModal, setShowModal] =useState(false)


    const sortedPendingTasks=useMemo(() => {
      const filtered =tasks.filter(
        (t) => !t.completed || (typeof t.completed ==='string' &&
        t.completed.toLowerCase() === 'no')
      )
      return filtered.sort((a,b) =>{
        if (sortBy==='newest') return new Date(b.createdAt) - new Date(a.createdAt);
        if (sortBy==='oldest') return new Date(a.createdAt) - new Date(b.createdAt);
        const order ={high:3, medium:2,low:1};
        return order[b.priority.toLowerCase()] - order[a.priority.toLowerCase()]

      })
    }, [tasks, sortBy])
  return (
    <div className={layoutClasses.container}>
      <div className={layoutClasses.headerWrapper}>
        <div>
          <h1 className='text-2xl md:text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-2'>
            <ListChecks className='text-purple-500 dark:text-purple-400'/> Bekleyen Görevler
          </h1>
          <p className='text-sm text-red-500 dark:text-red-400 mt-1 ml-7 font-bold'>
            {sortedPendingTasks.length} görev{sortedPendingTasks.length!==1}{' '}
            seni bekliyor.
          </p>
        </div>
        <div className={`${layoutClasses.sortBox} dark:bg-gray-800 dark:border-gray-700`}>
          <div className='flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium'>
            <Filter className='w-4 h-4 text-purple-500 dark:text-purple-400'/>
            <span className='text-sm'>Filtrele:</span>
          </div>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
            className={`${layoutClasses.select} dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200`}>
              <option value="newest">En yenileri</option> 
              <option value="oldest">En eskileri</option>
              <option value="priority">Önceliğe Göre</option>
            </select>
            <div className={`${layoutClasses.tabWrapper} dark:bg-gray-700`}>
            {SORT_OPTIONS.map(opt=>(
              <button key={opt.id} onClick={() => setSortBy(opt.id)}
              className={layoutClasses.tabButton(sortBy==opt.id)}>
                {opt.icon}{opt.label}
              </button>
            ))}
            </div>
        </div>
      </div>
      
      

      <div className='space-y-4'>
        {sortedPendingTasks.length===0 ? (
          <div className={`${layoutClasses.emptyState} dark:bg-gray-800 dark:border-gray-700`}>
            <div className='p-4 md:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-purple-100 dark:border-gray-700 text-center'>
              <div className={`${layoutClasses.emptyIconBg} dark:bg-purple-900/50`}>
                <Clock className='w-6 h-6 md:w-8 md:h-8 text-purple-500 dark:text-purple-400'/>
              </div>
              <h3 className='text-lg font-semibold text-gray-800 dark:text-white mb-2'>
                Hepsi Halloldu!
              </h3>
              <p className='text-sm text-gray-500 dark:text-gray-400 mb-4'>
                Bekleyen görevin yok, Tebrik ederim.
              </p>
              <button onClick={() => setShowModal(true)}
                className={`${layoutClasses.emptyBtn} dark:bg-purple-900/50 dark:text-purple-300 dark:hover:bg-purple-900/70`}>
                Yeni Görev oluştur.
              </button>
            </div>
          </div>
        ):(
          sortedPendingTasks.map(task=> (
            <TaskItem key={task._id||task.id}
            task={task}
            showCompleteCheckbox onDelete={() => handleDelete(task._id||task.id)}
            onToggleComplete={()=>handleToggleComplete(
              task._id||task.id,
              t.completed
            )}
             onEdit={() => {setSelectedTask(task); setShowModal(true);}} 
             onRefresh={refreshTasks} />
          ))
        )}
              </div>
            <div className={`${layoutClasses.addBox} dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 mt-8`} onClick={() => setShowModal(true)}>
        <div className='flex items-center justify-center mb-4 gap-2 text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400
        transition-colors'>
          <div className='w-8 h-8 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm
          group-hover:shadow-md transition-all duration-200'>
            <Plus className='text-purple-500 dark:text-purple-400' size={18}/>
          </div>
          <span className='font-medium'>
            Yeni Görev Ekle

          </span>

        </div>
   

      </div>
      <TaskModal isOpen={!!selectedTask || showModal}
      onClose={() => {setShowModal(false); setSelectedTask(null); refreshTasks();}}
      taskToEdit={selectedTask} />
      
    </div>
  )
}

export default PendingPage