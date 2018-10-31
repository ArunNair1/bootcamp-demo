import java.lang.*;
import java.util.Date;
import java.text.SimpleDateFormat;
import java.util.Calendar;

class MainClass
{

 public static void main(String args[])
 {
		String days[] 	= 	{"Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"};
		String days11[] 	= 	{" "," ","M","T","W","Th","F"};
		// String months_31[] = 	{1,3,5,7,8,10,12};
		// String months_30[] = 	{2,4,6,9,11};
		
		Date today		=	new Date();
		
		for(int i=0;i<days11.length;i++)
		{
			System.out.print("\t"+days11[i]);
		}
		System.out.println("\n");
		Calendar c = Calendar.getInstance();
	   int day_id= c.get(Calendar.DAY_OF_WEEK); 
	   int year= c.get(Calendar.YEAR); 
	   int month= c.get(Calendar.MONTH); 
	   int date= c.get(Calendar.DATE); 
		int k=0;
		int i=1;
		int leap=0;
		int date_counter;
		month++;
		
		if((year%4==0||year%400==0)&&year%100!=0)
		{
			leap=1;
		}
		
		if(month<8)
		{
			if(month%2!=0 && month!=2)
			{
				date_counter=30;
			}
			else if(month==2 && leap==1)
			{
				date_counter=29;
			}
			else if(month==2 && leap==0)
			{
				date_counter=28;
			}
			else
			{
				date_counter=31;
			}
		}
		else
		{
			if(month%2==0 && month!=2)
			{
				date_counter=31;
			}
			else
			{
				date_counter=30;
			}
		}
		
	//	System.out.println(month);
		while(day_id>0)
		{
			System.out.print("\t ");
			day_id--;
			k++;
		}
			for(int j=date;j<=date_counter;j++)
			{
				k++;
				//System.out.print("kis"+k);
				if(k==1||k==2)
				{
					System.out.print("\t ");
				}
				else 
				{
					System.out.print("\t"+j);
				}
					if(k==7)
					{
						System.out.println("\n");
						k=0;
						i++;
					}
					if(j==31 && i<4){ j=0; }
			}
		
		
		
		
		
		/*
		
		System.out.println(day_id);
		System.out.println(year);
		System.out.println(month);
		System.out.println(date);
		
		
		SimpleDateFormat simpleDateformat = new SimpleDateFormat("EEEE"); // the day of the week abbreviated
        System.out.println(simpleDateformat.format(today));
		
		
		c.add(Calendar.DATE, 5);
		System.out.println(today);
		Date output = c.getTime();
		System.out.println(c.get(Calendar.DAY_OF_WEEK));
*/
	
 }

}