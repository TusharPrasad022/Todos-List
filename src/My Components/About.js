import React from 'react'
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa'

export const About = () => {
    const aboutStyle = {
        minHeight: "calc(100vh - 140px)",
        padding: "2rem 0",
        position: "relative",
        zIndex: "1"
    }

    const iconStyle = {
        marginRight: "8px"
    }

return (
        <div className="container" style={aboutStyle}>
            <h2 className="text-center mb-4" style={{
                color: "#000",
                fontWeight: "700",
                textShadow: "1px 1px 2px rgba(255,255,255,0.8)"
            }}>About MyTodoList</h2>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h3 className="card-title">About the Project:</h3>
                            <p className="card-text">
                                MyTodosList is a modern task management application built with React. MyToDoList lets you quickly add, edit, and check off tasks with ease.
                                It helps users organize their daily tasks with features like:
                            </p>
                            <ul>
                                <li>Add and delete tasks.</li>
                                <li>Mark tasks as completed.</li>
                                <li>Local storage persistence.</li>
                                <li>Responsive design.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h3 className="card-title">Developer Info:</h3>
                            <p className="card-text">
                                <strong>Name:</strong> Tushar Prasad<br/>
                                <strong>Role:</strong> Full Stack Developer<br/>
                                <strong>Email:</strong> tusharprasad045@gmail.com<br/>
                            </p>
                            <div className="social-links mt-3">
                <a href="https://github.com/TusharPrasad022" 
                   className="btn btn-dark me-2">
                    <FaGithub style={iconStyle} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/tushar-prasad-12a5a5349?" 
                   className="btn btn-primary me-2">
                    <FaLinkedin style={iconStyle} /> LinkedIn
                </a>
                <a href="[Your Portfolio URL]" 
                   className="btn btn-success">
                    <FaGlobe style={iconStyle} /> Portfolio
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}