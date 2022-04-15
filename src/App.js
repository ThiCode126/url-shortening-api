import React, { useState } from 'react';
import Header from './components/header';
import { getShortLink } from './utils/api';

function App() {

  const [link, setLink] = useState("");
  const [allLinkData, setAllLinkData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (link === "") {
      window.alert("URL Vide. Merci de renseigner l'URL");
      return
    }
    const data = await getShortLink(link);
    if (data.ok === true) {
      const { result } = data
      const { original_link, full_short_link } = result
      let newData = [...allLinkData];
      let newLink = {}
      newLink.original_link = original_link
      newLink.full_short_link = full_short_link
      newData.push(newLink)
      console.log(newData)
      setAllLinkData(newData);
    } else {
      window.alert("URL non valide. Merci de renseigner une URL correcte");
      return
    }
  }

  /**
   * ? Structure
   * * Header (nav) + menu responsive
   * * Hero
   * * Form + display result
   * * Section "Advanced Statistics"
   * * Section "Boost"
   * * Header
   */


  return (
    <>
      <Header />

      <form onSubmit={(e) => handleSubmit(e)} >
        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} className="link" />
        <button type="submit">Ajouter</button>
      </form>
    </>
  );
}

export default App;
