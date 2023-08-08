<template>
    <div class="application_info">

        <van-form :model="FormData" label-align="top">
            <van-cell-group inset class="flex-container">
                <van-row>
                    <van-col span="12">
                        <van-field v-model="FormData.cn_name" maxlength="11" label="中文名" :rules="cnameRules"
                            placeholder="请输入中文名" required />
                    </van-col>
                    <van-col span="12">
                        <van-field v-model="FormData.eng_name" maxlength="11" label="英文名" :rules="enameRules"
                            placeholder="请输入英文名" required />
                    </van-col>
                </van-row>
                <van-radio-group v-model="FormData.sex" direction="horizontal">
                    <span class="star_style">*</span><span class="work_tit">性别</span>
                    <van-radio shape="square" icon-size="16px" name="1">男</van-radio>
                    <van-radio shape="square" icon-size="16px" name="2">女</van-radio>
                </van-radio-group>
                <van-field v-model="FormData.birth_time" is-link readonly name="datePicker" label="出生日期"
                    placeholder="点击选择时间" @click="showPicker1 = true" required />
                <van-popup v-model:show="showPicker1" position="bottom">
                    <van-date-picker @confirm="onConfirm1" @cancel="showPicker1 = false" :min-date="minDate" />
                </van-popup>

                <van-radio-group direction="horizontal">
                    <van-field v-model="politicalValue" is-link readonly label="政治面貌" placeholder="请选择" required
                        @click="show = true" />
                    <van-popup v-model:show="show" round position="bottom">
                        <van-cascader v-model="politicalCascaderValue" title="请选择政治面貌" :options="options"
                            @close="show = false" style="font-size: 16px" @finish="onFinish" />
                    </van-popup>
                </van-radio-group>

                <van-radio-group v-model="FormData.marital" direction="horizontal">
                    <span class="star_style">*</span><span class="work_tit">婚姻状况</span>
                    <van-radio shape="square" icon-size="16px" name="1">未婚</van-radio>
                    <van-radio shape="square" icon-size="16px" name="2">已婚</van-radio>
                    <van-radio shape="square" icon-size="16px" name="3">离异</van-radio>
                </van-radio-group>

                <van-field v-model="locationValue" is-link readonly label="户口所在地" placeholder="请输入户口所在地"
                    @click="locationShow = true" required />
                <van-popup v-model:show="locationShow" round position="bottom">
                    <van-cascader v-model="FormData.locationCascaderValue" title="请选择所在地区" :options="locationOptions"
                        @close="locationShow = false" @finish="locationOnFinish" />
                </van-popup>

                <van-field v-model="livingValue" is-link readonly label="现居住地" placeholder="请输入现居住地"
                    @click="livingShow = true" required />
                <van-popup v-model:show="livingShow" round position="bottom">
                    <van-cascader v-model="FormData.livingCascaderValue" title="请选择所在地区" :options="livingOptions"
                        @close="livingShow = false" @finish="livingOnFinish" />
                </van-popup>



                <van-field v-model="nativeValue" is-link readonly label="籍贯" placeholder="请输入籍贯" @click="nativeShow = true"
                    required />
                <van-popup v-model:show="nativeShow" round position="bottom">
                    <van-cascader v-model="nativeCascaderValue" title="请选择所在地区" :options="nativeOptions"
                        @close="nativeShow = false" @finish="nativeOnFinish" />
                </van-popup>

                <van-col span="12">
                    <van-field v-model="FormData.nation" :rules="nationRules" maxlength="11" label="民族" placeholder="请输入民族"
                        required />
                </van-col>

                <van-field v-model="FormData.education_level" :rules="edulevelRules" maxlength="11" label="最高学历"
                    placeholder="请输入最高学历" required />
                <van-row>
                    <van-col span="12">
                        <van-field v-model="FormData.education_school" :rules="snameRules" maxlength="24" label="毕业学校"
                            placeholder="请输入毕业学校" required />
                    </van-col>
                    <van-col span="12">
                        <van-field v-model="FormData.education_major" :rules="majRules" maxlength="11" label="毕业专业"
                            placeholder="请输入毕业专业" required />
                    </van-col>
                </van-row>
                <van-field v-model="FormData.phone" :rules="mobileRules" label="手机号" placeholder="请输入手机号码" maxlength="11"
                    required />
                <van-field v-model="FormData.wx" :rules="wxRules" label="微信号" placeholder="请输入微信号" required />
                <van-field v-model="FormData.ID_card" :rules="IDcardRules" label="身份证号码" placeholder="请输入身份证号码"
                    maxlength="18" required />
                <van-field v-model="FormData.email" :rules="emailRules" label="常用邮箱（录用通知使用）" placeholder="请输入常用邮箱"
                    required />
                <van-field v-model="FormData.emergency_phone" :rules="mobileRules" label="紧急联系人电话" placeholder="请输入紧急联系人电话"
                    maxlength="11" required />
                <van-field v-model="FormData.sick" :rules="helRules" label="健康状况" placeholder=" 极好 很好 好 一般 差 " maxlength="2"
                    required />
                <van-field v-model="FormData.sick_level" :rules="healRules" maxlength="36"
                    label="是否患有影响本职工作的各种疾病（如：遗传病、慢性病、传染病等）以及需要休息的各种身体状态，如有，请列明" placeholder="请如实告知" required />
                <van-field v-model="FormData.certificate" maxlength="24" label="计算机及等级证书等" placeholder="计算机及等级证书等" />
                <van-radio-group v-model="FormData.isCar" direction="horizontal">
                    <span class="star_style">*</span><span class="work_tit">是否有驾驶证</span>
                    <van-radio class="work_kit_radio" shape="square" icon-size="16px" name="1">是</van-radio>
                    <van-radio class="work_kit_radio" shape="square" icon-size="16px" name="2">否</van-radio>
                </van-radio-group>
                <van-field v-if="FormData.isCar === '1'" v-model="FormData.level" label="驾照类型" placeholder="请输入驾照类型" />
                <van-field v-model="FormData.language" maxlength="11" label="语种" placeholder="请输入语种" />
                <van-radio-group v-model="FormData.isLevel" direction="horizontal">
                    <span style="margin-left: 16px;font-size: 16px;color: #323233;">水平</span>
                    <van-radio class="work_kit_radio" shape="square" icon-size="16px" name="1">流利</van-radio>
                    <van-radio class="work_kit_radio" shape="square" icon-size="16px" name="2">普通</van-radio>
                    <van-radio class="work_kit_radio" shape="square" icon-size="16px" name="3">略懂</van-radio>
                </van-radio-group>
                <van-field v-model="FormData.home_address" :rules="addressRules" label="家庭住址" placeholder="请输入家庭住址"
                    required />
                <van-field v-model="FormData.habit" :rules="hobbyRules" maxlength="11" label="兴趣爱好" placeholder="请输入兴趣爱好"
                    required />
            </van-cell-group>
        </van-form>
    </div>
    <van-button type="default" block @click="showSave">保存</van-button>
