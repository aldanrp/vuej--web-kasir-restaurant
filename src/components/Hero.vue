<template>
<div class="container-fluid">
    <div class="hero">
        <!--desktop-->
        <div class="d-none d-md-block">
            <div class="row mt-4">
                <div class="col-md-4">
                    <div class="d-flex h-100">
                        <div class="justify-content-center align-self-center ml-5">
                            <h2><strong>Indonesian Travel , </strong><br />in your gadget</h2>
                            <p>Ayo jelajahi dan lakukan perjalananmu sekarang </p>
                            <router-link to="/foods" class="btn btn-lg btn-success">
                                <b-icon-bookmark-star></b-icon-bookmark-star> Jelajahi 
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <img src="../assets/images/borobudur.jpg" alt="" class="img" width="100%" height="100%" />
                </div>
            </div>
        </div>


    <!--mobile-->
        <div class="d-sm-block d-md-none">
            <div class="d-flex h-100 bg-edit mt-3">
                <div class="justify-content-center align-self-center">
                    <h2><strong>Indonesian Travel , </strong><br />in your gadget</h2>
                    <p>Ayo jelajahi dan lakukan perjalananmu sekarang </p>
                    <router-link to="/foods" class="btn btn-lg btn-success">
                        <b-icon-bookmark-star></b-icon-bookmark-star> Jelajahi 
                    </router-link>
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