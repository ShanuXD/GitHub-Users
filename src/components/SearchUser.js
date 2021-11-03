import React from "react";
import { useState } from "react";
import Card from "./Card";
const SearchUser = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSearchResults = async (input) => {
    const res = await fetch(`https://api.github.com/search/users?q=${input}`);
    const {items} = await res.json();
    if(items===undefined || items.length===0){
      setSearchResults([]);
    }else{
        setSearchResults(items);
    }
    setLoading(false);
      
    }

  const handelSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchSearchResults(search);
  };

  return (
    <>
      <form onSubmit={handelSearch}>
        <input
          type="text"
          placeholder="Search user"
          style={{ textAlign: "center" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
      </form>
      <div className="">
        {loading && <div>Loading...</div>}
        {searchResults.map((user, index) => (<Card key={index} userInfo={user}></Card>))}
      </div>
    </>
  );
};

export default SearchUser;
