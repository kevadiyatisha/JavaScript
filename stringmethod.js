// slice()
// Define a string variable
let A = "Geeks for Geeks";
let b = A.slice(0, 5);
let c = A.slice(6, 9);
let d = A.slice(10);
console.log(b);
console.log(c);
console.log(d);
console.log("\n");

// substring()
let str = "Mind, Power, Soul";
let part = str.substring(6, 11);
console.log(part);
console.log("\n");

// substr()
let str1 = "Mind,Soul,Power";
let part1 = str.substr(6, 5);
console.log(part1);
console.log("\n");

// replace()
let str2 = "Mind, Power, Soul";
let part2 = str.replace("Power", "Space");
console.log(part2);
console.log("\n");

// replaceAll()
let str3 = "Mind, Power, Power, Soul";
let part3 = str.replaceAll("Power", "Space");
console.log(part3);
console.log("\n");

// UpperCase()
let gfg = "GFG ";
let geeks = "stands-for-GeeksforGeeks";
console.log(geeks.toUpperCase());
console.log("\n");

// LowerCase()
let gfg1 = "GFG ";
let geeks1 = "stands-for-GeeksforGeeks";
console.log(geeks1.toLowerCase());
console.log("\n");

//concat()
let gfg2 = "GFG ";
let geeks2 = "stands for GeeksforGeeks";
console.log(gfg2.concat(geeks2));
console.log("\n");

// trim()
let gfg3 = "GFG    ";
let geeks3 = "stands-for-GeeksforGeeks";
let newGfg = gfg3.trim();
console.log(gfg3.length);
console.log(newGfg.length);
console.log("\n");

// trimStart()
let str4 = "  Soul";
console.log(str4);
let part4 = str4.trimStart();
console.log(part4);
console.log("\n");

// trimEnd()
let str5 = "Soul  ";
console.log(str5);
let part5 = str5.trimEnd();
console.log(part5);
console.log("\n");

// padStart()
let stone = "Soul";
stone = stone.padStart(9, "Mind ");
console.log(stone);
console.log("\n");

// padEnd()
let stone1 = "Soul";
stone1 = stone1.padEnd(10, " Power");
console.log(stone1);
console.log("\n");

// charAt()
let gfg4 = "GeeksforGeeks";
let geeks4 =
  "GfG is the best platform to learn and\n" + "experience Computer Science.";
console.log("\n");

// Print the string as it is
console.log(gfg4);
console.log(geeks4);
console.log(gfg4.charAt(0));
console.log(geeks4.charAt(5));
console.log("\n");

// charCodeAt()
let gfg5 = "GeeksforGeeks";
let geeks5 =
  "GfG is the best platform\n\
to learn and experience\n\
Computer Science.";
console.log(gfg5.charCodeAt(0));
console.log(geeks5.charCodeAt(5));
console.log("\n");

//  split()
let gfg6 = "GFG ";
let geeks6 = "stands-for-GeeksforGeeks";
console.log(geeks6.split("-"));
console.log("\n");
