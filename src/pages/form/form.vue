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
        <van-collapse-item title="五、主要培训经历" name="5">
            <training_experience_info></training_experience_info>
        </van-collapse-item>
        <van-collapse-item title="六、技能" name="6">
            <skill_info></skill_info>
        </van-collapse-item>
        <van-collapse-item title="七、语言" name="7">
            <language_info></language_info>
        </van-collapse-item>
        <van-collapse-item title="八、工作经历" name="8">
            <work_experience></work_experience>
        </van-collapse-item>
        <van-collapse-item title="九、资格证书" name="9">
            <certificates_info></certificates_info>
        </van-collapse-item>
        <van-collapse-item title="十、健康状况" name="10">
            <health_info></health_info>
        </van-collapse-item>
        <van-collapse-item title="十一、在本公司任职的亲友及原同事" name="11">
            <community_info></community_info>
        </van-collapse-item>
        <van-collapse-item title="十二、声明" name="12">
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
import Community_info from "./cpns/community_info.vue";
import Declare from "./cpns/declare.vue";
import education_info from "./cpns/education_info.vue";
import family_info from "./cpns/family_info.vue";
import Health_info from "./cpns/health_info.vue";
import language_info from "./cpns/language_info.vue";
import personal_info from "./cpns/personal_info.vue";
import skill_info from "./cpns/skill_info.vue";
import Training_experience_info from "./cpns/training_experience_info.vue";
import Work_experience from "./cpns/work_experience.vue";
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
