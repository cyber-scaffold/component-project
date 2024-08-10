/* eslint-disable react/prop-types */
import React from "react";
import moment from "moment";
import { Button } from "@/Button";

import css from "./style.module.scss";

console.log("moment", moment());

export function Flex() {
  return (
    <div className={css.flex}>
      <Button></Button>
    </div>
  )
};


Flex.propTypes = {

};

Flex.defaultProps = {

};