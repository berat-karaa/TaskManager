import {
    User, Mail, Home,
    ListChecks,
    CheckCircle2, Lock, Home as HomeIcon, Flame,
    SortDesc, SortAsc, Award,
    Edit2,
    Trash2,
    MoreVertical,
    Clock,
    Calendar,
} from "lucide-react"


// BACKEND TEST 
// DUMMY DATA
const BACKENDDUMMY= [
    {
        title: "Buy groceries",
        description: "Milk, bread, eggs, and spinach",
        priority: "Low",
        dueDate: "2025-05-02T18:00:00.000Z",
        completed: "No"
    },
    {
        "title": "Book dentist appointment",
        "description": "Routine check-up and cleaning",
        "priority": "Medium",
        "dueDate": "2025-05-10T10:00:00.000Z",
        "completed": true
    },
    {
        "title": "Book dentist appointment",
        "description": "Routine check-up and cleaning",
        "priority": "Medium",
        "dueDate": "2025-05-10T10:00:00.000Z",
        "completed": true
    },
    {
        "title": "Pay utility bills",
        "description": "Electricity and water bills for April",
        "priority": "High",
        "dueDate": "2025-04-28T12:00:00.000Z",
        "completed": "Yes"
    }
];

// FRONTEND DUMMY DATA

// assets/formConstants.js
export const baseControlClasses =
    "cursor-pointer w-full px-4 py-2.5 border border-purple-100 dark:border-gray-700 rounded-lg focus:ring-1 focus:ring-purple-500 focus:border-purple-500 text-sm dark:bg-gray-700 dark:text-gray-200";

export const priorityStyles = {
    Low: "cursor-pointer bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800",
    Medium: "cursor-pointer bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800",
    High: "cursor-pointer bg-red-100 dark:bg-red-900/30 text-fuchsia-700 dark:text-fuchsia-400 border-fuchsia-200 dark:border-fuchsia-800",
};

// data/defaultTask.js
export const DEFAULT_TASK = {
    title: "",
    description: "",
    priority: "Low",
    dueDate: "",
    completed: "No",
    id: null,
};

// LOGIN CSS
export const INPUTWRAPPER =
    "flex items-center border border-purple-100 dark:border-gray-700 rounded-lg px-3 py-2.5 focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500 transition-all duration-200 dark:bg-gray-700"
export const BUTTON_CLASSES =
    "w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white text-sm font-semibold py-2.5 rounded-lg hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"

// PROFILE CSS
export const INPUT_WRAPPER =
    "flex items-center border border-purple-100 dark:border-gray-700 rounded-lg px-3 py-2.5 focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500 transition-all duration-200 dark:bg-gray-700 dark:border-gray-600 dark:focus-within:border-purple-500 dark:focus-within:ring-purple-500"
export const FULL_BUTTON =
    "w-full cursor-pointer bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white py-2.5 rounded-lg hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
export const SECTION_WRAPPER = "bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-purple-100 dark:border-gray-700 p-6"
export const BACK_BUTTON =
    "flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 mb-8 transition-colors duration-100 cursor-pointer"
export const DANGER_BTN =
    "cursor-pointer w-full text-red font-bold border border-red-400 dark:border-red-600 py-2.5 rounded-lg hover:bg-red-600 dark:hover:bg-red-700 transition-colors duration-200"

export const personalFields = [
    { name: "name", type: "text", placeholder: "Full Name", icon: User },
    { name: "email", type: "email", placeholder: "Email", icon: Mail },    
]

    

export const securityFields = [
    { name: "current", placeholder: "Mevcut Şifren" },
    { name: "new", placeholder: "Yeni Şifren" },
    { name: "confirm", placeholder: "Tekrar Yeni Şifren" },
];

// SIDEBAR 
export const menuItems = [
    { text: "Ana Sayfa", path: "/", icon: <Home className="w-5 h-5" /> },
    { text: "Bekleyenler", path: "/pending", icon: <ListChecks className="w-5 h-5" /> },
    { text: "Tamamlananlar", path: "/complete", icon: <CheckCircle2 className="w-5 h-5" /> },
]

