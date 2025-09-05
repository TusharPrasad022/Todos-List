import React, { useState } from 'react';

export const AddTodos = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        } else {
            props.addTodo(title, desc);  // Changed from AddTodo to addTodo
            setTitle("");
            setDesc("");
        }
    }
return (
    <div className="container my-3">
        <h3 className="text-center" style={{
            color: "#000",
            fontWeight: "700",
            textShadow: "1px 1px 2px rgba(255,255,255,0.8)"
        }}>Add a Todo</h3>
        <form onSubmit={submit}>
            <div className="mb-3 row justify-content-center w-100">
                <div className="col-md-6">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{
                            fontWeight: "500",
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                            border: "1px solid rgba(0, 0, 0, 0.2)"
                        }}
                    />
                </div>
            </div>
            <div className="mb-3 row justify-content-center w-100">
                <div className="col-md-6">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input 
                        type="text" 
                        value={desc} 
                        onChange={(e) => setDesc(e.target.value)} 
                        className="form-control" 
                        id="desc"
                        style={{
                            fontWeight: "500",
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                            border: "1px solid rgba(0, 0, 0, 0.2)"
                        }}
                    />
                </div>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-sm btn-success btn-glow">
                    Add Todo
                </button>
            </div>
        </form>
    </div>
)
}