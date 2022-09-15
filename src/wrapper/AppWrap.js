import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idname, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        AppWrap
      </div>
    );
  };

export default AppWrap;
