import AboutImg from '../../img/haz3.png'

function Intro(){
    return( 
        <div className='container-fluid my-5' id="about">
            <h4 className='display-5 text-center '>About</h4>
           <div className='row m-0' >
            <div className='col-lg-4 col-md-6 col-sm-12 col-12' >
                <img src={AboutImg} className="img-fluid "/>
                </div>
                <div className='col-lg-8 col-md-6 col-sm-12 col-12' >
                    <p className='mt-5 pt-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, officia. At ratione nulla saepe, fuga laboriosam possimus sint. Corrupti quasi error ab quam nemo aut nobis consequuntur eveniet deleniti velit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, officia. At ratione nulla saepe, fuga laboriosam possimus sint. Corrupti quasi error ab quam nemo aut nobis consequuntur eveniet deleniti velit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, officia. At ratione nulla saepe, fuga laboriosam possimus sint. Corrupti quasi error ab quam nemo aut nobis consequuntur eveniet deleniti velit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, officia. At ratione nulla saepe, fuga laboriosam possimus sint. Corrupti quasi error ab quam nemo aut nobis consequuntur eveniet deleniti velit?

                    </p>
                </div>
             </div>  
            </div>
    )
}
export default Intro;