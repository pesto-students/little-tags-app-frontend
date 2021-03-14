import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Input, AutoComplete,Avatar,Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import "./topHeader.css";
import Fuse from 'fuse.js'

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

var searchResultsData;

async function getCategoryData() {
  if(typeof searchResultsData === "undefined"){
  const response = await fetch(
    "https://603db03a48171b0017b2d7b2.mockapi.io/search"
  );
  const body= await response.json();
  searchResultsData=body;
  }
    return searchResultsData;
  
}

function fuseSearch(list,pattern){
  const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    keys: [
      "category",
      "productTitle"
    ]
  };
  
  const fuse = new Fuse(list, options);
  
  
  return fuse.search(pattern)
}


async function getSearchResults(query,props){
    let toBeSearch=await getCategoryData();
    
    let searchres= fuseSearch(toBeSearch,query);
    console.log(searchres);
   let optionssearch= searchres.map((result,idx) => {
    
      if(typeof result.item.id === "undefined"){
        let imgsrc=`./assets/images/${result.item.category.toLowerCase()}.jpg`;
        return {
          value: `/category/${result.item.category.toLowerCase()}`,
          label: (
            <div
              style={{
                display: 'flex',
                justifyContent: 'left',
              }}
              onClick={()=>{props.history.push(`/category/${result.item.category.toLowerCase()}`)}}
            >
               <Space>
              <span><Avatar
          src={imgsrc}
          alt={result.item.category}
        /></span>
              <span style={{fontFamily:"Lato",fontSize:"15px",fontWeight:"bold",display:"block"}}>
               {result.item.category.toUpperCase()}
                
              </span>
              </Space>
            </div>
          ),
        }
      }

      return {
        value: `/detail/${result.item.category.toLowerCase()}/${result.item.id}`,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'left',
              alignItems:"center"
            }}
            onClick={()=>{props.history.push(
              `/detail/${result.item.category.toLowerCase()}/${result.item.id}`
            )}}
          >
            <Space>
            <span><Avatar
          src={result.item.imgsrc}
          alt={result.item.productTitle}
        /></span>
            <span>
              <div>
              <span style={{fontFamily:"Lato",fontSize:"15px",display:"block"}}>{result.item.productTitle}</span>
              <span style={{fontFamily:"Lato",fontSize:"9px",fontWeight:"bold",display:"block"}}>in {result.item.category.toUpperCase()}</span>
              </div>
              
            </span>
            </Space>
          </div>
        ),
      }
    });

    return optionssearch;
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
               // onClick={()=>{props.history.push('/cart')}}
                
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

const Complete = (props) => {
  const [options, setOptions] = useState([]);
 
  const handleSearch = async (value) => {
    setOptions(value ? await getSearchResults(value,props) : []);
  };

  const onSelect = (value) => {
    console.log('onSelect', value);
    props.history.push(value
    )
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