// async function getResponse() {
//   let response = await fetch(
//     "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
//   );
//   let content = await response.json();
//   content = content.splice(0, 3);
//   let list = document.querySelector(".posts");
//   let key;
//   for (key in content) {
//     list.innerHTML += `
//     <div>
//     <h3> ${content[key].name}</h3>
//     <p> ${content[key].price}</p>
//     </div>
//       `;
//     console.log(content[key].name);
//   }
// }

// getResponse();
