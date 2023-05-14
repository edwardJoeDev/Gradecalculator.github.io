Instruction:

// 1. Write a function displayStudenName() that will get the user input(Student Name) and display it as a paragraph or and alert prompt element it the browser. 

// 2.  Add 8 Input field for the 8 subjects.

// 3. Write function getAverage() that will compute the average of the given 8 subjects. Display the average in the web page 

// 4. Write function getFailedGrade() that will Get the grade below 75 

// 5. Display the name of the  subjects and grade below 75 print the result in Web page

// 6. Write function getPassedGrade() that will get grade equal and above 75.  

// 7. Display the name of the  subjects and grade above and equal 75 print the result as web page
// 8. Check the Average grade if the 68 below Display on web"Retake/Failed" , 69 - 74  Display on  web page "Remedial", 75 - 100  Display on  log "Passed", 50 below and 100 above Display on log "Invalid". 

// 9. All of this function will be invoke in one button "Compute Grade". Alert the average grade and name of the student.  

// Objective: Working with this hands on will give you  an experienced working with any dynamic language requires the ability to read, process and output user data. JavaScript is especially useful when you want to take user information and process it without sending the data back to the server.

// Tools: Visual Studio Code



var grades = [];


function getVAlues(){
    let math = parseInt(document.getElementById("mathematics").value);
    let physics = parseInt(document.getElementById("physics").value);
    let english = parseInt(document.getElementById("english").value);
    let filifino = parseInt(document.getElementById("filifino").value);
    let chemistry = parseInt(document.getElementById("chemistry").value);
    let physicalEducation = parseInt(document.getElementById("physical-education").value);
    let mapeh = parseInt(document.getElementById("mapeh").value);
    let humanities = parseInt(document.getElementById("humanities").value);

    grades.push(math,
        physics,
        english,
        filifino,
        chemistry,
        physicalEducation,
        mapeh,
        humanities);

}

console.log(grades);

// to get average grade
function getAverage(){
    let total = 0;
    for (i = 0; i < grades.length; i++){
        total += grades[i];
    }
    return ave = total/grades.length;

}

// 6. Write function getPassedGrade() that will get grade equal and above 75.  

// 7. Display the name of the  subjects and grade above and equal 75 print the result as web page

var subjectArray = ["mathematics","physics","english","filifino","chemistry","physical education","mapeh","humanities"]

// to select passed subjects
function getPassedGrade(){
    
    let text = "";
    let subject = subjectArray[i];
    for(i=0; i<subjectArray.length; i++){
        if (grades[i]>75 && grades[i]<=100) {
            text += subjectArray[i] + "<br>";
        } else {
        }
        document.getElementById("resultPass").innerHTML = text;
    }
}

// to select failedsubjects
function getFailedGrade(){
    
    let text = "";
    for(i=0; i<subjectArray.length; i++){
        if (grades[i]>=51 && grades[i]<68) {
            text += subjectArray[i] + "<br>";
        } else {
        }
        document.getElementById("resultFailed").innerHTML = text;
    }
}


function getRemedialGrade(){
    
    let text = "";
    for(i=0; i<subjectArray.length; i++){
        if (grades[i]>=69 && grades[i]<74) {
            text += subjectArray[i] + "<br>";
        } else {
        }
        document.getElementById("resultRemedial").innerHTML = text;
    }
}


function getInvalidGrade(){
    
    let text = "";
    for(i=0; i<subjectArray.length; i++){
        if (grades[i]>=0 && grades[i]<=50) {
            text += subjectArray[i] + "<br>";
        } else {
        }
        document.getElementById("resultInvalid").innerHTML = text;
    }
}



function displayGrade(){
    document.getElementById("mathematicsGrade").innerHTML = grades[0];
    document.getElementById("physicsGrade").innerHTML = grades[1];
    document.getElementById("englishGrade").innerHTML = grades[2];
    document.getElementById("filifinoGrade").innerHTML = grades[3];
    document.getElementById("chemistryGrade").innerHTML = grades[4];
    document.getElementById("physicalEducationGrade").innerHTML = grades[5];
    document.getElementById("mapehGrade").innerHTML = grades[6];
    document.getElementById("humanitiesGrade").innerHTML = grades[7];
}


function displayResults(){
    document.getElementById("resultAverage").innerHTML = getAverage(grades);
    // document.getElementById("resultPass").innerHTML = "science" + "<br>" + "science" + "<br>" + "science";
    // document.getElementById("resultFailed").innerHTML = "1";
}

function inputGrade(){
    getVAlues();
}

function doCalculate(){
    displayResults();
    displayGrade();
    getPassedGrade();
    getFailedGrade();
    getRemedialGrade();
    getInvalidGrade();

}

