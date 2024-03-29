const container = document.getElementById("container");
const searchInput = document.getElementById("input");
const notFound = document.getElementById("notfound");

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  const categories = data.map((item) => item.category);
  console.log("Categories: ", categories);

  // memasukkan satu satu data kedalam website
  data.forEach((item) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("productCard");

    const imageElement = document.createElement("img");
    const titleElement = document.createElement("h3");
    const priceElement = document.createElement("h3");
    const buttonElement = document.createElement("button");

    imageElement.src = item.image;
    titleElement.textContent = item.title;
    priceElement.textContent = `$${item.price}`;
    buttonElement.textContent = "buy";

    buttonElement.addEventListener("click", function () {
      alert(`${item.title} seharga $${item.price} telah masuk ke keranjang`);
    });

    cardElement.append(imageElement, titleElement, priceElement, buttonElement);
    container.append(cardElement);
  });
}

getData("https://fakestoreapi.com/products");

// menu searching
searchInput.addEventListener("change", async () => {
  const searchValue = searchInput.value.toLowerCase();
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  const filteredData = data.filter((item) => {
    return item.title.toLowerCase().includes(searchValue);
  });

  container.innerHTML = "";
  notFound.innerHTML = "";

  if (filteredData.length === 0) {
    const cardElement1 = document.createElement("div");
    const imageNotFound = document.createElement("img");
    const textNotFound = document.createElement("h3");

    const filteredData = data.filter((item) => {
      return item.title.toLowerCase().includes(searchValue); // membuat inputan jadi huruf kecil semua
    });

    const notFoundElement = document.getElementById("notfound");

    imageNotFound.src = "assets/notfound.png";
    textNotFound.textContent = "Not Found!";

    cardElement1.append(imageNotFound, textNotFound);
    notFound.innerHTML = "";
    notFound.append(cardElement1);
  } else {
    filteredData.forEach((item) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("productCard");

      const imageElement = document.createElement("img");
      const titleElement = document.createElement("h3");
      const priceElement = document.createElement("h3");
      const buttonElement = document.createElement("button");

      imageElement.src = item.image;
      titleElement.textContent = item.title;
      priceElement.textContent = item.price;
      buttonElement.textContent = "buy";

      buttonElement.addEventListener("click", function () {
        alert(`${item.title} seharga $${item.price} telah masuk ke keranjang`);
      });

      cardElement.append(
        imageElement,
        titleElement,
        priceElement,
        buttonElement
      );
      container.append(cardElement);
    });
  }
});

// const productContainer = document.getElementById("productContainer");
// const categoryDropdown = document.getElementById("categoryDropdown");

// bagian dropdown pada category
function toggleDropdown(event) {
  event.stopPropagation();
  categoryDropdown.classList.toggle("show");
}

// Menampilkan berdasarkan categori
async function getProductsByCategory(category) {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${category.toLowerCase()}` // membuat inputan jadi huruf kecil semua
  );
  const data = await response.json();

  container.innerHTML = "";
  notFound.innerHTML = "";

  if (data.length === 0) {
    const cardElement1 = document.createElement("div");
    const imageNotFound = document.createElement("img");
    const textNotFound = document.createElement("h3");

    imageNotFound.src =
      "https://imgtr.ee/images/2024/01/15/54fcc5baba56c960c6a1cfa4bc5096cc.png";
    textNotFound.textContent = "Not Found!";

    cardElement1.append(imageNotFound, textNotFound);
    notFound.append(cardElement1);
  } else {
    data.forEach((item) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("productCard");

      const imageElement = document.createElement("img");
      const titleElement = document.createElement("h3");
      const priceElement = document.createElement("h3");
      const buttonElement = document.createElement("button");

      imageElement.src = item.image;
      titleElement.textContent = item.title;
      priceElement.textContent = item.price;
      buttonElement.textContent = "buy";

      buttonElement.addEventListener("click", function () {
        alert(`${item.title} seharga $${item.price} telah masuk ke keranjang`);
      });

      cardElement.append(
        imageElement,
        titleElement,
        priceElement,
        buttonElement
      );
      container.append(cardElement);
    });
  }
}
