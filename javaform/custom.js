var edit_id;

// $(document).ready( function(){
	
	
		// get_students();
	
	
	
	// });
	
//to get todays task or of the date selected
function get_students()
{
	
	$.ajax({
			type: "GET",
			url: 'http://localhost:8085/student/allstudent',
			async:true, 
			dataType:"json",
			headers:{
					'Access-Control-Allow-Origin':'*'
				},
			crossDomain:true,
			success: function(response) {
				
				console.log(response);
				show_all_students(response);
			},
			error: function(err){console.log(err);}
		});
				
}


function AddStudent()
{
alert("here");
let submit_flag=0;
submit_flag=validate_input();

console.log("after call"+submit_flag);
 let name_data;
 let age_data;
 let reg_data;
if(submit_flag==1)
{
	name_data=document.getElementById('user_name').value;
	age_data=document.getElementById('user_age').value;
	reg_data=document.getElementById('user_regno').value;
	edit_id=document.getElementById('edit_id').value;
	if(edit_id)
	{
		put_data(name_data,age_data,reg_data);

	}
	else
	{
		post_data(name_data,age_data,reg_data);		
	}
}
console.log("hello");
}



function validate_input()
{
	let flag1=0;
	let flag2=0;
	let flag3=0;

	
	if(document.getElementById('user_name').value=='')
	{
		document.getElementById('name_error').innerHTML="Please enter name";
		document.getElementById('name_error').style.color="red";
		flag1=0;
	}
	else
	{
		document.getElementById('name_error').innerHTML="";
		
		flag1=1;
	}
	if(document.getElementById('user_age').value=='')
	{
		document.getElementById('age_error').innerHTML="Please enter age";
		document.getElementById('age_error').style.color="red";
		flag2=0;
	}
	else if(isNaN(document.getElementById('user_age').value))
	{
		document.getElementById('age_error').innerHTML="Please enter age as a digit";
		document.getElementById('age_error').style.color="red";
		flag2=0;
	}
	else
	{
		document.getElementById('age_error').innerHTML="";
		flag2=1;
	}
	if(document.getElementById('user_regno').value=='')
	{
		document.getElementById('reg_error').innerHTML="Please enter registration number";
		document.getElementById('reg_error').style.color="red";
		flag3=0;
	}
	else if(isNaN(document.getElementById('user_regno').value))
	{
		document.getElementById('reg_error').innerHTML="Please enter registration number as a digit";
		document.getElementById('reg_error').style.color="red";
		flag3=0;
	}
	else
	{
		document.getElementById('reg_error').innerHTML="";
		flag3=1;
	}

if(flag1==1 && flag2==1 && flag3==1)
{
	return 1;
}
else
{
	return 0;
}
}


function post_data(insert_name,insert_age,insert_regno)
{


	$.ajax({
		type: "POST",
		url: 'http://localhost:8085/register/student',
		async:true, 
		dataType:"json",
		data:{"name":insert_name,"age":insert_age,"registrationNumber":insert_regno},
		crossDomain:true,
		success: function(response) {
			
			console.log(response);
			window.location = 'http://localhost:8080/javaform/'
		
		},
		error: function(err) {
			
			console.log(err);
		
		}
	});

}

function put_data(insert_name,insert_age,insert_regno)
{
	$.ajax({
			type: "PUT",
			url: 'http://localhost:8085/update/student',
			async:true, 
			dataType:"json",
			data:{"name":insert_name,"age":insert_age,"registrationNumber":insert_regno},
			crossDomain:true,
			success: function(response) {
				
				console.log(response);
				window.location = 'http://localhost:8080/javaform/'
			
			},
			error: function(err) {
				
				console.log(err);
			
			}
		});
}

function show_all_students(all_data)
{
	for(let iter=0;iter<all_data.length;iter++)
	{
		console.log(all_data[iter]);
		$("#test").append('<tr id="'+all_data[iter].registrationNumber+'"><td>'+(iter+1)+'</td><td>'+all_data[iter].name+'</td><td>'+all_data[iter].age+'</td><td>'+all_data[iter].registrationNumber+'</td><td><button class="btn-success" onclick="edit_this_student('+iter+','+all_data[iter].registrationNumber+')">Edit</button><button class="btn-danger"  onclick="delete_this_student('+all_data[iter].registrationNumber+')">Delete</button></td></tr>');
	}
}



