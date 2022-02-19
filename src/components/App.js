import React, {useState, useEffect} from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap";
import Headquarters from "./Headquarters"

function App() {

  const [hosts, setHosts] = useState([])
  const [areas, setAreas] = useState([])
  const [displayedHostId, setDisplayedHost] = useState()
 

  useEffect( () => {
    fetch("http://localhost:3001/hosts")
      .then( response => response.json() )
      .then( data => setHosts(data) )

  }, [])

  useEffect( () => {
    fetch("http://localhost:3001/areas")
    .then( response => response.json() )
    .then( data => setAreas(data) )
  }, [])

  function handleDisplayHost(host){
    setDisplayedHost(host)
  }

  function handleUpdateHost(updatedHost){
    const updatedHostArray = hosts.map( host => {
      if (host.id !== updatedHost.id) return host
      return updatedHost
    })
    setHosts(updatedHostArray)
  }

  function handleToggleAll(state){
    const updatedHosts = hosts.map( host => {
      return {...host, active: state}
    })
    setHosts(updatedHosts)
  }


  return (
    <Segment id="app">
       <WestworldMap areas={areas} hosts={hosts} displayedHostId={displayedHostId} onDisplayHost={handleDisplayHost} />
      <Headquarters 
        areas={areas} 
        hosts={hosts}
        displayedHostId={displayedHostId} 
        onDisplayHost={handleDisplayHost}
        onToggleAll={handleToggleAll}
        onUpdateHost={handleUpdateHost} 
      />
    </Segment>
  );
}

export default App;
