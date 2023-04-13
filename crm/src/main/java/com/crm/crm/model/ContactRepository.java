/**
 * Connects the Model Contact to the Database
 * Repository for our model
 * 
 */
package com.crm.crm.model;


import org.springframework.data.repository.CrudRepository;


public interface ContactRepository extends CrudRepository<Contact, Long> {
    
}
