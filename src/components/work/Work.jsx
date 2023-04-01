import TestImg from '../../img/proj.png'
import './Work.css'
function Work(){
    return(
        <div className=" mb-3 py-5" id='work'>
            <div className='container'>
            <h2 className="text-center display-6" >Work</h2>
            <div className="row gy-5 m-0 ">
                <div className='col-lg-4 col-md-6 col-sm-12 col-12' data-aos="flip-up">
                    <div className='card shadow work-card text-dark'>
                    <img src={TestImg} className="card-img-top"/>
                        <div className='card-body'>
                            <h4 className='card-title'>Project title</h4>
                            <p className='card-text'>About ProjectAbout ProjectAbout Project</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 col-12' data-aos="flip-up">
                    <div className='card shadow work-card text-dark'>
                    <img src={TestImg} className="card-img-top"/>
                        <div className='card-body'>
                            <h4 className='card-title'>Project title</h4>
                            <p className='card-text'>About ProjectAbout ProjectAbout Project</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 col-12' data-aos="flip-up">
                    <div className='card shadow work-card text-dark'>
                    <img src={TestImg} className="card-img-top"/>
                        <div className='card-body'>
                            <h4 className='card-title'>Project title</h4>
                            <p className='card-text'>About ProjectAbout ProjectAbout Project</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row m-0 gy-5">
                <div className='col-lg-4 col-md-6 col-sm-12 col-12' data-aos="flip-up">
                    <div className='card shadow work-card text-dark'>
                    <img src={TestImg} className="card-img-top"/>
                        <div className='card-body'>
                            <h4 className='card-title'>Project title</h4>
                            <p className='card-text'>About ProjectAbout ProjectAbout Project</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 col-12' data-aos="flip-up">
                    <div className='card shadow work-card text-dark'>
                    <img src={TestImg} className="card-img-top"/>
                        <div className='card-body'>
                            <h4 className='card-title'>Project title</h4>
                            <p className='card-text'>About ProjectAbout ProjectAbout Project</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 col-12' data-aos="flip-up">
                    <div className='card shadow work-card text-dark'>
                    <img src={TestImg} className="card-img-top"/>
                        <div className='card-body'>
                            <h4 className='card-title'>Project title</h4>
                            <p className='card-text'>About ProjectAbout ProjectAbout Project</p>
                        </div>
                    </div>
                </div>
            </div>

            </div>
                
        </div>
    )
}
export default Work;