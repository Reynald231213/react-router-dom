import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';
import { MDBAnimation } from "mdbreact";

class App extends React.Component{
  render(){
    return(
      <div>
        <link rel="stylesheet" type="text/css" href= 'App.css' /> 
      <nav class="navbar navbar-expand-lg navbar-dark bg-danger py-4">
  <a class="navbar-brand" href="/"><h1>SI COVID 19    |</h1></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon py-4"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav py-3">
      <a class="nav-item nav-link active" href="/dampak">PENCEGAHAN |<span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="/berita">UPDATE  |</a> 
      <a class="nav-item nav-link" href="/kontak">KONTAK  |</a>
      <a class="nav-item nav-link" href="/data">DATA</a>
    </div>
  </div>

</nav>
<i class="fas fa-exclamation-triangle"><marquee><style></style><h4>Beritanya Corona Update Dan Terpercaya</h4></marquee></i>
 <p><Utama /></p>
      </div>
    );
  }
}
export default App;