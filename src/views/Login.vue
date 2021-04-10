<template>
    <div class="container-fluid">
        <div class="login">
            <!--dekstop-->
            <div class=" d-md-block">
                <div class="row mt-4">
                    <div class="col-md-6">
                        <img src="../assets/images/hero.png" alt="" class="" width="100%" height="100%" />
                    </div>
                    <div class="col-md-6">
                        <div class="">
                            <div class="justify-content-center align-self-center">
                                <router-link class="nav-link logo-login" to="/">Yok!pergi</router-link>
                                <form class="mt-2 form-bg">
                                    <div class= " form-group">
                                        <label for="email">Email</label>
                                        <input type="email" class=" form-control" v-model="login.email">
                                    </div>
                                    <div class=" form-group">
                                        <label for="passsword">Password</label>
                                        <input type="password" class=" form-control" v-model="login.password">
                                    </div>
                                    <button type="submit" class=" btn btn-success mt-2 float-right" >
                                        <b-icon-person></b-icon-person>
                                        Login
                                    </button>
                                    <h6>lupa password?<router-link to="/forgetpassword" class=" card-link">Here!</router-link></h6>
                                </form>
                                <h6 class="text-center mt-3">belum terdaftar?<router-link to="/ Daftar" class=" card-link">Daftar here!</router-link></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        <!--mobile-->
        </div>
    </div>
</template>

<script>


export default {
    name:"Login",
    data(){
        return{
            login:{}
        }
    }
}
</script>