import React, {  useState } from 'react';

export default function AddContact() {
    const[firstName,setFirstName]=useState('')
    const[lastName, setLastName]=useState('')
    const[email,setEmail]=useState('')

    function handleFirstName(event)
    {
        setFirstName(event.target.value);
    }
    function handleLastName(event)
    {
        setLastName(event.target.value);
    }
    function handleEmail(event)
    {
        setEmail(event.target.value);
    }
    function submitContact(event)
    {
        event.preventDefault();

        let contact={
            firstName:{firstName},
            lastName:{lastName},
            email:{email}
        }

        fetch("http://localhost:8080/api/contacts",{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body: JSON.stringify(contact)
        })
        .then(response=>response.json());
    }
    return (
        <div className="row">
            <form className="col s12" onSubmit={submitContact}>
                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Placeholder" id="firstName" type="text" className="validate" value={firstName} onChange={handleFirstName}/>
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="lastName" type="text" className="validate"  value={lastName} onChange={handleLastName}/>
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" value={email} onChange={handleEmail}/>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
                </div>

            </form>
        </div>


    )
}