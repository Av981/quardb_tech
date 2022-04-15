import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Loading from "./tvmaze/loading";
import TvmazeUsers from "./tvmaze/tvmazeUsers";
import TvmazeMovie from "./tvmaze/tvmazemovie";
import ErrorPage from "./ErrorPage";
import Book from "./tvmaze/Book";

const UseEffectAPI = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      setLoading(false);
      setUsers(await response.json());
    } catch (error) {
      setLoading(false);
      console.log("my error is " + error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
    <Routes>
      <Route path='/' element={<TvmazeUsers users={users}/>}/>
      <Route path='/movie/:showid' element={<TvmazeMovie users={users}/>} />
      <Route path='/book_ticket/:showid' element={<Book users={users}/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </>
  );
};

export default UseEffectAPI;
