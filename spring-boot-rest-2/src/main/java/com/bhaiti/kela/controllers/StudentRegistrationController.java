package com.bhaiti.kela.controllers;

import java.io.EOFException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.http.MediaType;

//import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.web.bind.annotation.ResponseBody;

import com.bhaiti.kela.beans.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

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

        JSONArray jsonArray;
        JSONParser parser = new JSONParser(); 
    	try(FileReader f = new FileReader("student.json"))
    	{	
    		Object bb = parser.parse(f);
    		jsonArray = (JSONArray)bb;
    		System.out.println("reaced here"+jsonArray);	
    	}
    	catch(Exception ex)
    	{	
    		System.out.println("not read 1 "+ex);
    		jsonArray = new JSONArray();
    	}
    	
        try (FileWriter file = new FileWriter("student.json")) {
        	ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();	
        	String json = ow.writeValueAsString(student);
        	
        	
        	JSONObject obj = (JSONObject)parser.parse(json);	
        	//JSONObject obj1 = new JSONObject();
        	//JSONArray jsonArray = (JSONArray)obj1;
            //JSONArray jsonArray = new JSONArray();
        	
        	
        	jsonArray.add(obj);	
        	file.write(jsonArray.toString());
            file.flush();
 
        } catch (Exception e) {
        	System.out.println("2");
            e.printStackTrace();
        }
        return stdregreply;

}

}