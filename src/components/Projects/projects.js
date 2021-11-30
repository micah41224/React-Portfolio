import './projects.css';
import weather from "../../assets/images/weatherdashboardtestsize2.png";
import workDay from "../../assets/images/workdayschedulertestsize2.png";
import quiz from "../../assets/images/codingquiztestsize.png";
import passwordGen from "../../assets/images/passwordgeneratortestsize.png";
import employeeT from "../../assets/images/employeetrackerss2.png";
import fitness from "../../assets/images/fitnesstrackerfinalSS.png";
import { FaGithub } from 'react-icons/fa';
import { BsGlobe2 } from 'react-icons/bs';


import React from 'react'
const projects = () => {
    return (


        // <div className="container">
        //     <h1 className="text-center" style={{paddingTop: "30%"}}>
        //         Projects
        //     </h1>

        // </div>


       <div className="container projCont">
    <div className="row">
        <div className="col-sm">
            <h1 className="mainHeader">Portfolio</h1>
            </div>
    <div className="row">
        <div className="col-sm cardPad">
            <div className="card-header curveHeader">
                <h3 className="card-title">Weather Dashboard</h3>
            </div>
            <div className="flex-item"><a href="https://micah41224.github.io/06-Server-Side-APIs-Weather-Dashboard/">
                <img src={weather} alt="Weather Dashboard SS" className="img-fluid"></img>
                </a>
            </div>
            <div className="card-footer text-center curveFooter">
                <a href="https://github.com/micah41224/06-Server-Side-APIs-Weather-Dashboard" target="_blank"><FaGithub className="icons"/></a>
                <a href="https://micah41224.github.io/06-Server-Side-APIs-Weather-Dashboard/" target="_blank"><BsGlobe2 className="icons"/></a>
            </div>
        </div>
        <div className="col-sm cardPad">
            <div className="card-header curveHeader">
                <h3 className="card-title">Work Day Scheduler</h3>
            </div>
        <div className="flex-item"><a href="https://micah41224.github.io/05-Third-Party-APIs-Work-Day-Scheduler/">
                <img src={workDay} alt="Code Refactor Homework"
                    className="img-fluid"></img>
            </a>
        </div>
        <div className="card-footer text-center curveFooter">
            <a href="https://github.com/micah41224/05-Third-Party-APIs-Work-Day-Scheduler" target="_blank"><FaGithub className="icons"/></a>
            <a href="https://micah41224.github.io/05-Third-Party-APIs-Work-Day-Scheduler/" target="_blank"><BsGlobe2 className="icons"/></a>
        </div>
        </div>
    </div>
    <div className="row">
        <div className="col-sm cardPad">
            <div className="card-header curveHeader">
            <h3 className="card-title">Coding Quiz</h3>
            </div>
        <div className="flex-item"><a href="https://micah41224.github.io/04-Web-APIs-Code-Quiz/">
                <img src={quiz} alt="Code Refactor Homework"
                    className="img-fluid"></img>
            </a>
        </div>
        <div className="card-footer text-center curveFooter">
            <a href="https://github.com/micah41224/04-Web-APIs-Code-Quiz" target="_blank"><FaGithub className="icons"/></a>
            <a href="https://micah41224.github.io/04-Web-APIs-Code-Quiz/" target="_blank"><BsGlobe2 className="icons"/></a>
        </div>
        </div>
        <div className="col-sm cardPad">
        <div className="card-header curveHeader">
            <h3 className="card-title">Password Generator</h3>
        </div>
        <div className="flex-item"><a href="https://micah41224.github.io/03-Javascript-Password-Generator/">
                <img src={passwordGen} alt="Code Refactor Homework"
                    className="img-fluid"></img>
            </a>
        </div>
        <div className="card-footer text-center curveFooter">
            <a href="https://github.com/micah41224/03-Javascript-Password-Generator" target="_blank"><FaGithub className="icons"/></a>
            <a href="https://micah41224.github.io/03-Javascript-Password-Generator/" target="_blank"><BsGlobe2 className="icons"/></a>
        </div>
        </div>
    </div>

        <div className="row">
        <div className="col-sm cardPad">
            <div className="card-header curveHeader">
            <h3 className="card-title">Employee Tracker</h3>
            </div>
        <div className="flex-item"><a href="https://drive.google.com/file/d/1HNrEw4MKIMI_48U4M1TSwx6EG3izyntN/view">
                <img src={employeeT} alt="Code Refactor Homework"
                    className="img-fluid"></img>
            </a>
        </div>
        <div className="card-footer text-center curveFooter">
            <a href="https://github.com/micah41224/12-SQL-Employee-Tracker" target="_blank"><FaGithub className="icons"/></a>
            <a href="https://drive.google.com/file/d/1HNrEw4MKIMI_48U4M1TSwx6EG3izyntN/view" target="_blank"><BsGlobe2 className="icons"/></a>
        </div>
        </div>
        <div className="col-sm cardPad">
        <div className="card-header curveHeader">
            <h3 className="card-title">Fitness Tracker</h3>
        </div>
        <div className="flex-item"><a href="https://mike-18-workout-tracker.herokuapp.com/">
                <img src={fitness} alt="Code Refactor Homework"
                    className="img-fluid"></img>
            </a>
        </div>
        <div className="card-footer text-center curveFooter">
            <a href="https://github.com/micah41224/18-Workout-Tracker" target="_blank"><FaGithub className="icons"/></a>
            <a href="https://mike-18-workout-tracker.herokuapp.com/" target="_blank"><BsGlobe2 className="icons"/></a>
        </div>
        </div>
    </div>
</div>
</div>
    );
}
export default projects;







