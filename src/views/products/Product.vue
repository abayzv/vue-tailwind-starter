<template>
  <div class="flex bg-white p-5 rounded-md shadow-md">
    <div class="w-1/2">
      <div class="mb-3">
        <img :src="product[$route.params.id].images[selectedImageIndex]" class="h-96 object-cover rounded-md shadow-md" />
      </div>
      <ul class="flex">
        <template v-for="(image, index) in product[$route.params.id].images" :key="index">
          <li @click="changeImage(index)" class="p-2 mt-2 w-24 h-24 border border-gray-300 shadow-md rounded-md bg-white mr-2 cursor-pointer transition hover:scale-110">
            <img :src="image" class="h-full w-full object-cover" />
          </li>
        </template>
      </ul>
    </div>
    <div class="w-1/2 px-10">
        <h1 class="font-bold text-2xl text-blue-500 mb-3">{{ product[$route.params.id].title }}</h1>
        <h2 class="font-medium text-lg mb-3">Rp. {{(product[$route.params.id].price*14000).toLocaleString()}}</h2>
        <p class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. At facere adipisci ipsam ex quo blanditiis maxime minima, numquam optio, quisquam odit? Quo molestias sunt officiis veritatis aspernatur architecto laborum, obcaecati, delectus est, soluta quia fuga saepe error eum nobis voluptatibus quasi iure ut laboriosam? Quibusdam fugiat et labore nisi quidem.</p>
        <h2 class="mb-3 font-medium text-gray-400">Category</h2>
        <ul class="flex flex-wrap">
            <li v-for="(category, index) in categories" :key="index" class="p-2 mr-2 my-2 border border-gray-500 text-slate-500 uppercase text-sm hover:text-white hover:bg-blue-500 hover:border-blue-500 cursor-pointer">{{category}}</li>
        </ul>
        <div class="mt-5">
            <button class="p-3 rounded-sm bg-black text-white w-full hover:bg-gray-800">Add To Chart</button>
            <button class="mt-2 p-3 rounded-sm bg-green-500 text-white w-full hover:bg-green-400">Chat on Whatsapp</button>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      productData: {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
        images: [
          "https://dummyjson.com/image/i/products/1/1.jpg",
          "https://dummyjson.com/image/i/products/1/2.jpg",
          "https://dummyjson.com/image/i/products/1/3.jpg",
          "https://dummyjson.com/image/i/products/1/4.jpg",
          "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
        ],
      },
      categories: [
        "smartphones",
        "laptops",
        "headphones",
        "smartwatches",
        "cameras",
        "accessories",
      ],
      selectedImageIndex : 0
    };
  },
  computed: {
    ...mapState("product", ["product"]),
  },
  methods: {
    changeImage(index)
    {
        this.selectedImageIndex = index
    }
  },
  metaInfo() {
    return {
      title: "test",
    };
  },
};
</script>
