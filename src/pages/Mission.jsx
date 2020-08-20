import React from 'react'
import pic from '../../src/images/about.jpg'

const Mission = () => {
    return (
        <>
        
      
        <div className="container mb-5">
            <div> <h2>About Us</h2></div>
            <div className="row mb-4">
                <div className="col col-sm-8">
                    <img src={pic} alt= "group pic" className="group_img"/>
                    </div>
                <div className="col col-sm-4 text-white">
                <p  >Wakanda Sports Klub is a sports organsation founded by a group of like-minded individuals to help combat depression. Emmanuel Mukumu who is the presient of WSK has pondered on how to make Umeå an attractive place for immigrants. As a student who moved to Sweden from Cameroon about 13 years ago, He felt the romance of isolation characterised by the dark Umeå winter.<br/><br/> He observed that many immigrants suffered from depression because they felt isolated and lack simple means to express themselves. With this in mind, he met Ojong Roland Ojong(The coach of WSk) in one of ASCAMINU's(Association of Cameroonians in Umeå) gatherings. He pitched his idea of starting weekly football trainings amongs Cameroonians to him which was greatly welcomed by the sportsman.The following week, the trainings started and the number kept on increasing.Over the years, it became very inclusive and welcomed immigrants from different nationalities. WSK is home to immigrants from more than 13 nationalities .<br/><br/>
                In addition to that, the group has expanded beyond football trainings to basketball trainings, personal training sections and so on.   
        </p>
        </div>
        </div>
            <div> <h2>Our Vision</h2></div>
            <div className="row  ml-4 mb-2">
            <div className="col col-lg-6">
            <span><i className="fa fa-2x fa-angle-double-right mr-2"></i></span><span>Promote Intergration of immigrants through Sports     
             </span>
             </div>
             <div className="col col-lg-6">
             <span><i className="fa  fa-2x  fa-angle-double-right mr-2"></i></span>
             <span>Combat Depression amongst Immigrants</span>
             </div>
             </div>
             <div className="row ml-4 mb-2">
            <div className="col col-lg-6">
            <span><i className="fa  fa-2x  fa-angle-double-right mr-2"></i></span><span>Promote equality through the intergration of both Men and women in to WSK  
             </span>
             </div>
             <div className="col col-lg-6">
             <span><i className="fa  fa-2x fa-angle-double-right mr-2"></i></span>
             <span>Fight against Racial prejudice by admittin people of all races into WSK</span>
             </div>
             </div>
             <div className="row ml-4 mb-2">
                 <div className="col col-lg-6">
                 <span><i className="fa  fa-2x  fa-angle-double-right mr-2"></i></span><span>Sensitize our kids on the importance of Physical Exercise    
                 </span>
                 </div>
                 <div className="col col-lg-6">
                 <span><i className="fa  fa-2x  fa-angle-double-right mr-2"></i></span><span>Sensitize our kids on the importance of Physical Exercise    
                 </span>
                 </div>
             </div>
                 
            </div>
        
       
       
        
            
        </>
    )
}

export default Mission
