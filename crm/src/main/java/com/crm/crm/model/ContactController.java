// allows us to return the data to the client and allow CORS

package com.crm.crm.model;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URISyntaxException;
import java.util.Collection;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api") // mapping of the api
@CrossOrigin(origins="http://localhost:3000") //  pass the address that is requesting our server for resource 
public class ContactController {
    private ContactRepository contactRepository;

    public ContactController(ContactRepository contactRepository)
    {
        this.contactRepository=contactRepository;
    }
    
    @GetMapping("/contacts")
    Collection<Contact> contacts()
    {
        return (Collection<Contact>)contactRepository.findAll();
    }

    @PostMapping("/contacts")
    ResponseEntity<Contact> createContact( @RequestBody Contact contact) throws URISyntaxException{
        Contact result=contactRepository.save(contact);
        return ResponseEntity.ok().body(result);
    }
}
