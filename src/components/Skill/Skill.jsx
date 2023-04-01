import './Skill.css'
function Skill(){
    return( 
        <div className='container' id="skills">
            <h4 className='display-6 text-center'>Skills</h4>
            <div className="row my-5">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <h4 className="text-center">Title 1</h4>
                        <div className="skill-bar">
                        <p>Subtitle1</p>
                        <div className="progress">
                            <div className="progress-bar skill-progress-bar" style={{width:'40%',height:'20px'}}></div>
                        </div>
                    </div>
                    <div className="skill-bar">
                        <p>Subtitle1</p>
                        <div className="progress">
                            <div className="progress-bar skill-progress-bar" style={{width:'70%',height:'20px'}}></div>
                        </div>
                    </div>
                    <div className="skill-bar">
                        <p>Subtitle2</p>
                        <div className="progress">
                            <div className="progress-bar skill-progress-bar" style={{width:'90%',height:'20px'}}></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <h4 className="text-center">Title 2</h4>
                <div className="skill-bar">
                        <p>Subtitle1</p>
                        <div className="progress">
                            <div className="progress-bar skill-progress-bar" style={{width:'80%',height:'20px'}}></div>
                        </div>
                    </div>
                    <div className="skill-bar">
                        <p>Subtitle2</p>
                        <div className="progress">
                            <div className="progress-bar skill-progress-bar" style={{width:'30%',height:'20px'}}></div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="row my-5">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <h4 className="text-center">Title 3</h4>
                        <div className="skill-bar">
                        <p>Subtitle1</p>
                        <div className="progress">
                            <div className="progress-bar skill-progress-bar" style={{width:'60%',height:'20px'}}></div>
                        </div>
                    </div>
                    <div className="skill-bar">
                        <p>Subtitle2</p>
                        <div className="progress">
                            <div className="progress-bar skill-progress-bar" style={{width:'100%',height:'20px'}}></div>
                        </div>
                    </div>
                    <div className="skill-bar">
                        <p>Subtitle2</p>
                        <div className="progress">
                            <div className="progress-bar skill-progress-bar" style={{width:'50%',height:'20px'}}></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <h4 className="text-center">Title 4</h4>
                <div className="skill-bar">
                        <p>Subtitle1</p>
                        <div className="progress">
                            <div className="progress-bar skill-progress-bar" style={{width:'90%',height:'20px'}}></div>
                        </div>
                    </div>
                    <div className="skill-bar">
                        <p>Subtitle2</p>
                        <div className="progress">
                            <div className="progress-bar skill-progress-bar" style={{width:'40%',height:'20px'}}></div>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
    )
}
export default Skill;