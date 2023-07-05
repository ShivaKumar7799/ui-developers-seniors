import './App.css';
import {useState} from 'react'

function App() {
  // const [teluguMarks, setTeluguMarks] = useState("");
  // const [hindiMarks, setHindiMarks] = useState("");
  // const [englishMarks, setEnglishMarks] = useState("");
  // const [mathsMarks,setMathsMarks] = useState();
  // const [scienceMarks, setScienceMarks] = useState();
  // const [socialMarks, setSocialMarks] = useState();

  const [studentMarks, setStudentMarks] = useState({
    teluguMarks : "",
    hindiMarks : "",
    mathsMarks : "",
    englishMarks : "",
    scienceMarks :  "",
    socialMarks : "",
    gk : ""
  })

  const [totalMarks, setTotalMarks] = useState();
  const [result, setResult] = useState();
  const [percentage, setPercentage] = useState();

  // const handleTeluguMarks = (event) => {
  //   setTeluguMarks(event.target.value)
  // }
  // const handleHindiMarks = (event) => {
  //   setHindiMarks(event.target.value)
  // }
  // const handleEnglishMarks = (event) => {
  //   setEnglishMarks(event.target.value)
  // }
  // const handleMathsMarks = (event) => {
  //   setMathsMarks(event.target.value)
  // }
  // const handleScienceMarks = (event) => {
  //   setScienceMarks(event.target.value)
  // }
  // const handleSocialMarks = (event) => {
  //   setSocialMarks(event.target.value)
  // }

  const handleSubjectMarks = (event) => {
    console.log(event.target.name, event.target.value);
    setStudentMarks({
      ...studentMarks, [event.target.name] : event.target.value
    })
  }
  
  const getResult = (event) => {
    event.preventDefault();
    console.log(studentMarks);

    const marks = Object.values(studentMarks);
    console.log(marks)

    var result;

    var totalMarks = 0

    for(let i = 0; i < marks.length ; i++){
        totalMarks = totalMarks + Number(marks[i])
        if(marks[i] < 35 ){
          result = "fail"
        }
    }

    if(result === "fail"){
      setResult(result)
      setPercentage()
    }else {
        setResult("pass");
        var percentage = (totalMarks/ (marks.length*100) )*100
        setPercentage(percentage.toFixed(2))
        setTotalMarks(totalMarks)
    }

    // const {teluguMarks, hindiMarks, englishMarks, mathsMarks, scienceMarks, socialMarks, gk} = studentMarks

    // console.log(studentMarks.teluguMarks, studentMarks.hindiMarks, studentMarks.englishMarks, studentMarks.mathsMarks, studentMarks.scienceMarks, studentMarks.socialMarks, studentMarks.gk);
    // const totalMarks = Number(teluguMarks) + Number(hindiMarks) + Number(englishMarks) + Number(mathsMarks) + Number(scienceMarks) + Number(socialMarks) + Number(gk);
    // setTotalMarks(totalMarks);
   
    // if(teluguMarks<35 || hindiMarks < 35 || mathsMarks < 35 || scienceMarks < 35 || englishMarks < 35 || socialMarks < 35 || gk < 35 ){
    //   setResult("fail")
    //   setPercentage()
    // }else {
    //   setResult("pass");
    //   var percentage = (totalMarks/700)*100
    //   setPercentage(percentage.toFixed(2))
    // }

  }



   return (
    <div>
      <h1>Student Marks Application</h1>
      <form onSubmit={getResult} >
        <div>
          <label>Telugu</label>
          <input type="text" id="telugu" name="teluguMarks" onChange={handleSubjectMarks} value={studentMarks.teluguMarks} />
        </div>
        <div>
          <label>Hindi</label>
          <input type="text" id="hindi" name="hindiMarks" onChange={handleSubjectMarks} value={studentMarks.hindiMarks} />
        </div>
        <div>
          <label>English</label>
          <input type="text" id="english" name="englishMarks" onChange={handleSubjectMarks} value={studentMarks.englishMarks} />
        </div>
        <div>
          <label>Maths</label>
          <input type="text" id="maths" name="mathsMarks" onChange={handleSubjectMarks} value={studentMarks.mathsMarks} />
        </div>
        <div>
          <label>Science</label>
          <input type="text" id="science" name="scienceMarks" onChange={handleSubjectMarks} value={studentMarks.scienceMarks}  />
        </div>
        <div>
          <label>Social</label>
          <input type="text" id="social" name="socialMarks" onChange={handleSubjectMarks} value={studentMarks.socialMarks}  />
        </div>
        <div>
          <label>G.k</label>
          <input type="text" id="gk" name="gk" onChange={handleSubjectMarks} value={studentMarks.gk}  />
        </div>
        <div>
          <label>Drawing</label>
          <input type="text" id="drawing" name="drawing" onChange={handleSubjectMarks} value={studentMarks.drawing}  />
        </div>
        <input type='submit' value="get result" />
      </form>
      {totalMarks && <h2>Total Marks : {totalMarks} </h2>}
      {result && <h2>Result : {result} </h2>}
      {percentage && <h2>Percentage : {percentage} </h2>}
    </div>
  );
}

export default App;
