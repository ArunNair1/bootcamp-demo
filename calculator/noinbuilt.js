

	
	//var operator="";
	var operand=0;
	var operands_array=[];
	//var result;
	var input_counter=0;
	//var operator_array=[];
	//var operator_counter=0;
	
	
	function calc_keypress(clicked_btn)
	{
		
		var clicked_value=clicked_btn.innerHTML;
		
		
		console.log(operands_array[input_counter]);
		console.log(clicked_value);
		console.log(operands_array[input_counter-1]);
		console.log(input_counter);
		if(operands_array.length==0 && isNaN(clicked_value) && operand==0)
		{
			alert("Please check your input");
		}
		else if(operands_array.length==0 && clicked_value==0)
		{
			alert("Please check your input");
		}
		else if(isNaN(clicked_value) && isNaN(operands_array[input_counter-1]) && operands_array[input_counter-1]!=undefined && operands_array[input_counter]!='=' && operand==0)
		{
			alert("Please check your input");
		}
		else
		{
				if(my_result!="")
					{
						document.getElementById('input_display').innerHTML=clicked_value;
						my_result="";
					}
					else
					{
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
		}
					
		
	}
	
	var my_result="";
	
	function calculate()
	{
		console.log("actual operands array"+operands_array);
		//operands_array=['7','+','7','/','7','+','7','*','7','-','7'];
		console.log("operands array"+operands_array);
		
		
		while(operands_array.includes("/"))
		{
			let operator_index=operands_array.indexOf("/");
			let res = Number(operands_array[operator_index-1])/Number(operands_array[operator_index+1]);
			operands_array[operator_index-1]=res;
			operands_array[operator_index]="";
			
						let return_value=array_reordering(operator_index);

			console.log(operands_array);
		}
		
		
		while(operands_array.includes("*"))
		{
			let operator_index=operands_array.indexOf("*");
			let res = Number(operands_array[operator_index-1])*Number(operands_array[operator_index+1]);
			operands_array[operator_index-1]=res;
			operands_array[operator_index]="";
			
			
			let return_value=array_reordering(operator_index);
			
			console.log(operands_array);
		}
		
		while(operands_array.includes("+"))
		{
			let operator_index=operands_array.indexOf("+");
			let res = Number(operands_array[operator_index-1])+Number(operands_array[operator_index+1]);
			operands_array[operator_index-1]=res;
			operands_array[operator_index]="";
			
						let return_value=array_reordering(operator_index);

			console.log(operands_array);
		}
		
		while(operands_array.includes("-"))
		{
			let operator_index=operands_array.indexOf("-");
			let res = Number(operands_array[operator_index-1])-Number(operands_array[operator_index+1]);
			operands_array[operator_index-1]=res;
			operands_array[operator_index]="";
			
						let return_value=array_reordering(operator_index);

			console.log(operands_array);
		}
		
		
		
		function array_reordering(operator_index)
		{
			for(let i=operator_index;i<operands_array.length;i++)
			{
				if(operands_array[i+2])
				{
					operands_array[i]=operands_array[i+2];
				}
				else if(operands_array[i+1])
				{
					operands_array[i]=operands_array[i+1];
				}
				else
				{
					operands_array.pop();
					operands_array.pop();
				}
			}
			return operands_array;
		}
		my_result="result_true";
		if(isNaN(operands_array[0]))
		{
			document.getElementById('input_display').innerHTML="E";
		}
		else
		{
			document.getElementById('input_display').innerHTML=operands_array[0];
		}
		
		operands_array.length = 0;
		operands_array=[];
		input_counter=0;
		
		
		/*str=operands_array.toString();
		
		
		while(str.includes(",.,"))
		{
				str=str.replace(",.,",".");
		}
		
		while(str.includes(","))
		{
				str=str.replace(","," ");
		}
		
		
		console.log("calculate function"+str);
		
		var aq=eval(str.toString());
		operands_array=[];
	
		console.log(aq);
		*/
	}

function clear_function(val)
{
	document.getElementById('input_display').innerHTML="";
		
	if(val==2)
	{
		operands_array.length = 0;
		operands_array=[];
		input_counter=0;
		
	}
	else if(val==1)
	{
		console.log(operands_array);
		//operands_array.pop();
		console.log(operands_array);
		console.log(operand);
		operand=0;
		for(let i=0;i<operands_array.length;i++)
		{
				document.getElementById('input_display').innerHTML+=operands_array[i];
		}
		
		
		
	}
}

