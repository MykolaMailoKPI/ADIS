import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import _ from 'lodash';

// could be splitted to 9
let str = '75,82,73,70,89,81,69,94,87,72,90,63,79,76,75,79,81,77,60,70,69,79,64,77,82,66,79,66,77,79,76,74,82,77' +
    ',83,68,79,75,68,79,66,67,71,82,74,78,77,73,81,80,74,66,65,65,85,75,70,82,75,72,69,85,74,58,75,82,70,78,83,79' +
    ',82,64,80,78,77,63,74,85,87,73,83,77,64,75,68,76,80,81,70,74,73,72,66,71,77,77,83,75,73,80,76,69,73,66,70,77' +
    ',77,72,79,79,74,63,59,64,81,72,84,78,58,74,78,93,76,89,70,79,69,77,83,74,69,76,77,78,61,65,73,80,68,79,64,81' +
    ',70,81,78,87,76,81,68,79,72,78,78,73,89,73,68,76,82,71,81,85,75,79,79,74,75,74,86,80,68,75,71,82,78,69,81,69' +
    ',79,82,78,62,66,69,78,80,86,90,87,73,71,67,70,75,69,75,74,76,79,74';

export const ADISFileReader = () => {
    const groupedArray = [[]];
    let counter = 0;
    const notDuplicate = (arr) => {
        let notDuplicatedArr = [];

        arr.forEach((item) => {
            if (!notDuplicatedArr.includes(item)) {
                notDuplicatedArr.push(item);
            }
        });

        return notDuplicatedArr;
    };

    const numbersArray = str.split(',').map((value) => Number(value));
    const sortedArray = numbersArray.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    });

    let xMax = sortedArray[sortedArray.length - 1];
    let xMin = sortedArray[0];
    let range = sortedArray[sortedArray.length - 1] - sortedArray[0];
    let itemsInGroup = range / 9;

    for (let i = sortedArray[0]; i <= sortedArray[sortedArray.length - 1]; i++ ) {
        groupedArray[counter].push(i);
        if (groupedArray[counter].length % (itemsInGroup + 1) === 0) {
            ++counter;
            groupedArray[counter] = [i];
        }
    }

    groupedArray.pop();

    const countFrequency = (arr, isShorter) => {
        let temp = [...arr];
        let amount = 0;

        if (isShorter) {
            temp.length = 4;
        }

        temp.forEach((ite, index) => {
            amount += numbersArray.filter((numArr) => numArr === ite).length;
        });

        return amount;
    };

    return (
        <>
            <Upload beforeUpload={file => {
                const reader = new FileReader();

                reader.onload = e => {
                    const data = e.target.result;
                    console.log('data: ', data);
                    const arrayData = data.split(',');
                    arrayData.pop();
                    const numbersArray = arrayData.map((value) => Number(value));

                    const sortedArray = numbersArray.sort((a, b) => {
                        if (a > b) {
                            return 1;
                        } else if (a < b) {
                            return -1;
                        } else {
                            return 0;
                        }
                    });

                    //console.log(numbersArray);
                    //console.log(notDuplicate(sortedArray));

                };
                reader.readAsText(file);
            }}>
            </Upload>
            <h1>1. Варіаційний ряд</h1>
            {
                _.chunk(sortedArray, 10)
                    .map((row, index) =>
                        <>
                            <div style={{ display: "flex", background: index % 2 !== 0 ? '#ff9999' : '#94b8b8'}}>
                                <div style={{ flex: '2' }}><h3>{index + 1}.</h3></div>
                                {row.map(rowItem => <div style={{ flex: '2' }}><h3>{rowItem},</h3></div>)}
                            </div>
                        </>
                    )
            }
            <h1>2. Інтервальний варіаційний ряд</h1>
            <p>1. для побудови варіаційного ряду розрахуємо
                розмах R = xMax - xMin = {xMax.toString()} - {xMin.toString()} = {xMax - xMin} </p>
            <p>2. Оскільки вибірка більше 100 то кількість класів буде в діапазоні від 9ти включно і до 15ти включно,
                то я виберу k = 9, оскільки розмах мого класу буде ділитися без остачі на 9</p>
            <p>3. Ширина класу h = R/k = {(xMax - xMin).toString()}/9 = {(xMax - xMin)/9} </p>
            <p>4. Встановлення границь класів і підрахунок частот</p>
            {[...groupedArray].map((group, index) => <div>{
                `${group[0]}...${group[group.length - 1]} - ${countFrequency(group, index !== (groupedArray.length - 1))}`
            }</div>)}
        </>
    );
};
