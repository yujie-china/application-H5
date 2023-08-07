<!--
 * @Author: Cora huangyinlin@heyme.cn
 * @Date: 2023-08-03 10:54:38
 * @LastEditors: Cora huangyinlin@heyme.cn
 * @LastEditTime: 2023-08-04 10:37:29
 * @FilePath: \heyme.application.h5\src\pages\form\form.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template >
    <div class="nav-bar">
        <div class="back" @click="onClickLeft">返回</div>
        <div class="title">应聘人员登记表</div>
    </div>
    <van-collapse v-model="activeNames" accordion>
        <van-collapse-item title="一、申请信息" name="1">
            <application_info></application_info>
        </van-collapse-item>
        <van-collapse-item title="二、个人情况" name="2">
            <personal_info></personal_info>
        </van-collapse-item>
        <van-collapse-item title="三、家庭情况" name="3">
            <family_info></family_info>
        </van-collapse-item>
        <van-collapse-item title="四、教育情况" name="4">
            <education_info></education_info>
        </van-collapse-item>
        <van-collapse-item title="五、主要工作以及培训经历" name="5">
            <training_experience_info></training_experience_info>
        </van-collapse-item>
        <van-collapse-item title="六、资格证书" name="6">
            <certificates_info></certificates_info>
        </van-collapse-item>
        <van-collapse-item title="七、声明" name="7">
            <declare></declare>
        </van-collapse-item>
    </van-collapse>
    <van-button type="primary" to="/thanks" size="large">提交</van-button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const activeNames = ref('');

import { useRouter } from 'vue-router';
import application_info from "./cpns/application_info.vue";
import Certificates_info from "./cpns/certificates_info.vue";
import Declare from "./cpns/declare.vue";
import education_info from "./cpns/education_info.vue";
import family_info from "./cpns/family_info.vue";
import personal_info from "./cpns/personal_info.vue";
import Training_experience_info from "./cpns/training_experience_info.vue";

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

:deep(.van-cell--clickable) {
    height: 60px;
    align-items: center;
}

:deep(.van-cell__title) {
    font-size: 18px;
}

:deep(.van-field__label) {
    font-size: 16px;
}
</style>
