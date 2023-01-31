/* 
------------------
LOOP
------------------
1. Display "Ajke amar mon valo nei" for 39 times
for (var x=0; x<40; x++){
    console.log(x)
    console.log("Ajke amar mon valo nei");
}
2. Display numbers between 58 to 98
for (var x=58; x<=98; x++){
    console.log(x) ;   
}
3. Show all even numbers from 412 to 456
for (var x=412; x<=456; x+=2){
    console.log(x) ;   
}
4. Show all odd numbers 581 to 623
for (var x=581; x<=623; x+=2){
    console.log(x) ;   
}
5. Difference between while loop and for loop
6. Declare an array for all the topics that you have learned last few days
display then as output
var topics=['HTML', 'CSS', 'BootStrap', 'Taliwind', 'JavaScript'];
console.log(topics);

7. Create an array for all the mobile phones. Display all the elements of the array
by using a while loop
var topics = ["Lava", "Huawei", "Realme"];
while (topics) {
  console.log(topics);
  topics++;
}

8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44
for(var x=30; x<=86; x++){
    if(x>44){
        break;
    }
    console.log(x);
}
9. Write the price of the books that you have. 
Display the prices if the prices is lower than 200

*/

var books=[45,546,100,200,175,832]
for(var i=0;i<=books.length;i++){  
    var book=books[i];
    if(books[i]>=200){
        continue;
    }
    console.log(book);
}
