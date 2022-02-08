import { FC } from "react";
import {ImCancelCircle} from 'react-icons/im'

interface TodoItemProps {
    id: string,
    text: string,
    handleDeletaTodoItem:(todoId: string) => void;
}

const TodoItem:FC<TodoItemProps> = ({id, text, handleDeletaTodoItem}) => {
    return (
        <div className="w-64 px-4 py-2 bg-purple-500 flex justify-between items-center">
            <div className="font-bold text-white"> {text}</div>
            <ImCancelCircle onClick={handleDeletaTodoItem.bind(null, id)}/>
        </div>
    )
}

export default TodoItem;