import { makeSearchInput } from "../../../shared/input/index.js";
import css from "./search_box.module.css";

export const makeSearchBox = (srcURL) => {
  const searchBox = document.createElement("div");
  const searchLogo = document.createElement("img");
  searchLogo.src = srcURL;
  searchLogo.className = css.img;
  searchBox.className = css.root;
  searchBox.appendChild(searchLogo);
  searchBox.appendChild(makeSearchInput());
  return searchBox;
};
