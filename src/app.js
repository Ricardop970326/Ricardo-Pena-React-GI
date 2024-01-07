// // Note:  Solutions should use class components. 
// // 1.) VERY EASY: Inside of your ‘App’ class ‘render’ method, return a div with your basic information for example name, number, date of birth and etc. This div should be hard-coded to prepare for the Medium Challenge.

// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Name: Ricardo Pena</h1>
//         <p>Number: (737) 318-3154</p>
//         <p>Date of Birth: March 1, 1997</p>
//         {/* */}
//       </div>
//     );
//   }
// }

// export default App;


////////////////////////////////


// 2.) EASY: Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set ‘this.state’ to an empty object inside of the ‘App’ class. Inside of ‘this.state’ create a ‘person’ property and set it to an empty object

// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {
//         name: 'Ricardo Pena',
//         number: '(737) 318-3154',
//         dateOfBirth:'March 1, 1997',
//       },
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Name: {this.state.person.name}</h1>
//         <p>Number: {this.state.person.number}</p>
//         <p>Date of Birth: {this.state.person.dateOfBirth}</p>
//         {/* Add more information as needed */}
//       </div>
//     );
//   }
// }

// export default App;


/////////////////////////////////////////////


// 3.) MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’. (This challenge should not change the look of the page)

// import React, { Component } from 'react';
// import BasicInfo from './components/basicInfo';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {
//         name: 'Ricardo Pena',
//         number: '(737) 318-3154',
//         dateOfBirth:'March 1, 1997',
//       },
//     };
//   }

//   render() {
//     return (
//       <div>
//         <BasicInfo person={this.state.person} />
//       </div>
//     );
//   }
// }

// export default App;


////////////////////////////////////////////


// 4.) HARD: Now that you have a basic react app to display one person’s worth of information, now modify the app to iterate over an array of people’s basic information, while still keeping the new list of contacts in the top-level of state. (Optional: add styling to space out each person’s info)

import React, { Component } from 'react';
import BasicInfo from './components/basicInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: 'Ricardo Pena',
          number: '(737) 318-3154',
          dateOfBirth: 'March 1, 1997',
        },

        {
          name: 'Ricardo Pena',
          number: '(737) 318-3154',
          dateOfBirth: 'March 1, 1997',
        },

        {
          name: 'Ricardo Pena',
          number: '(737) 318-3154',
          dateOfBirth: 'March 1, 1997',
        },

        {
          name: 'Ricardo Pena',
          number: '(737) 318-3154',
          dateOfBirth: 'March 1, 1997',
        },

      ],
    };
  }

  render() {
    return (
      <div>
        <BasicInfo people={this.state.people} />
      </div>
    );
  }
}

export default App;







///error code

// import React, { Component } from 'react';
// import BasicInfo from './components/basicInfo';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       people: [
//         {
//           name: 'Ricardo Pena',
//           number: '(737) 318-3154',
//           dateOfBirth: 'March 1, 1997',
//         },
  
//       ],
//     };
//   }

//   render() {
//     return (
//       <div>
//         {this.state.people.map((person, index) => (
//           <BasicInfo key={index} person={person} />
//         ))}
//       </div>
//     );
//   }
// }

// export default App;
