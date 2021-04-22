## <b> Pre-test
#### Please attempt the following questions
1. How do you initialize an array in C?<br>
a) int arr[3] = (1,2,3);<br>
b) int arr(3) = {1,2,3};<br>
c) int arr[3] = {1,2,3};<br>
d) int arr(3) = (1,2,3);<br>
  
2. Which of these best describes an array?<br>
a) A data structure that shows a hierarchical behaviour<br>
b) Container of objects of similar types<br>
c) Arrays are immutable once initialised<br>
d) Array is not a data structure<br>

3.What are the disadvantages of arrays?<br>
a) Data structure like queue or stack cannot be implemented<br>
b) There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size<br>
c) Index value of an array can be negative<br>
d) Elements are sequentially ac<br>

4.Which of the following real world scenarios would you associate with a stack data structure?<br>
a) piling up of chairs one above the other<br>
b) people standing in a line to be serviced at a counter<br>
c) offer services based on the priority of the customer<br>
d) tatkal Ticket Booking in IRCTC<br>

5. What does the following function check for? (all necessary headers to be included and function is called from main)<br>

   #define MAX 10<br>
 
   typedef struct stack<br>
   {<br>
        int top;<br>
	int item[MAX];<br>
   }stack;<br>
 
   int function(stack *s)<br>
   {<br>
        if(s->top == -1)<br>
	    return 1;<br>
	 else return 0;<br>
   }<br>

a) full stack<br>
b) invalid index<br>
c) empty stack<br>
d) infinite stack<br>
