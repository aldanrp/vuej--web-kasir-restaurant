<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="faded">
      <div class="container-fluid navbar-edit">
        <b-navbar-brand >
          <router-link class="nav-link logo font-weight-bold" to="/" >Yok!pergi</router-link>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link class="nav-link ml-3 word " to="/">Home</router-link>
            <router-link class="nav-link ml-3 word" to="/foods">Wisata</router-link>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto"> 
            <li class="nav-item">
              <router-link class="nav-link  ml-3 word" to="/Login">
                Login
                <b-icon-person></b-icon-person>
              </router-link>
            </li>
          </b-navbar-nav>
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