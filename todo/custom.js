function analyticsMethod(funcCall,detailPageId=0)
{
	//alert(funcCall);
	
	switch(funcCall)
	{
		case 0: 
			{
				//alert("login function called");
				var userId=document.getElementById("userId").value;
				//alert(userId);
				gtag('config', 'G-VJHZW71TEK', {'user_id': userId});
				gtag('event', 'ecom_user_login',"user logged in");
				gtag('event', 'ecom_home_page_view',"HomePageView");
				gtag('event', 'ecom_home_screen_view', { 'screen_name': 'Home'});
				 break; 
			}
		case 1:
			{
				gtag('event', 'ecom_home_page_view',"HomePageView");
				gtag('event', 'ecom_home_screen_view', { 'screen_name': 'Home'});
				//alert("home page loaded"); 
				break; 
			}
		case 2: 
			{
				gtag('event', 'ecom_productlist_page_view',"ProductListPageView");
				gtag('event', 'ecom_productlist_screen_view', { 'screen_name': 'ProductList'});
				//alert("product page loaded");
				break; 
			}
		case 3: 
			{
				gtag('event', 'ecom_orderlist_page_view',"OrderListPageView");
				gtag('event', 'ecom_orderlist_screen_view', { 'screen_name': 'OrderList'});
				//alert("order page loaded"); 
				break; 
			}
		case 4: 
			{
				gtag('event', 'ecom_wishlist_page_view',"WishlistPageView");
				gtag('event', 'ecom_wishlist_screen_view', { 'screen_name': 'Wishlist'});
				//alert("wishlist page loaded"); break; 
			}
		case 5:
			{
				gtag('event', 'ecom_productDetail_page_view',"ProductDetailPageView");
				gtag('event', 'ecom_productDetail_screen_view', { 'screen_name': 'ProductDetail'});
				var prodname= "product"+detailPageId+" details loaded";
				gtag('event', 'ecom_prod_id_details_view', prodname);
				//alert("productDetail page loaded"); 
				break;
			}
		case 6: 
			{ 
				gtag('event', 'ecom_orderDetail_page_view',"OrderDetailPageView");
				gtag('event', 'ecom_orderDetail_screen_view', { 'screen_name': 'OrderDetail'});
				var ordername= "order"+detailPageId+" details loaded";
				gtag('event', 'ecom_order_id_details_view', ordername);
				//alert("orderdetail page loaded"); 
				break;
			}
		case 7: 
			{ 
				gtag('event', 'ecom_cart_page_view',"CartPageView");
				gtag('event', 'ecom_cart_screen_view', { 'screen_name': 'Cart'});
				//alert("cart page loaded"); 
				break;
			}
		case 8:
			{
				gtag('event', 'ecom_checkout_page_view',"CheckoutPageView");
				gtag('event', 'ecom_checkout_screen_view', { 'screen_name': 'Checkout'});
				//alert("checkout page loaded");
				break; 
			}
		default:
			{
				gtag('event', 'ecom_login_page_view',"LoginPageView");
				gtag('event', 'ecom_login_screen_view', { 'screen_name': 'Login'});
				break;
			}
		
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
