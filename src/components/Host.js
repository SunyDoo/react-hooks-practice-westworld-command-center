import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ host, onDisplayHost, displayedHostId }) {
  /* NOTE: The className "host selected" renders a different style than simply "host". */
  function handleClick(){
    onDisplayHost(host.id)
  }

  return (
    <Card
      className={displayedHostId === host.id ? "host selected" : "host" }
      onClick={handleClick}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
