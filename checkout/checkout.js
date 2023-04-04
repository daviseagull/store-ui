const discount = 10.00

let items = [
    {
        "unitPrice": 110.00,
        "currentPrice": 220.00,
        "quantity": 2
    },
    {
        "unitPrice": 55.00,
        "currentPrice": 110.00,
        "quantity": 2
    }
]

function calculateValues(itemIndex, operation) {
    let item = items[itemIndex]
    let itemTotalElement = document.getElementById(`product_${itemIndex}_total`)
    let itemQuantityElement = document.getElementById(`product_${itemIndex}_quantity`)
    let subTotalElement = document.getElementById(`sub_total`)
    let grandTotalElement = document.getElementById(`grand_total`)

    switch (operation) {
        case '+':
            item.quantity++;
            item.currentPrice += item.unitPrice
            break;

        case '-':
            if (item.quantity < 1)
                break;
            item.quantity--;
            item.currentPrice -= item.unitPrice

            break;

        default:
            console.log("Tá maluco?????");
            break;
    }

    let subTotal = items.reduce((previus, current) => { return previus + current.currentPrice }, 0)
    let total = subTotal === 0 ? 0 : subTotal - discount

    itemTotalElement.textContent = `R$ ${item.currentPrice.toFixed(2).replace('.', ',')}`
    itemQuantityElement.textContent = item.quantity
    subTotalElement.textContent = `R$ ${subTotal.toFixed(2).replace('.', ',')}`
    grandTotalElement.textContent = `R$ ${(total).toFixed(2).replace('.', ',')}`
}