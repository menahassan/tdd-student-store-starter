import * as React from "react"
import "./Contact.css"

export default function Contact() {
    return (
        <div className="contact" id = "contact">
            <div className="content">
                <h3 className="contact-header">Contact</h3>
                <div className="summary">
                    <p><b>Email:</b> placeholder@gmail.com</p>
                    <p><b>Phone:</b> 1-800-123-4567</p>
                    <p><b>Address:</b> 123 Fake Street, San Francisco, CA</p>
                </div>
            </div>
        </div>
    ) 
  }