<template>
    <div class="login">
        <div id="locale" v-text="$t('hello')"> </div>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">{{$t('email')}}</label>
                <input type="email" v-model="userName" @input="updateUser" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" :placeholder="$t('enterEmail')">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">{{$t('password')}}</label>
                <input type="password" v-model="password" @input="updatePassword" class="form-control" id="exampleInputPassword1" :placeholder="$t('enterPassword')">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>



<script>
    export default {
        computed: {
            userName() {
                return this.$store.state.userName;
            },
            password(){
                return this.$store.state.password;
            }
        },
        methods: {
            updateUser(e){
                this.$store.commit('updateUser', e.target.value)
            },
            updatePassword(e){
                this.$store.commit('updatePassword', e.target.value)
            }
        }
    }

</script>