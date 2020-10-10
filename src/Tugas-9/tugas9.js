import React from 'react';
import App from '../App';


class Tugas9 extends React.Component{
    render() {
        return (
        <>
            <div className="App"><center>
                <form style = {{border:"3px solid black", borderRadius: "20px", width:"400px", padding : "15px"}}>
        <h2>Form Pembelian Buah</h2>
        <br/>
        <content style =  {{display : "flex"}}>
          <label for = "nama">Nama Pelanggan</label>
          <input type = "name" name = "nama"/>
          <br/>  
        </content>

        <div style = {{display : "flex"}}>
          <label for = "Daftar"> Daftar Item </label>
          <div style = {{display : "flex", flexDirection : "column"}}>
            <div style = {{display : "flex"}}>
              <input type = "checkbox" name = "semangka"/>
              <label for = "semangka"> Semangka </label>
            </div>
            <div style = {{display : "flex"}}>
              <input type = "checkbox" name = "jeruk"/>
              <label for = "jeruk"> Jeruk </label>
            </div>
            <div style = {{display : "flex"}}>
              <input type = "checkbox" name = "anggur"/>
              <label for = "anggur"> Anggur </label>
            </div>
            <div style = {{display : "flex"}}>
              <input type = "checkbox" name = "nanas"/>
              <label for = "nanas"> Nanas </label>
            </div>
            <div style = {{display : "flex"}}>
              <input type = "checkbox" name = "salak"/>
              <label for = "salak"> Salak </label>
            </div>
            <div>
              <button>
                <a href="#" style={{display : "flex"}}>Kirim</a>
              </button>
            </div>
          </div>
        </div>
      </form>
      </center></div> </>
        )
    }
}

export default App;