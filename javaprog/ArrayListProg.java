import java.util.*;
class ArrayListProg
{

	public static void main(String args[])
	{
		
		System.out.println("abc");
		
		ArrayList one =new ArrayList();
		
		 one.add("1");
		 one.add("2");
		 one.add("3");
		 // one.add(4);
		  Iterator it =one.iterator();
		 while(it.hasNext())
		 {
			 System.out.println(it.next());
		 }
	}

}