function edit_this_student(id,ed_id)
{
	// edit_id=ed_id;
	localStorage.setItem("edit_id_name",id);

	window.location = 'http://localhost:8080/javaform/form.html'
}

function delete_this_student(del_id)
{
	
	let confirmation_var=confirm("Do you want to delete this task");
	if(confirmation_var==true)
	{
		
		$.ajax({
					method: "DELETE",
					url: 'http://localhost:8085/delete/student/'+del_id+'',
					async:true, 
					dataType:"json",
					headers:{
                            'Access-Control-Allow-Origin':'*'
                        },
					
					success: function(response) {
						
						$("#"+del_id).remove();
	
					},
					error: function(thrownerror){console.log(thrownerror);}
				});
	}

}



function getStudentById(ed_id)
{
	$.ajax({
			type: "GET",
			url: 'http://localhost:8085/student/studentbyid/'+ed_id,
			async:true, 
			dataType:"json",
			headers:{
					'Access-Control-Allow-Origin':'*'
				},
			crossDomain:true,
			success: function(response) {
				
				document.getElementById('user_name').value=response.name;
				document.getElementById('edit_id').value=response.registrationNumber;
				document.getElementById('user_age').value=response.age;
				document.getElementById('user_regno').value=response.registrationNumber;
				//show_all_students(response);
	
			},
			error: function(err){console.log(err);}
		});
}



function edit_form_filler()
{
// alert("reached here");

 id=localStorage.getItem("edit_id_name");
alert(id);	
// localStorage.setItem("edit_id_name",0);

	 if(id!=-1)
	{
		// alert("1");
		 getStudentById(id);
		 localStorage.setItem("edit_id_name",-1);

	 }
	// else
	// {
}






















// function AddNote()
// {
	// //let add_success=0;
	// let content=document.getElementById('task_content').value;
	// let task_type_identifier=document.getElementById('task_type').value;
	
	
	// if(content.trim()=="")
	// {
		// $("#err_msg").show();
		// document.getElementById("err_msg").innerHTML="Please enter a content";
		// $("#err_msg").fadeOut(1000);
		
	// }
	// else
	// {
		// var d = new Date(insert_date.getTime() - 3000000);
		// date_format_str = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";
		// console.log(date_format_str);
				
		// if(is_editing!=0)
		// {
			
			
			// edit_the_content(content,date_format_str);
		// }
		// else
		// {
		
		
			// if(task_type_identifier==0)
			// {
				// insert_task_type=1;//default value
			// }
			// else
			// {
				// insert_task_type=task_type_identifier;
			// }
			// console.log(task_type_identifier);
				

				// $.ajax({
							// type: "POST",
							// url: 'http://localhost:52371/api/tasks_table/post',
							// async:true, 
							// dataType:"json",
							// data:{"tasks":content,"completed_date":date_format_str,"status_id":"2","todo_type_id":insert_task_type},
							// crossDomain:true,
							// success: function(response) {
								
								// console.log(response);
								// object=response;
								// console.log("object"+object);
								// console.log("object value"+object.tasks);
								// add_task_to_ui(object.tasks,object.id);
							
							// }
						// });
				
						
				// document.getElementById("err_msg").innerHTML="";
		// }
	// }
// }

// function DeleteTask(task_id)
// {
	// console.log(task_id);
	// let task_count='task_id_'+task_id+'';
	// //console.log(task_count);
	// let confirmation_var=confirm("Do you want to delete this task");
	// if(confirmation_var==true)
	// {
		
		// $.ajax({
					// method: "DELETE",
					// url: 'http://localhost:52371/api/tasks_table/delete/'+task_id+'',
					// async:true, 
					// dataType:"json",
					// headers:{
                            // 'Access-Control-Allow-Origin':'*'
                        // },
					
					// success: function(response) {
						
						// console.log(response);
						// $("#"+task_count).remove();
	
					// },
					// error: function(thrownerror){console.log(thrownerror);}
				// });
	// }
	
	
	
	// //
// }

