<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="faded">
      <div class="container navbar-edit">
        <b-navbar-brand href="#" >
          <strong>Yok!pergi</strong>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link class="nav-link ml-2 " to="/">Home</router-link>
            <router-link class="nav-link ml-2" to="/foods">Wisata</router-link>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Navbar",
  data() {
    return {
      jumlah_pesanans: [],
    };
  },
  props: ['updateKeranjang'],
  methods: {
    setJumlah(data) {
      this.jumlah_pesanans = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setJumlah(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>