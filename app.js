// chap 21
// 1
 var userinput = prompt("Enter some word" );
 var allLower = userinput.toLocaleLowerCase();
 console.log (allLower);
// 2
var x = "HELLO WORLD" ;
var Lower = x.toLowerCase();
console.log (Lower);
//3
var y = "hello world" ;
var UPPER = y.toUpperCase();
console.log (UPPER);
// 4
var x = "HOW ARE YOU" ;
var Lower = x.toLowerCase();
var char = Lower;
console.log (char);
// 5
var y = "how are you" ;
var UPPER = y.toUpperCase();
var char1 =UPPER ;
console.log (char1);
// 6
var y = "hello world" ;
var upper = y.toUpperCase();
alert(upper)
// 7
 var userinput = prompt("Enter your city name" );
var city = ("karachi")
var firstchar = userinput.slice(0,1).toUpperCase();
var remainchar = userinput.slice(1).toLowerCase();
var fullchar = (firstchar+remainchar);
console.log(fullchar);
// chap 22-25
// 1
var sameWords = "captain";
var remove = sameWords.slice(1, 3);
console.log = remove
//2
var stringToCount = "example";
var numberOfChar = stringToCount.length;
//3
var animal = "elephant";
var ani = animal.slice(1, 5);
console.log = (ani)
//4
var inputString = "example";
var numberOfChar= inputString.length;
//5
var inputString = "example";
var lengthOfString = inputString.length;
var slicedString = inputString.slice(1, lengthOfString - 3);
//6
var text = "To go or not to go.";
var indx = text.lastIndexOf("go");
//7

//8
//9
//10
var str = "abcde";
var characterAtIndex2 = str.charAt(2);
//11
var text = "This is a long text.";
var cha = text.charAt(9); 
//12
var str = "example";
var x = str.charAt(str.length - 1); 
//13
var input = "abcdef";
var cha = input.charAt(4); 
//14
//15
var reply = "Hello";
var charArray = [];

for (var i = 0; i < reply.length; i++) {
    charArray.push(reply.charAt(i));
}
//16
var str = "1, 2, 3, 4";
var newStr = str.replace("1", "one");
//17
var x = "abcadeaf";
var y = x.replace(/a/g, "z"); 
//chap 26
// 1
 var roundNum = math.round(num);
// 2
 var roundNum = math.celi(num);
// 3
 var roundNum = math.floor(num);
// 4
var roundNum = Math.ceil(num);
// 5 
var num = Math.floor(.5);
 // Chap 27 
 // 1
var num = math.random(50);
        // 2
        var randomNum = math.random();
        // 3
        var dice = (num * 6) + 1;
        // 4     
        var randomNum = Math.random();
        if (randomNum < 0.5) {
          console.log("Heads");
        } else {
          console.log("Tails");
        }  
            //  Chap 28, 29

        // 1
        var num = parsInt(prompt("Enter number"));
           or
        var num = +prompt("Enter number");   
        // 2
        var num = +prompt(123);
        // 3
        var num = parseFloat("5.12")
        // 4
        var completNum = parseInt(x) + parseInt(x);
        // 5
        var num1 = Number(prompt("Enter first value"));
        var num2 = Number(prompt("Enter second value"));
        var total = num1 + num2;
        console.log(typeof total.toString());
       
        // 6
        var num = 42;
        console.log(typeof num.toString);
        // 7
        var floatingNumString = "3.14";
        var num = Number(floatingNumString);
 //Chap 3
        //1
        var newNum = num.toFixed(4);
        // 2
        var newNum = num.toFixed(2);
        num = Number(newNum);
               or 
        num = Number(num.toFixed(2));        
        // 3
        if (num.toFixed(2).length > 4){
          console.log(num)
        }
        // 4
        var num = 4.5542
        alert(num.toFixed(2));



