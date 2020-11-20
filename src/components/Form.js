import React from 'react';

const Form = ({setInputText, inputText, todos, setTodos, setStatus}) => {

    const inputTextHandler = (e) =>{
        console.log(e.target.value);
        setInputText(e.target.value);
    }
    const addTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}]);
        setInputText("");
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return(
        <form>
            <div className= "inputbox">
            <input value = {inputText} onChange = {inputTextHandler} type = 'text' className="inputTodo" name = 'todoinput'  placeholder= ""/>
            <button onClick = {addTodoHandler} type="submit" className="btn-primary">+</button>
              <select onChange={statusHandler} name = 'todos' className= "select">
                    <option value = 'all'>All</option>
                    <option value = 'completed'>Completed</option>
                    <option value = 'uncompleted'>Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;