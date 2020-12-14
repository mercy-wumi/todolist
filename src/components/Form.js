import React from 'react';

const Form = ({setInputText, inputText, todos, setTodos, setStatus, priority, setPriority, date, setDate}) => {

    const inputTextHandler = (e) =>{
        console.log(e.target.value);
        setInputText(e.target.value);
    }
    const addTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000, priority: priority, date: date}]);
        setInputText("");
        
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    const priorityHandler = (e) => {
        setPriority(e.target.value);
    }
    const dateHandler = (e) => {
        setDate(e.target.value);
    }

    return(
        <form>
            <div className= "inputbox">
            <input value = {inputText} onChange = {inputTextHandler} type = 'text' className="inputTodo" name = 'todoinput'  placeholder= ""/>
            <select onChange={priorityHandler} name = 'todos' className= "select">
                    <option value = 'select'>Select Priority</option>
                    <option value = 'urgent'>Urgent</option>
                    <option value = 'important'>Important</option>
                    <option value = 'random'>Random</option>
                </select>
                <select onChange={dateHandler} name = 'todos' className= "select">
                    <option value = 'select'>Select Date</option>
                    <option value = 'next7days'>next 7 days</option>
                    <option value = 'nextmonth'>next month</option>
                    <option value = 'next3months'>next 3 months</option>
                </select>
            <button onClick = {addTodoHandler} type="submit" className="btn-primary">add</button>
                {/* <select onChange={statusHandler} name = 'todos' className= "select">
                        <option value = 'all'>All</option>
                        <option value = 'completed'>Completed</option>
                        <option value = 'uncompleted'>Uncompleted</option>
                </select>
                <select onChange={statusHandler} name = 'todos' className= "select">
                        <option value = 'all_priority'>All Priority</option>
                        <option value = 'urgent'>Urgent</option>
                        <option value = 'important'>Important</option>
                        <option value = 'random'>Random</option>
                </select> */}
            </div>
        </form>
    )
}

export default Form;