import React, { useState, useEffect } from 'react';
import SingleContact from './SingleContact';
import AddContacts from './AddContact';

export default function Contacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/contacts') // fetching from server
            .then(response => response.json()) //response from server as json data
            .then(data => {
                console.log(data)
                setContacts(data) // update the usestate with data
            })

    }, [])
    return (
        <div>
            <div className="row">
                <AddContacts />
            </div>
            <div className="row">
                {contacts.map((c, i) =>
                    <SingleContact
                        key={i}
                        item={c}
                    />

                )}

            </div>
        </div>
    );

}