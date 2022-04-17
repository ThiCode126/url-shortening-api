import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { getShortLink } from "../utils/api";

const Shorten = () => {
  const [link, setLink] = useState("");
  const [allLinkData, setAllLinkData] = useState([]);
  const [isErrorLink, setIsErrorLink] = useState(false);
  const [lastCopied, setLastCopied] = useState(null);

  const ShortenCard = ({ item, id }) => {
    return (
      <div className="shorten-card">
        <div className="card-header">{item.originalLink}</div>
        <div className="card-body">
          <a href={item.shortenLink} target="_blank" rel="noopener noreferrer">
            {item.shortenLink}
          </a>
        </div>
        <div className="card-footer">
          <CopyToClipboard
            text={item.shortenLink}
            onCopy={() => setLastCopied(id)}
          >
            <button className={`${lastCopied === id ? "copied" : "copy"}`}>
              {`${lastCopied === id ? "Copied!" : "Copy"}`}
            </button>
          </CopyToClipboard>
        </div>
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (link === "") {
      setIsErrorLink(true);
      return;
    } else {
      setIsErrorLink(false);
    }

    const data = await getShortLink(link);
    if (data.ok === true) {
      const { result } = data;
      const { original_link, full_short_link } = result;
      let newData = [...allLinkData];
      let newLink = {};
      newLink.originalLink = original_link;
      newLink.shortenLink = full_short_link;
      newData.push(newLink);
      console.log(newData);
      setAllLinkData(newData);
    } else {
      setIsErrorLink(true);
      return;
    }
  };
  return (
    <section id="shorten">
      <div className="cw">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className={`link ${isErrorLink === true ? "error" : ""}`}
              placeholder="Shorten a link here..."
            />
            {isErrorLink === true && (
              <p className="error-link">Please add a link</p>
            )}
          </div>
          <button type="submit" className="shorten">
            Shorten It!
          </button>
        </form>
        {allLinkData.length > 0 && (
          <div className="display-links">
            {allLinkData.map((item, k) => (
              <ShortenCard key={k} item={item} id={k} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Shorten;
