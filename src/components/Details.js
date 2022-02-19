import React from "react";
import { Segment, Image } from "semantic-ui-react";
import * as Images from "../services/Images";
import HostInfo from "./HostInfo";

function Details({ hosts, areas, displayedHostId, onUpdateHost, onSetLogs }) {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  return (
    <Segment id="details" className="HQComps">
      {
        displayedHostId ? 
          <HostInfo 
            hosts={hosts} 
            displayedHostId={displayedHostId} 
            areas={areas} 
            onUpdateHost={onUpdateHost}
            onSetLogs={onSetLogs}
          /> : 
          <Image size="medium" src={Images.westworldLogo} />
      }
    </Segment>
  );
}

export default Details;
