<template>
    <div class="hero">
        <!--desktop-->
        <div class="d-none d-md-block">
            <div class="row mt-5">
                <div class="col-md-6">
                    <div class="d-flex h-100">
                        <div class="justify-content-center align-self-center">
                            <h2><strong>Delicious food menu ,</strong><br />in your gadget</h2>
                            <p>Ayo pilh dan pesan makanan favorit anda sekarang</p>
                            <router-link to="/foods" class="btn btn-lg btn-success">
                                <b-icon-arrow-right></b-icon-arrow-right> Pesan
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <img src="../assets/images/hero.png" alt="" width="100%" />
                </div>
            </div>
        </div>


    <!--mobile-->
        <div class="d-sm-block d-md-none">
            <div class="row mt-5">
                <div class="col-md-6 mb-2">
                    <img src="../assets/images/hero.png" alt="" width="100%" />
                </div>
                <div class="col-md-6">
                    <div class="d-flex h-100">
                        <div class="justify-content-center align-self-center">
                            <h2><strong>Delicious food menu ,</strong><br />in your gadget</h2>
                            <p>Ayo pilh dan pesan makanan favorit anda sekarang</p>
                            <router-link to="/foods">
                                <button class="btn btn-lg btn-success">
                                    <b-icon-arrow-right></b-icon-arrow-right> Pesan
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>