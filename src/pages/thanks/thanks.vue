<template  class="home">
    <div class="nav-bar">
        <div class="back" @click="onClickLeft">返回</div>
        <div class="title">应聘人员登记表</div>
    </div>
    <div class="logo">
        <img src="../../assets/imgs/heyme_logo.png" alt="">
    </div>
    <div class="wrap">
        <h1 class="tit">
            非常感谢您的填写，面试官将在10-15分钟之内到来，请您耐心等候。
        </h1>
        <div class="content">
            <div> 您也可以关注一下您感兴趣的内容</div>
        </div>
    </div>
    <div class="btns">
        <van-button type="primary" url="https://mp.weixin.qq.com/s/YeY6J8qarWdhjwLcNrtVMA">公司介绍</van-button>
        <van-button type="primary" url="http://ai.heyme.cn/login">heyme问道</van-button>
    </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const onClickLeft = function () {
    router.back()
}
</script>
<style lang="less" scoped>
.nav-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;
    line-height: 46px;
    border-bottom: 1px solid #f2f2f2;
    background-color: var(--primary-color);
    position: relative;

    .back {
        position: absolute;
        top: 0;
        left: 10px;
        font-size: 16px;
        color: #fff;
    }

    .title {
        color: #fff;
        font-size: 18px;
        font-weight: 600;
    }
}

.logo {
    img {
        width: 100px;
        height: 100px;
    }
}

.wrap {
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .tit {
        margin-bottom: 30px;
        font-size: 20px;
    }

    .content {
        font-size: 18px;
        display: flex;
        flex-direction: column;
        font-weight: 600;

        div {
            margin: 10px 0;
        }
    }

}

.btns {
    display: flex;
    justify-content: space-evenly;
}
</style>
