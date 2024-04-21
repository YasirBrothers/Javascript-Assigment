// User Input Condition Statement

// Question 1

// var city=prompt("Enter your city")
// if(city==karachi){
//     document.write("barish ho rahi ha")
// }

// Chapter# 9-11


   //Q1
    // var city = prompt("Enter your city");

    // if (city == "karachi") {
    //     console.log("Welcome to The City of Light")
    // }

    //Q2
        //  var Gender = prompt("Enter Gender","Gender")

        //  if(Gender == "Male" || Gender == "male" || Gender == "M" || Gender == "m")
        //  console.log("Good Morning Sir.")
         
        //  else if(Gender == "Female" || Gender == "female" || Gender == "F" || Gender == "f")
        //  console.log("Good Morning Ma'am.")


    //Q3
        //   var SignalColour = prompt("Enter Signal Colour","Signal Colour")

        //  if(SignalColour == "Red" || SignalColour == "red" || SignalColour == "r" || SignalColour == "R")
        //  console.log("Must Stop!")

        // else if(SignalColour == "Yellow" || SignalColour == "yellow" || SignalColour == "y" || SignalColour == "Y")
        //  console.log("Ready to Move!")

        // else if(SignalColour == "Green" || SignalColour == "green" || SignalColour == "g" || SignalColour == "G")
        //  console.log("Move now!")


    

    //Q4
        //  var currFuel = prompt("Enter Remaining Fuel in your car","In Litres")

        //  if(currFuel<0.25)
        //  {
        //      console.log("Please refill the fuel in your car.")
        //  }
        //  else if(currFuel=>0.25)
        //  {
        //      console.log("There is a lots of fuel.")
        //  }
         
        
    //Q5
        //  var a = 4;

         
        //  if(++a === 5)
        //  {
        //      alert("given condition for variable a is true");
        //  }
        //  else
        //  {
        //      alert("false")
        //  }

        //  var b = 82;
        //  if (b++ === 83)
        //  {
        //      alert("given condition for variable b is true");
        //  }
        //  else
        //  {
        //      alert("false")
        //  }

        //  var c = 12;
        //  if (c++ === 13)
        //  {
        //      alert("condition 1 is true");
        //  }
        //  if (c === 13)
        //  {
        //      alert("condition 2 is true");
        //  }
        //  if (++c < 14)
        //  {
        //      alert("condition 3 is true");
        //  }
        //  if(c === 14)
        //  {
        //      alert("condition 4 is true");
        //  }

        //  var materialCost = 20000;
        //  var laborCost = 2000;
        //  var totalCost = materialCost + laborCost;
        //  if (totalCost === laborCost + materialCost){
        //  alert("The cost equals");
        //  }   

    //Q6
        //  var EngMarks = +prompt("Marks in English?"),
        //  SciMarks = +prompt("Marks in Science?"),
        //  MathMarks = +prompt("Marks in Math?"),
        //  TotalMarks = +prompt("Total Marks"),
        //  Percentage=((EngMarks+SciMarks+MathMarks)/TotalMarks)*100,
        //  Grade,Remarks;

        //  if(Percentage >= 80)
        //  {
        //      Grade="A+";
        //      Remarks="Excellent";
        //  }
        //  else if(Percentage >= 70)
        //  {
        //      Grade="A";
        //      Remarks="Good";
        //  }
        //  else if(Percentage >= 60)
        //  {
        //      Grade="B";
        //      Remarks="You need to Improve More";
        //  }
       
        //  else if(Percentage >= 50)
        //  {
        //      Grade="C";
        //      Remarks="You need to Improve More";
        //  }
       
        //  else if(Percentage >= 40)
        //  {
        //      Grade="D";
        //      Remarks="You need to Improve More";
        //  }

        //  else if(Percentage < 40)
        //  {
        //      Grade="Fail";
        //      Remarks="Sorry";
        //  }
        //  else
        //  {
        //      Grade="Invalid";
        //      Remarks="Invalid";
        //  }

        // document.write("<h1>Marks Sheet</h1></br></br>Total Marks : "+TotalMarks+"</br>Marks Obtained : "+(EngMarks+SciMarks+MathMarks)+"</br>Percentage : "+Percentage+"%</br>Grade : "+Grade+"</br>Remarks : "+Remarks);

    //Q7
        //  var Num = 3;
        //  var inputNum = +prompt("Guess a Number Between 1 to 10")

        //  if(Num === inputNum)
        //  {
        //      alert("Bingo! Correct Answer.")
        //  }
        //  else if (Num === (inputNum+1) || Num === (inputNum-1))
        //  {
        //      alert("Close enough to the Correct Answer.")
        //  }
        //  else
        //  {
        //      alert("Incorrect Guess.")
        //  }


    //Q8
        //  var InputNum = +prompt("Enter a Number divisible by 3")
        //  if(InputNum%3 === 0)
        //  {
        //      alert("this number is divisible by 3")
        //  }
        //  else
        //  {
        //      alert("this number is not divisible by 3")
        //  }


        //9

        //  var InputNum = +prompt("Enter a Number")
        //  if(InputNum%2 === 0)
        //  {
        //      alert(InputNum+" is an even number.")
        //  }
        //  else
        //  {
        //      alert(InputNum+" is an odd number.")
        //  }


     //Q10
        //  var inputTemp=+prompt("Enter Temperature");

        //  if(inputTemp>=40)
        //  {
        //      alert("Its too hot outside.")
        //  }
        //  else if(inputTemp>=30)
        //  {
        //  alert("The Weather today is Normal.")
        //  }
        //  else if(inputTemp>=20)
        //  {
        //  alert("Today's Weather is Cool.")
        //  }
        //  else if(inputTemp>=10)
        //  {
        //      alert("OMG! Today's Weather is so Cool.")
        //  }
        //  else if(inputTemp < 10)
        //  {
        //      alert("So Cold")
        //  }
        //  else
        //  {
        //      alert("Invalid Temperature")
        //  }

    //Q11
        //  var Val1 = +prompt("Enter 1st Number");
        //  var Opt = prompt("Enter Operator");
        //  var Val2 = +prompt("Enter 2nd Number");
        
        
        //  if(Opt == "+"){
        //      alert(Val1+Val2)
        //  }
        //  else if(Opt == "-")
        //  {
        //      alert(Val1-Val2)
        //  }
        //  else if(Opt == "*")
        //  {
        //      alert(Val1*Val2)
        //  }
        //  else if(Opt == "/")
        //  {
        //      alert(Val1/Val2)
        //  }
        //  else
        //  {
        //      alert("Incorrect Operator")
        //  }


