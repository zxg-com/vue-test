<template>
    <table>
        <tr>
            <th v-for="(project,key) in projectheader" v-bind:key="key">{{project}}</th>
        </tr>
        <!-- v-for循环  key的目的是为了有序，需死记 等同于index -->
        <tr v-for="(item,key) in project_list" v-bind:key="key">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.add}}</td>
        </tr>
    </table>
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
        }
    }}
</script>

<style scoped>
table {
    margin: auto;
    border: #2c3e50;
    width: 40%;
}
</style>