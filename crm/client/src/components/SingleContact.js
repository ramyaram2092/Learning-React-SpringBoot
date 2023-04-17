import React from 'react';

export default function SingleContact(props){
    return(
    <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{props.item.firstName} {props.item.lastName}</span>
        </div>
        <div className="card-action">
          <p>{props.item.email}</p>
        </div>
      </div>
    </div>
  </div>
            
    )
}