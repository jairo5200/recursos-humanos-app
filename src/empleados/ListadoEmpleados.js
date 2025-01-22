import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

export default function ListadoEmpleados() {
  
    const urlBase = "http://localhost:8080/rh-app/empleados/";

    const[empleados,setEmpleados] = useState([]);

    useEffect(() => {
        cargarEmpleados();
    },[]);

    const cargarEmpleados = async () => {
        const resultado = await axios.get(urlBase);
        console.log(resultado.data);
        setEmpleados(resultado.data);
    }

    return (
        <div className='container'>
            <div className="container text-center" style={{margin: "30px"}}>
                <h3>Sistema de Recursos Humanos</h3>
            </div>
            <table className="table table-striped table-hover align-middle">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Empleado</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Sueldo</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    //iteramos el arreglo de empleados
                    empleados.map((empleado, indice) => (
                        <tr key={indice}>
                        <th scope="row">{empleado.idEmpleado}</th>
                        <td>{empleado.nombre}</td>
                        <td>{empleado.departamento}</td>
                        <td><NumericFormat value={empleado.sueldo}
                            displayType={'text'}
                            thousandSeparator=','
                            prefix='$'
                            decimalScale={2}
                            fixedDecimalScale>
                        </NumericFormat>
                        </td>
                        <td><Link className='btn btn-warning btn-sm me-3' to={`/editar/${empleado.idEmpleado}`}>Editar</Link><button className='btn btn-danger btn-sm'>Eliminar</button></td>
                    </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    
  )
}

