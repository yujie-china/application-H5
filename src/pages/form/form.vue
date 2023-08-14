
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
        <van-collapse-item title="五、主要工作以及培训经历(有则填写)" name="5">
            <training_experience_info></training_experience_info>
        </van-collapse-item>
        <van-collapse-item title="六、资格证书(有则填写)" name="6">
            <certificates_info></certificates_info>
        </van-collapse-item>
        <van-collapse-item title="七、声明" name="7">
            <declare></declare>
        </van-collapse-item>
    </van-collapse>
    <van-button type="primary" size="large" to="/thanks" @click="update">提交</van-button>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRouter } from 'vue-router';
import application_info from "./cpns/application_info.vue";
import Certificates_info from "./cpns/certificates_info.vue";
import Declare from "./cpns/declare.vue";
import education_info from "./cpns/education_info.vue";
import family_info from "./cpns/family_info.vue";
import personal_info from "./cpns/personal_info.vue";
import Training_experience_info from "./cpns/training_experience_info.vue";
import { applyMainFormData } from "@/service/main/main"
import { storeToRefs } from "pinia"
import useApplicationStore from "@/store/main/application";
const activeNames = ref('');
const router = useRouter()
const onClickLeft = function () {
    router.back()
}
const update = () => {
    const applicationStore = useApplicationStore()
    const { mainFormData, certificatesFormData, educationFormData, familyFormData, work_experienceFormData, train_experienceFormData } = storeToRefs(applicationStore)

    //新对象
    const combinedFormData = ref({})

    // 将所有FormData的字段都合并到一个新对象中
    for (const key in mainFormData.value) {
        combinedFormData[key] = mainFormData.value[key];
    }
    certificatesFormData.value.forEach((certData, index) => {
        for (const key in certData) {
            const newKey = `${key}${index + 1}`;
            combinedFormData[newKey] = certData[key];
        }
    });
    educationFormData.value.forEach((eduData, index) => {
        for (const key in eduData) {
            const newKey = `${key}${index + 1}`;
            combinedFormData[newKey] = eduData[key];
        }
    });
    familyFormData.value.forEach((familyData, index) => {
        for (const key in familyData) {
            const newKey = `${key}${index + 1}`;
            combinedFormData[newKey] = familyData[key];
        }
    });
    work_experienceFormData.value.forEach((workData, index) => {
        for (const key in workData) {
            const newKey = `${key}${index + 1}`;
            combinedFormData[newKey] = workData[key];
        }
    });
    train_experienceFormData.value.forEach((trainData, index) => {
        for (const key in trainData) {
            const newKey = `${key}${index + 1}`;
            combinedFormData[newKey] = trainData[key];
        }
    });
    applyMainFormData(combinedFormData);
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
