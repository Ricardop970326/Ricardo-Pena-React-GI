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

class BasicInfo extends Component {
  render() {
    const { people } = this.props;

    return (
      <div>
        {people.map((person, index) => (
          <div key={index}>
            <h1>Name: {person.name}</h1>
            <p>Number: {person.number}</p>
            <p>Date of Birth: {person.dateOfBirth}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BasicInfo;
