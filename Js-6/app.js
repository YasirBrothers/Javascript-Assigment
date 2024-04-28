// Assigment 6

// Chapter# 21 to 25



// Q1
    // var firstname = prompt("Please Enter Your First Name");
    // var lastname  = prompt("Please Enter Your Last Name");

    // console.log(firstname + lastname);


// Q2
    //  var favoritemobile = prompt("What is your favorite mobile phone model?");
    //  var lenghtofinput = favoritemobile.length;
  
    //  console.log("Length of your favorite mobile phone model input is: " + lenghtofinput);


// Q3
    // var word = prompt("Please Enter a word to showing 'n' alphabet");
    // var indexOfN = word.indexOf("n");

    // console.log("The index of letter 'n' in the word is: " + indexOfN);


//  Q4
    // var word = "Hello World";
    // lastIndex = word.lastIndexOf("l");

    // console.log("The last index of letter 'l' in the word 'Hello World' is: " + lastIndex);


// Q5    
    // var word = "Pakistani";
    // thirdIndex = word.indexOf("i");

    // console.log("The 3rd index of letter 'i' in the word 'Pakistani' is: " + thirdIndex);  


// Q6
    // var firstName = prompt("Enter your first name");
    // var lastName = prompt("Enter your last name");

    // var fullName = firstName.concat(" ",lastName);
    // console.log("Hello, " + fullName +  "! Welcome!");
  

// Q7
    // var word = "Hyderabad";
    // var newWord = word.replace("Hyder" , "Islam");

    // console.log("Orignal Word: " + word);
    // console.log("After replacement: " + newWord);

    // var word = "Hindustan";
    // var newWord = word.replace("Hindu" , "Paki");

    // console.log("Orignal Word: " + word);
    // console.log("After Replacement: " + newWord);


// Q8   
// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var newMessage = message.replace("and" , "&");

// console.log("Original message: " + message);
// console.log("After replacement: " + newMessage);
    

// Q9    
    // var number = ("472");

    // console.log("Value: " + number);
    // console.log("Type: " + typeof(number));

    // var number = parseInt("472");

    // console.log("Value: " + number);
    // console.log("Type: " + typeof(number));


// Q10
    // var userInput = prompt("Enter your input");
    // var capitalInput = userInput.toUpperCase();

    // console.log("UpperCase: " +capitalInput);


// Q11
    // var userInput = prompt("Enter a String");
    // var inputTitleCase = userInput.split(" ");

    // for (var i = 0; i < inputTitleCase.length; i++) {
    //     inputTitleCase[i] = inputTitleCase[i].slice(0,1).toUpperCase() + inputTitleCase[i].slice(1) 
    // }

    // titleCase = inputTitleCase.join(" ");
    // console.log(titleCase);


// Q12
    // var num = "35.36";
    // var newNum = num.replace("." ,'');
    // console.log("Number: " + num);
    // console.log("Result: " + newNum);

// Q13


// Q14
    // var foods = ["cake", "apple pie", "cookie", "chips", "patties"];
    // userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")

    // var userInputLowercase = userInput.toLowerCase();

    // inputFood = false;

    // for (var i = 0; i < foods.length; i++) {
    //     var currentUserinput = foods[i].toLowerCase() 

    //     if (currentUserinput === userInputLowercase) {
            
    //        inputFood = true; 
    //     }
    // }

    // if (inputFood) {
    //     console.log(userInputLowercase + "! Your Order is available")
    // }

    // else{
    //     console.log("Sorry! not available!")
    // }


// Q15


// Q16
    // var arr = "University of Karachi";
    // var words = arr.split("");

    // console.log(words);
    

// Q17
    // var userInput = "Pakistan";
    // var words = userInput.charAt(7);
    // console.log("User Input: " + userInput);
    // console.log("Last Character: " + words);


// Q18


// Chapter# 26 to 30

// Q1
    // var userInput = parseInt(prompt("Enter a positive integer: "));
    // console.log("a. Number: ", userInput);
    // console.log("b. Round of value: ", Math.round(userInput));
    // console.log("c. Floor value: ", Math.floor(userInput));
    // console.log("d. Ceil value: ", Math.ceil(userInput));

   
// Q2
    // var userInput = parseInt(prompt("Enter a positive integer: "));
    // console.log("a. Number: ", userInput);
    // console.log("b. Round of value: ", Math.round(userInput));
    // console.log("c. Floor value: ", Math.floor(userInput));
    // console.log("d. Ceil value: ", Math.ceil(userInput));

    
//  Q3


// Q4


// Q5 


// Q6
// var randomNumber = Math.floor(Math.random() * 100) +1;

// console.log("Random Number: " + randomNumber);



// Q7
// var weightInput = prompt("Enter your weight:");

// var weight = parseFloat(weightInput);

// console.log("Your weight: " + weight + " kgs");


// Q8
    // var secretNumber = Math.floor(Math.random() * 10) + 1;
    // // console.log(secretNumber);

    // var userInput = parseInt(prompt("Guess the secret number (between 1 and 10):"));

    // if (userInput === secretNumber) {
    //     console.log("Congratulations! You guessed the secret number " + secretNumber + " correctly!");
    // }

    // else {
    //     console.log("Sorry! The secret number was " + secretNumber + ". Try again!");
    // }


// Chapter# 31 to 34

// Q1
    // var currentDateAndTime = new Date();

    // console.log("The Current Date And Time is: ");
    // console.log(currentDateAndTime);

// Q2
    // var currentDate = new Date();

    // var currentMonthName = currentDate.getMonth();

    // var monthNames = ["January", "February", "March", "April", "May", "June",
    //      "July", "August", "September", "October", "November", "December"
    // ]

    // currentMonthName = monthNames[currentMonthName];

    // alert("The Current Month is: " + currentMonthName);


// Q3
    // var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // var currentDate = new Date();

    // var currentDayName = currentDate.getDay();

    // var currentDay = dayNames[currentDayName];

    // console.log("The Day of Today's is:" + currentDay);


// Q4
    // var userInput = prompt("Please Enter Any Day");

    // if(userInput === "Saturday" , "Sunday") {
    //     console.log(" It's Fun day!")
    // }


// Q5
    // var currentDate = new Date();

    // var dayOfMonth = currentDate.getDate();

    // if(dayOfMonth < 16) {
    //     alert("First Fifteen Day's of the Month");
    // }

    // else {
    //     alert("Last Fifteen Day's of the Month")
    // }
    

// Q6
    // var currentDate = new Date();

    // var millisecondsSince1970 = currentDate.getTime();

    // var minutesSince1970 = millisecondsSince1970 / (1000 * 60);

    // console.log("Current Date: " + currentDate);
    // console.log("Miliseconds Since Jan. 1, 1970 to Current year is: " + millisecondsSince1970);
    // console.log("Minutes Since Jan. 1, 1970 to Current year is: " + minutesSince1970);
    

// Q7
    // var currentDate = new Date();

    // var currentHour = currentDate.getHours();

    // if (currentHour < 12) {
    //     alert("It's AM!")
    // }

    // else {
    //     alert("It's PM!")
    // }


// Q8
// var LaterDate = new Date(2024, 04 , 31);

// console.log("Later Date: " + LaterDate);


// Q9


// Q10


// Q11


// Q12


// Q13
    // var name = prompt("Enter your name");
    // var age = prompt("Enter your age");

    // var currentYear = new Date().getFullYear();

    // var birthYear = (currentYear - age);

    // console.log("Hello " + name + "!" + " Your Birth Year is: " + birthYear);


// Q14

