import React from "react";
import { useLocation } from "react-router";
import Create from "../components/create";

import List from "../components/retrieve";
import Update from "../components/update";

export default function Home({ match }) {
  const location = useLocation();
  if (match) {
    const id = match.params.id;
    console.log(id);
  }

  return (
    <div>
      <List />
      <Create />
    </div>
  );
}
