package com.bhaiti.kela.controllers;

import org.springframework.http.MediaType;

//import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.web.bind.annotation.ResponseBody;

import com.bhaiti.kela.beans.*;

@Controller

public class StudentRegistrationController {

  @CrossOrigin(origins = "http://localhost:8080")
  @RequestMapping(method = RequestMethod.POST, value="/register/student", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE,  produces = {MediaType.APPLICATION_ATOM_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})

 

  public  @ResponseBody StudentRegistrationReply registerStudent( Student student) {

  System.out.println("In registerStudent");

        StudentRegistrationReply stdregreply = new StudentRegistrationReply();           

        StudentRegistration.getInstance().add(student);

        //We are setting the below value just to reply a message back to the caller

        stdregreply.setName(student.getName());

        stdregreply.setAge(student.getAge());

        stdregreply.setRegistrationNumber(student.getRegistrationNumber());

        stdregreply.setRegistrationStatus("Successful");

        return stdregreply;

}

}