function analyticsMethod(funcCall)
{
	
	switch(funcCall)
	{
		case 1: {
				gtag('config', 'GA_MEASUREMENT_ID', {
					'user_id': '1683testuser'
				});
				gtag('event', 'page_view',"ProductsPageView");
				/*setCurrentScreen ( screenName :  "HomePage");*/
				break;
				}
				
		case 2: {
				/*setCurrentScreen ( screenName :  "ProductsPage");*/
				gtag('event', 'page_view',"ProductsPageView");
				gtag('event', 'view_item_list', {"items": [
					{
					  "id": "P12345",
					  "name": "Android Warhol T-Shirt",
					  "list_name": "Search Results",
					  "brand": "Google",
					  "category": "Apparel/T-Shirts",
					  "variant": "Black",
					  "list_position": 1,
					  "quantity": 2,
					  "price": '2.0'
					},
					{
					  "id": "P67890",
					  "name": "Flame challenge TShirt",
					  "list_name": "Search Results",
					  "brand": "MyBrand",
					  "category": "Apparel/T-Shirts",
					  "variant": "Red",
					  "list_position": 2,
					  "quantity": 1,
					  "price": '3.0'
					}
				]});
				
				break;
				}
		default:{alert("default"); break;}
	}

}






var task_counter=0;
var edit_content;



function AddNote()
{
	let content=document.getElementById('task_content').value;
	if(content.trim()=="")
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
		$("#tasks_div").append('<div class="container centered-div task-div" style="display:none;" id="'+task_count+'"><div style="margin:0 auto"><h3 id="'+task_content+'" data-complete="0" data-value="'+content+'">'+content+'<span class="close-button"><i class="fa fa-times" onclick="DeleteTask('+task_counter+');"></i></span><span class="edit-button" onclick="EditTask('+task_counter+');"><i class="fa fa-edit"></i></span><span class="check-button" id="check_'+task_counter+'" onclick="CompleteTask('+task_counter+');"><i class="fa fa-check"></i></span></h3></div></div>');
		task_counter++;
		document.getElementById('task_content').value="";
		$("#"+task_count).fadeIn(1000);
		$( "#"+task_count ).animate({height: 'toggle'}, "fast");
		$( "#"+task_count ).fadeIn("fast");
		edit_content="";
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
	
	}
	
}



function CompleteTask(task_id)
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

$(document).ready( function(){
	
	document.getElementById("task_content").value="";
	});