import React from 'react';
import { chunk } from 'lodash';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

import '../../App.css';

export const Reimplement = () => {
    let str = '75,82,73,70,89,81,69,94,87,72,90,63,79,76,75,79,81,77,60,70,69,79,64,77,82,66,79,66,77,79,76,74,82,77' +
        ',83,68,79,75,68,79,66,67,71,82,74,78,77,73,81,80,74,66,65,65,85,75,70,82,75,72,69,85,74,58,75,82,70,78,83,79' +
        ',82,64,80,78,77,63,74,85,87,73,83,77,64,75,68,76,80,81,70,74,73,72,66,71,77,77,83,75,73,80,76,69,73,66,70,77' +
        ',77,72,79,79,74,63,59,64,81,72,84,78,58,74,78,93,76,89,70,79,69,77,83,74,69,76,77,78,61,65,73,80,68,79,64,81' +
        ',70,81,78,87,76,81,68,79,72,78,78,73,89,73,68,76,82,71,81,85,75,79,79,74,75,74,86,80,68,75,71,82,78,69,81,69' +
        ',79,82,78,62,66,69,78,80,86,90,87,73,71,67,70,75,69,75,74,76,79,74';

    const data2_1 = [
        {
            name: '[58...62]',
            frequency: 5,
        },
        {
            name: '[62...66]',
            frequency: 12,
        },
        {
            name: '[66...70]',
            frequency: 26,
        },
        {
            name: '[70...74]',
            frequency: 30,
        },
        {
            name: '[74...78]',
            frequency: 45,
        },
        {
            name: '[78...82]',
            frequency: 46,
        },
        {
            name: '[82..86]',
            frequency: 20,
        },
        {
            name: '[86..90]',
            frequency: 9,
        },
        {
            name: '[90..94]',
            frequency: 4,
        },
    ];

    const numberArr = str.split(',').map(item => Number(item));
    const sortedArray = numberArr.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    });

    const splittedArr = chunk(sortedArray, 20);

    console.log(sortedArray);

    const renderContent = () => {
        return <div className='section'>
            {splittedArr.map((section) => (

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

    const data2_2 = [
        {
            name: '[59...62]',
            frequency: 4,
        },
        {
            name: '[62...65]',
            frequency: 9,
        },
        {
            name: '[65...68]',
            frequency: 12,
        },
        {
            name: '[68...71]',
            frequency: 26,
        },
        {
            name: '[71...74]',
            frequency: 22,
        },
        {
            name: '[74...77]',
            frequency: 35,
        },
        {
            name: '[77...80]',
            frequency: 42,
        },
        {
            name: '[80...83]',
            frequency: 27,
        },
        {
            name: '[83...86]',
            frequency: 10,
        },
        {
            name: '[86...89]',
            frequency: 6,
        },
        {
            name: '[89...92]',
            frequency: 7,
        },
    ];

    const data2_3 = [
        {
            name: '[57...60]',
            frequency: 3,
        },
        {
            name: '[60...63]',
            frequency: 3,
        },
        {
            name: '[63...66]',
            frequency: 11,
        },
        {
            name: '[66...69]',
            frequency: 16,
        },
        {
            name: '[69...72]',
            frequency: 24,
        },
        {
            name: '[72...75]',
            frequency: 29,
        },
        {
            name: '[75...78]',
            frequency: 35,
        },
        {
            name: '[78...81]',
            frequency: 36,
        },
        {
            name: '[81...84]',
            frequency: 25,
        },
        {
            name: '[84...87]',
            frequency: 7,
        },
        {
            name: '[87...90]',
            frequency: 7,
        },
        {
            name: '[90...93]',
            frequency: 2,
        },
        {
            name: '[93...92]',
            frequency: 2,
        }
    ];

    return (
        <>
            <h1>1. Варіаційний ряд</h1>
            {renderContent()}
            <h1>2.1 Гістограма частот</h1>
            <h2>k = 9, R = 94 - 58 = 36, W = 36/9 = 4</h2>
            <BarChart
                width={1200}
                height={300}
                data={data2_1}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barSize={20}
            >
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="frequency" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
            <h1>Емпірична функція розподілу</h1>
            <div> [58...62] - 5/200 = 0.025</div>
            <div> [62...66] - 12/200 = 0.06</div>
            <div> [66...70] - 26/200 = 0.13</div>
            <div> [70...74] - 30/200 = 0.15</div>
            <div> [74...78] - 45/200 = 0.225</div>
            <div> [78...82] - 46/200 = 0.23</div>
            <div> [82...86] - 20/200 = 0.1</div>
            <div> [86...90] - 9/200 = 0.045</div>
            <div> [90...94] - 4/200 = 0.02</div>
            <br />
            <br />
            <h1>2.2 Гістограма частот</h1>
            <h2>k = 11, R = 92 - 59 = 33, W = 33/11 = 3</h2>
            <BarChart
                width={1200}
                height={300}
                data={data2_2}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barSize={20}
            >
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="frequency" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
            <h1>Емпірична функція розподілу</h1>
            <div> [59...62] - 4/200 = 0.025</div>
            <div> [62...65] - 9/200 = 0.045</div>
            <div> [65...68] - 12/200 = 0.06</div>
            <div> [68...71] - 26/200 = 0.13</div>
            <div> [71...74] - 22/200 = 0.11</div>
            <div> [74...77] - 35/200 = 0.175</div>
            <div> [77...80] - 42/200 = 0.21</div>
            <div> [80...83] - 27/200 = 0.135</div>
            <div> [83...86] - 10/200 = 0.05</div>
            <div> [86...89] - 6/200 = 0.03</div>
            <div> [89...92] - 7/200 = 0.035</div>
            <br />
            <br />
            <h1>2.3 Гістограма частот</h1>
            <h2>k = 13, R = 96 - 57 = 39, W = 39/13 = 3</h2>
            <BarChart
                width={1200}
                height={300}
                data={data2_3}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barSize={20}
            >
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="frequency" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
            <h1>Емпірична функція розподілу</h1>
            <div> [57...60] - 3/200 = 0.015</div>
            <div> [60...63] - 3/200 = 0.015</div>
            <div> [63...66] - 11/200 = 0.055</div>
            <div> [66...69] - 16/200 = 0.08</div>
            <div> [69...72] - 24/200 = 0.12</div>
            <div> [72...75] - 29/200 = 0.145</div>
            <div> [75...78] - 35/200 = 0.175</div>
            <div> [78...81] - 36/200 = 0.18</div>
            <div> [81...84] - 25/200 = 0.125</div>
            <div> [84...87] - 7/200 = 0.035</div>
            <div> [87...90] - 7/200 = 0.035</div>
            <div> [90...93] - 2/200 = 0.01</div>
            <div> [93...96] - 2/200 = 0.01</div>
            <br />
            <br />
            <br />
            <br />
            Для кожної нової групи значення країв вибірки редагувались для отрмимання цілих даних побудови діаграм
            висновок: при збільшені інтервалів групування інформативність гістограми збільшується
        </>
    );
}
