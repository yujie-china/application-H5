<template>
    <div class="application_info">

        <van-form :model="FormData" label-align="top">
            <van-cell-group inset>
                <van-field v-model="FormData.cn_name" label="中文名" placeholder="请输入中文名" />
                <van-field v-model="FormData.eng_name" label="英文名" placeholder="请输入英文名" />
                <van-radio-group v-model="FormData.sex" direction="horizontal">
                    <span class="work_tit">性别</span>
                    <van-radio shape="square" icon-size="16px" name="1">男</van-radio>
                    <van-radio shape="square" icon-size="16px" name="2">女</van-radio>
                </van-radio-group>
                <van-field v-model="FormData.address" label="出生地" placeholder="出生地" />
                <van-field v-model="FormData.birth_time" is-link readonly name="datePicker" label="出生日期"
                    placeholder="点击选择时间" @click="showPicker1 = true" />
                <van-popup v-model:show="showPicker1" position="bottom">
                    <van-date-picker @confirm="onConfirm1" @cancel="showPicker1 = false" />
                </van-popup>
                <van-field v-model="FormData.location" label="户口所在地" placeholder="请输入户口所在地" />
                <van-field v-model="FormData.Native_place" label="籍贯" placeholder="请输入籍贯" />
                <van-field v-model="FormData.nation" label="民族" placeholder="请输入民族" />
                <van-field v-model="FormData.education_level" label="最高学历" placeholder="请输入最高学历" />
                <van-field v-model="FormData.political" label="政治面貌" placeholder="请输入政治面貌" />
                <van-field v-model="FormData.phone" label="手机号" placeholder="请输入手机号码" />
                <van-field v-model="FormData.fixed_phone" label="固定电话" placeholder="请输入手机号码" />
                <van-field v-model="FormData.ID_card" label="身份证号码" placeholder="请输入身份证号码" />
                <van-field v-model="FormData.email" label="电子邮箱（录用通知使用）" placeholder="请输入电子邮箱" />
                <van-field v-model="FormData.wx" label="微信号" placeholder="请输入微信号" />
                <van-radio-group v-model="FormData.marital" direction="horizontal">
                    <span class="work_tit">婚姻状况</span>
                    <van-radio shape="square" icon-size="16px" name="1">未婚</van-radio>
                    <van-radio shape="square" icon-size="16px" name="2">已婚</van-radio>
                    <van-radio shape="square" icon-size="16px" name="3">离异</van-radio>
                </van-radio-group>
                <van-field v-model="FormData.home_address" label="家庭住址" placeholder="请输入家庭住址" />
                <van-field v-model="FormData.emergency_phone" label="紧急联系人电话" placeholder="请输入紧急联系人电话" />
                <van-field v-model="FormData.living_place" label="现居住地" placeholder="请输入现居住地" />
            </van-cell-group>
        </van-form>
    </div>
    <van-button type="default" block>保存</van-button>
</template>
  
<script setup>
import { ref } from "vue";
const FormData = ref({
    cn_name: "",
    eng_name: "",
    sex: "1",
    address: "",
    location: "",
    Native_place: "",
    nation: "",
    education_level: "",
    political: "",
    phone: "",
    fixed_phone: "",
    ID_card: "",
    email: "",
    wx: "",
    marital: "1",
    home_address: "",
    emergency_phone: "",
    living_place: "",
    birth_time: ""
})


const Interview_time = ref("");
const showPicker1 = ref(false);
const onConfirm1 = ({ selectedValues }) => {
    FormData.value.birth_time = selectedValues.join('/');
    showPicker1.value = false;
};


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
  