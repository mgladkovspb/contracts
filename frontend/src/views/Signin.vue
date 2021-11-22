<template>
    <div class="nk-main ">
            <div class="nk-wrap nk-wrap-nosidebar">
                <div class="nk-content ">
                    <div class="nk-block nk-block-middle nk-auth-body  wide-xs">
                        <div class="card card-bordered">
                            <div class="card-inner card-inner-lg">
                                <form action="html/index.html">
                                    <div class="form-group">
                                        <div class="form-label-group">
                                            <label class="form-label">Пользователь</label>
                                        </div>
                                        <div class="form-control-wrap">
                                            <input v-model="username" type="text" class="form-control form-control-lg" placeholder="Введите имя пользователя">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-label-group">
                                            <label class="form-label">Пароль</label>
                                        </div>
                                        <div class="form-control-wrap">
                                            <a href="#" class="form-icon form-icon-right passcode-switch lg" data-target="password" @click="changePasswordState">
                                                <em v-show="passwordType=='password'" class="passcode-icon icon-show icon ni ni-eye"></em>
                                                <em v-show="passwordType=='text'" class="passcode-icon icon-show ni ni-eye-off"></em>
                                            </a>
                                            <input v-model="password" :type="passwordType" class="form-control form-control-lg" id="password" placeholder="Введите пароль">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <button @click="signin" class="btn btn-lg btn-primary btn-block">Вход</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import { AUTH_SIGNIN } from '@/store/auth.module'
import { mapActions } from 'vuex'

export default {
    name: 'Signin',
    data() {
        return {
            username: '',
            password: '',
            passwordType: 'password'
        }
    },
    methods: {
        ...mapActions([AUTH_SIGNIN]),
        signin() {
            const username = this.username 
            const password = this.password
            this[AUTH_SIGNIN]({ username, password })
                .then(() => this.$router.push({ name: 'Dashboard' }))
                .catch(error => console.log(error))
        },
        changePasswordState() {
            this.passwordType = this.passwordType == 'password' ? 'text' : 'password'
        }
    }
}
</script>
