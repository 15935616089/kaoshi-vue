<template>
    <div>
         题目录入 <input type="text"><br>
         选项录入 <input type="text" v-for="item in options"><br>
        <input type="button" value="继续录入选项" @click="addOption">
        答案录入 <input type="text">
        <input type="submit" value="确定">
    </div>
</template>

<script>
    export default {
        name: "option1",
        data(){
            return {
                options:[1]
            }
        },
        methods:{
            addOption(){
                this.options.push(1);
            }
        }
    }
</script>

<style scoped>

</style>