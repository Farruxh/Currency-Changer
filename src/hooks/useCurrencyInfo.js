// import { useState, useEffect } from "react"

// function useCurrencyInfo(curr) {
//     const [data, setData] = useState(null)
//     useEffect( () => {
//         fetch(`https://api.exchangerate-api.com/v4/latest/${curr}`)
//         .then((res) => {res.json()})
//         .then((jsonData) => {console.log(jsonData);setData(jsonData)
//     })

//     } , [curr])
//     return data
// }
// export default useCurrencyInfo

import { useState, useEffect } from "react";

function useCurrencyInfo(curr) {
    const [data, setData] = useState({}); // Default to empty object

    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${curr}`)
            .then((res) => {
                return res.json();
            })
            .then((jsonData) => {
                setData(jsonData); // Update state\
            })
    }, [curr]);
    return data;
}

export default useCurrencyInfo;

