export const productData = {
  "1": {
    id: "1",
    title: "Zine subscription (print & digital)",
    price: "£68.00 / year",
    soldOut: false,
    description: "Get both print and digital issues throughout the year.",
    cover: require("../assets/products/product1/product1.png"),
    pages: [
      require("../assets/products/product1/product1.png"),
      require("../assets/products/product1/product2.png"),
      require("../assets/products/product1/product3.png"),
      require("../assets/products/product1/product4.png"),
      require("../assets/products/product1/product5.png")
    ],
    extra: []
  },
  "2": {
    id: "2",
    title: "Digital Zine subscription",
    price: "£48.00 / year",
    soldOut: false,
    description: "Access all issues online in digital format.",
    cover: require("../assets/products/product1/product2.png"),
    pages: [],
    extra: []
  },
  "3": {
    id: "3",
    title: "Impact News Tower Hamlets #2",
    price: "£17.00",
    soldOut: false,
    description: "Our second issue with stories from Tower Hamlets.",
    cover: require("../assets/products/product1/product3.png"),
    pages: [],
    extra: []
  },
  "4": {
    id: "4",
    title: "Impact News Tower Hamlets #1",
    price: "£10.00",
    soldOut: true,
    description: `Our first issue showcases bold, community-led action in Tower Hamlets — from canalboat restoration and refugee entrepreneurs to youth empowerment and urban honey harvesting.`,
    cover: require("../assets/products/product1/product1.png"),
    pages: [
      require("../assets/products/product1/product2.png"),
      require("../assets/products/product1/product3.png"),
      require("../assets/products/product1/product4.png"),
      require("../assets/products/product1/product5.png")
    ],
    extra: [
      "Turning skills from prison into a business restoring boats for social good",
      "A course helping adults improve wellbeing through creativity and connection",
      "A young girl brings young people together through singing sessions",
      "Dodgeball sessions for dads and children to reconnect",
      "A recovery-focused project using reclaimed timber and urban gardening",
      "A safe weekly space for male carers and young kids to build trust and bond"
    ]
  }
};
