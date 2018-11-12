
var task_counter=0;
var edit_content;

var insert_date;
var global_date_format_str;
var is_editing=0;

// function abc()
// {
	
	// alert("hello123");
	// $.ajax({
					// type: "POST",
					// url: 'http://localhost:52371/api/status_table/post',
					// async:true, 
					// dataType:"json",
					// data:{"stat":"localhost"},
					// crossDomain:true,
					// success: function(response) {
						// alert("hello");
						// console.log(response);
					// }
				// });
				
				
// }



function AddNote()
{
	//let add_success=0;
	let content=document.getElementById('task_content').value;
	if(content.trim()=="")
	{
		$("#err_msg").show();
		document.getElementById("err_msg").innerHTML="Please enter a content";
		$("#err_msg").fadeOut(1000);
		
	}
	else
	{
		var d = new Date(insert_date.getTime() - 3000000);
		date_format_str = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";
		console.log(date_format_str);
				
		if(is_editing!=0)
		{
			edit_the_content(content,date_format_str);
		}
		else
		{
		
		
		
				

				$.ajax({
							type: "POST",
							url: 'http://localhost:52371/api/tasks_table/post',
							async:true, 
							dataType:"json",
							data:{"tasks":content,"completed_date":date_format_str,"status_id":"2"},
							crossDomain:true,
							success: function(response) {
								
								console.log(response);
								object=response;
								console.log("object"+object);
								console.log("object value"+object.tasks);
								add_task_to_ui(object.tasks,object.id);
							
							}
						});
				
						
				document.getElementById("err_msg").innerHTML="";
		}
	}
}

function DeleteTask(task_id)
{
	console.log(task_id);
	let task_count='task_id_'+task_id+'';
	//console.log(task_count);
	
	
	$.ajax({
					method: "DELETE",
					url: 'http://localhost:52371/api/tasks_table/delete/'+task_id+'',
					async:true, 
					dataType:"json",
					headers:{
                            'Access-Control-Allow-Origin':'*'
                        },
					
					success: function(response) {
						alert("hello");
						console.log(response);
						$("#"+task_count).remove();
	
					},
					error: function(thrownerror){console.log(thrownerror);}
				});
	
	
	//
}

function EditTask(task_id)
{
	if(edit_content)
	{
			$("#err_msg").show();
			document.getElementById("err_msg").innerHTML="You can't edit another task till you save current entry";
			$("#err_msg").fadeOut(2000);
		
	}
	else
	{
			console.log(task_id);
			let task_count='task_id_'+task_id+'';
			let task_content='#task_content_'+task_id+'';
			edit_content = $(task_content).attr("data-value");
			document.getElementById('task_content').value=edit_content;
			$("#"+task_count).remove();
			document.getElementById('task_content').focus();
			is_editing=task_id;
	
	}
	
}



function CompleteTask(task_id)
{
	console.log(task_id);
	
	let task_count='task_id_'+task_id+'';
	let task_content='task_content_'+task_id+'';
	edit_content = $("#"+task_content).attr("data-value");
	let d = new Date(insert_date.getTime() - 3000000);
	date_format_str = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";
	
	if($("#"+task_content).attr("data-complete")==0)
	{
		status_update_value=5; //completed
	}
	else
	{
		status_update_value=2; //pending
	}
	
	console.log(edit_content);
	console.log(date_format_str);
	
	
	
	$.ajax({
					method: "PUT",
					url: 'http://localhost:52371/api/tasks_table/put/'+task_id,
					async:true, 
					dataType:"json",
					headers:{
                            'Access-Control-Allow-Origin':'*'
                        },
					data:{"id":task_id,"tasks":edit_content,"completed_date":date_format_str,"status_id":status_update_value},
					success: function(response) {
								console.log(response);
								object=response;
								edit_content='';
								// console.log("object"+object);
								// console.log("object value"+object.tasks);
								// add_task_to_ui(object.tasks,object.id);
								strike_through(object.id);
					},
					error: function(thrownerror){console.log(thrownerror);}
				});
	
	
	
	
}

$(document).ready( function(){
	
	document.getElementById("task_content").value="";
	
	include_date();
	get_todays_task();
	
	});
	

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//to show the date
function include_date()
{
	let today= new Date();
	let month= today.getMonth();
	let todays_date= today.getDate();
	let year= today.getFullYear();
	let day_id= today.getDay();
	insert_date=today;
	document.getElementById('include_date').innerHTML=todays_date+' '+months[month]+' '+year;
	
	let d = new Date(insert_date.getTime() - 3000000);
	global_date_format_str = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";
		
}

//to add recently added task to the list

function add_task_to_ui(display_content,display_id)
{
	
			//	alert(display_id);
				let task_count='task_id_'+display_id+'';
					let task_content='task_content_'+display_id+'';
					//console.log(task_count);
					$("#tasks_div").append('<div class="container centered-div task-div" style="display:none;" id="'+task_count+'"><div style="margin:0 auto"><h3 id="'+task_content+'" data-complete="0" data-value="'+display_content+'">'+display_content+'<span class="close-button"><i class="fa fa-times" onclick="DeleteTask('+display_id+');"></i></span><span class="edit-button" onclick="EditTask('+display_id+');"><i class="fa fa-edit"></i></span><span class="check-button" id="check_'+display_id+'" onclick="CompleteTask('+display_id+');"><i class="fa fa-check"></i></span></h3></div></div>');
		//task_counter++;
					document.getElementById('task_content').value="";
					$("#"+task_count).fadeIn(1000);
					//$( "#"+task_count ).animate({height: 'toggle'}, "fast");
					//$( "#"+task_count ).fadeIn("fast");
					edit_content="";
}


