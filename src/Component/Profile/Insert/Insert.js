import React, { Component } from 'react';
import './Insert.scss'
import sendimage from "../../../assets/sendimage.jpg"
class Insert extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div className="insert">
            <div className="insert-before ">
                <form>
                    {/* <div className="insert-before-class">Class: <input type="text"/></div> */}
                    <div class="dropdown">
                        <div class="dropbtn">Class</div>
                        <div class="dropdown-content">
                            <div>CS-B CN</div>
                            <div name="cb-b-cd">CS-B CD</div>
                            <div>CS-B CG</div>
                        </div>
                    </div>
                    <div className="insert-before-image">
                        <input type="file"></input>
                    </div>
                    <div className='insert-before-button'>
                        <button>Submit</button>
                    </div>
                </form>
                <div className="insert-before-display">
                    <img className='insert-image'src={sendimage} alt="sendimage"/>
                    <div className="insert-final"><button>Final Submit</button></div>
                </div>
            </div>
            {/* <div className="insert-after">
                <h4>After Submission</h4>
            <div className="insert-after-row-head">
                <div className="insert-after-row-head-rollno">Roll.No</div>
                <div className="insert-after-row-head-name">Name</div>
                <div className="insert-after-row-head-class">Class</div>
                <div className="insert-after-row-head-ab/p">Absent/Present</div>
            </div>
            <div className="insert-after-row-child"></div>
            </div> */}
        </div>  );
    }
}
 
export default Insert;