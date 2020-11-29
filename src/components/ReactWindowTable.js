import React from 'react';
import faker from 'faker';
import { FixedSizeList as List } from 'react-window';

const DATA_ROWS_COUNT = 10000;

const ReactWindowTable = () => {
  const data = new Array(DATA_ROWS_COUNT)
    .fill()
    .map(() => ({
      uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
    }));

  return (
    <div className="table_container">
      <List
        width={600}
        height={800}
        itemCount={data.length}
        itemSize={30}
        className="react_window__table"
      >
        {({ index, key, style }) => (
          <div key={key} style={style} className="react_window__row">
            <div>{index}</div>
            <div>{data[index].name}</div>
            <div>{data[index].email}</div>
          </div>
        )}
      </List>
    </div>
  );
};

export default ReactWindowTable;
