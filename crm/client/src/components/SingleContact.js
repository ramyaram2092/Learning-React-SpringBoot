import React from 'react';

export function SingleContact(props){
    return(
    <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{props.firstName} {props.lastName}</span>
        </div>
        <div class="card-action">
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  </div>
            
    )
}