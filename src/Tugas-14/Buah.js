import React from "react"
import {BuahProvider} from "./BuahContext"
import BuahList from "./BuahList"
import BuahForm from "./BuahForm"
import "../Tugas-13/DaftarBuah.css"
 
const Buah = () =>{
  return(
    <BuahProvider>
      <BuahList/>
      <BuahForm/>
    </BuahProvider>
  )
}

export default Buah