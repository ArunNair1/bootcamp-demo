
var task_counter=0;

function AddNote()
{
	let content=document.getElementById('task_content').value;
	if(content=="")
	{
		$("#err_msg").show();
		document.getElementById("err_msg").innerHTML="Please enter a content";
		$("#err_msg").fadeOut(1000);
		
	}
	else
	{
		document.getElementById("err_msg").innerHTML="";
		let task_count='task_id_'+task_counter+'';
		let task_content='task_content_'+task_counter+'';
		//console.log(task_count);
		$("#tasks_div").append('<div class="container centered-div task-div" style="display:none;" id="'+task_count+'"><div style="margin:0 auto"><h3 id="'+task_content+'" data-value="'+content+'">'+content+'<span class="close-button"><i class="fa fa-times" onclick="DeleteTask('+task_counter+');"></i></span><span class="edit-bitton" onclick="EditTask('+task_counter+');"><i class="fa fa-edit"></i></span></h3></div></div>');
		task_counter++;
		document.getElementById('task_content').value="";
		$("#"+task_count).fadeIn(1000);
		$( "#"+task_count ).animate({height: 'toggle'}, "fast");
		$( "#"+task_count ).fadeIn("fast");

	}
}

function DeleteTask(task_id)
{
	//console.log(task_id);
	let task_count='task_id_'+task_id+'';
	//console.log(task_count);
	
	$("#"+task_count).remove();
	
}


function EditTask(task_id)
{
	console.log(task_id);
	let task_count='task_id_'+task_id+'';
	let task_content='#task_content_'+task_id+'';
	let content = $(task_content).attr("data-value");
	document.getElementById('task_content').value=content;
	$("#"+task_count).remove();
}




$(document).ready( function(){
	
	document.getElementById("task_content").value="";
	});