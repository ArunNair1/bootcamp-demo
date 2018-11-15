class Threads extends Thread{  

public void run(){  
System.out.println("thread is running...");  
}  
  
public static void main(String args[]){  
  
one t1 =new one();  

two t2 =new two();  
t2.start();  
three t3 =new three();  
t3.start();  
four t4 =new four();  
t4.start();  
five t5 =new five();  
t5.start();  
six t6 =new six();  
t6.start();  
seven t7 =new seven();  
eight t8 =new eight();  
t1.start(); 
t7.start();  
t8.start();  
 }

 
}


class one extends Thread
{
	public void run()
	{  
		System.out.println("one thread is running...");  
	} 
} 
class two extends Thread
{
	public void run()
	{  
		System.out.println("2 thread is running...");  
	} 
} 
class three extends Thread
{
	public void run()
	{  
		System.out.println("3 thread is running...");  
	} 
} 
class four extends Thread
{
	public void run()
	{  
		System.out.println("4 thread is running...");  
	} 
}  
class five extends Thread
{
	public void run()
	{  
		System.out.println("5 thread is running...");  
	} 
}  
class six extends Thread
{
	public void run()
	{  
		System.out.println("6 thread is running...");  
	} 
}  
class seven extends Thread
{
	public void run()
	{  
		System.out.println("7 thread is running...");  
	} 
}  
class eight extends Thread
{
	public void run()
	{  
		System.out.println("8 thread is running...");  
	} 
} 

