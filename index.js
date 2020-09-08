/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 22

if (votingAge >= 18) { 
    console.log(true)
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let name = "Wesley"

if (name.length > 0) { 
    console.log(`Hello ${name}`)
} else { 
    console.log("Please enter a name.")
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let year = "1999"

console.log(Number(year))


//Task d: Write a function to multiply a*b 

function multiply(a,b) { 
    let answer = a * b
    console.log(answer)
}

multiply(5,3)



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function toDogYears(age) { 
    let dogYears = age * 7
    console.log(dogYears)
}

toDogYears(10)

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//take in weight of dog 
function feedingRequirements(age, weight) {
   let result = 0
if (age >= 1 && weight <= 5) { 
    result = 5 /100 * weight
    console.log(`Your dog needs ${result} pounds of Dog Food.`)

} if (age >= 1 && weight > 5 && weight <= 10) { 
    result = 4 /100 * weight
    console.log(`Your dog needs ${result} pounds of Dog Food.`)

} if (age >= 1 && weight >= 11 && weight <= 15) { 
    result = 3 /100 * weight
    console.log(`Your dog needs ${result} pounds of Dog Food.`)

} else if (age < 1 && weight <= 5) { 
    result = 5 /100 * weight
    console.log(`Your puppy needs ${result} pounds of Dog Food.`)

} else if (age < 1 && weight > 5 && weight <= 10) { 
    result = 4 /100 * weight
    console.log(`Your puppy needs ${result} pounds of Dog Food.`)

} else if (age < 1 && weight > 10 && weight <= 15) { 
    result = 3 /100 * weight
    console.log(`Your puppy needs ${result} pounds of Dog Food.`)

} else { 
    result = 2 /100 * weight
    console.log(`Your puppy needs ${result} pounds of Dog Food.`)

}

}
feedingRequirements(2,14)
feedingRequirements(0,20)

//check the age of the dog are they over 1? 

// if yes then follow the feeding requirements of % 

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 



//If they are less than a year old use Puppy feeding requirements.




// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  

feedingRequirements(1,15)


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

  function rockPaperSissors(num) { 
      let choices = ["rock", "paper", "sissors"]
      let computerChoice = choices[[Math.floor(Math.random() * choices.length)]]
      let userChoice = choices[num]
    
     

      //game rules and comparisons
     if (userChoice === "rock" && computerChoice === "sissors" || userChoice === "paper" && computerChoice === "rock" || userChoice === "sissors" && computerChoice === "paper"){ 

         console.log(`You won!!! Good thing you chose ${userChoice}! `)


     } else if (userChoice === "rock" && computerChoice === "paper" || userChoice === "paper" && computerChoice === "sissors" || userChoice === "sissors" && computerChoice === "rock") { 
        console.log(`You Lost!!! Too bad you chose ${userChoice}! )`)
     } else { 
            console.log(`It's a tie!!! You both chose ${userChoice}`)
     }


  }

  // Enter a number 0-2 to select your choice. 
  // 0: Rock
  // 1: Paper
  // 2: Sissors
  
rockPaperSissors(2)



/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function metricConverter(num) { 
    let miles = num * 0.62137
    miles = Math.round(miles * 100) / 100 // stoping number at 2 decimal places
    console.log(`${num}km is exactly ${miles} miles.`)
}
metricConverter(5)


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feetToCm(num) { 
    let cm = num * 30.48

    cm = Math.round(cm * 100) / 100 // stoping number at 2 decimal places

    console.log(`${num} feet is exactly ${cm} centimeters.`)
}

feetToCm(3)

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(num) { 

    while (num > 1) { 
        num--
        remainingNum = num - 1
        console.log(`${num} bottles of soda on the wall, ${num} bottles of soda, take one down pass it around ${remainingNum} bottles of soda on the wall`)
    }
}
annoyingSong(4)


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

function gradeCalculator(num){
    if (num >= 60 && num <= 69){
        grade = "D. Not your best work..."
    }else if (num >= 70 && num <= 79){
        grade = "C. Doing ok."
    }else if (num >= 80 && num <= 89){
        grade = "B. Nice Work!"
    }else if (num >= 90){
        grade = "A. Great Job!"
    } else { 
        grade = "F. Better luck next time..."
    }
}
  gradeCalculator(50);

  console.log(`You have recieved a ${grade}`);
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





