import React from "react";
import data from "./Students.json";

const Tablo = () => {
  const stil = {
    color: "crimson",
    fontWeight: "bolder",
    backgroundColor: "green",
  };

  return (
    <div className="kursiyerler">
      <h1>Kursiyerler</h1>
      <table style={{ width: "400px" }}>
        <thead>
          <tr>
            <th>Isim</th>
            <th>Yas</th>
            <th>Kurs</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr
              key={index}
              style={
                index % 2 == 0 ? stil : { ...stil, backgroundColor: "gray" }
              }
            >
              <td>{student.isim}</td>
              <td>{student.yas}</td>
              <td>{student.kurs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablo;
