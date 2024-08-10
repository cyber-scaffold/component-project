/* eslint-disable react/prop-types */
import React from "react";

import css from "./style.module.less";

export function Button(props: any) {
  const { children } = props;
  return (
    <div className={css.button}>
      {children}
    </div>
  )
};


Button.propTypes = {

};

Button.defaultProps = {

};