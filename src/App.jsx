import Card from "./components/Card";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Video from "../src/assets/video.png"
import  Logo1 from "../src/assets/icon1.png"
import CardLong from "./components/CardLong";
import SubBanner from "./components/SubBanner";
import Map from "./components/Map";
import MapPic from "./components/MapPic";
import Click from "./components/Click";
import Ending from "./components/Ending";
import { useEffect } from "react";
import  AOS  from "aos";
import "aos/dist/aos.css"
function App() {

useEffect(()=>{
   AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
},[])
  return (
    <>
     <Navbar/>
     <Banner/>
    <div className="flex gap-11 justify-center align">
     <Card description=" This is Heading" text="Help Use" className={"text-red-600 bg-white"}/>
     <Card description="Heading is Here" text ="Contract Me" className={"text-white bg-red-600"}/>
      <Card description="Heading is that" text ="Learn Me" className={"text-red-600 bg-white"}/>
    </div>
       <div  className="my-[100px]">
        <div  className="flex w-full justify-center gap-x-40">
        <Logo src="src/assets/logo_img/logo1.png" number="42+" pra="State Covered"/>
           <Logo src="src/assets/logo_img/logo2.png" number="120+" pra="Awards Won"/>
              <Logo src="src/assets/logo_img/logo3.png" number="342+" pra="Happy Chilents"/>
                 <Logo src="src/assets/logo_img/logo4.png" number="642+" pra="Good Deleivered"/>
                    <Logo src="src/assets/logo_img/logo2.png" number="542+" pra="Bussiness Hour"/>
    </div>
       </div>

       <div data-aos="fade-down" data-aos-delay="300">
       <picture >
       <img data-aos="fade-up" data-aos-delay="300" src={Video} alt=" No Picture" className="mb-20 w-[1320px] h-[580px] m-auto" />
       </picture>
       </div>

       <div className="mt-10 h-60 flex justify-center gap-x-3">
          <div>
          <picture>
          <img data-aos="fade-left" data-aos-delay="300" className=" mt-5 h-[133px] w-[133px] " src={Logo1} alt=" No picture" />
          </picture>
          </div>
          <div data-aos="fade-right" data-aos-delay="300" className="mt-5 pt-4">
          <h1 className=" text-red-600 font-bold text-4xl w-[211px] h-[40px] m-auto">TESTIMONIAL</h1>
          <h2 className="pt-4  text-black text-5xl w-[570px] h-[43px] font-bold m-auto ml-20 ">Our Awesome Clients</h2>
          </div>
       </div>
       <CardLong/>
       <SubBanner/>
       <Map/>
       <MapPic/>
          <Click/>  
          <Ending/>     
    </>
  );
}

export default App;
