import {  useState ,} from 'react'
import {Outlet,NavLink} from 'react-router-dom'
import { Context } from '../utils/context'
import {ListChecks,CalendarPlus} from '@phosphor-icons/react'

export const Home =()=>{
    const [todo,setTodo] = useState<{id:string;title:string,image:string,urgency:string,completed:boolean,description:string}[] | null>([
        {
            id: 'dnd',
            title: 'Welcome Message',
            image: 'https://media.istockphoto.com/id/2157970635/pt/foto/many-welcome-messages-on-multicolorful-papers.jpg?s=1024x1024&w=is&k=20&c=3T76BJy1-7NHlJPdDIGWJifSxQBi487WwGRoKTRPkEI=',
            urgency: 'easy',
            completed: false,
            description: 'great a new user in our todo app',
        }
    ])
    
    //const contest = useContext(Context)
    const Advice =async()=>{
        const response = await fetch('https://api.adviceslip.com/advice').then((data)=>data.json())
        alert(response.slip.advice)
    }
    return(
        <Context.Provider value={{setTodo,todo}}>
            <div className='bg-[#ffea73] min-h-[100vh] w-full flex py-4  flex-wrap sm:flex-row '>
                <div className='flex flex-col gap-3 p-7  w-[300px] '>
                    <span className='text-block font-bold text-3xl'>
                        To do List - dnd
                    </span>
                    <div className='flex flex-col  h-[80px] gap-2 py-2 text-xl '>
                        <NavLink to="/" className={({isActive})=> isActive ? "text-purple-600 flex items-center gap-1": "text-black flex items-center gap-1"}>
                            <ListChecks size={20} /> Task
                        </NavLink> 
                        <NavLink to="/Add"  className={({isActive})=> isActive ? "text-purple-600 flex items-center gap-1": "text-black flex items-center gap-1"}>
                            <CalendarPlus size={20} /> Add a task
                        </NavLink> 
                    </div>
                    <div className=''>
                        <span onClick={Advice} className='text-white cursor-pointer font-mono h-[40px] w-[200px] rounded flex items-center justify-center bg-black'>
                            Generate an advice
                        </span> 
                    </div>
                </div>
                <Outlet/>
            </div>
        </Context.Provider>
    )
}