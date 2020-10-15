import React, {useState, useEffect} from "react"
import axios from "axios"
import "./DaftarBuah.css"

const DaftarBuah2 = () => {

    const[jumlahBuah, setJumlahBuah] = useState(null)
    const[inputName, setInputName] = useState("")
    const[inputHarga, setInputHarga] = useState()
    const[inputBerat, setInputBerat] = useState()
    const[selectedId, setSelectedId] = useState(0)
    const[statusForm, setStatusForm] = useState("create")

    useEffect( () => {
        if(jumlahBuah === null){
            axios.get('http://backendexample.sanbercloud.com/api/fruits')
            .then(res =>{
                setJumlahBuah(res.data.map(el => {return {id: el.id, nama: el.name, harga: el.price, berat: el.weight}} ))
            })
        }
    },[jumlahBuah])

 
  const handleDelete = (event) => {
    let ID_FRUIT= parseInt(event.target.value)
    let newJumlahBuah = jumlahBuah.filter(el => el.id != ID_FRUIT)

    axios.delete('http://backendexample.sanbercloud.com/api/fruits/${ID_FRUIT}')
    .then(res => {
        console.log(res)
    })

    setJumlahBuah([...newJumlahBuah])
    
  }
  
  const handleEdit = (event) => {
    let ID_FRUIT = parseInt(event.target.value)
    let buah = jumlahBuah.find(x => x.id === ID_FRUIT)
    
    setInputName(buah.nama)
    setInputHarga(buah.harga)
    setInputBerat(buah.berat)
    setSelectedId(ID_FRUIT)
    setStatusForm("edit")
    
  }

  const handleChange = (event) => {
    setInputName(event.target.value)
    setInputHarga(event.target.value)
    setInputBerat(event.target.value)
  }

  const handleSubmit = (event) => {
    // menahan submit
    event.preventDefault()

    let name = inputName
    let price = inputHarga
    let weight = inputBerat

    if (name.replace(/\s/g,'') !== ""){
      if(statusForm === "create"){
        axios.post('http://backendexample.sanbercloud.com/api/fruits', {name, price, weight})
        .then(res => {
            setJumlahBuah([...jumlahBuah, {id: res.data.id, nama: name, harga: price, berat: weight }])
        })
        }else if(statusForm === "edit"){
            axios.put('http://backendexample.sanbercloud.com/api/fruits/${selectedId}', {name, price, weight})
            .then(res => {
                let dataBuah = jumlahBuah.find(el=> el.id === selectedId)
                dataBuah.nama = name
                dataBuah.harga = price
                dataBuah.berat = weight
                setJumlahBuah([...jumlahBuah])
            })
        }

        setStatusForm("create")
        setSelectedId(0)
        setInputName("")
        setInputHarga()
        setInputBerat()
    }

  }

    return(
        <>
        <h1>Daftar Harga Buah</h1>
        <table>
            <thead>
            <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
                <th>Aksi</th>
            </tr>
            </thead>
            <tbody>
                {
                jumlahBuah !== null && jumlahBuah.map((item, index)=>{
                    return(                    
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.nama}</td>
                        <td>{item.harga}</td>
                        <td>{item.berat/1000} kg</td>
                        <td>
                        <button onClick={handleEdit} value={item.id}>Edit</button>
                        &nbsp;
                        <button onClick={handleDelete} value={item.id}>Delete</button>
                        </td>
                    </tr>
                    )
                })
                }
            </tbody>
        </table>
      
        <h1>Form Daftar Harga Buah</h1>
        <div style={{width: "50%", margin: "0 auto", display: "block"}}>
            <div style={{border: "1px solid #aaa", padding: "20px"}}>
            <form onSubmit={handleSubmit}>
                <label style={{float: "left"}}>
                Nama:
                </label>
                <input style={{float: "right"}} type="text" required name="name" value={inputName} onChange={handleChange}/>
                <br/>
                <br/>
                <label style={{float: "left"}}>
                Harga:
                </label>
                <input style={{float: "right"}} type="text" required name="harga" value={inputHarga} onChange={handleChange}/>
                <br/>
                <br/>
                <label style={{float: "left"}}>
                Berat (dalam gram):
                </label>
                <input style={{float: "right"}} type="number" required name="berat" value={inputBerat} onChange={handleChange}/>
                <br/>
                <br/>
                <div style={{width: "100%", paddingBottom: "20px"}}>
                <button style={{ float: "right"}}>submit</button>
                </div>
            </form>
            </div>
        </div>
        </>
    )

}

export default DaftarBuah2
