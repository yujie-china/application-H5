
<template>
    <div class="language_info">

        <van-form :model="FormData" label-align="top">
            <van-cell-group inset>
                <van-radio-group v-model="FormData.isAgain" direction="horizontal">
                    <span class="work_tit">英语</span>
                    <van-radio class="work_kit_radio" shape="square" icon-size="16px" name="1">流利</van-radio>
                    <van-radio class="work_kit_radio" shape="square" icon-size="16px" name="2">普通</van-radio>
                    <van-radio class="work_kit_radio" shape="square" icon-size="16px" name="3">略懂</van-radio>
                </van-radio-group>
                <van-field v-model="FormData.other_language" label="其他语言" placeholder="其他语言" />
            </van-cell-group>
        </van-form>
    </div>
    <van-button type="default" block>保存</van-button>
</template>
  
<script setup>
import { ref } from "vue";
const FormData = ref({
    other_language: "",
    isAgain: "1",

})


</script>
  
  
<style lang="less" scoped>
.language_info {
    margin-top: 10px;
    padding-left: 10px;

    .language_info_tit {
        margin-bottom: 10px;
    }

    .work_tit {
        font-size: 14px;
        margin-left: 15px;
        margin-right: 10px;
        margin-top: 10px;
    }

    .work_kit_radio {
        margin-top: 10px;
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
  