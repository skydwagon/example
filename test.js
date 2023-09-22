const a = 1;
let b = "Rawr";
console.log(b);

for (let i = 0; i < 5; i++){
    console.log(i);
}

const PI = 3.14;
let c = 1;
c = 2;
// c = a; -> will give you an error
//print
console.log(c);
function add(a, c){
    return a + c;
}
console.log(add(1, 2));

const fruits =["apple", "orange", "durian"];
console.log(fruits);
let hello = "";
for(let i = 0; i < fruits.length; i++){
    hello += fruits[i] + " ";
}
console.log(hello); //apple orange durian 
hello += "\n"
for(let fruit in fruits){
    hello += fruit + " ";
}
console.log(hello) //apple orange durian 
                   //apple orange durian
//Get user input through HTML and take it with JS


