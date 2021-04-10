<template>
    <div class="Inform">
        <Navbar />
        <div class="container">
            <div class="row">
                <div class="col">
                <b-breadcrumb class="breadcumb mt-4">
                    <b-breadcrumb-item>
                    <router-link to="/" class="text-dark">Home</router-link>
                    </b-breadcrumb-item>
                    <b-breadcrumb-item>
                    <router-link to="/foods" class="text-dark">Wisata</router-link>
                    </b-breadcrumb-item>
                    <b-breadcrumb-item class="breadcrumb-item active" active
                    >Information</b-breadcrumb-item
                    >
                </b-breadcrumb>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 col-lg-6 mt-2">
                <img
                    :src="'assets/images/' + product.gambar"
                    class="img-fluid shadow mb-3"
                />
                </div>
                <div class="col-md-6 col-lg-6">
                <h1>
                    <strong>{{ product.nama }}</strong>
                </h1>
                <p>{{ product.tempat }}</p>
                <hr />
                <h4>"{{ product.informasi }}"</h4>
                </div>
            </div>
            
            <!--desktop-->
            <div class="d-none d-md-block">
                <div class="row mt-5">
                    <div class="col-md-6">
                        <h4>{{ product.informasi}}</h4>
                    </div>
                    <div class="col-md-6">
                        <img
                            :src="'assets/images/' + product.gambar1"
                            class="img-fluid shadow mb-3"
                        />
                    </div>
                </div>
            </div>

            <!--mobile-->
            <div class="d-sm-block d-md-none">
                <div class="row mt-5">
                    <div class="col-md-6">
                        <img
                            :src="'assets/images/' + product.gambar1"
                            class="img-fluid shadow mb-3"
                        />
                    </div>
                    <div class="col-md-6">
                        <h4>{{ product.informasi}}</h4>
                    </div>
                </div>
            </div>

            <h1 class="mt-3"><strong>Here</strong> Place</h1>
            <div class="mapouter mt-3 mb-2 ">
                <div class="gmap_canvas">
                <iframe :src="product.peta" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from "axios";

export default {
    name: "Inform",
    components: {
        Navbar,
    },
    data() {
        return {
        product: {},
        };
    },
    methods: {
        setProduct(data) {
        this.product = data;
        },
    },
    mounted() {
        axios
        .get("http://localhost:3000/products/" + this.$route.params.id)
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
            .mapouter {
                position: relative;
                text-align: right;
                width: 100%;
                height: 400px;
                
            }
            .gmap_canvas {
                overflow: hidden;
                background: none !important;
                width: 100%;
                height: 400px;
            }
</style>