//Question bank
var questionBank= [
    {
        question : 'Which 80s star is recognised by Guinness World Records as the best-selling female recording artist of all time?',
        option : ['Blondie','Whitney Houston','Madonna','Cher'],
        answer : 'Madonna'
    },
    {
        question : 'David Bowie appeared in what cult film in 1986? ',
        option : ['Who framed Roger Rabbit','The NeverEnding Story','The Goonies','Labyrinth'],
        answer : 'Labyrinth'
    },
    {
        question : 'Which country do iconic pop trio A-ha come from?',
        option : ['Norway','Sweden','United States','England'],
        answer : 'Norway'
    },
    {
        question : 'Michael Jackson debuted his trademark moonwalk during which song in 1983?',
        option : ['Billie Jean','Smooth Criminal','Bad','Thriller'],
        answer : 'Billie Jean'
    },
    {
        question : 'Which 90s girl group is the second best-selling in history after the Spice Girls?',
        option : ['Destiny\'s Child','TLC','All Saints','Atomic Kitten'],
        answer : 'TLC'
    },

    {
        question : 'The 1992 comedy hit Wayne’s World was a revival for which 1975 song?',
        option : ['Another brick in the wall','A whole lotta love','Bohemian Rhapsody','Livin\' on a prayer'],
        answer : 'Bohemian Rhapsody'
    }

    ,

    {
        question : 'Who won a grammy for best reggae album in 1995 with Boombastic?',
        option : ['Sting','Peter Andre','Justin Timberlake','Shaggy'],
        answer : 'Shaggy'
    }

    ,

    {
        question : 'What was the name of Lighthouse Family’s 6 times platinum album released in 1995?',
        option : ['Mountain Drive','River Drive','Forest Drive','Ocean Drive'],
        answer : 'Ocean Drive'
    }

    ,

    {
        question : 'Robbie Williams began a famous solo career after leaving which band in 1995?',
        option : ['Take That','5ive','Boyzone','Westlife'],
        answer : 'Take That'
    }

    ,

    {
        question : 'Which is the only country to have won 3 Eurovision Song Contests in a row (1992, 1993 and 1994)?',
        option : ['Ireland','Great Britain','Geramany','Finland'],
        answer : 'Ireland'
    }

    ,

    {
        question : 'Eminem released his eponymous album (named after himself) in 2000, what was it called?',
        option : ['Curtain Calls','The Slim Shady LP','The Marshall Mathers LP','The Eminem LP'],
        answer : 'The Marshall Mathers LP'
    }

    ,

    {
        question : 'Maroon 5 released their solo album in 2002 titled Songs About…who?',
        option : ['Teresa','Sarah','Jane','Mary'],
        answer : 'Jane'
    }

    ,

    {
        question : 'Florian Cloud de Bounevialle O\'Malley Armstrong is the real name of which 00s icon?',
        option : ['Pink','Avril Lavigne','Dido','Beyonce'],
        answer : 'Dido'
    },
    {
        question : 'Eurovision sensation ABBA came from which country??',
        option : ['Finland','Denmark','Sweden','Norway'],
        answer : 'Sweden'
    },
    {
        question : 'Which Irish rock band sang The Boys Are Back In Town??',
        option : ['Thin Lizzy','U2','Aslan','None of the above'],
        answer : 'Thin Lizzy'
    },
]

let question= document.getElementById('question');
let quizContainer= document.getElementById('quiz-container');
let scorecard= document.getElementById('scorecard');
let option0= document.getElementById('option0');
let option1= document.getElementById('option1');
let option2= document.getElementById('option2');
let option3= document.getElementById('option3');
let next= document.querySelector('.next');
let points= document.getElementById('score');
let span= document.querySelectorAll('span');
let i=0;
let score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    let answerBank= document.getElementById('answerBank');
    let answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(let a=0;a<questionBank.length;a++)
    {
        let list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}
displayQuestion();