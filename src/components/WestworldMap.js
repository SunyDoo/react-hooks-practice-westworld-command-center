import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area"

function WestworldMap({ areas, hosts, onDisplayHost, displayedHostId }) {


  return <Segment id="map">{
    areas.map( area => {
      return (
        <Area 
          key={area.id} 
          area={area} 
          hosts={hosts}
          displayedHostId={displayedHostId}
          onDisplayHost={onDisplayHost} 
        /> 
      )
    })
  }</Segment>;
}

export default WestworldMap;
