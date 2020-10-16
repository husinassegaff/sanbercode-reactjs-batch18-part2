import React, { useState, createContext } from "react";


export const BuahContext = createContext();

export const BuahProvider = (props) => {
  const [daftarBuah, setDaftarBuah] = useState({
    lists: null,
    selectedId: 0,
    statusForm: "create"
  });

  return (
    <BuahContext.Provider value={[daftarBuah, setDaftarBuah]}>
      {props.children}
    </BuahContext.Provider>
  );
};


export default BuahProvider