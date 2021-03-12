import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Input, AutoComplete } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import "./topHeader.css";

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

const Complete = () => {
  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    console.log('onSelect', value);
  };

  return (
    <div className="searchInput">
    <AutoComplete
    className="searchInput"
      dropdownMatchSelectWidth={252}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search style={{width:"100%"}} size="large" placeholder="Search"  />
    </AutoComplete>
    </div>
  );
};

export default Complete;