

import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Parallax, Background } from "react-parallax";
import About from "@/components/About";
import Details from "@/components/Details";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "@/reducers/AppSlice";
import Me from "./Me";
import Loading from "@/components/Loading";
import Footer from "@/components/Footer";
const Main = () => {

    const [Currentimg, setCurrentimg] = useState(0);
    const app = useSelector(state => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        if (app.Data.Mydata.length === 0) {
            try {
                axios.get('./api/Mydata')
                .then(res => {
                    dispatch(setData({
                        Mydata : res.data
                    }));

                    dispatch(setData({
                        NumData : res.data.data.length
                    }))
                })
            } catch (error) {
                
            }
        }
        
        if (app.Data.Mydata) {
            const Timer = setTimeout(async () => {
                if (Currentimg === (app.Data.NumData - 1)) {
                    setCurrentimg(0);
                } else {
                    setCurrentimg(Currentimg + 1);
                }
            }, 2000);
    
            return () => clearTimeout(Timer)
        }
    }, [Currentimg]);

    return (
        <>
            {
                ((app.Data.Mydata.length === 0) ? <Loading /> : <>
                    <section id="firstsection">
                        <Parallax bgImage={'https://i.redd.it/qmm6mqqdw3k41.jpg'} strength={250}>
                            <div className="HeaderSection">
                                <div className="Text">
                                    <TypeAnimation
                                        sequence={[
                                            "สวัสดีครับ!",
                                            1500,
                                            "พี่ๆ ค่าย It Camp 2023😘",
                                            3000,
                                            "ผมชื่อ ณัฐภัทร บัวเพชร",
                                            3000,
                                            "อยากดูผลงานผมรึยัง ?",
                                            1500,
                                            "ถ้าพร้อมแล้ว มาทำความรู้จักกันครับ",
                                            1500,
                                        ]}
                                        wrapper="h1"
                                        cursor={true}
                                        repeat={Infinity}
                                        className="type"
                                        speed={30}
                                    />
                                    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">อยากดูผลงานผมรึยัง</h5>
                                        </a>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">ถ้าพร้อมแล้ว ...</p>
                                        <a href="#About" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Let's Go !
                                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </a>
                                    </div>

                                </div>
                                <div className="Img">
                                    <div className=" ImgTag" style={{backgroundImage: `url(${app.Data.Mydata.data[Currentimg].url})`}}></div>
                                </div>
                            </div>
                        </Parallax>
                    </section>
                    <div className="scroll-down-main">
                        <a href="#About">
                            <span>Swipe Down</span>
                            <i class="fa-sharp fa-regular fa-angles-down"></i>
                        </a>
                    </div>
                    <Me />
                    <About />
                    <Details />
                    <Footer />
                </>)
            }
        </>
    )
}

export default Main;