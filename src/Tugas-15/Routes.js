import React from "react";
import { Switch, Link, Route} from "react-router-dom";

import FormBuah from '../Tugas-9/FormBuah.js'
import DaftarBuah10 from '../Tugas-10/DaftarBuah10.js'
import ItemBuah from '../Tugas-10/ItemBuah.js'
import Timer from '../Tugas-11/Timer.js'
import DaftarBuah12 from '../Tugas-12/DaftarBuah12.js'
import DaftarBuah13 from '../Tugas-13/DaftarBuah13.js'
import Buah from "../Tugas-14/Buah.js"

const Routes = () =>{
    return(
        <>
        <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
        </head>
    
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                <Link to="/tugas-9" class="nav-link">Tugas 9</Link>
                </li>
                <li class="nav-item active">
                <Link to="/tugas-10" class="nav-link">Tugas 10</Link>
                </li>
                <li class="nav-item active">
                <Link to="/tugas-11" class="nav-link">Tugas 11</Link>
                </li>
                <li class="nav-item active">
                <Link to="/tugas-12" class="nav-link">Tugas 12</Link>
                </li>
                <li class="nav-item active">
                <Link to="/tugas-13" class="nav-link">Tugas 13</Link>
                </li>
                <li class="nav-item active">
                <Link to="/tugas-14" class="nav-link">Tugas 14</Link>
                </li>
            </ul>
          </div>
        </nav>
    
        
        <Switch>

          <Route path="/tugas-9">
            <FormBuah />
          </Route>

          <Route path="/tugas-10">
            <DaftarBuah10 />
            <ItemBuah />
          </ Route>
    
          <Route path="/tugas-11" component={Timer}/>
          
          <Route path="/tugas-12">
            <DaftarBuah12 />
          </Route>

          <Route path="/tugas-13">
            <DaftarBuah13 />
          </Route>

          <Route path="/tugas-14">
            <Buah />
          </Route>
        </Switch>
      </>
  
    );
};

export default Routes;