import React from "react";
import { Link } from "react-router-dom";
const index = () => {
  return (
    <>
    <style>{'body { background-color: #ffffff ; }'}</style>
    <div className="admin_banner">
    </div>
      {/* <h2 className="admin_head">Welcome to Admin panel</h2> */}
      <label className="click_here">click here to view</label><span></span><Link className="st_list_link" id="std_list" to="/students">List of Students</Link>
   {/* <a  href="/add_dept" >add Department</a> */}

   <p className="para">
   <span></span><span></span><span></span><span></span><span></span><span></span> Placement is an essential step in electronic design automation — the portion of the physical design flow that assigns exact locations for various circuit components within the chip's core area. An inferior placement assignment will not only affect the chip's performance but might also make it non-manufacturable by producing excessive wire-length, which is beyond available routing resources. Consequently, a placer must perform the assignment while optimizing a number of objectives to ensure that a circuit meets its performance demands. Together, the placement and routing steps of IC design are known as place and route.
<br/>
<span></span><span></span><span></span><span></span><span></span><span></span>A placer takes a given synthesized circuit netlist together with a technology library and produces a valid placement layout. The layout is optimized according to the aforementioned objectives and ready for cell resizing and buffering — a step essential for timing and signal integrity satisfaction. Clock-tree synthesis and Routing follow, completing the physical design process. In many cases, parts of, or the entire, physical design flow are iterated a number of times until design closure is achieved.      </p>

    </>
  );
};

export default index;