import React from "react";
import { FaConfluence } from "react-icons/fa";
import { FaFighterJet } from "react-icons/fa";



const Mission = () => {
  return (
    <>
      <div className="container-fluid mb-5 team about_us_img" style={{ marginTop: "200px" }}>
        <div>
          {" "}
          <h1 className="text-center mb-3">About Us</h1>
        </div>
        <div className="row mb-4 about_us ">
          
          </div>
          <div className="row">
          <div className="col offset-2 col-sm-12 col-md-8 text-dark font-weight-bold">
            <p>
              Wakanda Sports Klub is a sports organsation founded by a group of
              like-minded individuals to help combat depression amongst immigrants. Emmanuel Mukumu
              who is the presient of WSK  pondered on how to make Umeå an
              attractive place for immigrants. As a student who moved to Sweden
              from Cameroon about 13 years ago, He felt the romance of isolation
              caused by the dark Umeå winter. He recounted how he almost suffered from depression himself and how sports helped him to challenge the status quo
              <br />
              <br /> He observed that many immigrants suffered from depression
              because they felt isolated and lack simple means to express
              themselves. With this in mind, he met Ojong Roland Ojong(The coach
              of WSk) in one of ASCAMINU's(Association of Cameroonians in Umeå)
              gatherings. He pitched his idea of starting weekly football
              trainings amongs Cameroonians to him which was greatly welcomed by
              the sportsman.The following week, the trainings started and the
              number kept on increasing.Over the years, it became very inclusive
              and welcomed immigrants from different nationalities. WSK is home
              to immigrants from more than 13 nationalities .<br />
              <br />
              In addition to that, the group has expanded beyond football
              trainings to basketball trainings, organised personal training sections for adults and kids and
              much more.

              At WSk,we respect our norms and values.
            </p>
          </div>

         
         
        </div>

        <div
          className="text-center container my-5 text-white"
          style={{ backgroundColor: "grey", fontSize: "1.6rem", width: "100%" }}
        ><h1>  Our Vision</h1>
        
        </div>

        <div className="row row-cols-sm-1 row-cols-lg-2 ml-4 mb-2">
          <div className="col  vision_1">
            <i
              className="fa fa-2x fa-angle-double-right mr-2"
              style={{ color: "pink" }}
            ></i>
            <span>Promote Intergration of immigrants through Sports</span>
          </div>
          <div className="vision_2">
            <i
              className="fa fa-2x fa-fire-extinguisher mr-2"
              style={{ color: "pink" }}
            ></i>
            <span>Combat Depression amongst Immigrants</span>
          </div>
        </div>
        <div className="row row-cols-sm-1 row-cols-lg-2 ml-4 mb-2 ">
          <div className="col  vision_3">
            <FaConfluence
              style={{ color: "pink", marginRight: "14px", fontSize: "2rem" }}
            />
            <span>
              Promote equality through the intergration of both Men and women in
              to WSK
            </span>
          </div>
          <div className="col  vision_4">
            <FaFighterJet
              style={{
                color: "pink",
                marginRight: "14px",
                fontSize: "2rem",
                color: "pink",
              }}
            />
            <span>
              Fight against Racial prejudice by admitting people of all races
              into WSK
            </span>
          </div>
        </div>
        <div className="row row-cols-sm-1 row-cols-lg-2 ml-4 mb-2 vision_5">
          <div className="col ">
            <i
              className="fa fa-2x fa-book-reader mr-2 "
              style={{ color: "pink" }}
            ></i>
            <span> <i
              className="fa fa-2x fa-angle-double-right mr-2"
              style={{ color: "pink" }}
            ></i>
              Sensitize our kids on the importance of Physical Exercise
            </span>
          </div>
          <div className="col vision_6 ">
            <i
              className="fa  fa-2x  fa-angle-double-right mr-2 "
              style={{ color: "pink" }}
            ></i>
            <span>
              Provide a plaatform where immigrant with great football and basketball talents can shine and market themselves
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
