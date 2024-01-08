// 3.) MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’. (This challenge should not change the look of the page)


// import React, { Component } from 'react';

// class BasicInfo extends Component {
//   render() {
//     const { person } = this.props;

//     return (
//       <div>
//         <h1>Name: {person.name}</h1>
//         <p>Number: {person.number}</p>
//         <p>Date of Birth: {person.dateOfBirth}</p>
//       </div>
//     );
//   }
// }

// export default BasicInfo;



import React, { Component } from 'react';
import myImage from '../components/robot.png';

class BasicInfo extends Component {
  render() {
    const { people } = this.props;

    return (
      <div style={{display:"inline-flex", flexWrap:"wrap", padding:"100px", border:"solid 5px brown", backgroundColor:"wheat"}}>
        {people.map((person, index) => (
          <div key={index} style={{display:"flex", flexDirection:"flow", color:"brown",fontFamily:"Times", display:"block", margin:"200px", textAlign:"center" }}>
              <img src={myImage} alt="Person" className="person-image" style={{marginTop:"10px", paddingTop:"10px",width:"300px", height:"300px"}}/> 
            <h1 style={{ marginTop:"100px" }}>Name: {person.name}</h1>
            <h2 style={{ marginTop:"50px" }}>Number: {person.number}</h2>
            <h2>Date of Birth: {person.dateOfBirth}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default BasicInfo;
