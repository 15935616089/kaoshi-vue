<template>

    <div>
        <router-link to="/addSignStu" tag="button" type="button" class="el-button el-button--primary el-icon-plus">单条添加</router-link>

        <router-link to="/addMoreStu" tag="button" type="button" class="el-button el-button--primary el-icon-more">批量添加</router-link>
    <el-table
            :data="tableData"
            style="width: 100%">
        <el-table-column
                prop="date"
                label="日期"
                width="180">
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                width="180">
        </el-table-column>
        <el-table-column
                prop="address"
                label="地址">
        </el-table-column>
    </el-table>
    </div>
</template>

<script>
    export default {
        name: "select-stu",
        data() {
            return {
                tableData: []
            }
        }
    }
</script>

<style scoped>

</style>