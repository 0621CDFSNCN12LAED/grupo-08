import React from 'react';
import './Home.css';
import TableRow from './TableRow';

let tableFemale = [
    {
        Title: 'XS 34/36',
        altura: '158-163',
        Pecho: '82-84',
        Cintura: "60-65",
        Cadera: "84-88",
        Pierna: "77"
    },
    {
        Title: 'S 38/40',
        altura: '163-168',
        Pecho: '84-88',
        Cintura: "65-70",
        Cadera: "88-92",
        Pierna: "78"
    }, 
    {
        Title: 'M 42/44',
        altura: '168-173',
        Pecho: '88-92',
        Cintura: "70-75",
        Cadera: "92-96",
        Pierna: "79"
    },  
    {
        Title: 'L 46/48',
        altura: '173-178',
        Pecho: '92-96',
        Cintura: "75-80",
        Cadera: "96-100",
        Pierna: "80"
    },  
    {
        Title: 'XL 50/52',
        altura: '178-183',
        Pecho: '96-100',
        Cintura: "80-85",
        Cadera: "100-104",
        Pierna: "81"
    },   
]

let tableMale = [
    {
        Title: 'XS 34/36',
        altura: "165-169",
        Pecho: "82-89",
        Cintura: "66-71",
        Cadera: "85-90",
        Pierna: "81"
    },
    {
        Title: 'S 38/40',
        altura: "170-174",
        Pecho: "90-97",
        Cintura: "73-79",
        Cadera: "91-96",
        Pierna: "82"
    }, 
    {
        Title: 'M 42/44',
        altura: "175-179",
        Pecho: "98-105",
        Cintura: "80-85",
        Cadera: "97-102",
        Pierna: "83"
    },  
    {
        Title: 'L 46/48',
        altura: "180-184",
        Pecho: "106-113",
        Cintura: "86-93",
        Cadera: "103-108",
        Pierna: "84"
    },  
    {
        Title: 'XL 50/52',
        altura: "185-189",
        Pecho: "114-121",
        Cintura: "93-99",
        Cadera: "109-114",
        Pierna: "85"
    },   
]

function TableHome() {
  return (
    <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                <h3>Talles Femeninos</h3>
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Talles</th>
                                <th>Altura (Cm)</th>
                                <th>Pecho (Cm)</th>
                                <th>Cintura (Cm)</th>
                                <th>Cadera (Cm)</th>
                                <th>Pierna (Cm)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableFemale.map( ( row , i) => {
                                return <TableRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                <h3>Talles Masculinos</h3>
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Talles</th>
                                <th>Altura (Cm)</th>
                                <th>Pecho (Cm)</th>
                                <th>Cintura (Cm)</th>
                                <th>Cadera (Cm)</th>
                                <th>Pierna (Cm)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableMale.map( ( row , i) => {
                                return <TableRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  );
}

export default TableHome;