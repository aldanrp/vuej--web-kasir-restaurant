<template>
    <div>
        <Navbar />
        <div class="container">
            <div class="row mt-4">
                <div class="col">
                    <h1>Daftar <strong>Wisata</strong></h1>
                </div>
            </div>

            <div class="input-group mb-3 mt-3">
                <input
                    v-model="search"
                    type="text"
                    class="form-control"
                    placeholder="Cari tempat tujuan anda..."
                    aria-label="Cari"
                    aria-describedby="basic-addon1"
                    @keyup="searchFood"
                />
                <span class="input-group-text" id="basic-addon1">
                    <b-icon-search></b-icon-search>
                </span>
            </div>

            <div class="row mb-3 mt-4">
                <div class="col-md-4" v-for="product in products" :key="product.id">
                    <cardProduct :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import cardProduct from "@/components/cardProduct.vue";
import axios from "axios";

export default {
    name: "foods",
    components: {
        Navbar,
        cardProduct,
    },
    data() {
        return {
        products: [],
        search : '',
        };
    },
    methods: {
        setProduct(data) {
            this.products =  data;
        },
        searchFood(){
            axios
            .get("http://localhost:3000/products?q="+ this.search)
            .then((response) => {
                // handle success
                this.setProduct(response.data);
            })
            .catch((error) => {
                // handle error
                console.log("Gagal", error);
            });
        }
    },
    mounted() {
        axios
        .get("http://localhost:3000/products")
        .then((response) => {
            // handle success
            this.setProduct(response.data);
        })
        .catch((error) => {
            // handle error
            console.log("Gagal", error);
        });
    },
};
</script>

<style>
</style>