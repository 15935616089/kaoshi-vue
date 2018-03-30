<template>
    <div class="loginbox">
        {{message}}
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="用户名">
            <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="formLabelAlign.pass" type="password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="success" @click="login">登陆</el-button>
        </el-form-item>
    </el-form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                labelPosition: 'left',
                formLabelAlign: {
                    name: '',
                    pass: ''
                },
                message:""
            };
        },
        methods:{
            login(){
                var params="uname="+this.formLabelAlign.name+"&upass="+this.formLabelAlign.pass
                fetch("/api/login/check?"+params).then(function (e) {
              return e.json();
                }).then( (e)=> {
                    if(e.message=="yes"){
                        sessionStorage.login="yes";
                        sessionStorage.id=e.id;
                        sessionStorage.uname=e.uname;
                        this.$router.push("/")
                    }else{
                        this.formLabelAlign.name="";
                        this.formLabelAlign.pass="";
                        this.message="登陆失败"
                    }
                })
            }
        }
    }
</script>

<style scoped>
.loginbox{
    width:300px;height:300px;
    position: fixed;
    left:0;top:0;bottom: 0;right:0;
    margin:auto;
}
</style>