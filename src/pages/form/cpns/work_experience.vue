<template>
    <div class="application_info">

        <van-form label-align="top">
            <van-cell-group inset v-for="(FormData, index) in FormDatas" :key="index">
                <van-field v-model="FormData.start_time" is-link readonly name="datePicker" label="任职起始时间"
                    placeholder="点击选择时间" @click="showPicker1[index] = true" />
                <van-popup v-model:show="showPicker1[index]" position="bottom">
                    <van-date-picker @confirm="onConfirm1($event, index)" @cancel="showPicker1[index] = false" />
                </van-popup>
                <van-field v-model="FormData.end_time" is-link readonly name="datePicker" label="任职结束时间"
                    placeholder="点击选择时间" @click="showPicker2[index] = true" />
                <van-popup v-model:show="showPicker2[index]" position="bottom">
                    <van-date-picker @confirm="onConfirm2($event, index)" @cancel="showPicker2[index] = false" />
                </van-popup>
                <van-field v-model="FormData.company_name" label="公司名称" placeholder="请输入公司名称" />
                <van-field v-model="FormData.company_phone" label="公司电话" placeholder="请输入公司电话" />
                <van-field v-model="FormData.position" label="所任职位" placeholder="请输入所任职位" />
                <van-field v-model="FormData.treatment" label="离职待遇" placeholder="请输入离职待遇" />
                <van-field v-model="FormData.leave_reason" label="离职原因" placeholder="请输入离职原因" />
                <van-field v-model="FormData.superior_phone" label="直接上级及电话" placeholder="请输入直接上级及电话" />
            </van-cell-group>
            <div class="btns">
                <van-button icon="plus" type="primary" @click="addForm" />
                <van-button icon="minus" type="primary" @click="reduceForm" :disabled="FormDatas.length === 1" />
            </div>
        </van-form>
    </div>
    <van-button type="default" block>保存</van-button>
</template>
  
<script setup>
import { ref } from "vue";
const FormDatas = ref([{
    company_name: "",
    company_phone: "",
    position: "",
    treatment: "",
    leave_reason: "",
    superior_phone: "",
    start_time: "",
    end_time: ""
}])
const addForm = () => {
    FormDatas.value.push({
        company_name: "",
        company_phone: "",
        position: "",
        treatment: "",
        leave_reason: "",
        superior_phone: "",
        start_time: "",
        end_time: ""
    });
};
const reduceForm = () => {
    if (FormDatas.value.length > 1) {
        FormDatas.value.pop();
    }
};

//时间
const showPicker1 = ref(Array(FormDatas.value.length).fill(false));
const showPicker2 = ref(Array(FormDatas.value.length).fill(false));
const onConfirm1 = ({ selectedValues }, index) => {
    FormDatas.value[index].start_time = selectedValues.join("/");
    showPicker1.value[index] = false;
};
const onConfirm2 = ({ selectedValues }, index) => {
    FormDatas.value[index].end_time = selectedValues.join("/");
    showPicker2.value[index] = false;
};

</script>
  
  
<style lang="less" scoped>
.application_info {
    margin-top: 10px;
    padding-left: 10px;

    .application_info_tit {
        margin-bottom: 10px;
    }

    .btns {
        display: flex;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    /deep/.van-button {
        border-radius: 50px;
        margin: 0 auto;
        display: block;
    }

}
</style>
  