</template>

<script setup>
import { ref } from "vue";
import { useCascaderAreaData } from '@vant/area-data';
import {
    addressRules,
    cnameRules,
    edulevelRules,
    emailRules,
    enameRules,
    healRules,
    helRules,
    hobbyRules,
    IDcardRules,
    majRules,
    mobileRules,
    nationRules,
    snameRules,
    wxRules
} from "@/utils/rules.ts";
const minDate = ref(new Date("1970-01-01"));
const showSave = () => {
    showDialog({
        title: "保存成功",
    })
}
// const FormData = ref({
//     cn_name: "",
//     eng_name: "",
//     sex: "",
//     Native_place: "",
//     nation: "",
//     education_level: "",
//     education_school: "",
//     education_major: "",
//     level: "",
//     certificate: "",
//     phone: "",
//     ID_card: "",
//     email: "",
//     wx: "",
//     marital: "",
//     home_address: "",
//     emergency_phone: "",
//     birth_time: "",
//     habit: "",
//     language: "",
//     isLevel: "",
//     isCar: "",
//     sick: "",
//     sick_level: "",
//     politicalCascaderValue: "",
//     locationCascaderValue: "",
//     livingCascaderValue: ""
// })

import { storeToRefs } from "pinia"

import useApplicationStore from "@/store/main/application";
const applicationStore = useApplicationStore()
const { mainFormData } = storeToRefs(applicationStore)
const FormData = mainFormData

const showPicker1 = ref(false);
const onConfirm1 = ({ selectedValues }) => {
    FormData.value.birth_time = selectedValues.join('/');
    showPicker1.value = false;
};

const show = ref(false);
const politicalValue = ref('');
const politicalCascaderValue = ref('');
// 选项列表，children 代表子选项，支持多级嵌套
const options = [
    {
        text: '群众',
        value: '1'
    },
    {
        text: '中共党员',
        value: '2'
    },
    {
        text: '中共预备党员',
        value: '3'
    },
    {
        text: '共青团员',
        value: '4'
    },
    {
        text: '民革党员',
        value: '5'
    },
    {
        text: '民盟盟员',
        value: '6'
    },
    {
        text: '民建会员',
        value: '7'
    },
    {
        text: '民进会员',
        value: '8'
    },
    {
        text: '农工党党员',
        value: '9'
    },
    {
        text: '致公党党员',
        value: '10'
    },
    {
        text: '九三学社社员',
        value: '11'
    },
    {
        text: '台盟盟员',
        value: '12'
    },
    {
        text: '无党派人士',
        value: '13'
    },
];
// 全部选项选择完毕后，会触发 finish 事件
const onFinish = ({ selectedOptions }) => {
    show.value = false;
    politicalValue.value = selectedOptions.map((option) => option.text).join('/');
};
//地区
const locationShow = ref(false);
const locationValue = ref('');
const locationOptions = useCascaderAreaData();
const locationOnFinish = ({ selectedOptions }) => {
    locationShow.value = false;
    locationValue.value = selectedOptions.map((option) => option.text).join('/');
};

const livingShow = ref(false);
const livingValue = ref('');
const livingOptions = useCascaderAreaData();
const livingOnFinish = ({ selectedOptions }) => {
    livingShow.value = false;
    livingValue.value = selectedOptions.map((option) => option.text).join('/');
};

const nativeShow = ref(false);
const nativeValue = ref('');
const nativeOptions = useCascaderAreaData();
const nativeOnFinish = ({ selectedOptions }) => {
    nativeShow.value = false;
    nativeValue.value = selectedOptions.map((option) => option.text).join('/');
};

</script>


<style lang="less" scoped>
.box {
    display: flex;
    padding: 10px;
}

.box1 {
    margin-right: 10px;
    margin-left: 10px;
}

.application_info {
    margin-top: 10px;
    padding-left: 10px;

    .application_info_tit {
        margin-bottom: 10px;
    }

    .star_style {
        margin-left: 16px;
        color: red;
    }

    .work_tit {
        font-size: 16px;
        margin-left: 3px;
        margin-right: 10px;
        color: black;
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
