import React from "react";
import { Link } from "react-router-dom";

const index = () => {


  return (
    <>
    <div className="user_banner">
        
    </div>
    <div>
      {/* <h2 className="admin_head">Welcome to User panel</h2> */}
      <label className="click_here">click here to view</label><span></span><Link className="st_list_link" id="std_list" to="/Schedule">Schedule</Link>
      <p className="para">
      <span></span><span></span><span></span><span></span><span></span><span></span>Training is teaching, or developing in oneself or others, any skills and knowledge or fitness that relate to specific useful competencies. Training has specific goals of improving one's capability, capacity, productivity and performance. It forms the core of apprenticeships and provides the backbone of content at institutes of technology (also known as technical colleges or polytechnics). In addition to the basic training required for a trade, occupation or profession, training may continue beyond initial competence to maintain, upgrade and update skills throughout working life.
       <br/><span></span><span></span><span></span><span></span><span></span><span></span>People within some professions and occupations may refer to this sort of training as professional development. Training also refers to the development of physical fitness related to a specific competence, such as sport, martial arts, military applications and some other occupations.
      </p>
          
    </div>

</>
  );
};

export default index;
