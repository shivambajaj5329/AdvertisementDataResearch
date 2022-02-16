import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import data from "../data/data.json";
import { PaperAirplaneIcon } from "@heroicons/react/outline";
import {BadgeCheckIcon} from "@heroicons/react/outline"
import {ChevronDoubleRightIcon} from "@heroicons/react/outline"
import { useSession } from 'next-auth/react'
import {signIn, signOut} from "next-auth/react"
import {addDoc, collection, getDocs} from "firebase/firestore"
import {db} from "../firebase"


function VideoBox() {
  const [CurrentVideo, setCurrentVideo] = useState(data[0]);
  const [VideoWatched, setVideoWatched] = useState(false);
  const [Count, setCount] = useState();
  const [selectedOption1, setSelectedOption1] = useState(0)
  const [selectedOption2, setSelectedOption2] = useState(0)
  const [selectedOption3, setSelectedOption3] = useState(0)
  const [arryaOfChoices, setArrayOfChoices] = useState([])
  const [displayNext, setDisplayNext] = useState(false)
  const [arr, setArr] = useState([])
  const [ansSubmitted, setAnsSubmitted] = useState(false)

  const {data: session} = useSession();




  const handleOnNextClick = () => {
    setCurrentVideo(data[Count]);
    console.log(CurrentVideo);
    setCount(Count + 1);
    setVideoWatched(false);
    setSelectedOption1(0)
    setSelectedOption3(0)
    setSelectedOption2(0)
    setAnsSubmitted(false)
  };

  useEffect(() => {
    setCount(1);
  }, []);

  const handleOnVideoWatched = () => {
    setVideoWatched(true);
    setDisplayNext(true)
  };


  const RadioInput = ({label, value, checked, setter}) => {
	return (
	  <label>
	    <input type="radio" checked={checked == value}
	           onChange={() => setter(value)} />
	    <span>{label}</span>
	  </label>
	);
};



const handleSubmitOptions = () => {
   setArrayOfChoices((t) => t.concat(arr.concat(selectedOption3,selectedOption2,selectedOption1)))
   setVideoWatched(false)
   setArr([])
   setAnsSubmitted(true)
}

const displayPopup = () => {

    alert("Thanks for taking this test!")
}

const uploadData = async() => {
    const docRef = await addDoc(collection(db,'posts'),{
        q1:arryaOfChoices[0],
        q2:arryaOfChoices[1],
        q3:arryaOfChoices[2],
        q4:arryaOfChoices[3],
        q5:arryaOfChoices[4],
        q6:arryaOfChoices[5]
    })
    console.log("New Doc added with id", docRef.id);

    alert("Thank you for taking the test, your data has been uploaded, you will be redirected to Logout")
    signOut()
}



  return (

    
    <header className="flex  justify-between items-center">
        
      <div className="flex flex-col">
          {session ? (        <h1>
          {CurrentVideo.id} / {data.length}
        </h1>) : (null)}

      </div>

      <div className="m-10 flex flex-col"> 
      {session ? (<ReactPlayer url={CurrentVideo.url} onEnded={handleOnVideoWatched} />) : (<p>You need to Login to use the Application</p>)}
        {VideoWatched ? (
          <>
            {" "}
            <forms>
              <div>
                What was the first Advertisement about
                <div className="radio">
                  <label>
                  <RadioInput label={CurrentVideo.choice[0].choice_1} value="1" checked={selectedOption1} setter={setSelectedOption1}  />
                  </label>
                </div>
                <div className="radio">
                  <label>
                  <RadioInput label={CurrentVideo.choice[0].choice_2} value="2" checked={selectedOption1}  setter={setSelectedOption1}  />
                  </label>
                </div>
                <div className="radio">
                  <label>
                  <RadioInput label={CurrentVideo.choice[0].choice_3} value="3" checked={selectedOption1} setter={setSelectedOption1}  />
                  </label>
                </div>
              </div>
              <div>
                What was the second Advertisement about
                <div className="radio">
                  <label>
                  <RadioInput label={CurrentVideo.choice[1].choice_1} value="1" checked={selectedOption2} setter={setSelectedOption2}  />
                  </label>
                </div>
                <div className="radio">
                  <label>
                  <RadioInput label={CurrentVideo.choice[1].choice_2} value="2" checked={selectedOption2}  setter={setSelectedOption2}  />
                  </label>
                </div>
                <div className="radio">
                  <label>
                  <RadioInput label={CurrentVideo.choice[1].choice_3} value="3" checked={selectedOption2} setter={setSelectedOption2}  />
                  </label>
                </div>
              </div>
              <div>
                What was the third Advertisement about
                <div className="radio">
                  <label>
                  <RadioInput label={CurrentVideo.choice[2].choice_1} value="1" checked={selectedOption3} setter={setSelectedOption3}  />
                  </label>
                </div>
                <div className="radio">
                  <label>
                  <RadioInput label={CurrentVideo.choice[2].choice_2} value="2" checked={selectedOption3}  setter={setSelectedOption3}  />
                  </label>
                </div>
                <div className="radio">
                  <label>
                  <RadioInput label={CurrentVideo.choice[2].choice_3} value="3" checked={selectedOption3} setter={setSelectedOption3}  />
                  </label>
                </div>
                <button className="justify-items-center border-x-4 border-y-4 flex-col" type= "submit" onClick={handleSubmitOptions}>Submit </button>
              </div>
               </forms>{" "}
          </>
        ) : null}
      </div>
      <div className="group items-center flex flex-col cursor-pointer w-12 sm:w-20 hover:text-white">
        {CurrentVideo.id < data.length ? (
          <div>
            {ansSubmitted ? (<>
              <ChevronDoubleRightIcon
                className="h-8 mb-1 group-hover:animate-bounce cursor-pointer "
                onClick={handleOnNextClick}
              />
                      <p className="tracking-widest opacity-0 group-hover:opacity-100">NEXT</p>
            </>
            ) : null}
          </div>
        ) : null}
        {CurrentVideo.id === data.length ? (
          <div>
            {ansSubmitted ? (<>
            <p></p>
              <BadgeCheckIcon
                className="h-8 mb-1 group-hover:animate-bounce cursor-pointer "
                onClick={uploadData}
              />
              <p className="tracking-widest opacity-100 group-hover:opacity-100">FINISH</p>
            </>
            ) : null}
          </div>
        ) : null}
        {console.log(arryaOfChoices)}
      </div>
    </header>
  );
}

export default VideoBox;
