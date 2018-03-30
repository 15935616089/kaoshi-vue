<template>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>用户管理</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">用户查询</template>

                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">

                            <router-link to="/addStu">添加用户</router-link>

                        </template>

                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>学生管理</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">

                        <router-link to="/selectStu">
                            学生查询
                        </router-link>

                        </template>

                    </el-menu-item-group>

                </el-submenu>

                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>试题管理</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">试题查询</template>

                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">添加试题</template>

                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>试题类型管理</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">类型查询</template>

                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">添加类型</template>

                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>方向管理</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">
                            <router-link to="/selectFangxiang">
                               方向查询
                            </router-link>

                        </template>

                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">
                          <router-link to="/addFangxiang">  添加方向</router-link>
                        </template>

                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="6">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>班级管理</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">
                            <router-link to="/selectClasses">
                                班级查询
                            </router-link>

                        </template>

                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">
                            <router-link to="/addClasses">
                                添加班级
                            </router-link>

                        </template>

                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="7">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>考题管理</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">考题查询</template>

                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">添加考题</template>

                    </el-menu-item-group>
                </el-submenu>

            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    export default {

        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
.tac{
    width:100%;
}
</style>