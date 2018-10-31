import java.util.*;
class LinkedListSol
{

	public static void main(String args[])
	{
		
		System.out.println("abc");
		
		LinkedList<String> one =new LinkedList<String>();
		
		 one.add("one");
		 one.add("two");
		 one.add("three");
		 // one.add(4);
		 
		 LinkedList<String> two =new LinkedList<String>();
		 two.add("two");
		 
		 
		 
		  System.out.println("first list :"+one);
		  System.out.println("deleted element :"+one.removeAll(two));
		  System.out.println("new list :"+one);
		  System.out.println("new list :"+two);
		  
		  // Iterator it =one.iterator();
		 // while(it.hasNext())
		 // {
			
		 // }
	}

}