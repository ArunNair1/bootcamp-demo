import java.util.*;
import java.io.FileWriter;
import java.io.BufferedWriter;
class Calculator
{

	public static void main(String args[])
	{
		System.out.println("Enter the values to be evaulated followed by enter. to get the result type in '=' and press enter");
		ArrayList<String> list=new ArrayList<String>();
		Scanner in = new Scanner(System.in); 
		String value = in.next();
		
		
		String a[]=value.split("");
		
		
		int insert_val=0;
		for(int j=0;j<a.length;j++)
		{
				//System.out.println(a[j]);
				if((new String(a[j]).equals("+"))||(new String(a[j]).equals("*"))||(new String(a[j]).equals("/"))||(new String(a[j]).equals("-")))
				{
					int to_string_val=insert_val;
					list.add(Integer.toString(to_string_val));
					list.add(a[j]);
					insert_val=0;
		System.out.println("inseted"+to_string_val);
				}
				else
				{
					if(!((j+1)==a.length))
					{
						insert_val=insert_val*10+Integer.parseInt(a[j]);
					}
					else
					{
						int to_string_val=insert_val;
						System.out.println("inseted"+to_string_val);
						//list.add(Integer.toString(to_string_val));
						list.add(a[j]);
						insert_val=0;
					}
					
					
				}					
		}
		
		System.out.println(list);
		 
		 
		 CalculateTheString cts = new CalculateTheString();
		 cts.print_to_file(value);
		 cts.calculate(list);
		
		
		
		/*
		int insert_val=0;
		
		while(!(new String(value).equals("")))
		{
			
			if((new String(value).equals("+"))||(new String(value).equals("*"))||(new String(value).equals("/"))||(new String(value).equals("-")))
			{
				int to_string_val=insert_val;
				list.add(Integer.toString(to_string_val));
				list.add(value);
			}
			else
			{
				insert_val=insert_val*10+Integer.parseInt(value);
			}
		}
		
		*/
		
		
		
		/*
		while(!(new String(value).equals("=")))
		{
			list.add(value);
			value = in.next(); 
		}
		*/
		//Adding object in arraylist  
  
		
		
		
		//  CalculateTheString cts = new CalculateTheString();
		 // cts.calculate(list);
  
  
		 // Iterator iitr=list.iterator();  
		  // while(iitr.hasNext()){  
		   // System.out.println("ietr"+iitr.next());  
		  // }  
  
		  // for (int i=0; i<list.size(); i++)
		  // {
			  // System.out.println(list.get(i));
		  // }
  
  
    
	}

}




class CalculateTheString
{
	
	public void calculate(ArrayList<String> list)
	{
		
		StringBuilder stringbuilt = new StringBuilder();
		String printable_string=list.toString();
		
		while(list.contains("/"))
		{
			int operator_index=list.indexOf("/");
			float res = Float.parseFloat(list.get(operator_index-1))/Float.parseFloat(list.get(operator_index+1));
			String add= list.get(operator_index-1)+'/'+list.get(operator_index+1);
			print_to_file(res,add);
			alter_list(res,operator_index,list);
		}
		
		while(list.contains("*"))
		{
			int operator_index=list.indexOf("*");
			float res = Float.parseFloat(list.get(operator_index-1))*Float.parseFloat(list.get(operator_index+1));
			String add= list.get(operator_index-1)+'*'+list.get(operator_index+1);
			print_to_file(res,add);alter_list(res,operator_index,list);
		}
		
		while(list.contains("+"))
		{
			int operator_index=list.indexOf("+");
			float res = Float.parseFloat(list.get(operator_index-1))+Float.parseFloat(list.get(operator_index+1));
			String add= list.get(operator_index-1)+'+'+list.get(operator_index+1);
			print_to_file(res,add);
			alter_list(res,operator_index,list);
		}
		while(list.contains("-"))
		{
			
			int operator_index=list.indexOf("-");
			float res = Float.parseFloat(list.get(operator_index-1))-Float.parseFloat(list.get(operator_index+1));
			String add= list.get(operator_index-1)+'-'+list.get(operator_index+1);
			print_to_file(res,add);
			alter_list(res,operator_index,list);
		}
		
		float result=Float.parseFloat(list.get(0));
		
		//System.out.println("hello"+list+" "+result);
		
		//print_to_file(list,printable_string);
		print_to_file(result);
	}
	
	
	public void alter_list(float res,int operator_index,ArrayList<String> list)
	{
		String add_to_list=String.valueOf(res);
			list.set(operator_index-1,add_to_list);
			
			list.remove(operator_index);
			list.remove(operator_index);
	}
	// public void print_to_file(ArrayList<String> my_list,String input_query)
	public void print_to_file(float my_list,String input_query)
	{
		
		try
		{
			 
			BufferedWriter outStream= new BufferedWriter(new FileWriter("E:\\testout.txt",true));
			outStream.newLine();
			outStream.write("Step taken " + input_query);
			outStream.write("Result is " + my_list);
			outStream.close();

			/* FileWriter fw=new FileWriter("");    
			   fw.write();    
			   fw.write( );   
			   fw.close(); 
			   */
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
	}
	public void print_to_file(String input_query)
	{
		
		try
		{
			 
			BufferedWriter outStream= new BufferedWriter(new FileWriter("E:\\testout.txt",true));
			outStream.newLine();
			outStream.write("Input String " + input_query);
			outStream.close();

		}
		catch(Exception e)
		{
			System.out.println(e);
		}
	}
	public void print_to_file(Float res)
	{
		
		try
		{
			 
			BufferedWriter outStream= new BufferedWriter(new FileWriter("E:\\testout.txt",true));
			outStream.newLine();
			outStream.write("Final Result is " + res);
			outStream.write("\n -------------------------------------------------");
			outStream.close();

		}
		catch(Exception e)
		{
			System.out.println(e);
		}
	}
	
}