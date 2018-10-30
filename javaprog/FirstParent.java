class FirstParent
{

	public static void main(String args[])
		{
			 System.out.println("main function");
			/*			Child obj = new Child(); 
			 obj.mymethod();
			Parent obj2 = new Parent(); 
			obj2.mymethod();
			Parent obj3 = new Child(); 
			obj3.mymethod();
			 */
			Child obj = new Child(); 
			 obj.mymethod();
			
		}

}


	class Parent
	{
		protected int x,y;
		int inherited=1;
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
		int inherited=2;
		
		public void mymethod()
			{
				Parent obj = new Parent(); 
				System.out.println("Parent x"+obj.x);
				System.out.println("Parent y"+obj.y);
				System.out.println("Parent inheritde"+super.inherited);

				System.out.println("Child class");
			}
	}