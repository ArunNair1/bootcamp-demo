import java.lang.*;
import java.util.Date;
import java.text.SimpleDateFormat;
import java.util.Calendar;

class MainClass
{

 public static void main(String args[])
 {
	System.out.println("hello");
	Date today= new Date();
	 SimpleDateFormat simpleDateformat = new SimpleDateFormat("E"); // the day of the week abbreviated
        System.out.println(simpleDateformat.format(today));
       Calendar c = Calendar.getInstance();
		c.setTime(today); // Now use today date.
		c.add(Calendar.DATE, 5);
	System.out.println(today);
	Date output = c.getTime();
System.out.println(output);
	
 }

}