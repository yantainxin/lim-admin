<template>
<div class="company">
    <div class="widget radius-bordered">
        <div class="widget-header">
            <span class="widget-caption">公司信息</span>
        </div>
        <div class="widget-body">
            <el-row class="content-tools">              
                <el-col :span="8">
                </el-col>
                <el-col :span="16" class="text-right">
                    <el-button-group>
                        <router-link class="el-button" :to="{name:'companyView'}" tag="button" title="刷新"><i class="iconfont icon-refresh"></i><span class="hidden-xs">刷新</span></router-link>
                    </el-button-group>
                </el-col>
            </el-row>
            <hr>
            <router-view></router-view>
        </div>
    </div>
</div>
</template>