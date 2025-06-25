import { useContext } from "react"
import { Context } from "../utils/context"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Itch } from "./dos";
import { CalendarCheckIcon } from "@phosphor-icons/react";

export const List =()=>{
    const context = useContext(Context)
    const rm =(id:string)=>{
        const n = context?.todo?.filter((i)=>i.id !== id)
        context?.setTodo(n!)
    }
    const reorder = (list:{ id:string;title: string; image: string; urgency: string; completed: boolean; description: string; }[], startIndex:number, endIndex:number) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const HandleEnd =(result:any)=>{
        if (!result.destination) {
            return;
        }

        const items = reorder(
        context!.todo!,
        result.source.index,
        result.destination.index
        );

        context?.setTodo(items)
    }
    return (
        <DragDropContext onDragEnd={HandleEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grow flex flex-col gap-3  items-center overflow-y-scroll"
            >
                <div className=" flex items-center justify-center sm:justify-normal px-13 ">
                    <div className="h-[70px]  flex  items-center">
                        <CalendarCheckIcon size={42} />
                        <span className="text-4xl font-mono">
                            Task
                        </span>
                    </div>
                </div>
                    {context?.todo!.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => (
                            <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="text-white flex border"
                            >
                                <Itch back={(id)=>rm(id)} completed={item.completed} description={item.description} title={item.title} id={item.id} image={item.image} urgency={item.urgency}/>
                            </div>
                        )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
          )}
        </Droppable>
      </DragDropContext>
    )
}