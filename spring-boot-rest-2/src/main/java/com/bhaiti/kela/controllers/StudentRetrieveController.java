package com.bhaiti.kela.controllers;

import java.io.FileReader;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.bhaiti.kela.beans.Student;
import com.bhaiti.kela.beans.StudentRegistration;

@Controller
public class StudentRetrieveController {
  @CrossOrigin(origins = "http://localhost:8080")
  @RequestMapping(method = RequestMethod.GET, value="/student/allstudent")
  @ResponseBody
  public List<Student> getAllStudents() {
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
  //return StudentRegistration.getInstance().getStudentRecords();
	  return jsonArray;
  }
  
  @CrossOrigin(origins = "http://localhost:8080")
  @RequestMapping(method = RequestMethod.GET, value="/student/studentbyid/{regdNum}")
  @ResponseBody
  public Object getOneStudent(@PathVariable("regdNum") int regdNum) {
	  
	  //JSONParser jsonParser = new JSONParser();
	  
	  
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
	  
	 
	 
  //return StudentRegistration.getInstance().getOneStudentRecord(regdNum);
	  return  jsonArray.get(regdNum);
  }
}