export const SIDEBAR_CLASSES = {
    desktop: "hidden md:flex flex-col fixed h-full w-20 lg:w-64 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-r border-purple-100 dark:border-gray-700 shadow-sm z-20 transition-all duration-300",
    mobileButton: "absolute md:hidden top-25 left-5 z-50 bg-purple-600 dark:bg-purple-700 text-white p-2 rounded-full shadow-lg hover:bg-purple-700 dark:hover:bg-purple-800 transition",
    mobileDrawerBackdrop: "fixed inset-0 bg-black/40 dark:bg-gray-900/80 backdrop-blur-sm",
    mobileDrawer: "absolute top-0 left-0 w-64 h-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-r border-purple-100 dark:border-gray-700 shadow-lg z-50 p-4 flex flex-col space-y-6",
}

export const LINK_CLASSES = {
    base: "group flex items-center px-4 py-3 rounded-xl transition-all duration-300",
    active: "bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-purple-900/50 dark:to-fuchsia-900/50 border-l-4 border-purple-500 text-purple-700 dark:text-purple-300 font-medium shadow-sm",
    inactive: "hover:bg-purple-50/50 dark:hover:bg-gray-700/50 text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400",
    icon: "transition-transform duration-300 group-hover:scale-110 text-purple-500 dark:text-purple-400",
    text: "text-sm font-medium ml-2",
}

export const PRODUCTIVITY_CARD = {
    container: "bg-purple-50/50 dark:bg-gray-800 rounded-xl p-3 border border-purple-100 dark:border-gray-700",
    header: "flex items-center justify-between mb-2",
    label: "text-xs font-semibold text-purple-700 dark:text-purple-300",
    badge: "text-xs bg-purple-200 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded-full",
    barBg: "w-full h-2 bg-purple-200 dark:bg-gray-700 rounded-full overflow-hidden",
    barFg: "h-full bg-gradient-to-r from-fuchsia-500 to-purple-600 animate-pulse",
}

export const TIP_CARD = {
    container: "bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-4 border border-purple-100 dark:border-gray-700",
    iconWrapper: "p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg",
    title: "text-sm font-semibold text-gray-800 dark:text-gray-200",
    text: "text-xs text-gray-600 dark:text-gray-400 mt-1",
}

// SIGNUP 


export const Inputwrapper =
    "flex items-center border border-purple-100 rounded-lg px-3 py-2.5 focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500 transition-all duration-200"
export const BUTTONCLASSES =
    "w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white text-sm font-semibold py-2.5 rounded-lg hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
export const MESSAGE_SUCCESS = "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-3 rounded-lg text-sm mb-4 border border-green-100 dark:border-green-800"
export const MESSAGE_ERROR = "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm mb-4 border border-red-100 dark:border-red-800"

// TASK ITEM
export const getPriorityColor = (priority) => {
    const colors = {
        low: "border-green-500 dark:border-green-400 bg-green-50/50 dark:bg-green-900/30 text-green-700 dark:text-green-400",
        medium: "border-purple-500 dark:border-purple-400 bg-purple-50/50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
        high: "border-fuchsia-800 dark:border-fuchsia-400 bg-fuchsia-50/50 dark:bg-fuchsia-900/30 text-fuchsia-800 dark:text-fuchsia-400",
    }
    return colors[priority?.toLowerCase()] || "border-gray-500 dark:border-gray-400 bg-gray-50/50 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
}

export const getPriorityBadgeColor = (priority) => {
    const colors = {
        low: "bg-green-100 dark:bg-green-900/50 text-green-900 dark:text-green-300",
        medium: "bg-purple-100 dark:bg-purple-900/50 text-purple-900 dark:text-purple-300",
        high: "bg-fuchsia-300 dark:bg-fuchsia-900/50 text-fuchsia-900 dark:text-fuchsia-300",
    }
    return colors[priority?.toLowerCase()] || "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
}

// DASHBOARD
// UI Constants
export const WRAPPER = "p-4 md:p-6 min-h-screen overflow-hidden"
export const HEADER = "flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6 gap-3"
export const ADD_BUTTON =
    "flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 w-full md:w-auto justify-center text-sm md:text-base cursor-pointer"
export const STATS_GRID = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6"
export const STAT_CARD =
    "p-3 md:p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-purple-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 min-w-0"