// function EditTask(task_id)
// {
	// if(edit_content)
	// {
			// $("#err_msg").show();
			// document.getElementById("err_msg").innerHTML="You can't edit another task till you save current entry";
			// $("#err_msg").fadeOut(2000);
		
	// }
	// else
	// {
			
			// console.log(task_id);
			 // $("#task_type").prop("disabled", true);
			 
			// let task_type_identifier=$("#task_content_"+task_id).attr("data-contenttype");
			// console.log("arun"+task_type_identifier);
			
			
			// let task_count='task_id_'+task_id+'';
			// let task_content='#task_content_'+task_id+'';
			// edit_content = $(task_content).attr("data-value");
			// document.getElementById('task_content').value=edit_content;
			// $("#"+task_count).remove();
			// document.getElementById('task_content').focus();
			// is_editing=task_id;
			
			// is_editing_task_type=task_type_identifier;
			
			
			// console.log("arun"+is_editing_task_type);
			
	// }
	
// }



// function CompleteTask(task_id)
// {
	// console.log(task_id);
	
	// let task_count='task_id_'+task_id+'';
	// let task_content='task_content_'+task_id+'';
	// edit_content = $("#"+task_content).attr("data-value");
	// let d = new Date(insert_date.getTime() - 3000000);
	// date_format_str = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";
	
	// if($("#"+task_content).attr("data-complete")==0)
	// {
		// status_update_value=5; //completed
	// }
	// else
	// {
		// status_update_value=2; //pending
	// }
	
	// console.log(edit_content);
	// console.log(date_format_str);
	
	
	
	// $.ajax({
					// method: "PUT",
					// url: 'http://localhost:52371/api/tasks_table/put/'+task_id,
					// async:true, 
					// dataType:"json",
					// headers:{
                            // 'Access-Control-Allow-Origin':'*'
                        // },
					// data:{"id":task_id,"tasks":edit_content,"completed_date":date_format_str,"status_id":status_update_value},
					// success: function(response) {
								// console.log(response);
								// object=response;
								// edit_content='';
								// // console.log("object"+object);
								// // console.log("object value"+object.tasks);
								// // add_task_to_ui(object.tasks,object.id);
								// strike_through(object.id);
					// },
					// error: function(thrownerror){console.log(thrownerror);}
				// });
	
	
	
	
// }



// //to add recently added task to the list

// function add_task_to_ui(display_content,display_id)
// {
	
			// //alert(display_id);
				// let task_count='task_id_'+display_id+'';
				// let task_content='task_content_'+display_id+'';
				
				
				
				// let task_type_identifier=document.getElementById('task_type').value;
				// if(task_type_identifier==0 && is_editing_task_type==-1)
				// {
					// insert_task_type=1;//default value
					// alert("hi");
				// }
				// else if(task_type_identifier==0 && is_editing_task_type!=-1)
				// {
					// insert_task_type=is_editing_task_type;
					// alert("hi2");
				// }
				// else
				// {
					// insert_task_type=task_type_identifier;
					// alert("hi3");
				// }
	
	
					// //console.log(task_count);
					// $("#tasks_div").append('<div class="container centered-div task-div" style="display:none;" id="'+task_count+'"><div style="margin:0 auto"><h3 id="'+task_content+'" data-complete="0" data-contenttype="'+insert_task_type+'" data-value="'+display_content+'">'+display_content+'<span class="close-button"><i class="fa fa-times" onclick="DeleteTask('+display_id+');"></i></span><span class="edit-button" onclick="EditTask('+display_id+');"><i class="fa fa-edit"></i></span><span class="check-button" id="check_'+display_id+'" onclick="CompleteTask('+display_id+');"><i class="fa fa-check"></i></span></h3></div></div>');
					// //task_counter++;
					// document.getElementById('task_content').value="";
					// $("#"+task_count).fadeIn(1000);
					// //$( "#"+task_count ).animate({height: 'toggle'}, "fast");
					// //$( "#"+task_count ).fadeIn("fast");
					// edit_content="";
					// is_editing_task_type=-1;
// }




