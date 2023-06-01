import React from 'react';
import { chunk } from 'lodash';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import '../../App.css';

export const Second = () => {
    let str = '75,82,73,70,89,81,69,94,87,72,90,63,79,76,75,79,81,77,60,70,69,79,64,77,82,66,79,66,77,79,76,74,82,77' +
        ',83,68,79,75,68,79,66,67,71,82,74,78,77,73,81,80,74,66,65,65,85,75,70,82,75,72,69,85,74,58,75,82,70,78,83,79' +
        ',82,64,80,78,77,63,74,85,87,73,83,77,64,75,68,76,80,81,70,74,73,72,66,71,77,77,83,75,73,80,76,69,73,66,70,77' +
        ',77,72,79,79,74,63,59,64,81,72,84,78,58,74,78,93,76,89,70,79,69,77,83,74,69,76,77,78,61,65,73,80,68,79,64,81' +
        ',70,81,78,87,76,81,68,79,72,78,78,73,89,73,68,76,82,71,81,85,75,79,79,74,75,74,86,80,68,75,71,82,78,69,81,69' +
        ',79,82,78,62,66,69,78,80,86,90,87,73,71,67,70,75,69,75,74,76,79,74';

    const numberArr = str.split(',').map(item => Number(item));
    const splittedArr = chunk(numberArr, 20);

    const renderContent = (arg) => {
        return <div className='section'>
            {arg.map((section) => (

                <>
                    <div>
                        {section.map((cell, index) =>
                            <div>
                                <h3>{cell}</h3>
                            </div>)}
                    </div>
                </>
            ))}
        </div>
    }

    const dispersion = [
        {
            name: '10',
            dispersion: Math.pow(68.36, 0.5),
        },
        {
            name: '15',
            dispersion: Math.pow(71.95, 0.5),
        },
        {
            name: '20',
            dispersion: Math.pow(73.19, 0.5),
        },
        {
            name: '25',
            dispersion: Math.pow(68.8, 0.5),
        },
        {
            name: '30',
            dispersion: Math.pow(64.8, 0.5),
        },
        {
            name: '35',
            dispersion: Math.pow(58.05, 0.5),
        },
        {
            name: '40',
            dispersion: Math.pow(54.57, 0.5),
        },
        {
            name: '45',
            dispersion: Math.pow(53.79, 0.5),
        },
        {
            name: '50',
            dispersion: Math.pow(49.64, 0.5),
        },
        {
            name: '60',
            dispersion: Math.pow(49.54, 0.5),
        },
        {
            name: '80',
            dispersion: Math.pow(51.92, 0.5),
        },
        {
            name: '100',
            dispersion: Math.pow(46.97, 0.5),
        },
        {
            name: '120',
            dispersion: Math.pow(48.69, 0.5),
        },
        {
            name: '140',
            dispersion: Math.pow(49.74, 0.5),
        },
        {
            name: '160',
            dispersion: Math.pow(48.64, 0.5),
        },
        {
            name: '180',
            dispersion: Math.pow(46.54, 0.5),
        },
        {
            name: '200',
            dispersion: Math.pow(46.81, 0.5),
        },
    ];

    const math = [
        {
            name: '10',
            a: 79.2,
        },
        {
            name: '15',
            a: 78.33,
        },
        {
            name: '20',
            a: 77.1,
        },
        {
            name: '25',
            a: 76.52,
        },
        {
            name: '30',
            a: 76,
        },
        {
            name: '35',
            a: 76.34,
        },
        {
            name: '40',
            a: 76,
        },
        {
            name: '45',
            a: 75.57,
        },
        {
            name: '50',
            a: 75.8,
        },
        {
            name: '60',
            a: 75.31,
        },
        {
            name: '80',
            a: 75.43,
        },
        {
            name: '100',
            a: 75.3,
        },
        {
            name: '120',
            a: 74.79,
        },
        {
            name: '140',
            a: 74.92,
        },
        {
            name: '160',
            a: 75.08,
        },
        {
            name: '180',
            a: 75.31,
        },
        {
            name: '200',
            a: 75.27,
        },
    ];

    const a = numberArr.reduce((accum, item) => accum + item, 0) / numberArr.length;
    const kata = numberArr.map(item => Math.pow(item - a, 2));
    const f = Math.pow(kata.reduce((accum, item) => accum + item, 0) / kata.length, 0.5);


    return (
        <>
            <h1>Вибірка</h1>
            {renderContent(splittedArr)}

            <h1>
                1.1 Згідно теорії(для методу моментів і вибірки більше 30) &alpha; дорівнює математичному сподіванню, а &sigma; дорівнює кореню квадратному з дисперісії
                <br />
                &alpha; = {a}
                <br />
                &sigma; = {f}
            </h1>

            <h1>
                1.2 Згідно теорії для точкової оцінки параметрів розподілу для нормально розподіленої величини
                формули для розрахунку є ідентичними з 1.1
            </h1>

            <h1>
                2. Оцінки ідентичні
            </h1>

            <h1>
                3.1 Середньоквадратичне відхилення
            </h1>
            <LineChart
                width={1200}
                height={300}
                data={dispersion}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line dataKey="dispersion" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>

            <h1>
                3.2 математичне очікування
            </h1>
            <LineChart
                width={1200}
                height={300}
                data={math}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line dataKey="a" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </>
    );
}

