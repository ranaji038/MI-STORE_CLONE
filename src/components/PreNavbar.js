import React from "react";
import "../styles/PreNavbar.css";

const cartIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
    <path d="M5.875 18.333q-.708 0-1.208-.5t-.5-1.208q0-.708.5-1.208t1.208-.5q.708 0 1.208.5t.5 1.208q0 .708-.5 1.208t-1.208.5Zm8.271 0q-.708 0-1.208-.5t-.5-1.208q0-.708.5-1.208t1.208-.5q.708 0 1.208.5t.5 1.208q0 .708-.5 1.208t-1.208.5ZM5.229 5.062l1.938 4.084h5.791l2.23-4.084Zm-.833-1.75H16.75q.542 0 .75.438.208.438-.021.854l-3 5.396q-.229.417-.625.656-.396.24-.875.24H6.812l-.854 1.562h9.938v1.75H5.854q-.937 0-1.437-.843-.5-.844-.042-1.677l1.083-2L2.5 3.417H.833v-1.75h2.771Zm2.771 5.834L5.229 5.062h9.959l-2.23 4.084Z" />
  </svg>
);

const PreNavbar = () => {
  return (
    <div className="preNav">
      <div>
        <a href="https://www.mi.com/in/">MI INDIA</a>
        <span>|</span>
        <a href="https://in.event.mi.com/in/install-mi-store">
          GET MI STORE APP
        </a>
        <span>|</span>
        <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">
          ONLINE HELP
        </a>
        <span>|</span>
        <a href="https://www.mi.com/in/service/authorized_stores/">
          RETAIL STORE ⮟{" "}
        </a>
      </div>
      <div>
        <a href="https://store.mi.com/in/site/login">SIGN IN</a>
        <span>|</span>
        <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">
          SIGN UP
        </a>
        <span>|</span>
        <a href="https://store.mi.com/in/cart">{cartIcon} CART (0)</a>
      </div>
    </div>
  );
};

export default PreNavbar;
