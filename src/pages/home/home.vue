
<template  class="home">
    <div class="logo">
        <img src="../../assets/imgs/heyme_logo.png" alt="">
    </div>
    <div class="wrap">
        <h1 class="tit">
            应聘人员登记表
        </h1>
        <div class="content">
            <div>1.非常感谢您应聘海默股份相关职位，我们将致力为您提供公平的就业机会。</div>
            <div>2.请您如实填写个人资料，您所填写的资料将会被视为机密，我公司将为您做好保密工作。</div>
            <div>3.请您按照提示规则选项来进行填写，这也会是我们考察的一项，祝您好运！</div>
            <div>4.<span style="color: red;">*</span>为必填项</div>
        </div>
    </div>
    <div class="button">
        <van-button type="primary" to="/template/form">开始填写</van-button>
    </div>
</template>
<script lang="ts" setup>
</script>
<style lang="less" scoped>
.button {
    font-size: 18px;
    padding: 6px 12px;
    display: flex;
    justify-content: center;
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
        margin-bottom: 50px;
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
</style>
