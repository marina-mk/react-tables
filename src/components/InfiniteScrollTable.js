import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import faker from 'faker';

const DATA_ROWS__BATCH_COUNT = 10;
const DATA_ROWS__MAX_COUNT = 1000;

const generateData = (count) => {
  const dataBatch = new Array(count)
    .fill()
    .map(() => ({
      uuid: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
    }));

    return dataBatch;
};

const handleScroll = (tableElement, data, setData) => {
  const scrollPosition = window.pageYOffset + window.innerHeight;
  const tableHeight = tableElement.clientHeight;

  if (tableHeight > scrollPosition && data.length < DATA_ROWS__MAX_COUNT) {
    const batchData = generateData(DATA_ROWS__BATCH_COUNT);
    const updatedData = [...data, ...batchData];
    setData(updatedData);
  }
};

const InfiniteScrollTable = () => {
  const [data, setData] = useState([]);
  const tableRef = useRef(null);

  useEffect(() => {
    const maxIterationCount = DATA_ROWS__MAX_COUNT / DATA_ROWS__BATCH_COUNT;

    for (let i = 0; i < maxIterationCount; i++) {
      const scrollPosition = window.pageYOffset + window.innerHeight;
      const tableHeight = tableRef.current.clientHeight;

      if (tableHeight < scrollPosition & data.length < DATA_ROWS__MAX_COUNT) {
        const batchData = generateData(DATA_ROWS__BATCH_COUNT);
        const initData = [...data, ...batchData];
        setData(initData);
      }
    }
  }, [data]);

  useLayoutEffect(() => {
    const handleScrollBound = handleScroll.bind(null, tableRef.current, data, setData);
    window.addEventListener('scroll', handleScrollBound);
    return () => { window.removeEventListener('scroll', handleScrollBound); };
  }, [data]);

  return (
    <div className="table_container">
      <table className="simple__table" ref={tableRef}>
        <thead>
          <tr>
            <th>index</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {data.map(((item, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          )))}
        </tbody>
      </table>
    </div>
  );
};

export default InfiniteScrollTable;
