import { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Home() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("http://localhost:5001/item");
        const data = await response.json();
        console.log("Fetched data:", data);
        if (Array.isArray(data)) {
          setItems(data);
          setFilteredItems(data);
        } else {
          console.error("Expected an array but got:", data);
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    }

    fetchItems();
  }, []);

  useEffect(() => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    setFilteredItems(
      items.filter((item) =>
        item.name.toLowerCase().includes(lowerCaseSearch)
      )
    );
  }, [searchTerm, items]);

  return (
    <div className="home-container">
      <aside className="sidebar">
        <h3>{t("filter")}</h3>
        <button>{t("dietary")} ⌄</button>
        <button>{t("cultural")} ⌄</button>
        <button>{t("foodtype")} ⌄</button>
      </aside>

      <div className="content">
        <div className="search-bar">
          <input
            type="text"
            placeholder={t("searchBar")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn">{t("search")}</button>
        </div>

        <div className="grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div className="card" key={item.id}>
                <div className="image"></div>
                <img
                  src="https://blocks.astratic.com/img/general-img-square.png"
                  alt="Placeholder"
                  className="product-image"
                />
                <h4>{item.name}</h4>
                <Link to={`/details/${item.id}`}>
                  <button className="details-btn">{t("details")}</button>
                </Link>
                <button className="cart-btn">🛒 {t("addToCart")}</button>
              </div>
            ))
          ) : (
            <p>{t("noItemsFound")}</p>
          )}
        </div>
      </div>
    </div>
  );
}
