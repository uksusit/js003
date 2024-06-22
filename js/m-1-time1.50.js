
const stones = [{
    name: 'Смарагд',
    price: 1300,
    quantity: 4 
    },
    {
        name: 'Діамант',
        price: 2700,
        quantity: 3
    },
    {
        name: 'Сапфір',
        price: 400,
        quantity: 7
    },
    {
        name: 'Щебінь',
        price: 200,
        quantity: 2
    },
];
 
function calcTotalPrice(stones, stoneName); {
    let result = 0;
    for (const stone of stones) {
        console.log(stone);
        if (stone.name === stoneName) {
            result stone.price * stone.quantity
        }
    }
    return result;
};

console.log(calcTotalPrice(stones, stoneName));
