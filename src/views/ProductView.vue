<template>
    <div class="mb-8">
        <ul class="flex flex-wrap">
            <template v-for="(item, index) in product" :key="item.id">
                <li class="p-3 bg-white m-3 w-1/6 rounded-md h-72 shadow-lg relative hover:scale-110 transition">
                   <router-link :to="'/product/'+index" :href="'/product/'+index">
                    <img :src="item.thumbnail" class=" h-32 w-full object-cover" alt="">
                    <div class="text-blue-600 mt-2 font-bold truncate">{{item.title}}</div>
                    <p class="text-gray-600 text-ellipsis h-11 overflow-hidden text-sm">{{item.description}}</p>
                    <span class="absolute bottom-3 text-green-600 font-bold text-lg">Rp. {{(item.price*14000).toLocaleString()}}</span>
                   </router-link>
                </li>
            </template>
        </ul>
    </div>
</template>
<script>
    import { mapState, mapActions } from "vuex";
    export default {
      computed: {
        ...mapState("product", ["product"]),
      },
      methods: {
        ...mapActions("product", ["fetchProduct"]),
        async _fetchProduct() {
          try {
            await this.fetchProduct();
          } catch (error) {
            console.log(error);
          }
        },
      },
      created() {
        this._fetchProduct();
      },
    };
</script>