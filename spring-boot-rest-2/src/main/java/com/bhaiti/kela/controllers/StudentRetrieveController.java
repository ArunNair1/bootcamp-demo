package com.bhaiti.kela.controllers;

import java.util.List;
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
  return StudentRegistration.getInstance().getStudentRecords();
  }
  
  @CrossOrigin(origins = "http://localhost:8080")
  @RequestMapping(method = RequestMethod.GET, value="/student/studentbyid/{regdNum}")
  @ResponseBody
  public Student getOneStudent(@PathVariable("regdNum") int regdNum) {
  return StudentRegistration.getInstance().getOneStudentRecord(regdNum);
	 // return regdNum;
  }
}
