/*
for (statement 1; statement 2; statement 3) {
	code block to be executed
	}
	
Statement 1 is executed before the loop (the code block) starts.
Statement 2 defines the condition for running the loop (the code block).
Statement 3 is executed each time after the loop (the code block) has been executed.

*/

for (i=1; i<=5; i++) {
	document.write(i + "<br />");
}



var x = 1;

for (; x<=5; x++) {
	document.write(x + "<br />");
}



for (y=1, text=""; y<=5; y++) {
	text = y;
	document.write(y + "<br />");
}



var z = 0;

for (; z < 10;) {
	document.write(z);
	z++;
}