// Test section:

// import React from 'react'
// const projects = () => {
//     return (


//         <div className="container">
//             <h1 className="text-center" style={{paddingTop: "30%"}}>
//                 Projects
//             </h1>

//         </div>

//   );
// }
// export default projects;





// Unnecessary code below?



// const navbar = () =>{
//     return(
// <div className="container">
//     <div className="row">
//         <div className="col-sm">
//             <h1>Projects</h1>
//             </div>
//     <div className="row">
//         <div className="col-sm">
//             <div className="card-header">
//                 <h3 className="card-title">Weather Dashboard</h3>
//             </div>
//             <div className="flex-item"><a href="https://micah41224.github.io/06-Server-Side-APIs-Weather-Dashboard/">
//                 <img src={weather} alt="Weather Dashboard SS" className="img-fluid"></img>
//                 </a>
//             </div>
//             <div className="card-footer text-center">
//                 <a href="https://github.com/micah41224/06-Server-Side-APIs-Weather-Dashboard" target="_blank"><i className="fa fa-github projIcon"></i></a>
//                 <a href="https://micah41224.github.io/06-Server-Side-APIs-Weather-Dashboard/" target="_blank"><i className="fa fa-globe projIcon" aria-hidden="true"></i></a>
//             </div>
//         </div>
//         <div className="col-sm">
//             <div className="card-header">
//                 <h3 className="card-title">Work Day Scheduler</h3>
//             </div>
//         <div className="flex-item"><a href="https://micah41224.github.io/05-Third-Party-APIs-Work-Day-Scheduler/">
//                 <img src={workDay} alt="Code Refactor Homework"
//                     className="img-fluid"></img>
//             </a>
//         </div>
//         <div className="card-footer text-center">
//             <a href="https://github.com/micah41224/05-Third-Party-APIs-Work-Day-Scheduler" target="_blank"><i
//                     className="fa fa-github projIcon"></i></a>
//             <a href="https://micah41224.github.io/05-Third-Party-APIs-Work-Day-Scheduler/" target="_blank"><i className="fa fa-globe projIcon"
//                     aria-hidden="true"></i></a>
//         </div>
//         </div>
//     </div>
//     <div className="row">
//         <div className="col-sm">
//             <div className="card-header">
//             <h3 className="card-title">Coding Quiz</h3>
//             </div>
//         <div className="flex-item"><a href="https://micah41224.github.io/04-Web-APIs-Code-Quiz/">
//                 <img src={quiz} alt="Code Refactor Homework"
//                     className="img-fluid"></img>
//             </a>
//         </div>
//         <div className="card-footer text-center">
//             <a href="https://github.com/micah41224/04-Web-APIs-Code-Quiz" target="_blank"><i
//                     className="fa fa-github projIcon"></i></a>
//             <a href="https://micah41224.github.io/04-Web-APIs-Code-Quiz/" target="_blank"><i className="fa fa-globe projIcon"
//                     aria-hidden="true"></i></a>
//         </div>
//         </div>
//         <div className="col-sm">
//         <div className="card-header">
//             <h3 className="card-title">Password Generator</h3>
//         </div>
//         <div className="flex-item"><a href="https://micah41224.github.io/03-Javascript-Password-Generator/">
//                 <img src={passwordGen} alt="Code Refactor Homework"
//                     className="img-fluid"></img>
//             </a>
//         </div>
//         <div className="card-footer text-center">
//             <a href="https://github.com/micah41224/03-Javascript-Password-Generator" target="_blank"><i
//                     className="fa fa-github projIcon"></i></a>
//             <a href="https://micah41224.github.io/03-Javascript-Password-Generator/" target="_blank"><i className="fa fa-globe projIcon"
//                     aria-hidden="true"></i></a>
//         </div>
//         </div>
//     </div>
// </div>
// </div>
//     );
// }





// export default navbar 