import React, { Component } from 'react';
import './View.scss'
class View extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div className="view">
            <div class="dropdown">
                        <div class="dropbtn">Class</div>
                        <div class="dropdown-content">
                            <div>CS-B CN</div>
                            <div name="cb-b-cd">CS-B CD</div>
                            <div>CS-B CG</div>
                        </div>
                    </div>
            <div className="view-options">
                <li>Today's Attendence</li>
                <li>Total Attendence</li>
                <li>Select Date </li>
            </div>
            <div className="view-data">
                <div className="view-data-head">
                    <li>Name</li>
                    <li>Roll.No</li>
                    <li>Absent/Present</li>
                    <li>Description</li>
                    <li>Date</li>
                </div>
                <div className='view-data-body-ab'>
                    <li>Shivam Srivastava</li>
                    <li>1713210148</li>
                    <li className="ab">Absent</li>
                    <li>Organic</li>
                    <li>24/04/20</li>
                </div>
                <div className='view-data-body-p'>
                    <li>Vikas Kumar Ojha</li>
                    <li>1713210177</li>
                    <li className="p">Present</li>
                    <li>Organic</li>
                    <li>23/04/20</li>
                </div>
            </div>
        </div>  );
    }
}
 
export default View;