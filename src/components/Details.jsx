import { setData, setStateToggle } from '@/reducers/AppSlice';
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Details() {

    const app = useSelector(state => state.app);
    const dispatch = useDispatch()


    const handleClose = () => {
        dispatch(setData({
            idSelect : null
        }));
        dispatch(setStateToggle({
            DetailsPort : false
        }));
    }
    
    console.log(app.Data.FilterDetails)
    return (
    <>
        {
            ((app.Data.FilterDetails.length !== 0) ? <>
                <div className={`Detail_Main ${((app.StateToggle.DetailsPort) ? 'active' : null)}`}>
                    <div className="Title">
                        <div className="Icon" onClick={() => handleClose()}>
                            <i class="fa-regular fa-angles-left"></i>
                        </div>
                        <div className="Name">
                            {
                                app.Data.FilterDetails[0].Name
                            }
                        </div>
                    </div>
                    <div className="Img">
                        <div className="ImgTag" style={{backgroundImage: `url(${app.Data.FilterDetails[0].Img})`}}></div>
                    </div>
                    <div className="Preview">
                        <Link href={app.Data.FilterDetails[0].Link} target='_blank' className="Item">
                            <i class="fa-solid fa-globe"></i>&nbsp;Link Preview
                        </Link>
                    </div>
                    <h2><i class="fa-solid fa-wrench"></i>&nbsp;Develope By :</h2>
                    <div className="Language">
                        {
                            ((app.Data.FilterDetails[0].Devby) ? app.Data.FilterDetails[0].Devby.map((__data, i) => {
                                return (
                                    <>
                                        <div className="Item">
                                            {__data}
                                        </div>
                                    </>
                                )
                            }) : null)
                        }
                    </div>
                </div>
            </> : null)
        }
    </>
    )
}

export default Details