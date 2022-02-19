import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'
import { Log } from "../services/Log";


function Headquarters({ areas, hosts, displayedHostId, onDisplayHost, onToggleAll, onUpdateHost }) {
  const [logs, setLogs] = useState([])

  const logGenerator = {
    warn: Log.warn,
    notify: Log.notify,
    error: Log.error
  }
  

  const decommisionedHosts = hosts.filter(host => {
    return host.active === false
  })

  function handleSetLogs({type, msg}){
    setLogs([...logs, logGenerator[type](msg) ])
  }
  
  

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>{
        <ColdStorage 
          hosts={decommisionedHosts}
          displayedHostId={displayedHostId} 
          onDisplayHost={onDisplayHost}/>
      }</Grid.Column>
      <Grid.Column width={5}>
        <Details
         hosts={hosts} 
         displayedHostId={displayedHostId} 
         areas={areas} 
         onUpdateHost={onUpdateHost}
         onSetLogs={handleSetLogs} 
        />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel 
          onToggleAll={onToggleAll}
          logs={logs}
          onSetLogs={handleSetLogs}
        />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
