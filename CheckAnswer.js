/* i need a submit buttion that has a function that checks if all questions are answered if not an aler will pop up, else
it will "caculate answers and redirect you to map"*/

function Check()
{
    let radioButtons = document.querySelectorAll('input[type ="radio"]:checked');
    var countOfButtons = 0;
    for (var radioButton of radioButtons)
    {
     
        if (radioButton!= null) 
        {
          countOfButtons+=1;//will count each button that is marked
        }
        
    }
    

    if (countOfButtons<9)//if there is at least 1 button unmarked, alert
    {
      alert("Please select answers for all questions!");
    }
    else
    {
      alert("Everything is answered!");
      caculateDest();
    }
    
}

function caculateDest()
{
//get the values of the buttons that are checked, then output a random keyword for google maps
    let radioButtons = document.querySelectorAll('input[type ="radio"]:checked');
    const answers = [];
    for (var radioButton of radioButtons)
    {
       answers.push(radioButton.getAttribute("value")); //for each button thats pressed, get the value of button and add it to array
    }
//pick a random "answer" from the array of answers, then use this keyword to search maps
   let randomAnswer = answers[Math.floor(Math.random()*answers.length)];

   alert("Your place to eat involves the keyword: "+randomAnswer);

   //redirect to maps
   window.location.href = "./Maps.html";

}
