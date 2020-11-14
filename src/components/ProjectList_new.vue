<template>
    <!-- 组件中定义的所有ref都会放在当前组件的$refs属性中 -->
    <!-- ref为一个元素或者子组件的应用 -->
    <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
        <el-table-column
                type="selection"
                width="55">
        </el-table-column>
        <el-table-column
                label="日期"
                width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                width="120">
        </el-table-column>
        <el-table-column
                prop="address"
                label="地址"
                show-overflow-tooltip>
        </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
        <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
        <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
</template>

<script>
    export default {
        name: "ProjectList",
        data(){
            return{
                projectheader:['项目编号','名字','地区'],
                //对象列表[{}]
                project_list:[
                    {'id':'1','name':'app1','add':'北京1'},
                    {'id':'2','name':'app2','add':'北京2'},
                    {'id':'3','name':'app3','add':'北京3'}
            ]
    }}

    }
</script>

<style scoped>
table {
    margin: auto;
    border: #2c3e50;
    width: 40%;
}
</style>