// Chapter# 12-13

    //Q1
    


    // Q2
        // var value1 = +prompt("Enter 1st Value (In Number)")
        // var value2 = +prompt("Enter 2nd Value (In Number)")

        // if(value1 > value2)
        //     {
        //         console.log(value1 + " is Greater than " + value2);
        //     }

        //     else if(value1 < value2)
        //     {
        //         console.log(value2 + " is Greater than " + value1);
        //     }

        //     else if(value1 === value2)
        //     {
        //         console.log("Entered both values are equal.");
        //     }

        //     else
        //     {
        //          console.log("Invalid Value.");
        //     }
        

    //3
        // var value1 = +prompt("Enter a value (In Numbers)");

        // if(value1 > 0)
        // {
        //     console.log("Entered value is Positive");
        // }

        // else if(value1 < 0)
        // {
        //     console.log("Entered value is Negative");
        // }

        // else if(value1 === 0)
        // {
        //     console.log("Entered value is Zero");
        // }

        // else
        // {
        //     console.log("Invalid Value");
        // }



    //4
        //  var Value1 = prompt("Enter a vowel")
        //  var vowels = ['a','A','e','E','i','I','o','O','u','U'];

        //  if(isNaN(Value1))
        //  {
        //      if(vowels.includes(Value1))
        //      {
        //          alert("Entered value is a vowel")
        //      }
        //      else
        //      {
        //          alert("Entered value is not a vowel")
        //      }
        //  }
        //  else
        //  {
        //      alert("Entered Value is a Number");
        //  }

    
     //5
        //  var Pass = "Saylani Smit";

        //  var inputPass = prompt("Please enter your password:");

        //  if (!inputPass) 
        //  {
        //      alert("Please reload and enter your password");
        //  }
        //  else if (inputPass === Pass)
        //  {
        //      alert("Correct! The password you entered matches the original password");
        //  }
        //  else
        //  {
        //      alert("Incorrect password");
        //  }


     //6
        //  var greeting;
        //  var hour = prompt();
        //  if (hour < 12)
        //  {
        //      greeting = "Good day";
        //  }
        //  else
        //  {
        //      greeting = "Good evening";
        //  }
        //  alert(greeting);

        

         var inputTime = prompt("Enter Time like: 1900 = 7pm, 2000 = 8pm");

         if(inputTime >= 0 && inputTime < 1200)
         {
             alert("Good Morning")
         }
         else if(inputTime >= 1200 && inputTime < 1700)
         {
             alert("Good Afternoon")
         }
         else if(inputTime >= 1700 && inputTime < 2100)
         {
             alert("Good Evening")
         }
         else if(inputTime >= 2100 && inputTime < 2359)
         {
             alert("Good Night")
         }
         else
         {
             alert("Invalid Time")
         }


         