import React, { useEffect } from "react";

import Container from "./Container";

function Page(props) {
  useEffect(() => {
    document.title = `${props.title}| ComplexApp`;
    window.scroll(0, 0);
  }, []);

  return <Container width={props.width}>{props.children}</Container>;
}

export default Page;
