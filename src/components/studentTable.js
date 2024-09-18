import React from "react";

const StudentTable = ({ students }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Registration Number</th>
          <th>Name</th>
          {Array.from({ length: 60 }, (_, i) => (
            <th key={i}>Test {i + 1}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.registrationNumber}>
            <td>{student.registrationNumber}</td>
            <td>{student.name}</td>
            {Array.from({ length: 60 }, (_, i) => (
              <td key={i}>{student.marks[`test${i + 1}`]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
