import React, { useState } from "react";
import Jumbotron from "../UI/Jumbotron";
import BlogRenderer from "./BlogRenderer";
import Search from "./Search";

const Content = (props) => {
  const [clickedBtn, setClickedBtn] = useState(false);
  const [findBlogKeyword, setFindBlogKeyword] = useState("");

  const searchDataHandler = (keyword) => {
    setFindBlogKeyword(keyword);
  };

  if (!clickedBtn) {
    return (
      <div>
        <Jumbotron>
          <div className='main-title'>
            <h1>Impulse Kft. Felvételi feladat (React)</h1>
            <button onClick={() => setClickedBtn(true)}>Bővebben</button>
          </div>
        </Jumbotron>
        <Search onSearch={searchDataHandler} />
        <BlogRenderer keyword={findBlogKeyword} />
      </div>
    );
  }

  return (
    <Jumbotron>
      <div className='main-title'>
        <h1>Impulse Kft. Felvételi feladat (React)</h1>
        <button onClick={() => setClickedBtn(false)}>Bezár</button>
      </div>
      <div className='jumbotron-content'>
        <p>
          <b>POST /api/posts:</b> Ide küldve hozhatunk létre posztot. Az
          endpointot védeni kell, ez lehet egy beégetett API kulcs, amelyet HTTP
          headerben adunk át. Használható összetettebb azonosítás is. Az id
          generálódik, a létrehozás dátuma az aktuális idővel töltődik ki.
        </p>
        <p>
          <b>GET /api/posts:</b> Visszaadja az összes posztot idő szerint
          csökkenő sorrendben.
        </p>
        <p>
          <b>GET /api/posts?keyword=&#123;keyword&#125;:</b> Azokat a posztokat
          adja vissza idő szerint csökkenő sorrendben, amelyek címében,
          tagjeiben vagy törzsében egész szóként szerepel a megadott keresési
          kulcsszó.
        </p>
      </div>
    </Jumbotron>
  );
};

export default Content;
