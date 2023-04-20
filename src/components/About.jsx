import { setData, setStateToggle } from '@/reducers/AppSlice';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function About() {

    const app = useSelector(state => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        if (app.Data.Myportfolio.length === 0) {
            try {
                axios.get('../../api/Portfolio')
                .then(res => {
                    dispatch(setData({
                        Myportfolio : res.data
                    }));
                })
            } catch (error) {
                
            }
        }
    })

    const handleEDetail = (id) => {
        dispatch(setData({
            idSelect : id
        }));
        dispatch(setStateToggle({
            DetailsPort : (id !== app.Data.idSelect) ?  app.StateToggle.DetailsPort : !app.StateToggle.DetailsPort
        }));
        dispatch(setData({
            FilterDetails : app.Data.Myportfolio.data.filter((state) => state._id == app.Data.idSelect)
        }))

    }
  return (
    <section id="About" className={'Section_start'}>
        <h1 className="Title_section">
            ผลงานของผม - My Portfolio
        </h1>
        <div className="line"></div>
        <div className="Gridddddddddddddddddd">
            {
                ((app.Data.Myportfolio != 0) ? app.Data.Myportfolio.data.map((_data, i) => {
                    return (
                        <>
                        <div className="Item-Child" onClick={() => handleEDetail(_data._id)}>
                            <div className="Img">
                                <i class="fa-solid fa-computer-mouse-scrollwheel"></i>
                                <img draggable={false} src={_data.Img} alt="" />
                            </div>
                            <div className="text-container">
                                <span>
                                    {_data.Name}
                                </span>
                                <span>
                                    Deploy Latest : {_data.Date}
                                </span>
                            </div>
                        </div>
                        </>
                    )
                }) : null)
            }
        </div>
    </section>
  )
}

export default About;