export const ICON_WRAPPER = "p-1.5 md:p-2 rounded-lg"
export const VALUE_CLASS = "text-lg md:text-2xl font-bold truncate dark:text-gray-200"
export const LABEL_CLASS = "text-xs text-gray-500 dark:text-gray-400 truncate"

// Stats definitions
export const STATS = [
    { key: "total", label: "Tüm Görevler", icon: HomeIcon, iconColor: "bg-purple-100 text-purple-600", valueKey: "total", gradient: true },
    { key: "lowPriority", label: "Düşük Öncelik", icon: Flame, iconColor: "bg-green-100 text-green-600", borderColor: "border-green-100", valueKey: "lowPriority", textColor: "text-green-600" },
    { key: "mediumPriority", label: "Normal Öncelik", icon: Flame, iconColor: "bg-orange-100 text-orange-600", borderColor: "border-orange-100", valueKey: "mediumPriority", textColor: "text-orange-600" },
    { key: "highPriority", label: "Acil Öncelik", icon: Flame, iconColor: "bg-red-100 text-red-600", borderColor: "border-red-100", valueKey: "highPriority", textColor: "text-red-600" },
]

// Filter options
export const FILTER_OPTIONS = ["Hepsi", "Bugün", "Hafta", "Acil", "Normal", "Düşük"]
export const FILTER_LABELS = {
    Hepsi: "Tüm Görevler",
    Bugün: "Bugünün Görevleri",
    Hafta: "Bu Haftanın Görevleri",
    Acil: "Acil Öncelikli Görevler",
    Normal: "Normal Öncelikli Görevler",
    Düşük: "Düşük Öncelikli Görevler",
}

// Empty state
export const EMPTY_STATE = {
    wrapper: "p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-purple-100 dark:border-gray-700 text-center cursor-pointer",
    iconWrapper: "w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer",
    btn: "px-3 py-2.5 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white rounded-lg text-sm font-medium cursor-pointer",
}

// Filter UI Constants
export const FILTER_WRAPPER = "flex items-center justify-between bg-white p-4 rounded-xl shadow-sm "
export const SELECT_CLASSES = "px-3 py-2 border border-purple-100 rounded-lg focus:ring-2 focus:ring-purple-500 md:hidden text-sm"
export const TABS_WRAPPER = "hidden md:flex space-x-1 bg-purple-50 p-1 rounded-lg"
export const TAB_BASE = "px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer"
export const TAB_ACTIVE = "bg-white text-purple-700 shadow-sm border"
export const TAB_INACTIVE = "text-gray-600 hover:bg-purple-100/50"

// COMPLETE TASK
export const SORT_OPTIONS = [
    { id: "newest", label: "En Yeni", icon: <SortDesc className="w-3 h-3 cursor-pointer" /> },
    { id: "oldest", label: "En Eski", icon: <SortAsc className="w-3 h-3 cursor-pointer" /> },
    { id: "priority", label: "Öncelik", icon: <Award className="w-3 h-3 cursor-pointer" /> },
]

// CSS class groups
export const CT_CLASSES = {
    page: "p-4 md:p-6 min-h-screen overflow-hidden ",
    header: "flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-3 md:gap-4 ",
    titleWrapper: "flex-1 min-w-0 ",
    title: "text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 flex items-center gap-2 truncate ",
    subtitle: "text-xs md:text-sm text-gray-500 mt-1 ml-7 md:ml-8 text-green-800 font-bold",
    sortContainer: "w-full md:w-auto mt-2 md:mt-0 ",
    sortBox: "flex items-center justify-between bg-white p-2 md:p-3  rounded-xl shadow-sm border border-purple-100 w-full md:w-auto",
    filterLabel: "flex items-center gap-2 text-gray-700 font-medium ",
    select: "px-2 py-1 md:px-3 md:py-2 border border-purple-100 rounded-lg focus:ring-2 focus:ring-purple-500 md:hidden text-xs md:text-sm",
    btnGroup: "hidden md:flex space-x-1 bg-purple-50 p-1 rounded-lg ml-2 md:ml-3",
    btnBase: "px-2 py-1 md:px-3 md:py-1.5 cursor-pointer rounded-lg border border-transparent hover:border-purple-800 hover:bg-purple-100/50 hover:text-purple-700 text-xs font-medium flex items-center gap-1 transition-all duration-200",
    btnActive: "bg-white text-purple-700 shadow-sm border border-purple-100",
    btnInactive: "text-gray-600 hover:text-purple-700 hover:bg-purple-100/50",
    list: "space-y-3 md:space-y-4",
    emptyState: "p-4 md:p-8 bg-white rounded-xl shadow-sm border border-purple-100 text-center",
    emptyIconWrapper: "w-12 h-12 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4",
    emptyTitle: "text-base md:text-lg font-semibold text-gray-800 mb-2",
    emptyText: "text-xs md:text-sm text-gray-500",
}

