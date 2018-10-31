import java.util.*;
class PriorityQu
{

	public static void main(String args[])
	{
		
		System.out.println("abc");
		
		PriorityQueue<Integer> one =new PriorityQueue<Integer>();
		
		 one.add(10);
		 one.add(20);
		 one.add(30);
		 one.add(5);
		 // one.add(4);
		 while(one.isEmpty()==false)
		 {
			System.out.println("value :"+one.remove());
		   
		 }
		  // System.out.println("deleted element :"+one.remove(1));
		  // Iterator it =one.iterator();
		 // while(it.hasNext())
		 // {
			
		 // }
	}

}