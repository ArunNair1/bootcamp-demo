package com.bhaiti.kela.controllers;

import java.io.FileReader;
import java.io.FileWriter;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.web.bind.annotation.ResponseBody;

import com.bhaiti.kela.beans.Student;

import com.bhaiti.kela.beans.StudentRegistration;

@Controller

public class StudentUpdateController {
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping(method = RequestMethod.PUT, value="/update/student/{id}", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE,  produces = {MediaType.APPLICATION_ATOM_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})



public @ResponseBody Student updateStudentRecord( Student stdn,@PathVariable("id") String id) {

System.out.println("In updateStudentRecord");   

    //StudentRegistration.getInstance().upDateStudent(stdn);
	
JSONArray jsonArray;
JSONParser parser = new JSONParser();
try(FileReader f = new FileReader("student.json"))
	{	
		Object bb = parser.parse(f);
		jsonArray = (JSONArray)bb;
			
	}
	catch(Exception ex)
	{	
		
		jsonArray = new JSONArray();
	}

JSONObject person =  (JSONObject) jsonArray.get(Integer.parseInt(id));
person.put("name", stdn.getName());
person.put("age", stdn.getAge());
person.put("RegistrationNumber", stdn.getRegistrationNumber());
//jsonArray.set(Integer.parseInt(id), stdn);

try (FileWriter file = new FileWriter("student.json")) 
{
	
	//System.out.println("reaced here"+jsonArray);
file.write(jsonArray.toString());
file.flush();


}
catch (Exception e) {
e.printStackTrace();
}

return stdn;
}

}
