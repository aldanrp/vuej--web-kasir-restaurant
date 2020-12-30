<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />

      <div class="row mt-5">
        <div class="col">
          <h2>Best<strong> Foods</strong></h2>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-success float-right">
            <b-icon-eye></b-icon-eye> Lihat Semua
          </router-link>
        </div>
      </div>

      <div class="row mb-3 mt-4">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <cardProduct :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import cardProduct from "@/components/cardProduct.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    cardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => {
        // handle success
      this.setProduct(response.data)
      })
      .catch((error) => {
        // handle error
        console.log("Gagal", error);
      })
  },
};
</script>
