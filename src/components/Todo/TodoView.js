import React from "react";
import { arrayOf, shape, number, string } from "prop-types";
import Span from "../shared/Span";


import "./TodoView.css";

const TodoView = ({
    todoList,
    appHandleDeleteTodo,
    appHandleEditTodo,
    appHandleOnChange,
    editValue,
    disableEditButton,
    appHandleUpdateSubmit,
}) =>  {
    const todoViewHandleDeleteButton = (id)=> {
        appHandleDeleteTodo(id);
    };

    return (
        <ul style={{ listStyle: "none"}}>
            {todoList.map(({ id, todo, editToggle}) => {
                return (
                    <li key={id} style={{ margin: 20}}>
                        {
                            editToggle ? (
                                <input
                                    type="text"
                                    value={editValue}
                                    name="editValue"
                                    onChange={(event)=> appHandleOnChange(event)}
                                />
                            ):(
                                <Span value={todo}/>
                            )
                        }
                        {editToggle ?(
                            <Span 
                                value="Update"
                                id={id}
                                onClick={appHandleUpdateSubmit}
                                className={'todo-button-shared-style edit-button'}
                            />
                        ):(
                            <Span 
                                value="Edit"
                                onClick={appHandleEditTodo}
                                id={id}
                                className={"todo-button-shared-style edit-button"}
                                disableEditButton={disableEditButton}
                                disabledClass="disabled"
                            />
                        )}

                        <Span 
                            value="Delete"
                            onClick={todoViewHandleDeleteButton}
                            id={id}
                            className={"todo-button-shared-style delete button"}
                            disableEditButton={disableEditButton}
                            disabledClass="disabled"
                        />

                    </li>
                );
            })}
        </ul>
    );
};


TodoView.propTypes = {
    todoList: arrayOf(
        shape({
            id: string.isRequired,
            todo: string.isRequired,
        })
    ),
};

export default TodoView;