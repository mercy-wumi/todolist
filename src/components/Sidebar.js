import React from 'react';
import '../App.css';

const Sidebar= ({setStatus}) => {

  const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return(
        <div className="sidebar">
        <div className="sidebar-menu">
          <ul>
          <li className="menu-list">
            <button value="all-priority" onClick={statusHandler} className="btn-click">All priority</button>
            <ul>
              <li>
            <button value="urgent" onClick={statusHandler} className="btn-click">Urgent</button>
            </li>
            <li>
            <button value="important" onClick={statusHandler} className="btn-click">Important</button>
            </li>
            <li>
            <button value="random" onClick={statusHandler} className="btn-click">Random</button>
            </li>
            </ul>
          </li>
          
          <ul>
            <li>
            <button value="completed" onClick={statusHandler} className="btn-click">Completed</button>
            </li>
            <li>
            <button value="uncompleted" onClick={statusHandler} className="btn-click">Uncompleted</button>
            </li>
            </ul>

            <ul>
            <li>
            <button value="next7days" onClick={statusHandler} className="btn-click">Next 7 days</button>
            </li>
            <li>
            <button value="nextmonth" onClick={statusHandler} className="btn-click">Next Month</button>
            </li>
            <li>
            <button value="next3months" onClick={statusHandler} className="btn-click">Next 3 Months</button>
            </li>
            </ul>

        </ul>

        </div>
      </div>
    )
}

export default Sidebar;