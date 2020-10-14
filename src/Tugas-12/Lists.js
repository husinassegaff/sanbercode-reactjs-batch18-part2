import React, {Component} from "react"
import ItemBuah from '../Tugas-10/ItemBuah.js'

class Lists extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      dataHargaBuah :[
      {nama: "Semangka", harga: 10000, berat: 1000},
      {nama: "Anggur", harga: 40000, berat: 500},
      {nama: "Strawberry", harga: 30000, berat: 400},
      {nama: "Jeruk", harga: 30000, berat: 1000},
      {nama: "Mangga", harga: 30000, berat: 500}
      ],

      inputNama: "",
      inputHarga: "",
      inputBerat: "",
    };

    this.handleNama = this.handleNama.bind (this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event){
    event.preventDefault();
    this.setState({
      keranjang: [...this.state.keranjang, this.state.inputNama],
    });
    console.log(this.state.keranjang)
    console.log(event)
  }

  handleNama = (e) => {
    let nama = e.target.value;
    this.setState({
      inputNama: nama,
    });
  };

    render(){

      return(
        
        <>
         <h1 style={{textAlign : "center"}}> Daftar Harga Buah</h1>
        <table style={{border: "1px solid", width: "40%", margin: "0 auto"}}>
          <thead style={{background: "#aaa"}}>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th style = {{columns: 2}}>Aksi</th>
            </tr>
          </thead>
            <tbody style={{background: "coral"}}>
              {dataHargaBuah.map((el, index)=> {
                return (
                  <>
                    <ItemBuah item={el} key={index}/>
                    <td>Edit</td>
                  </>
                  )
                })}
            </tbody>
          </table>
        <div style = {{marginTop: "50px"}}>
          <form onSubmit = {this.handleSubmit}>
            <label>Nama Buah :</label>
            <br />
            <input 
            type = "text" 
            value = {this.state.inputNama}
            onChange = {this.handleNama}/>
            <br />

            <label>Harga Buah :</label>
            <br />
            <input 
            type = "text" 
            value = {this.state.inputHarga}
            onChange = {this.handleNama}/>
            <br />

            <label>Berat Buah :</label>
            <br />
            <input 
            type = "text" 
            value = {this.state.inputBerat}
            onChange = {this.handleNama}/>
            <br />
            <input type = "submit" value = "Submit" />
          </form>
        </div>
        </>
      )
    }
  }

  export default Lists