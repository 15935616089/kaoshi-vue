<template>

    <div>
        <router-link to="/addSignStu" tag="button" type="button" class="el-button el-button--primary el-icon-plus">单条添加</router-link>

        <router-link to="/addMoreStu" tag="button" type="button" class="el-button el-button--primary el-icon-more">批量添加</router-link>


    <el-table
            :data="tableData"
            style="width: 100%">
        <el-table-column
                prop="id"
                label="id"
                width="180">
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                width="180">
        </el-table-column>
        <el-table-column
                prop="cname"
                label="班级">
        </el-table-column>
    </el-table>

        <el-button type="info" @click="up()">上一下</el-button>
        <el-button type="info" @click="next()">下一页</el-button>
    </div>
</template>

<script>
    export default {
        name: "select-stu",
        data() {
            return {
                tableData: [],
                page:0,
                pages:0
            }
        },
        methods:{
            up(){
                if(this.page>0) {
                    this.page-=1
                    fetch("/api/stu/select?page=" + this.page).then(function (e) {
                        return e.json();
                    }).then((e) => {
                        this.tableData = e;
                    })
                }
            },
            next(){

                console.log(this.pages);
                if(this.page<this.pages-1) {
                    this.page+=1;
                    fetch("/api/stu/select?page=" + this.page).then(function (e) {
                        return e.json();
                    }).then((e) => {
                        this.tableData = e;
                    })
                }

            }

        },
        mounted(){
            fetch("/api/stu/selectAll").then(function (e) {
                return e.text();
            }).then((e)=>{
                this.pages=e;
            })

            fetch("/api/stu/select?page="+this.page).then(function (e) {
                return e.json();
            }).then((e)=>{
                this.tableData=e;
            })
        }
    }
</script>

<style scoped>

</style>