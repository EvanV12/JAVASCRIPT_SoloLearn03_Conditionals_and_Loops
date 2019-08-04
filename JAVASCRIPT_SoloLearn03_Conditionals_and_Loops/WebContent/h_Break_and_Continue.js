for (i = 0; i <= 10; i++) {
	if (i == 5) {
		break;
	}
	document.write(i + "<br />");
}

/* Outputs
	0
	1
	2
	3
	4
*/



for (x = 0; x <= 10; x++) {
	if (x == 5) {
		continue;
	}
	document.write(x + "<br />");
}

/* Outputs
	0
	1
	2
	3
	4
	6
	7
	8
	9
	10
*/