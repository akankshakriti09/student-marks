import React, { useState } from "react";
import SearchBar from "./components/searchBar";
import StudentTable from "./components/studentTable";
import studentsData from "./marks.json"; // Mocked data

const App = () => {
  const [filteredStudents, setFilteredStudents] = useState(studentsData);

  const handleSearch = (query) => {
    const results = studentsData.filter(
      (student) =>
        student.name.toLowerCase().includes(query.toLowerCase()) ||
        student.registrationNumber.includes(query)
    );
    setFilteredStudents(results);
  };

  return (
    <div>
      <h1>Student Marks</h1>
      <SearchBar onSearch={handleSearch} />
      <StudentTable students={filteredStudents} />
    </div>
  );
};

export default App;




























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
