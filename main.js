function question1() //question1
{
    var posInteger = prompt("Enter any positive integer?");
    document.write("number : "+posInteger);
    document.write("<br/>roundoff value : "+Math.round(posInteger));
    document.write("<br/>floor value : "+Math.floor(posInteger));
    document.write("<br/>ceil value : "+Math.ceil(posInteger));
}

function question2() //question2
{
    var negInteger = prompt("Enter any negative integer?");
    document.write("number : "+negInteger);
    document.write("<br/>roundoff value : "+Math.round(negInteger));
    document.write("<br/>floor value : "+Math.floor(negInteger));
    document.write("<br/>ceil value : "+Math.ceil(negInteger));
}

function question3() //question3
{
     var posFloat = prompt("Enter any positive floating point number?");
    document.write("number : "+posFloat);
    document.write("<br/>roundoff value : "+Math.round(posFloat));
    document.write("<br/>floor value : "+Math.floor(posFloat));
    document.write("<br/>ceil value : "+Math.ceil(posFloat));
}

function question4() //question4
{
      var negFloat = prompt("Enter any negative floating point number?");
    document.write("number : "+negFloat);
    document.write("<br/>roundoff value : "+Math.round(negFloat));
    document.write("<br/>floor value : "+Math.floor(negFloat));
    document.write("<br/>ceil value : "+Math.ceil(negFloat)); 
}

function question5() //question5
{
    var num = +prompt("Enter any number for absolute?");
    document.write("The absolute value of "+num+" is "+Math.abs(num)); 
}

function question6() //question6
{
     var randomDice = Math.floor(6*Math.random())+1;
     document.write("random dice value : "+randomDice);
}

function question7() //question7
{
     var randomCoin = Math.floor(2*Math.random())+1;
     var side;
     if(randomCoin===1)
     side = "Tails";
     if(randomCoin===2)
     side = "Heads";
     document.write(randomCoin);
     document.write("<br/>random coin value: "+side);
}

function question8() //question8
{
    var randomValue = Math.floor(100*Math.random())+1;
    document.write("random number between 1 and 100 : "+randomValue);
}

function question9() //question9
{
    var checkRegex = "^[0-9]+$|^[0-9]+[a-zA-Z]*$|^[0-9]+[.][0-9]+[a-zA-Z]+$";
    var input = prompt("Enter your weight in kilograms?");
    
   while(!(input.match(checkRegex)))
    {
        input = prompt("Invalid entry,Enter your weight in kilograms again?");
    }
    
    if(!(input.match(/^[0-9]+$/)))
    {
    var startIndex = input.search(/[a-zA-Z]/);
    input= input.slice(0,startIndex);
    }
    document.write("The weight of user is "+input+" kilograms");
}

function question10() //question10
{
    var secretNum = Math.floor(10*Math.random())+1;
    var userNum = prompt("Enter any number between 1 and 10?");
    if(userNum === secretNum)
    {
        document.write("Congratulations!! You prediction is right");
    }
    else{
        document.write("Sorry wrong prediction..");
        }
}


function question11() //question11
{
    var date = new Date();
    document.write(date);
}


function question12() //question12
{
    var date = new Date();
    var months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
    document.write("Current month :"+months[date.getMonth()]);
}

function question13() //question13
{
    var date = new Date();
    var days = ['Sun','Mon','Tues','Wed','Thu','Fri','Sat'];
    document.write("Today is "+days[date.getDay()]);
} 

function question14() //question14
{
    var date = new Date();
    var days = ['Its Fun day','Monnday','Tuesday','Wednesday','Thursday','Friday','Its Fun day'];
    if(date.getDay()===0 || date.getDay()===6)
    {
    document.write(days[date.getDay()]);
    }
    else{
    document.write("Today is "+days[date.getDay()]);
    }
}

