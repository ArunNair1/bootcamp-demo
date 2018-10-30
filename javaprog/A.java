import java.lang.*;
class A
{
	public static void main(String args[])
	{
		// func();
		String a="000702";
		String b="102";
		int res=Integer.valueOf(a)+Integer.valueOf(b);
		int res2=Integer.parseInt(a)+Integer.parseInt(b);
		/*Parent a= new Parent();
		Parent b= new Parent();
		System.out.println(a);
		System.out.println(b);
		b=a;
		System.out.println("hi");
		
		System.gc();
		System.out.println(b);
		System.out.println(a);
		*/
		String c="10";
		String sf1=String.format("value1 is %d",Integer.valueOf(a)+Integer.valueOf(c));
		String sf2=String.format("value2 is %d",Integer.parseInt(a)+Integer.parseInt(c));
		System.out.println(sf1);
		System.out.println(sf2);
		System.out.println(res);
		System.out.println(res2);
		
	}
	static int func()
	{
		int x= 20;
		return ++x;
	}
}


class Parent
	{
		protected int x,y;
		Parent()
		{
			x=3;
		}
		public void  mymethod()
			{
				System.out.println("Parent class");
			}
	}


	class Child extends Parent
	{
		
		public void mymethod()
			{
				Parent obj = new Parent(); 
				System.out.println("Parent x"+obj.x);
				System.out.println("Parent y"+obj.y);

				System.out.println("Child class");
			}
	}