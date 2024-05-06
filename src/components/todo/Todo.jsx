// Todo.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';
import { BsSearch, BsPlus } from 'react-icons/bs';
import { addTodo, updateSearchTerm } from '../../actions/Todo';

const Todo = () => {
    const todos = useSelector((state) => {
        console.log("state", state)
         return state.todo.todos
    });
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    const [newTodoText, setNewTodoText] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleAddTodo = (text) => {
        console.log("2 = text", text)
        dispatch(addTodo(text));
    };

    const handleAddTodoClick = () => {
        console.log("1= add")
        if (newTodoText.trim() !== '') {
            handleAddTodo(newTodoText.trim());
            setNewTodoText('');
        }
    };

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        dispatch(updateSearchTerm(value));
    };

    console.log("todos", todos)

    return (
        <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
            <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>Personal TODO APP</h2>
            <div className="flex items-center mb-4">
                <input
                    id="addTodoInput"
                    className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Add Todo"
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                />
                <button
                    className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                    onClick={handleAddTodoClick}
                >
                    <BsPlus size={20} />
                </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <FilterButtons />
                <div className="flex items-center mb-4">
                    <input
                        className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                        type="text"
                        placeholder="Search Todos"
                        value={searchTerm}
                        onChange={(e) => handleSearchChange(e.target.value)}
                    />
                    <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
                        <BsSearch size={20} />
                    </button>
                </div>
            </div>

            <TodoList />
        </div>
    );
};

export default Todo;
