import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const filteredTodos = useSelector((state) => {
        const todos = state.todo.todos || [];
        const filter = state.todo.filter || [];
        const searchTerm = state && state?.searchTerm?.toLowerCase(); // Convert search term to lowercase for case-insensitive search

        console.log('todos=====', todos);
        console.log('filter=====', filter);

        return todos


        // return todos.filter((todo) => {
        //     const matchesFilter = (filter === 'COMPLETED' && todo.completed) ||
        //         (filter === 'INCOMPLETE' && !todo.completed) ||
        //         filter === 'ALL';
        //
        //     console.log('matchesFilter=====', matchesFilter);
        //
        //     const matchesSearch = todo.text.toLowerCase().includes(searchTerm);
        //
        //     return matchesFilter && matchesSearch;
        // });
    });

    console.log('Filtered Todos:', filteredTodos);

    return (
        <ul>
            <li className="my-2 text-sm italic">All Your Notes Here...</li>
            {filteredTodos.map((todo, index) => (
                <TodoItem key={index} todo={todo} index={index} />
            ))}
        </ul>
    );
};

export default TodoList;
