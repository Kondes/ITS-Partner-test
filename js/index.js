const url = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=";
const posts = document.querySelector("#app .posts");

async function requestMakeupData(brand) {
    if (typeof brand !== "string")
        throw new Error("argument `brand` must be an string");
    let response = await fetch(url + brand);
    let products = await response.json();
    products
        .filter((product) => parseFloat(product.price) < 5)
        .forEach((product) => {
            let node = document.createElement("li");
            let nodeHeader = document.createElement("h3");
            nodeHeader.innerText = product.name;
            node.append(nodeHeader);
            let nodeText = document.createElement("p");
            nodeText.innerText = product.price;
            node.append(nodeText);
            posts.append(node);
        });
}

requestMakeupData("maybelline");
