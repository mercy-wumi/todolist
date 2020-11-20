import React from 'react';
import Todo from './Todo'
 
const Todolist = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className="list-box">
            <ul className= "list">
                {filteredTodos.map((todo)=>( 
                         <Todo 
                        setTodos={setTodos}
                          todo={todo}
                          todos={todos}
                          key={todo.id} 
                          text={todo.text}
                          />
                    ))}
            </ul>
        </div>
    );
}

export default Todolist;