package com.bhaiti.kela.controllers;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.web.bind.annotation.ResponseBody;

import com.bhaiti.kela.beans.Student;

import com.bhaiti.kela.beans.StudentRegistration;

@Controller

public class StudentUpdateController {
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping(method = RequestMethod.PUT, value="/update/student", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE,  produces = {MediaType.APPLICATION_ATOM_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})



public  String updateStudentRecord( Student stdn) {

System.out.println("In updateStudentRecord");   

    StudentRegistration.getInstance().upDateStudent(stdn);
	return "updated";
}

}
