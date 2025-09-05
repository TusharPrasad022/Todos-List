export const Todoitem = ({todo, onDelete, onToggle}) => {
    return (
        <div className="card mb-3" style={{
            background: "rgba(255, 255, 255, 0.8)",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
        }}>
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <input 
                        className="form-check-input me-3" 
                        type="checkbox" 
                        checked={todo.done}
                        onChange={() => onToggle(todo)}
                    />
                    <div style={{
                        textDecoration: todo.done ? 'line-through' : 'none',
                        flex: 1
                    }}>
                        <h4 style={{
                            color: "#000",
                            fontWeight: "700",
                            textShadow: "1px 1px 2px rgba(255,255,255,0.8)",
                            marginBottom: "0.5rem"
                        }}>{todo.title}</h4>
                        <p style={{
                            color: "#1a1a1a",
                            fontWeight: "500",
                            textShadow: "1px 1px 1px rgba(255,255,255,0.6)",
                            marginBottom: "1rem"
                        }}>{todo.desc}</p>
                    </div>
                    <button 
                        className="btn btn-sm btn-danger btn-glow" 
                        onClick={() => onDelete(todo)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}