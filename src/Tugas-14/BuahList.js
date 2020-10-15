import React, {useContext} from "react"
import {BuahContext} from "./BuahContext"

const BuahList = () =>{
    const [buah] = useContext(BuahContext)

    return(
        <ul>
            {buah.map(el=>{
                return <li>id: {el.id} name: {el.name} {el.price} {el.weight}</li>
            })

            }
        </ul>
    )
}

export default BuahList