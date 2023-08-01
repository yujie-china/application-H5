
<template>
    <div class="skill_info">

        <van-form :model="FormData" label-align="top">
            <van-cell-group inset>
                <van-field v-model="FormData.certificate" label="计算机及等级证书等" placeholder="计算机及等级证书等" />
                <van-field v-model="FormData.level" label="是否有驾驶证及熟练程度" placeholder="专业" />
            </van-cell-group>
        </van-form>
    </div>
    <van-button type="default" block>保存</van-button>
</template>
  
<script setup>
import { ref } from "vue";
const FormData = ref({
    level: "",
    certificate: "",

})


</script>
  
  
<style lang="less" scoped>
.skill_info {
    margin-top: 10px;
    padding-left: 10px;

    .skill_info_tit {
        margin-bottom: 10px;
    }

    .work_tit {
        font-size: 14px;
        margin-left: 15px;
    }

    .road {
        display: flex;
        flex-wrap: wrap;
        padding: 0 14px;

        .input_other {
            padding: 0;

        }
    }

}
</style>
  