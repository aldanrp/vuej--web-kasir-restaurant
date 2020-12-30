<template>
    <div class="FoodDetails">
        <Navbar />
        <div class="container">

            <!--breadcrumb-->
            <div class="row">
                <div class="col">
                    <b-breadcrumb class="breadcumb mt-5">
                        <b-breadcrumb-item >
                            <router-link to="/" class="text-dark">Home</router-link>
                        </b-breadcrumb-item>
                        <b-breadcrumb-item >
                            <router-link to="/foods" class="text-dark">Foods</router-link>
                        </b-breadcrumb-item>
                        <b-breadcrumb-item class="breadcrumb-item active" active>Food Order</b-breadcrumb-item>
                    </b-breadcrumb>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <img :src="'assets/images/' + product.gambar" class="img-fluid shadow mb-3">
                </div>
                <div class="col-md-6" v-on:submit.prevent>
                    <h1><strong>{{product.nama}}</strong></h1>
                    <hr>
                    <h4>Harga : <strong>Rp. {{product.harga}}</strong></h4>
                    <form class="mt-4" v-on:submit.prevent>
                        <div class="form-group">
                            <label for="jumlah_pemesanan">Jumlah Pesan</label>
                            <input type="number" class="form-control" v-model="pesan.jumlah_pemesanan">
                        </div>
                        <div class="form-group">
                            <label for="jumlah_pemesanan">Keterangan</label>
                            <textarea
                                v-model="pesan.keterangan" 
                                type="text" 
                                class=" form-control pb-4 " 
                                placeholder="Keterangan spt : Pedas , Nasi Setengah.."
                            >
                            </textarea>
                        </div>

                        <button type="submit" class="btn btn-success mt-2" @click="pemesanan">
                            <b-icon-cart></b-icon-cart>
                            Pesan
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import Navbar from "@/components/Navbar.vue";

export default {
    name: "FoodDetails",
    components: {
        Navbar,
    },
    data(){
        return {
            product : {},
            pesan : {}
        }
    },
    methods: {
        setProduct(data){
            this.product = data
        },
        pemesanan(){
            if(this.pesan.jumlah_pemesanan) {
                this.pesan.product = this.product
                axios
                    .post("http://localhost:3000/keranjangs",this.pesan)
                    .then(() => {
                        this.$router.push({path : "/keranjang"})
                        this.$toast.success('Berhasil Masuk Keranjang', {
                            type: 'success',
                            position: 'top-right',
                            duration: 3000,
                            dismissible: true
                        });
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            }else{
                this.$toast.error('Masukan Jumlah pesanan', {
                            type: 'error',
                            position: 'top-right',
                            duration: 3000,
                            dismissible: true
                        });
            }
        }
    },
    mounted() {
        axios
            .get("http://localhost:3000/products/"+this.$route.params.id)
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