import IntroImg from '../../img/haz2.png'
import './About.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
function About(){
    return(
        <div className="container-fluid">
        <div  className="row mt-5" >
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 pt-5">        
        <h3 className='text-gray mt-3' data-aos="fade-right">Hello, I am</h3>
        <h1 className='text-violet mt-3' data-aos="fade-left">
            Hashim Ali Zaidi 
        <img 
            src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
            className="hello-png ms-2 img-fluid"
            style={{width:'30px',height:'30px'}}
            />
            
            </h1>
        <h5 className='text-gray mt-3' data-aos="fade-up-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nesciunt libero recusandae, dignissimos itaque quod. Sint consectetur saepe enim officia eaque error, voluptatem harum voluptate cum quo veniam temporibus architecto?</h5>
        <div className='icons mt-3' data-aos="fade-right">
        <div className='icons-container'>
            <FacebookIcon className='icons'/>
        </div> 
        <div className='icons-container'>
            <TwitterIcon className='icons' />
        </div>
        <div className='icons-container'>
            <LinkedInIcon className='icons'/>
        </div>
        <div className='icons-container'>
            <GitHubIcon className='icons'/>
        </div>
        <div className='icons-container'>
        <InstagramIcon className='icons'/>
        </div>
        </div>
        <br/>
        <button className='btn mt-3 mb-4'>Download CV</button>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 right-side d-none d-lg-block">
            {/* <img src={IntroImg} className="img-fluid about-img d-none d-lg-block" data-aos="flip-up"/> */}
        </div>    
        </div>
        </div>
    )
}
export default About;