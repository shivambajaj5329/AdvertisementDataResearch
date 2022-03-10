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
import download from "../data/download.png"
import ads_data from "../data/advertisement.json";


function VideoBox() {
  const [CurrentVideo, setCurrentVideo] = useState(data[0]);
  const [VideoWatched, setVideoWatched] = useState(false);
  const [Count, setCount] = useState();
  const [arryaOfChoices, setArrayOfChoices] = useState([])
  const [displayNext, setDisplayNext] = useState(false)
  const [arr, setArr] = useState([])
  const [ansSubmitted, setAnsSubmitted] = useState(false)
  const [banner1, setBanner1] = useState(false)
  const [banner2, setBanner2] = useState(false)
  const [banner3, setBanner3] = useState(false)

  const [randomBanners , setRandomBanners] = useState([])
  const [bannerUrl, setBannerUrl] = useState("")

  const [playing, setPlaying] = useState(false)
  const play = () => setPlaying(true)
  const pause = () => setPlaying(false)
  const [arrayOfBanner, setArrayOfBanner] = useState([])
  const [getUrls, setUrls] = useState([])




  const {data: session} = useSession();




  const handleOnNextClick = () => {
    setCurrentVideo(data[Count]);
    console.log(CurrentVideo);
    setCount(Count + 1);
    setVideoWatched(false);
    setAnsSubmitted(false)
    setPlaying(false)
  };

  useEffect(() => {
    setCount(1);
  }, []);

  const handleOnVideoWatched = () => {
    setVideoWatched(true);
    setDisplayNext(true)
  };

const handleSubmitOptions = () => {
  setUrls((t) => t.concat(CurrentVideo.url, CurrentVideo.url, CurrentVideo.url))
  setArrayOfChoices((t) => t.concat(document.getElementById("input1").value,document.getElementById("input2").value,document.getElementById("input3").value))
  setVideoWatched(false)
  setArr([])
  setAnsSubmitted(true)
  setArrayOfBanner((t) => t.concat(randomBanners[0] , randomBanners[1], randomBanners[2]))
  
}

const uploadData = async() => {
    const docRef = await addDoc(collection(db,'posts'),{
      q1:arrayOfBanner[0],
      q2:arrayOfBanner[1],
      q3:arrayOfBanner[2],
      q4:arrayOfBanner[3],
      q5:arrayOfBanner[4],
      q6:arrayOfBanner[5],
      a1:arryaOfChoices[0],
      a2:arryaOfChoices[1],
      a3:arryaOfChoices[2],
      a4:arryaOfChoices[3],
      a5:arryaOfChoices[4],
      a6:arryaOfChoices[5],
      v1:getUrls[0],
      v2:getUrls[1],
      v3:getUrls[2],
      v4:getUrls[3],
      v5:getUrls[4],
      v6:getUrls[5],
    })
    console.log("New Doc added with id", docRef.id);

    alert("Thank you for taking the test, your data has been uploaded, you will be redirected to Logout")
    signOut()
}

function getRandom(n) {
  var result = new Array(n),
      len = ads_data.length,
      taken = new Array(len);
     let ari = new Array(n)
      ari = ads_data.map((e) => e.name)
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = ari[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

const onStartVideo = (newArr) =>{
  setRandomBanners (newArr)
}

const getBannerUrls = (name_Banner) => {
  let url
  ads_data.map((e) => {
    if (e.name === name_Banner){
      url = e.url 
  }
  })
  return url
}
  return (
    <header className="flex  justify-between items-center">
      <div className="flex flex-col">
          {
          session ? (<h1>
          {CurrentVideo.id} / {data.length}
        </h1>) : (null)}
      </div>
      

      <div className="m-10 flex flex-col"> 
      {session ? (
      <div id="parent" style={{position:"relative"}}>
        {         
        banner1 && <div id="banner1" style={{position:"absolute" , backgroundColor:"rgba(255,255,255,0.7)", bottom:20 , left:"50%" , textAlign:"center" , fontSize:20 , padding:5, transform:"translateX(-50%)" , width:100, color:"black"}}> 
          <img src= {getBannerUrls(randomBanners[0])} width="100%" height={20} />
         </div>
         }

      {         
        banner2 && <div id="banner2" style={{position:"absolute" , backgroundColor:"rgba(255,255,255,0.7)", bottom:20 , left:"50%" , textAlign:"center" , fontSize:20 , padding:5, transform:"translateX(-50%)" , width:100, color:"black"}}> 
          <img src= {getBannerUrls(randomBanners[1])} width="100%" height={20} />
         </div>
         }

      {         
        banner3 && <div id="banner3" style={{position:"absolute" , backgroundColor:"rgba(255,255,255,0.7)", bottom:20 , left:"50%" , textAlign:"center" , fontSize:20 , padding:5, transform:"translateX(-50%)" , width:100, color:"black"}}> 
          <img src= {getBannerUrls(randomBanners[2])} width="100%" height={20} />
         </div>
         }
      <ReactPlayer url={CurrentVideo.url} onEnded={handleOnVideoWatched} onStart ={() => {setBanner1(false) 
        setTimeout(() => {setBanner1(true)} , 1000 )
        setTimeout(() => {setBanner1(false)} , 3500 )
        setTimeout(() => {setBanner2(true)} , 5000 )
        setTimeout(() => {setBanner2(false)} , 7500 )
        setTimeout(() => {setBanner3(true)} , 9000 )
        setTimeout(() => {setBanner3(false)} , 12000 )
        let a = getRandom(3)
        onStartVideo(a)
        }}
        playing={playing}
        onPlay={play}
        onPause={pause}
        
        style={{ pointerEvents: playing===true ? 'none' : '' }}
    />
      </div>
      ) : (<p>You need to Login to use the Application</p>)}
        {VideoWatched ? (
          <>
            {" "}
            <forms>
              <div>
                What was the first Advertisement about
                <div>
                <input type= "text" style={{color:"black"}  } id="input1" />
                </div>
              </div>
              <div>
                What was the second Advertisement about
                <div>
                <input type= "text" style={{color:"black"}} id="input2"  />
                </div>
              </div>
              <div>
                What was the third Advertisement about
                <div>
                <input type= "text" style={{color:"black"}} id="input3" />
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
      </div>
    </header>
  );
}

export default VideoBox;
