import { FC } from "react";

import TodoItem from "./TodoItem";

interface TodoListProps {
    data: {
        id: string,
        description: string
    }[],
    handleDeletaTodoItem:(todoId: string) => void;
}

const TodoList:FC<TodoListProps> = ({data, handleDeletaTodoItem}) => {

    return (
        <div className="flex justify-center items-center flex-col gap-4 mt-6">
            {
                data.map(todoItem => <TodoItem key={todoItem.id} id={todoItem.id} text={todoItem.description} handleDeletaTodoItem={handleDeletaTodoItem}/>)}
        </div>
    )
}

export default TodoList;