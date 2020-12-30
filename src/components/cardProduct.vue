<template>
    <div>
            <b-card
            :title="product.nama"
            :img-src="'assets/images/'+ product.gambar"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 40rem "
            class="mb-3 shadow card-product card-img-top"
            >
                <b-card-text>
                    Harga : Rp. {{product.harga}}
                </b-card-text>
                <router-link :to="'/foods/'+ product.id" class="btn btn-success p-2"><b-icon-cart></b-icon-cart> Pesan</router-link>
            </b-card>
    </div>
</template>

<script>
export default {
    name: "cardProduct",
    props: ["product"],
};
</script>

<style>
</style>