// function edit_the_content(content,date_format_str)
// {
	
	// console.log(is_editing);
	
	// console.log("arun 2"+is_editing_task_type);
	// console.log("arun inside add for edit"+is_editing_task_type);
	
	// $.ajax({
					// method: "PUT",
					// url: 'http://localhost:52371/api/tasks_table/put/'+is_editing,
					// async:true, 
					// dataType:"json",
					// headers:{
                            // 'Access-Control-Allow-Origin':'*'
                        // },
					// data:{"id":is_editing,"tasks":content,"completed_date":date_format_str,"status_id":"2","todo_type_id":is_editing_task_type},
					// success: function(response) {
								// console.log(response);
								// object=response;
								// console.log("object"+object);
								// console.log("object value"+object.tasks);
								// console.log("object type value"+object.todo_type_id);
								// add_task_to_ui(object.tasks,object.id);
								
								// $("#task_type").prop("disabled", false);
					// },
					// error: function(thrownerror){console.log(thrownerror);}
				// });
				
// }





// function prev()
// {
	// insert_date.setDate(insert_date.getDate() - 1);
	// let d = new Date(insert_date.getTime() - 3000000);
	// global_date_format_str = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";
	// //console.log(insert_date);
	// change_date(insert_date);
	// $("#tasks_div").empty(); 
	// //get_todays_task();
	
	// let condition_value=$("#task_type").children("option:selected"). val();
	// fetch_data_selectively(condition_value,insert_date);
// }

// function next()
// {
	// insert_date.setDate(insert_date.getDate() + 1);
	// let d = new Date(insert_date.getTime() - 3000000);
	// global_date_format_str = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";
	// change_date(insert_date);
	// $("#tasks_div").empty(); 
	// //get_todays_task();
	// let condition_value=$("#task_type").children("option:selected"). val();
	// fetch_data_selectively(condition_value,insert_date);
// }


// function change_date(new_date)
// {
	// let month= new_date.getMonth();
	// let todays_date= new_date.getDate();
	// let year= new_date.getFullYear();
	// let day_id= new_date.getDay();
	// document.getElementById('include_date').innerHTML=todays_date+' '+months[month]+' '+year;
	
// }

// function strike_through(task_id)
// {
	
	
	// let task_count='check_'+task_id+'';
	// let task_content='task_content_'+task_id+'';
	// if($("#"+task_content).attr("data-complete")==0)
	// {
		
		// document.getElementById(task_count).style.color="red";
		// document.getElementById(task_content).style.textDecoration ="line-through";
		// $("#"+task_content).attr("data-complete","1");
	// }
	// else
	// {
			
		// document.getElementById(task_count).style.color="white";
		// document.getElementById(task_content).style.textDecoration ="none";
		// $("#"+task_content).attr("data-complete","0");
	// }
// }

// function get_task_type()
// {
	// $.ajax({
			// type: "GET",
			// url: 'http://localhost:52371/api/todo_type_table',
			// async:true, 
			// dataType:"json",
			// headers:{
					// 'Access-Control-Allow-Origin':'*'
				// },
			// crossDomain:true,
			// success: function(response) {
				
				// console.log(response);
				// types_content=response;
				
				// /*for(let k=0;k<types_content.length;k++)
				// {
					// console.log(types_content[k].todo_type_name);
					
					
				// }
				// */
				// $.each(types_content, function(key, value) 
				// {
					 // $('#task_type').append($('<option>', { value : value.todo_type_id }).text(value.todo_type_name));
				// });
				
			// }
		// });
// }

// function freshen_all_data_on_select()
// {
	
	// let condition_value=$("#task_type").children("option:selected"). val();
	// fetch_data_selectively(condition_value,insert_date);
	
// }

// function fetch_data_selectively(condition_value1,condition_value2)
// {
	// console.log(condition_value1);
	// console.log(condition_value2);
	
	// $.ajax({
			// type: "GET",
			// url: 'http://localhost:52371/api/tasks_table/Getselectedtasks_table/'+condition_value1,
			// async:true, 
			// dataType:"json",
			// headers:{
					// 'Access-Control-Allow-Origin':'*'
				// },
			// crossDomain:true,
			// success: function(response) {
				
				// console.log(response);
				// //show_all_tasks(response);
				// $("#tasks_div").empty(); 
				// show_all_tasks(response);
			// },
			// error:function(err){console.log(err);}
		// });
	
// }