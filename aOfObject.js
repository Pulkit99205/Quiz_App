window.onload=function()
  {
      show(0);
  }

  var score=0;
var questionPaper =
[
    {    
            question:"Which of the following option leads to the portability and security of Java?" ,

        option1: "Bytecode is executed by JVM",
        option2: "The applet makes the Java code secure and portable",
        option3: "Use of exception handling",
        option4: "Dynamic binding between objects",
        cAnswer: "Bytecode is executed by JVM",
    },
    {
        question:"Which of the following is not a Java features ?" ,
        option1: "Dynamic",
        option2: "Architecture Neutral",
        option3: "Use of Pointers",
        option4: "Objects-oreinted",
        cAnswer: "Use of Pointers",
    },

    {
        question:"_____ is used to find and fix bugs in the Java programs.",
       option1: "JVM",
       option2: "JRE",
       option3: "JDK" ,
       option4:  "JDB",
        cAnswer: "JDB",

    },
    {
        question:"What is the return type of the hashCode() method in the Object class?",
       option1: "Object",
       option2: "int",
       option3: "long" ,
       option4:  "void",
        cAnswer: "int",

    },
    {
        question:"What does the expression float a = 35 / 0 return?",
       option1: 0,
       option2: "Not a Number",
       option3: "Infinity" ,
       option4:  "Run time exception",
        cAnswer: "Infinity",

    },
    {
        question:"Evaluate the following Java expression, if x=3, y=5, and z=10  ++z + y - y + z + x++",

       option1: 24,
       option2:  23,
       option3: 20 ,
       option4:  25,
        cAnswer: 24,

    },
    {
        question:"Which method of the Class.class is used to determine the name of a class represented by the class object as a String?",

       option1: " getClass()",
       option2: "intern()",
       option3: "getName()" ,
       option4:  "toString()",
        cAnswer: "getName()",

    },
    {
        question:"Which package contains the Random class? ",

       option1: "java.util.package",
       option2: "java.lang package",
       option3: "java.awt package" ,
       option4:  " java.io package",
        cAnswer: "java.util.package",

    },
    {
        question: "Which of the following is an immediate subclass of the Panel class?",

       option1: "applet class",
       option2: " window class",
       option3: "frame class" ,
       option4:  "dialog class",
        cAnswer: "applet class",

    },
    {
        question:"In which memory a String is stored, when we create a string using new operator? ",
       option1: "Stack",
       option2: "String memory",
       option3: "heap memory" ,
       option4:  "Random storage space",
        cAnswer: "heap memory",

    },
    

]

var res=document.getElementById("incorrect").style.display = "none";
var res2= document.getElementById("correct").style.display = "none";
document.getElementById("nextbutton").style.display = "none";
document.getElementById("akey").style.display="none";
document.getElementById("restart").style.display="none";

let question_count=0;
function next()
{
      question_count++;
    show(question_count);
   
  document.getElementById("correct").style.display="none";         
  document.getElementById("incorrect").style.display="none";         
  document.getElementById("nextbutton").style.display="none";   


}

function show(count)
{
   if(question_count<2)

   {
  let pp=document.getElementById("choices");
  document.getElementById("submitbutton").style.display="block";       
//    pp.innerHTML= "<h2>" +questionPaper[count].question +"</h2>";
pp.innerHTML= `<h2>Q${count+1} ${questionPaper[count].question}</h2> 
<br>
<div class="radio"> <input type="radio" id="o2" name="ques1" value="${questionPaper[count].option1}">
<label class="form-check-label" >${questionPaper[count].option1}</label>    
</div>

<div class="radio">  
<input type="radio" id="o3" name="ques1" value="${questionPaper[count].option2}"}>
<label class="form-check-label" >${questionPaper[count].option2}</label>
</div>

<div class="radio">  
<input type="radio" id="o4" name="ques1" value="${questionPaper[count].option3}">
<label class="form-check-label" >${questionPaper[count].option3}</label>
</div>

<div class="radio">  
<input type="radio" id="o5" name="ques1" value="${questionPaper[count].option4}">
<label class="form-check-label" >${questionPaper[count].option4}</label>
</div>`;

}
else
{

    document.getElementById("akey").style.display="block";
    // console.log(score);
    var a= document.getElementById("h11");
    a.innerHTML=`Your Score is : ${score}`;
    var res= "<ul>";
    questionPaper.forEach(function(natukaka)
    {
            res+=`<li> ${natukaka.question}<span class="badge badge-success text-white">${natukaka.cAnswer}<span> </li>`;
    } );
    res+="</ul>";
    var b = document.getElementById("choices");
     b.innerHTML=res;
     
     document.getElementById("restart").style.display="block";
  }
}

function onsuubmit()
{
    var user_answer=document.querySelector('input[name="ques1"]:checked');
    var chiku=document.getElementsByTagName("input");
    
    if(user_answer!=null)
    {
        if(user_answer.value==questionPaper[question_count].cAnswer)
        {           
         score++;
         document.getElementById("correct").style.display="block";
         document.getElementById("submitbutton").style.display="none";         
         document.getElementById("nextbutton").style.display="block";
            
        }          
             
        else 
          {  
        document.getElementById("incorrect").style.display="block";
        document.getElementById("nextbutton").style.display="block";
        document.getElementById("submitbutton").style.display="none";         
        console.log(questionPaper[question_count].cAnswer);
 
          }
          for(var i=0;i<4;i++)
          {
             chiku[i].disabled = true; 
          }   
    }
    else
    {
       alert("Please select any option");
    }        
}


function restart()
{  
    question_count=0;
    location.reload();
}