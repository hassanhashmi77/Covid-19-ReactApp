import React, { useState } from 'react';








export const picker = function optionBox(data) {
    const [opData, setopData] = useState({});

    const title = data.title;
    setopData(title);
    return (picker);




}
function manipulateData(data) {
    let eachItem;
    for (eachItem in data.countryitems[0]) {
        const m = data.countryitems[0][eachItem];
        optionBox(m);

    }
}

const apiResponce = fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        manipulateData(data);
    });
