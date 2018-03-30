<template>
    <el-container>
        <el-header style="height:10vh">

            <div>欢迎来到 {{uname}}考试系统</div>
            <span @click="logout">退出</span>
        </el-header>
        <el-container class="body">
            <el-aside width="200px" style="background: #fff">
                <Menu></Menu>
            </el-aside>
            <el-main style="text-align: left">
               <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Menu from "@/components/Menu"
    export default {
        components:{Menu},
        data(){
            return {
                uname:sessionStorage.uname
            }
        },
        methods:{
            logout(){
                sessionStorage.removeItem("login");
                sessionStorage.removeItem("uname");
                sessionStorage.removeItem("id");
                this.$router.push("/login");
            }
        }
    }
</script>

<style scoped>

    .el-header {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        position: relative;

    }
    .el-header div{
        width:300px;height:20px;position: absolute;
        left: 0;top:0;bottom: 0;right:0;margin:auto;
    }
.body{
    width:100%;height:90vh;
}
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        height:100%;

    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        height:100%;

    }



</style>