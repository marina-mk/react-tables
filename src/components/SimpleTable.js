import React from "react";
import faker from "faker";

const DATA_ROWS_COUNT = 20000;

const data = new Array(DATA_ROWS_COUNT)
  .fill()
  .map(() => ({
    uuid: faker.random.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
  }));

const SimpleTable = () => (
  <div className="table_container">
    <table>
      <thead>
        <tr>
          <th>index</th>
          <th>name</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {data.map(((item, index) => (
          <tr key={item.uuid}>
            <td>{index}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>
        )))}
      </tbody>
    </table>
  </div>
);

export default SimpleTable;
