

	
	//var operator="";
	var operand=0;
	var result="";
	var operands_array=[];
	//var result;
	var input_counter=0;
	var operator_array=[];
	var operator_counter=0;
	
	
	function calc_keypress(clicked_btn)
	{
		var clicked_value=clicked_btn.innerHTML;
		console.log(result);
		if(result!="")
		{
			alert("one");
			document.getElementById('input_display').innerHTML=clicked_value;
			result="";
		}
		else
		{
			alert("two");
			document.getElementById('input_display').innerHTML+=clicked_value;	
		}
		
			
		
		if(isNaN(clicked_value) && operand!=0)
		{
			operands_array[input_counter]=operand;
			operand=0;
			//operator_array[operator_counter]=clicked_value;
			//operator_counter++;
			//console.log("after insetr into array"+operands_array[input_counter]+"and counter"+input_counter);
			input_counter++;
			
			if(clicked_value=="=")
			{
				
				calculate();
				
		
			}
			else
			{
				operands_array[input_counter]=clicked_value;
				input_counter++;
			}
		}
		
		else
		{
			operand=(operand*10)+Number(clicked_value);
		}
		/*
		if(isNaN(clicked_value) && clicked_value!="=")
		{
			console.log("index:"+input_counter+ " and value is: "+operands_array[input_counter]);
			operator = clicked_value;
			operands_array[input_counter]=Number(operand);
			operand=0;
			input_counter++;
			
		}
		else
		{
			//if(operator=="")
			//{
					operand=(operand*10)+Number(clicked_value);
					
			//s}
			
			console.log("index:"+input_counter+ " and value is: "+operands_array[input_counter]);	
		}
		console.log(operands_array);
		document.getElementById("input_display").innerHTML=operator;
		*/
	}
	
	
	function calculate()
	{
		
		str=operands_array.toString();
		
		
		while(str.includes(",.,"))
		{
				str=str.replace(",.,",".");
		}
		
		while(str.includes(","))
		{
				str=str.replace(",","");
		}
		
		
		console.log("calculate function"+str);
		
		var final_result=eval(str.toString());
		operands_array=[];
	
		//console.log(aq);
			result=final_result;
			document.getElementById('input_display').innerHTML=final_result;
	}
	
	
	
	
function clear_function(val)
{
	document.getElementById('input_display').innerHTML="";
		
		operands_array.length = 0;
		operands_array=[];
		input_counter=0;
		
	
}



