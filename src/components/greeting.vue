<template>
    <div class="msg">
        <!-- 插值表达式 data对象引入变量-->
        <p>{{message}} {{name}}</p>
        <!-- 绑定属性值用v-bind  v-开头是vue的指令-->
        <span v-bind:title="dream">v-bind设置属性值</span>
        <!-- v-if  判断元素是否显示 每次都会创建或删除元素-->
        <p v-if="isDisplay">v-if测试</p>
        <!-- v-show  判断元素是否显示 控制元素dispaly属性 -->
        <p v-show="isShow">v-show测试</p>
        <!-- v-on =@  事件  事件触发后执行js -->
        <span @click="username='我 '">有一天{{username}}想去上网</span><p></p>
        <!-- @click="函数名"-->
        <span @click="change_name('我们')">有一天{{username}}想去上网</span><p></p>
        <!-- v-if  v-elif v-else -->
        <span v-if="age >=18 & age<=60">愉快上网</span>
        <span v-else-if="age >60">回家休息</span>
        <span v-else>回家写作业去</span>
    </div>
</template>

<script>
    export default {
        name: "greeting",
        data(){
            return {
                message:"hello python开发",
                name:"ceshi",
                dream:"目标",
                isDisplay:true,
                isShow:true,
                username:"马仔",
                age:70
            }
        },
        methods:{ //js函数方法 名称：function（参数）
            change_name(name) {
                this.username=name  //this =self
            }
        }
    }
</script>

<style scoped>
    .msg p{
        color: blue;
    }
</style>