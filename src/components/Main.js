import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'

class Main extends Component {

  render() {
    return (
      <div className="container-fluid mt-5 text-center">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '1024px' }}>
            <div className="content">
              <p>&nbsp;</p>
              <h1>Main Page</h1>
              <p>&nbsp;</p>
              <table className="table-sm table-bordered text-monospace" style={{ width: '1000px', maxHeight: '450px'}}>
              </table>
            </div>
          </main>
        </div>
      </div>
    );
  }
  
}
var toInsert = document.createElement("div");
toInsert.innerHTML = "By Gunal";
toInsert.style.position = "absolute";
toInsert.style.bottom = "0px";
toInsert.style.textAlign = "right";
toInsert.style.width = "100%";
document.body.appendChild(toInsert);
export default Main;