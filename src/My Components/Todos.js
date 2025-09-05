import React from 'react'
import { Todoitem } from './Todoitem'

export const Todos = (props) => {
    const todosStyle = {
        minHeight: "calc(100vh - 140px)",
        padding: "2rem 0",
        position: "relative",
        zIndex: "1"
    }

    return (
        <div className="container" style={todosStyle}>
            <h3 className="text-center mb-4" style={{
                color: "#000",
                fontWeight: "700",
                textShadow: "1px 1px 2px rgba(255,255,255,0.8)"
            }}>Todos List</h3>
            {props.todos.length === 0 ? 
                <div className="text-center" style={{
                    color: "#000",
                    fontWeight: "600",
                    textShadow: "1px 1px 2px rgba(255,255,255,0.8)"
                }}>No Todos to display</div> 
                : 
                props.todos.map((todo) => {
                    return <Todoitem 
                        key={todo.sno} 
                        todo={todo} 
                        onDelete={props.onDelete}
                        onToggle={props.onToggle}
                    />
                })
            }
        </div>
    )
}     