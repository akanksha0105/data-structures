// ****
// ****
// ****
// ****

for (i = 0; i < 4; i++) {
	let row = "";
	for (j = 0; j < 4; j++) {
		row = row + "*";
	}
	console.log(row);
}

// *
// **
// ***
// ****

for (i = 0; i < 4; i++) {
	let row = "";
	for (j = 0; j <= i; j++) {
		row = row + "*";
	}
	console.log(row);
}

// 1
// 12
// 123
// 1234

for (i = 0; i < 4; i++) {
	let row = "";
	for (j = 0; j <= i; j++) {
		row = row + `${j + 1}`;
	}
	console.log(row);
}

// 1
// 22
// 333
// 4444
for (i = 0; i < 4; i++) {
	let row = "";
	for (j = 0; j <= i; j++) {
		row = row + `${i + 1}`;
	}
	console.log(row);
}


for (i = 0; i < 4; i++) {
	let row = "";
	for (j = 0; j < 4-i; j++) {
		row = row + `${j + 1}`;
	}
	console.log(row);
}

for (i = 0; i < 5; i++) {
	let row = "";
	for (j = 0; j <=i; j++) {
		if(j%2==0)
            row = row + "1"
        else
        row = row + "0"
	}
	console.log(row);
}


