<template>
    <div class="keranjang">
        <Navbar :updateKeranjang="keranjangs"/>
        <div class="container">
            <div class="row">
                <div class="col">
                    <b-breadcrumb class="breadcumb mt-5">
                        <b-breadcrumb-item >
                            <router-link to="/" class="text-dark">Home</router-link>
                        </b-breadcrumb-item>
                        <b-breadcrumb-item >
                            <router-link to="/foods" class="text-dark">Foods</router-link>
                        </b-breadcrumb-item>
                        <b-breadcrumb-item class="breadcrumb-item active" active>Keranjang</b-breadcrumb-item>
                    </b-breadcrumb>
                </div>
            </div>

            <div class="row ">
                <div class="col">
                    <h2>Keranjang <strong>Saya</strong></h2>
                    <div class=" table-responsive mt-3">
                        <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col" class="text-center">Foto</th>
                            <th scope="col" class="text-center">Makanan</th>
                            <th scope="col" class="text-center">Keterangan</th>
                            <th scope="col" class="text-center">Jumlah</th>
                            <th scope="col" class="text-center">Harga</th>
                            <th scope="col" class="text-center">Total Harga</th>
                            <th scope="col" class="text-center">Hapus</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id">
                                <th>{{ index+1 }}</th> 
                                <td align="center">
                                    <img :src="'assets/images/' + keranjang.product.gambar" class="img-fluid shadow" width="250"></td>
                                <td align="center">{{ keranjang.product.nama }}</td>
                                <td align="center">{{ keranjang.keterangan ? keranjang.keterangan:"-" }}</td>
                                <td align="center">{{ keranjang.jumlah_pemesanan }}</td>
                                <td align="center">Rp. {{ keranjang.product.harga }}</td>
                                <td align="center"> <strong>Rp. {{ keranjang.product.harga * keranjang.jumlah_pemesanan }}</strong></td>
                                <td align="center" class=" text-danger">
                                    <b-icon-trash @click="hapusKeranjang(keranjang.id)"></b-icon-trash>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="6" align="right">
                                    <strong>Total Harga :</strong>
                                </td>
                                <td align="center">
                                    <strong>Rp. {{totalHarga}}</strong>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!--form checkout-->
            <div class="row justify-content-end">
                <div class="col-md-4">
                    <form class="mt-4">
                        <div class="form-group">
                            <label for="nama">Nama :</label>
                            <input type="text" class="form-control" v-model="pesan.nama">
                        </div>
                        <div class="form-group">
                            <label for="noMeja">Nomor Meja :</label>
                            <input type="number" class="form-control" v-model="pesan.noMeja">
                        </div>
                        <button type="submit" class="btn btn-success mt-2 mr-2 float-right" @click="checkout">
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
import Navbar from "@/components/Navbar.vue"
import axios  from "axios"

export default {
    name: "Keranjang",
    components: {
        Navbar,
    },
    data() {
        return {
            keranjangs : [],
            pesan:{}
        }
    },
    methods: {
        setkeranjang(data){
            this.keranjangs = data
        },
        hapusKeranjang(id){
            axios
                .delete("http://localhost:3000/keranjangs/"+ id)
                .then(() => {
                    this.$router.push({path : "/keranjang"})
                    this.$toast.success('Sukses Hapus Keranjang', {
                            type: 'success',
                            position: 'top-right',
                            duration: 3000,
                            dismissible: true
                        });
            
                    // buat ngereload halaman
                    axios
                        .get("http://localhost:3000/keranjangs")
                        .then((response) => {
                            // handle success
                            this.setkeranjang(response.data);
                        })
                        .catch((error) => {
                            // handle error
                            console.log("Gagal", error);
                        });
                })
        },
        checkout(){
            if(this.pesan.nama && this.pesan.noMeja){
                this.pesan.keranjangs = this.keranjangs;
                axios
                    .post("http://localhost:3000/pesanans", this.pesan)
                    .then(() => {
                        this.keranjangs.map(function(item){
                            return axios
                                        .delete("http://localhost:3000/keranjangs/"+ item.id)
                                        .catch((error)=>{
                                            console.log(error)
                                        })
                        })
                        this.$router.push({path : "/pesananSukses"})
                        this.$toast.success('Succes Dipesan', {
                            type: 'success',
                            position: 'top-right',
                            duration: 3000,
                            dismissible: true
                        });
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            }
            else{
                this.$toast.error('Nama dan No Meja harus diisi', {
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
            .get("http://localhost:3000/keranjangs")
            .then((response) => {
                // handle success
                this.setkeranjang(response.data);
            })
            .catch((error) => {
                // handle error
                console.log("Gagal", error);
            });
    },
    computed:{
        totalHarga() {
            return this.keranjangs.reduce(function(items,data){
                return items+data.product.harga*data.jumlah_pemesanan 
            },0) 
        }
    },
}
</script >

<style>

</style>