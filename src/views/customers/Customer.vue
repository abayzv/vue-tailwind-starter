<template>
  <div class="px-10 mb-10">
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="py-3 px-6">Name</th>
            <th scope="col" class="py-3 px-6">Username</th>
            <th scope="col" class="py-3 px-6">Phone</th>
            <th scope="col" class="py-3 px-6">Email</th>
            <th scope="col" class="py-3 px-6">Action</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(user, index) in customer" :key="index">
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="py-2 flex items-center px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <span
                  ><img
                    :src="user.image"
                    class="w-10 h-10 rounded-full shadow-md mr-2 border-2 border-gray-300"
                    alt=""
                /></span>
                <span>{{ user.firstName }}</span>
              </th>
              <td class="py-4 px-6">{{user.username}}</td>
              <td class="py-4 px-6">{{user.phone}}</td>
              <td class="py-4 px-6">{{user.email}}</td>
              <td class="py-4 px-6">
              <button class="px-5 bg-blue-500 text-white py-1 text-sm rounded-md hover:bg-blue-600 transition">Edit</button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("customer", ["customer"]),
  },
  methods: {
    ...mapActions("customer", ["fetchCustomer"]),
    async _fetchCustomer() {
      try {
        await this.fetchCustomer();
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this._fetchCustomer();
  },
};
</script>
