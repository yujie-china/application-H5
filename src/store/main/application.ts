import { defineStore } from "pinia"
// import { applyMainFormData } from "@/service/main/main"
export const useApplicationStore = defineStore("application", {
    state: () => ({
        mainFormData: {
            age: "",
            position: "",
            other_position: "",
            price: "",
            job_status: "",
            come_time: "",
            is_business_trip: "",
            isFriend: "",
            friend_name: "",
            community: "",
            office: "",
            isAgain: "",
            re_position: "",
            interview_time: "",
            cascaderValue: "",
            road: "",
            cn_name: "",
            eng_name: "",
            sex: "",
            birth_time: "",
            politicalCascaderValue: "",
            marital: "",
            locationCascaderValue: "",
            livingCascaderValue: "",
            nativeCascaderValue: "",
            nation: "",
            education_level: "",
            education_school: "",
            education_major: "",
            phone: "",
            wx: "",
            ID_card: "",
            email: "",
            emergency_phone: "",
            sick: "",
            sick_level: "",
            certificate: "",
            isCar: "",
            level: "",
            language: "",
            isLevel: "",
            home_address: "",
            habit: "",
            confirmed: "",
            application_name: "",
            apply_time: "",
        },
        certificatesFormData: [{
            certificate_name: "",
            certificate_id: "",
            certificate_end_time: "",
        }],
        educationFormData: [{
            school_name: "",
            major: "",
            study_way: "",
            qualifications: "",
            start_time: "",
            end_time: ""
        }],
        familyFormData: [{
            member_name: "",
            relations: "",
            workplace: "",
            family_home: "",
            family_phone: ""
        }],
        work_experienceFormData: [{
            workstart_time: "",
            workend_time: "",
            company_name: "",
            position: "",
            treatment: "",
            leave_reason: "",
            superior_phone: ""
        }],
        train_experienceFormData: [{
            trainingTime: "",
            trainingLocation: "",
            trainingCourse: ""
        }]


    }),
    actions: {
    },

})

export default useApplicationStore