function question15() //question15
{
 var date = new Date();
 var months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
 var year=date.getFullYear();
 var day = date.getDate();
 var month =date.getMonth();
 if(day>=1 && day<=15)
 {
     document.write("First fifteen days of month.");
     for(var i=1;i<=15;i++)
     {
         if(i==1)
         {
            document.write("<br/>"+i+"st "+months[month]+" "+year);
         }
         else if(i==2)
         {
            document.write("<br/>"+i+"nd "+months[month]+" "+year);
         }
         else if(i==3)
         {
            document.write("<br/>"+i+"rd "+months[month]+" "+year);
         }
         else{
             if(i==day)
             {
            document.write("<br/>"+i+"th "+months[month]+" "+year);     
             }
             else{
            document.write("<br/>"+i+"th "+months[month]+" "+year);
             }
         }
     }
 }
  if(day>=16 && day<=31)
 {
     document.write("Last fifteen days of month.");
     for(var i=16;i<=30;i++)
     {
            if(i==day)
             {
            document.write("<br/>"+i+"th "+months[month]+" "+year);     
             }
             else{
            document.write("<br/>"+i+"th "+months[month]+" "+year);
             }   
     }
 }
}

function question16() //question16
{
    var date = new Date();
    var milli = date.getTime();
    var minutes = milli/3600000;
    document.write("Current Date: "+date);
    document.write("<br/>Elapsed milliseconds since January 1,1970 : "+milli);
    document.write("<br/>Elapsed minutes since January 1,1970 : "+minutes);

}

function question17() //question17
{
 var date = new Date();
 var time = date.getHours();
 if(time>=1 && time<=12)
 {
    document.write("Its AM");
 }
 else
 {
    document.write("Its PM");
 }
}

function question18() //question18
{
    var date = new Date("December 31,2020 00:00:00");
    document.write("Later date: "+date);

}

function question19() //question19
{
    var msDiff = new Date("May 27, 2017").getTime() - new Date().getTime();
    var daysTillRamdan = Math.floor(msDiff / (1000 * 60 * 60 * 24));
    document.write(daysTillRamdan+" have passed since 1st Ramadan 2017.");
}

function question20() //question20
{
    var date = new Date();
    document.write("On refrence date "+date);
    var msDiff = new Date("January 1, 2017").getTime() - new Date().getTime();
    var days = Math.floor(msDiff / 1000);
    document.write("<br/>"+Math.abs(days)+" seconds had passed since beginning of 2017.")
}

function question21() //question21
{
    var date = new Date();
    document.write("Current date: "+date);
    date.setHours(date.getHours()-1);
    document.write("<br/>1 hour ago, it was "+date);
}

function question22() //question22
{
    var date = new Date();
    document.write("Current date: "+date);
    date.setFullYear(date.getFullYear()-100);
    document.write("<br/>100 years back, it was "+date);
}

function question23() //question23
{
   var yourAge = +prompt("Enter your age?");
   var date = new Date();
   var year = date.getFullYear() - yourAge;
   document.write("Your age is "+yourAge);
   document.write("<br/>Your birth year is "+year);
}

function question24() //question24
{
    var name = "<b>Omar Iqbal</b>";
    var month = "<b>May</b>";
    var units = 450;
    var perUnit = 14;
    var late = 500;
    var netAmount = units * perUnit;
    var gross = netAmount + late;
    units = "<b>"+units+"</b>";
    perUnit = "<b>"+perUnit+"</b>";
    late = "<b>"+late+"</b>";
    netAmount = "<b>"+netAmount+"</b>";
    gross = "<b>"+gross+"</b>"; 

    document.write("<h1>K-Electric Bill</h1>");
    document.write("<br/><br/>Customer Name: "+name);
    document.write("<br/>Month: "+month);
    document.write("<br/>Number of units: "+units);
    document.write("<br/>Charges per unit: "+perUnit);

    document.write("<br/><br/>Net Amount Payable (Within Due Date): "+netAmount);
    document.write("<br/>Late payment surcharge: "+late);
    document.write("<br/>Gross Amount Payable (After Due Date): "+gross);
}