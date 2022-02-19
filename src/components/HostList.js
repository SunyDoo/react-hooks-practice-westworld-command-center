import React from "react";
import { Card } from "semantic-ui-react";
import Host from './Host'

function HostList({ hosts, displayedHostId, onDisplayHost }) {

    return (
    <Card.Group itemsPerRow={6}>{
      hosts.map( host => {
        return (
          <Host 
            key={host.id} 
            host={host}
            displayedHostId={displayedHostId} 
            onDisplayHost={onDisplayHost}
          />
        )
      })
    }</Card.Group>
  );
}

export default HostList;
