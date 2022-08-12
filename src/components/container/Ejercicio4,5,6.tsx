import React, { Component, PropsWithChildren, useEffect, useState } from 'react'



const Clock = () => {
    const [datos, setDatos] = useState({
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    })
    useEffect(() => {
        const timerId =setInterval (tick, 1000
        );
        return () => clearInterval(timerId);

    }, [])

    const tick = () => {
        setDatos((prevState) => {
            let edad = prevState.edad +1;
            return {
                ...prevState,
                fecha: new Date(),
                edad
            }
            });
    }

      return (
         <div>
         <h2>
         Hora Actual:
         {datos.fecha.toLocaleTimeString()}
         </h2>
         <h3>{datos.nombre} {datos.apellidos}</h3>
         <h1>Edad: {datos.edad}</h1>
         </div>
      )
}
export default Clock;