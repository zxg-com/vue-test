<template>
    <view class="content">
        <view class="text-area">
            <text @click="toGo">点击我跳转页面哦</text>
        </view>
        <mo-ban ref="hellosss"></mo-ban>
    </view>
</template>

<script>
    import moBan from '@/pages/moBan/moBan';
    export default {
        components: {
            moBan
        },
        data() {
            return {
                title: 'Hello'
            };
        },
        methods: {
            toGo() {
                //拿到父组件的hello变量
                console.debug('我是接受参数的', this.$refs.hellosss.hello);
                //输出：我是接受参数的 我才有一个参数需要你进行接受
            }
        }
    };
</script>