//to get todays task or of the date selected
function get_todays_task()
{
	
	$.ajax({
			type: "GET",
			url: 'http://localhost:52371/api/tasks_table/gett',
			async:true, 
			dataType:"json",
			headers:{
					'Access-Control-Allow-Origin':'*'
				},
			crossDomain:true,
			success: function(response) {
				
				console.log(response);
				show_all_tasks(response);
			}
		});
				
}



function edit_the_content(content,date_format_str)
{
	
	console.log(is_editing);
	
	
	
	$.ajax({
					method: "PUT",
					url: 'http://localhost:52371/api/tasks_table/put/'+is_editing,
					async:true, 
					dataType:"json",
					headers:{
                            'Access-Control-Allow-Origin':'*'
                        },
					data:{"id":is_editing,"tasks":content,"completed_date":date_format_str,"status_id":"2"},
					success: function(response) {
								console.log(response);
								object=response;
								console.log("object"+object);
								console.log("object value"+object.tasks);
								add_task_to_ui(object.tasks,object.id);
					},
					error: function(thrownerror){console.log(thrownerror);}
				});
}



function show_all_tasks(all_data)
{
	for(let iter=0;iter<all_data.length;iter++)
	{
		if(all_data[iter].completed_date!=null)
		{
			let check_date=all_data[iter].completed_date;
		
			
			if(global_date_format_str.split(" ")[0]==check_date.split("T")[0])
			{
				let task_count='task_id_'+all_data[iter].id+'';
				let task_content='task_content_'+all_data[iter].id+'';
				
				
				$("#tasks_div").append('<div class="container centered-div task-div" style="display:none;" id="'+task_count+'"><div style="margin:0 auto"><h3 id="'+task_content+'" data-complete="0" data-value="'+all_data[iter].tasks+'">'+all_data[iter].tasks+'<span class="close-button"><i class="fa fa-times" onclick="DeleteTask('+all_data[iter].id+');"></i></span><span class="edit-button" onclick="EditTask('+all_data[iter].id+');"><i class="fa fa-edit"></i></span><span class="check-button" id="check_'+all_data[iter].id+'" onclick="CompleteTask('+all_data[iter].id+');"><i class="fa fa-check"></i></span></h3></div></div>');
				
				if(all_data[iter].status_id==5)
				{
					document.getElementById('check_'+all_data[iter].id+'').style.color="red";
					document.getElementById('task_content_'+all_data[iter].id+'').style.textDecoration ="line-through";
					$("#task_content_"+all_data[iter].id+"").attr("data-complete","1");
				}
				else if(all_data[iter].status_id==6)
				{
					document.getElementById('check_'+all_data[iter].id+'').style.color="black";
					document.getElementById('task_content_'+all_data[iter].id+'').style.textDecoration ="none";
					$("#task_content_"+all_data[iter].id+"").attr("data-complete","0");
				}
				else
				{
					document.getElementById('check_'+all_data[iter].id+'').style.color="white";
					document.getElementById('task_content_'+all_data[iter].id+'').style.textDecoration ="none";
					$("#task_content_"+all_data[iter].id+"").attr("data-complete","0");
				}
				
				document.getElementById('task_content').value="";
				$("#"+task_count).fadeIn(1000);
				//$( "#"+task_count ).animate({height: 'toggle'}, "fast");
				//$( "#"+task_count ).fadeIn("fast");
				//edit_content="";
			}
		}
	}
}

function prev()
{
	insert_date.setDate(insert_date.getDate() - 1);
	let d = new Date(insert_date.getTime() - 3000000);
	global_date_format_str = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";
	//console.log(insert_date);
	change_date(insert_date);
	$("#tasks_div").empty(); 
	get_todays_task();
}

function next()
{
	insert_date.setDate(insert_date.getDate() + 1);
	let d = new Date(insert_date.getTime() - 3000000);
	global_date_format_str = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";
	change_date(insert_date);
	$("#tasks_div").empty(); 
	get_todays_task();
}


function change_date(new_date)
{
	let month= new_date.getMonth();
	let todays_date= new_date.getDate();
	let year= new_date.getFullYear();
	let day_id= new_date.getDay();
	document.getElementById('include_date').innerHTML=todays_date+' '+months[month]+' '+year;
	
}

function strike_through(task_id)
{
	
	
	let task_count='check_'+task_id+'';
	let task_content='task_content_'+task_id+'';
	if($("#"+task_content).attr("data-complete")==0)
	{
		
		document.getElementById(task_count).style.color="red";
		document.getElementById(task_content).style.textDecoration ="line-through";
		$("#"+task_content).attr("data-complete","1");
	}
	else
	{
			
		document.getElementById(task_count).style.color="white";
		document.getElementById(task_content).style.textDecoration ="none";
		$("#"+task_content).attr("data-complete","0");
	}
}

