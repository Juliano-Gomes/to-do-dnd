import { TrashSimpleIcon } from "@phosphor-icons/react";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Itch =({completed,description,id,image,title,urgency,back}:{ id:string;title: string; image: string;back:(id:string)=>void; urgency: string; completed: boolean; description: string; })=>{
     
    
    return(
        <div className="shrink-1 flex w-[550px] h-[103px] p-3 rounded bg-purple-600 ">
            <div className="flex flex-col  grow gap-3">
                <div className="flex gap-2">
                    <span className="text-2xl text-black font-bold">{title}</span>      
                </div>
                <div className="flex gap-2">
                    <span className="font-bold p-1 rounded w-[65px] flex items-center justify-center bg-red-700">{urgency}</span>
                    <span>{description}</span>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <img src={image} alt="image" className="w-[60px] h-[50px] rounded border-white border-2"/>
                <span className="cursor-pointer" onClick={()=>back(id)}>
                    <TrashSimpleIcon size={23} />
                </span>
            </div>
        </div>
    )
}