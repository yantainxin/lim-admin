<template>
<div class="privilege">
    <div class="widget radius-bordered">
        <div class="widget-header">
            <span class="widget-caption">权限细粒度列表</span>
        </div>
        <div class="widget-body">
            <el-row class="content-tools">              
                <el-col :span="8">
                </el-col>
                <el-col :span="16" class="text-right">
                    <el-button-group>
                        <router-link class="el-button" :to="{name:'columnManage', query:$route.query}" tag="button" title="返回栏目管理"><i class="iconfont icon-list"></i><span class="hidden-xs">返回栏目管理</span></router-link>
                        <router-link class="el-button" :to="{name:'privilegeModify', query:$route.query}" tag="button" title="添加"><i class="iconfont icon-tianjia"></i><span class="hidden-xs">添加</span></router-link>
                    </el-button-group>
                </el-col>
            </el-row>
            <hr>
            <router-view></router-view>
        </div>
    </div>
</div>
</template>