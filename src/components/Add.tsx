import { useContext, useRef, useState } from "react"
import { Context } from "../utils/context"
import {  ImageIcon, KanbanIcon, PencilCircleIcon } from "@phosphor-icons/react"

export const Add = ()=>{
    const [title,setTitle] = useState("")
    const [date,setDate] = useState("")
    const [level,setLevel] = useState("")
    const [Images,setImages] = useState<string>("")
    const [descript ,setDescript] = useState("")
    const imageRef = useRef<HTMLInputElement>(null)
     
    const context = useContext(Context)
    const add = ()=>{
        if(title && date && level && descript && Images){
            const id = new Date().getTime() * 221 + new Date().getMilliseconds()
            console.log({
                title,
                date,
                level,
                Images,
                descript,
                id
            })
            context?.setTodo((preview)=>[...preview!,{
                id : id.toString(),
                title,
                image:Images,
                urgency:level,
                completed:false,
                description:descript,
            }])
            setTitle("")
            setDate("")
            setLevel("")
            setImages("")
            setDescript("")
        }else{
            alert("Please fill all fields")
        }
    }
    return (
        <div className="grow flex flex-col gap-3  items-center overflow-y-scroll">
             <div className=" flex items-center flex-col justify-center sm:justify-normal px-13 ">
                    <div className="h-[70px]  flex  items-center">
                        <PencilCircleIcon size={40} />
                        <span className="text-3xl font-mono">
                            add task
                        </span>
                    </div>
                    <div className=" shrink-1 flex gap-3 flex-col">
                        <div className="border-1  w-[400px] flex h-[50px] px-2 items-center rounded ">
                            <KanbanIcon size={32} />
                            <input type="text" className="outline-none grow" placeholder="Task title *" onChange={(e)=>setTitle(e.target.value)} required/>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <select className="outline-none grow border py-2 rounded" onChange={(e)=>setLevel(e.target.value)}>
                                <option value="easy">complexity level</option>
                                <option value="easy">easy</option>
                                <option value="medium">medium</option>
                                <option value="complex">complex</option>
                            </select>

                            <span>
                                <input type="date" className=" bg-purple-600 p-2 rounded" onChange={(e)=>setDate(e.target.value)} />
                            </span>
                        </div>
                        <div>
                            <textarea className="border resize-none w-[400px] h-[100px] p-2 rounded outline-none" placeholder="Task description" onChange={(e)=>setDescript(e.target.value)}/>
                        </div>
                        <div className="flex gap-4">
                            <div onClick={()=>imageRef.current?.click()} className="flex gap-2 grow items-center justify-center border border-dashed cursor-pointer">
                                <ImageIcon size={32} />
                                <span>Image</span>
                                <input type="file" hidden ref={imageRef} onChange={()=>{
                                    if(imageRef.current?.files && imageRef.current?.files?.length > 0){
                                        //setImages(imageRef.current.files[0])
                                        const Link = window.URL.createObjectURL(imageRef.current.files[0])
                                        if(Link) setImages(Link)
                                    }
                                }}/>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xl">Preview :</span>
                                <img src={Images? Images : "https://picsum.photos/200/300"} className="w-[150px] border-1 border-white rounded h-[120px]" alt="preview image" />
                            </div>
                        </div>
                        <div className='' >
                            <span onClick={add} className='text-white cursor-pointer py-2 font-mono h-[40px] w-[200px] text-xl rounded flex items-center justify-center bg-black'>
                                Add
                            </span> 
                        </div>
                    </div>
                </div>
        </div>
    )
}