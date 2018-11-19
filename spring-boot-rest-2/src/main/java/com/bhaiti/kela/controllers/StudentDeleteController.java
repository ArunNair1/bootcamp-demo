package com.bhaiti.kela.controllers;
import java.io.FileReader;
import java.io.FileWriter;

import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;

import com.bhaiti.kela.beans.StudentRegistration;

@Controller

public class StudentDeleteController {

@RequestMapping(method = RequestMethod.DELETE, value="/delete/student/{regdNum}")

@ResponseBody
@CrossOrigin(origins = "http://localhost:8080")

public String deleteStudentRecord(@PathVariable("regdNum") String regdNum) {

System.out.println("In deleteStudentRecord");   

     //StudentRegistration.getInstance().deleteStudent(regdNum);
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

jsonArray.remove(Integer.parseInt(regdNum));
try (FileWriter file = new FileWriter("student.json")) 
{
	
	//System.out.println("reaced here"+jsonArray);
file.write(jsonArray.toString());
file.flush();


}
catch (Exception e) {
e.printStackTrace();
}

return regdNum;
}

}