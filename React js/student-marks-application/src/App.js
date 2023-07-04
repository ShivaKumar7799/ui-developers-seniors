import './App.css';
import {useState} from 'react'

function App() {
  const [teluguMarks, setTeluguMarks] = useState("");
  const [hindiMarks, setHindiMarks] = useState("");
  const [englishMarks, setEnglishMarks] = useState("");
  const [mathsMarks,setMathsMarks] = useState();
  const [scienceMarks, setScienceMarks] = useState();
  const [socialMarks, setSocialMarks] = useState();

  const [totalMarks, setTotalMarks] = useState();
  const [result, setResult] = useState();
  const [percentage, setPercentage] = useState();

  const handleTeluguMarks = (event) => {
    setTeluguMarks(event.target.value)
  }
  const handleHindiMarks = (event) => {
    setHindiMarks(event.target.value)
  }
  const handleEnglishMarks = (event) => {
    setEnglishMarks(event.target.value)
  }
  const handleMathsMarks = (event) => {
    setMathsMarks(event.target.value)
  }
  const handleScienceMarks = (event) => {
    setScienceMarks(event.target.value)
  }
  const handleSocialMarks = (event) => {
    setSocialMarks(event.target.value)
  }
  
  const getResult = (event) => {
    event.preventDefault();
    console.log(teluguMarks, hindiMarks, englishMarks, mathsMarks, scienceMarks, socialMarks);
    const totalMarks = Number(teluguMarks) + Number(hindiMarks) + Number(englishMarks) + Number(mathsMarks) + Number(scienceMarks) + Number(socialMarks);
    setTotalMarks(totalMarks);
   
    if(teluguMarks<35 || hindiMarks < 35 || mathsMarks < 35 || scienceMarks < 35 || englishMarks < 35 || socialMarks < 35){
      setResult("fail")
      setPercentage()
    }else {
      setResult("pass");
      var percentage = (totalMarks/600)*100
      setPercentage(percentage.toFixed(2))
    }

  }



   return (
    <div>
      <h1>Student Marks Application</h1>
      <form onSubmit={getResult} >
        <div>
          <label>Telugu</label>
          <input type="text" id="telugu" name="telugu" onChange={handleTeluguMarks} value={teluguMarks} />
        </div>
        <div>
          <label>Hindi</label>
          <input type="text" id="hindi" name="hindi" onChange={handleHindiMarks} value={hindiMarks} />
        </div>
        <div>
          <label>English</label>
          <input type="text" id="english" name="english" onChange={handleEnglishMarks} value={englishMarks} />
        </div>
        <div>
          <label>Maths</label>
          <input type="text" id="maths" name="maths" onChange={handleMathsMarks} value={mathsMarks} />
        </div>
        <div>
          <label>Science</label>
          <input type="text" id="science" name="science" onChange={handleScienceMarks} value={scienceMarks}  />
        </div>
        <div>
          <label>Social</label>
          <input type="text" id="social" name="social" onChange={handleSocialMarks} value={socialMarks}  />
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
