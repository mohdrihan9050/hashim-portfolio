import './Service.css'
import BrushRoundedIcon from '@mui/icons-material/BrushRounded';
import SignalCellularAltRoundedIcon from '@mui/icons-material/SignalCellularAltRounded';
function Service(){
    return( 
        <div className='container mt-5 mb-5' id="services">
        <h2 className='text-center text-violet display-6'><span className='text-gray'>My</span> Services</h2>
            <div className='row gy-5'>
                <div className='col-lg-4 col-md-6 col-sm-12 col-12 ' data-aos="flip-up">
                    <div className='service-wrapper shadow p-3'>
                        <span className='icon fw-bold m-3' style={{fontSize:'32px'}}>&lt;/&gt;</span>
                        <h2 className='text-violet' >Web Development</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae omnis dicta quia necessitatibus eos lorem ,ipsum sit amet  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, modi. Eos ab incidunt corporis quod alias. Odit porro, dignissimos quis nisi exercitationem, aliquid nihil consectetur iure cumque corporis natus voluptatibus.</p>
                        <button className='btn'>Read More</button>
                    </div>
                </div>

                <div  className='col-lg-4 col-md-6 col-sm-12 col-12' data-aos="flip-up">
                     <div className='service-wrapper shadow p-3'>
                        <BrushRoundedIcon className='icon m-3'/>
                        <h2 className='text-violet' >Graphic Design</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae omnis dicta quia necessitatibus eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex voluptatum reiciendis laboriosam atque rem laborum eveniet, illum similique? Deserunt nam facilis omnis autem libero? Ipsa consectetur ullam recusandae nihil. </p>
                        <button className='btn'>Read More</button>
                     </div>
                </div>
                <div  className='col-lg-4 col-md-6 col-sm-12 col-12 ' data-aos="flip-up">
                   <div className='service-wrapper shadow sp-3'>
                        <SignalCellularAltRoundedIcon className='icon m-3'/>
                        <h2 className='text-violet'>Digital Marketing</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae omnis dicta quia necessitatibus eos! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dignissimos numquam consequatur, voluptatibus omnis ipsam sunt rerum aliquid laborum facilis voluptatem quo quam cumque consequuntur aspernatur, magnam ratione odio tempore. </p> 
                        <button className='btn'>Read More</button>
                     </div>
                </div>
                </div>
            </div>
    )
}
export default Service;