// constants/cssClasses.js
export const layoutClasses = {
    container: "p-6 min-h-screen overflow-hidden",
    headerWrapper: "flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 ",
    sortBox: "flex items-center justify-between bg-white p-3 rounded-xl shadow-sm border border-purple-100 w-full md:w-auto",
    select: " cursor-pointer px-3 py-2 border border-purple-100 rounded-lg focus:ring-2 focus:ring-purple-500 md:hidden text-sm",
    tabWrapper: "hidden md:flex space-x-1 bg-purple-50 p-1 rounded-lg ml-3",
    tabButton: (active) =>
        `cursor-pointer px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${active
            ? "bg-white text-purple-700 shadow-sm border"
            : "text-gray-600 hover:text-purple-700 hover:bg-purple-100/50"
        }`,
    addBox: "hidden md:block p-5 border-2 border-dashed border-purple-200 rounded-xl hover:border-purple-400 transition-colors cursor-pointer mb-6 bg-purple-50/50 group",
    emptyState: "p-8 bg-white rounded-xl shadow-sm border border-purple-100 text-center",
    emptyIconBg: "w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4",
    emptyBtn: "px-4 py-2 cursor-pointer bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg text-sm font-medium transition-colors",
};


// TASK ITEM
// Menu options for task actions
export const MENU_OPTIONS = [
    { action: "edit", label: "Edit Task", icon: <Edit2 size={14} className="text-purple-600 cursor-pointer" /> },
    { action: "delete", label: "Delete Task", icon: <Trash2 size={14} className="text-red-600 cursor-pointer" /> },
]

// CSS class groups for TaskItem
export const TI_CLASSES = {
    wrapper: " flex group p-4 border sm:p-5 rounded-xl shadow-sm bg-white border-l-4 hover:shadow-md transition-all duration-300  ",
    leftContainer: "flex items-start gap-2 sm:gap-3 flex-1 min-w-0 ",
    completeBtn: "mt-0.5 sm:mt-1 p-1 sm:p-1.5 rounded-full hover:bg-purple-100 transition-colors duration-300 ",
    checkboxIconBase: "w-4 h-4 sm:w-5 sm:h-5",
    titleBase: "text-base sm:text-lg font-medium truncate",
    priorityBadge: "text-xs px-2 py-0.5 rounded-full shrink-0",
    description: "text-sm text-gray-500 mt-1 truncate",
    subtasksContainer: "mt-3 sm:mt-4 space-y-2 sm:space-y-3 bg-purple-50/30 p-2 sm:p-3 rounded-lg border border-purple-100 ",
    progressBarBg: "h-1.5 bg-purple-100 rounded-full overflow-hidden ",
    progressBarFg: "h-full bg-gradient-to-r from-fuchsia-500 to-purple-600 transition-all duration-300 ",
    rightContainer: "flex flex-col items-end gap-2 sm:gap-1 ",
    menuButton: " flex p-1 sm:p-1.5 hover:bg-purple-100 rounded-lg text-gray-500 hover:text-purple-700 cursor-pointer transition-colors duration-200 ",
    menuDropdown: " absolute right-0 mt-0 w-40 sm:w-35 bg-white border border-purple-100 rounded-xl  z-10 transition-colors overflow-hidden animate-fadeIn ",
    dateRow: "flex items-center gap-1.5 text-xs font-medium whitespace-nowrap ",
    createdRow: "flex items-center gap-1.5 text-xs text-gray-400 whitespace-nowrap",
}


