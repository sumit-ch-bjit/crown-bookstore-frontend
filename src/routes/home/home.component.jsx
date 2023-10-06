import { Outlet } from "react-router-dom";
import { useState } from "react";
import Directory from "../../components/directory/directory.component";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/books")
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .then((data) => setBooks(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Directory books={books} />
      <Outlet />
    </div>
  );
};

export default Home;
