import React, {useMemo, useState} from 'react'
import {CT_CLASSES, SORT_OPTIONS, layoutClasses} from '../assets/dummy.jsx'
import { CheckCircle2, Filter, Plus } from 'lucide-react'
import {useOutletContext} from 'react-router-dom'
import TaskItem from '../components/TaskItem.jsx'
import TaskModal from '../components/TaskModal.jsx'


const CompletePage = () => {
  const {tasks, refreshTasks} =useOutletContext();
  const [sortBy,setSortBy] =useState('newest')
  const [showModal, setShowModal] =useState(false)
  const [selectedTask,setSelectedTask] =useState(null)
  const sortedCompletedTasks=useMemo(() => {
    return tasks
    .filter(task=>[true,1,'yes'].includes(
      typeof task.completed==='string' ? task.completed.toLowerCase()
      : task.completed
    ))
    .sort((a,b) => {
      switch (sortBy){
        case 'newest' :
          return new Date(b.createAt) - new Date(a.createAt)
        case 'oldest' :
          return new Date(a.createAt) - new Date(b.createAt)
        case 'priority' : {
          const order = {high:3, medium:2,low:1};
          return order[b.priority?.toLowerCase()] - order[a.priority?.toLowerCase()]
        }
        default :
          return 0
      }
    })
  }, [tasks, sortBy])

  return (
    <div className={CT_CLASSES.page}>
      {/* HEADER*/}
      <div className={CT_CLASSES.header}>
        <div className={CT_CLASSES.titleWrapper}>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-2 truncate'>
            <CheckCircle2 className='text-purple-500 dark:text-purple-400 w-5 h-5 md:w-6 md:h-6'/>
            <span className='truncate'> Tamamlanan Görevler</span>
          </h1>

          <p className='text-xs md:text-sm dark:text-green-400 mt-1 ml-7 md:ml-8 text-green-800 font-bold'>
            {sortedCompletedTasks.length} görev{sortedCompletedTasks.length!==1}{' '}
            tamamlanmıştır.
          </p>
        </div>
        {/*SORT CONTROLS*/}
        <div className={CT_CLASSES.sortContainer}>
          <div className={`${CT_CLASSES.sortBox} dark:bg-gray-800 dark:border-gray-700`}>
            <div className={`${CT_CLASSES.filterLabel} dark:text-gray-300`}>
              <Filter className='w-4 h-4 text-purple-500 dark:text-purple-400'/>
              <span className='text-xs md:text-sm'>Filtrele:</span>
            </div>
            {/*MOBILE DROPDOWN*/}
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}
              className={`${CT_CLASSES.select} dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200`}>
                {SORT_OPTIONS.map(opt=> (
                  <option key={opt.id} value={opt.id}>
                  {opt.label}
                  {opt.id==='newest' ? 'First' : ''} 
                  </option>
                ))}
              </select>

              {/*DESKTOP BUTTONS*/}
              <div className={`${CT_CLASSES.btnGroup} dark:bg-gray-700`}>
                {SORT_OPTIONS.map(opt => (
                  <button key={opt.id} onClick={() => setSortBy(opt.id)}
                  className={[
                    CT_CLASSES.btnBase,
                    sortBy===opt.id ? CT_CLASSES.btnActive : CT_CLASSES.btnInactive
                  ].join(" ")}>
                    {opt.icon}
                    {opt.label}
                  </button>
                ))}
              </div>
          </div>
        </div>
      </div>
      {/*TASK LIST*/}
      <div className={CT_CLASSES.list}>
        {sortedCompletedTasks.length ===0 ? (
          <div className={`${CT_CLASSES.emptyState} dark:bg-gray-800 dark:border-gray-700`}>
            <div className={`${CT_CLASSES.emptyIconWrapper} dark:bg-purple-900/50`}>
              <CheckCircle2 className='w-6 h-6 md:w-8 md:h-8 text-purple-800 dark:text-purple-400'/>
            </div>
            <h3 className={`${CT_CLASSES.emptyTitle} dark:text-white`}>
              Tamamlanmış herhangi bir görev YOK!
            </h3>
            <p className={`${CT_CLASSES.emptyText} dark:text-gray-400`}>
              Haydi, beraber bir kaç görev tamamlayalım.
            </p>
          </div>
        ): (
          sortedCompletedTasks.map(task=> (
            <TaskItem key={task._id||task.id}
            task={task} 
            onRefresh={refreshTasks}
            showCompleteCheckbox={false}
            className='opacity-90 hover:opacity-90 transition-opacity text-sm md:text-base' />
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

export default CompletePage