// forEach 

const students = [
    {
        name : "Rahul",
        age : 18,
        id : 1,
        rollNo : 45,
        result : "pass",
        marks : [
            {
                telugu : 25
            },
            {
                english : 45
            },
            {
                hindi : 55
            },
            {
                maths : 96
            },
            {
                science : 15
            },
            {
                socail : 45
            },
        ]
    },
    {
        name : "Sehwag",
        age : 20,
        id : 2,
        rollNo : 37,
        result : "fail",
        marks : [
            {
                telugu : 46
            },
            {
                english : 15
            },
            {
                hindi : 45
            },
            {
                maths : 78
            },
            {
                science : 63
            },
            {
                socail : 45
            },
        ]

    },
    {
        name : "Sachin",
        age : 21,
        id : 3,
        rollNo : 47,
        result : "pass",
        marks : [
            {
                telugu : 45
            },
            {
                english : 45
            },
            {
                hindi : 45
            },
            {
                maths : 45
            },
            {
                science : 45
            },
            {
                socail : 45
            },
        ]
    },
    {
        name : "Dhoni",
        age : 15,
        id : 4,
        rollNo : 50,
        result : "fail",
        marks : [
            {
                subjectName : "Telugu",
                marks : 5
            },
            {
                subjectName : "Hinid",
                marks : 5
            },
            {
                subjectName : "english",
                marks : 5
            },
            {
                subjectName : "Maths",
                marks : 3
            },
            {
                subjectName : "science",
                marks : 3
            },
            {
                subjectName : "socail",
                marks : 3
            },
            {
                subjectName : "drawing",
                marks : 5
            }
        ]
    },

]


// foreach and map are used to iterate every element or item in the array
// map will return an array of items we can work with that array later

const studentNames = students.map((student,index) => {
    return {...student, college : "ABC College"}
} )
console.log(studentNames, "map")


students.forEach((student,index) => {
    console.log(student.id)
})

// filter method will return an array of items if the condition is true 

const eligibleStudentsToVote = students.filter((student,index) => student.age < 18 )

console.log(eligibleStudentsToVote)


const subjectMarks = [9,47,56,6,38,56,45];

let acc = 200;

var totalMarks = subjectMarks.reduce((total, value) => total = total + value) 
console.log(totalMarks)


const dhoniTotalMarks = eligibleStudentsToVote[0].marks.map((subject,index) => subject.marks ).reduce((total, value) => total = total + value) 
console.log(dhoniTotalMarks);

console.log(subjectMarks);

// some - some will check every item, if any of the condition is true, then it will return true

const result = !subjectMarks.some((item,index) => item < 35  )
console.log(result)

// every - every will check whether everything is true, if the condition satisfies for all, then it will return true

const studentResult = subjectMarks.every((item,index) => item >=35 );
console.log(studentResult)

// find 

const fruits = ["apple","papaya","banana","grapes"];

const fruitAvaible = fruits.find((item,index) => item == "pine apple" );
console.log(fruitAvaible, "fruit")

const failedSubjectMarks = subjectMarks.find((item,index) => item < 35 );
console.log(failedSubjectMarks,"failed subjects")


//find index

const fruitIndex = fruits.findIndex((item,index) => item == "pine apple" );
console.log(fruitIndex, "finding index")
