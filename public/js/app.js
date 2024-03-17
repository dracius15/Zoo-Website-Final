const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Mission Tiger Fund",
    price: 100,
    colors: [
      {
        code: "black",
        img: "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/07/02/44120.jpg",
      },
      {
        code: "darkblue",
        img: "https://nationalzoo.si.edu/sites/default/files/newsroom/bottle-feeding_sumatran_tiger_cub_fp9a3299.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Amigurumi Keychains",
    price: 999,
    colors: [
      {
        code: "lightgray",
        img: "https://amigurumi.space/wp-content/uploads/2021/04/crochet-teddy-bear-keychain.jpg",
      },
      {
        code: "green",
        img: "https://i.etsystatic.com/6554763/r/il/f42168/5202481409/il_1080xN.5202481409_rbk4.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "T-shirts",
    price: 1499,
    colors: [
      {
        code: "black",
        img: "https://m.media-amazon.com/images/I/51P+5lfLYcL._AC_UY1100_.jpg",
      },
      {
        code: "green",
        img: "https://m.media-amazon.com/images/I/51ZoUYREzgL._AC_UY1100_.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Brooches",
    price: 299,
    colors: [
      {
        code: "gold",
        img: "https://images-cdn.ubuy.co.in/633ff008de2cff02c063d01e-hummingbird-brooch-pins-for-women.jpg",
      },
      {
        code: "blue",
        img: "https://ae01.alicdn.com/kf/S6d1dc3d99ac64d28adec77c28948be59J.jpg_640x640Q90.jpg_.webp",
      },
    ],
  },
  {
    id: 5,
    title: "Stuffed Toys",
    price: 499,
    colors: [
      {
        code: "brown",
        img: "https://assets.ajio.com/medias/sys_master/root/20230426/fFD6/64481e7d42f9e729d7501676/-473Wx593H-466096493-multi-MODEL.jpg",
      },
      {
        code: "black",
        img: "https://m.media-amazon.com/images/I/71RIH3t2cDL.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //passing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});