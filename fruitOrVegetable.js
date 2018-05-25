function fruitOrVegetable(input) {

    if (input === "banana" || input === "kiwi" || input === "apple" || input === "lemon" ||
    input === "peach" || input === "grapes" || input === "cherry") {
        console.log("fruit")
    }else if (input === "tomato" || input === "onion" || input === "pepper" || input === "garlic" ||
    input === "cucumber" || input === "parsley") {
        console.log("vegetable")
    }else {
        console.log("unknown")
    }
}