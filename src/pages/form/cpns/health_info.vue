<template>
    <div class="application_info">

        <van-form :model="FormData" label-align="top">
            <van-cell-group inset>
                <van-field v-model="FormData.health_info" label="是否患有影响本职工作的各种疾病（如：遗传病、慢性病、传染病等）以及需要休息的各种身体状况，如有，请列明："
                    placeholder="请填写健康状况" />
            </van-cell-group>
        </van-form>
    </div>
    <van-button type="default" block>保存</van-button>
</template>
  
<script setup>
import { ref } from "vue";
const FormData = ref({
    health_info: ""
})


</script>
  
  
<style lang="less" scoped>
.application_info {
    margin-top: 10px;
    padding-left: 10px;

    .application_info_tit {
        margin-bottom: 10px;
    }

    .work_tit {
        font-size: 14px;
        margin-left: 15px;
        margin-right: 10px;
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
  