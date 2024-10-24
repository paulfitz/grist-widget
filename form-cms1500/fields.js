(function() {

  const fields = [
    {
        "FieldType": "Text",
        "FieldName": "NUCC USE",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "40",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "57",
        "FieldFlags": "0",
        "FieldJustification": "Left",
        "FieldMaxLength": "28"
    },
    {
        "FieldType": "Text",
        "FieldName": "58",
        "FieldFlags": "0",
        "FieldJustification": "Left",
        "FieldMaxLength": "28"
    },
    {
        "FieldType": "Text",
        "FieldName": "41",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "50",
        "FieldFlags": "0",
        "FieldJustification": "Left",
        "FieldMaxLength": "19"
    },
    {
        "FieldType": "Text",
        "FieldName": "73",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "74",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "85",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "96",
        "FieldFlags": "0",
        "FieldJustification": "Left",
        "FieldMaxLength": "71"
    },
    {
        "FieldType": "Text",
        "FieldName": "99icd",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "135",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "157",
        "FieldFlags": "12582912",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "179",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "201",
        "FieldFlags": "12582912",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "223",
        "FieldFlags": "12582912",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "245",
        "FieldFlags": "12582912",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Button",
        "FieldName": "276",
        "FieldNameAlt": "On/Off Total",
        "FieldFlags": "0",
        "FieldJustification": "Left",
        "FieldStateOption": [
            "Off",
            "Yes"
        ]
    },
    {
        "FieldType": "Button",
        "FieldName": "Clear Form",
        "FieldNameAlt": "Clear Form",
        "FieldFlags": "65536",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "insurance_name",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "insurance_address",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "insurance_address2",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "insurance_city_state_zip",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "pt_name",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "insurance_id",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "ins_name",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Button",
        "FieldName": "insurance_type",
        "FieldFlags": "0",
        "FieldJustification": "Left",
        "FieldStateOption": [
            "Medicare",
            "Off",
            "Medicaid",
            "Tricare",
            "Champva",
            "Group",
            "Feca",
            "Other"
        ]
    },
    {
        "FieldType": "Text",
        "FieldName": "birth_mm",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "birth_dd",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "birth_yy",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Button",
        "FieldName": "sex",
        "FieldFlags": "0",
        "FieldJustification": "Left",
        "FieldStateOption": [
            "Off",
            "M",
            "F"
        ]
    },
    {
        "FieldType": "Text",
        "FieldName": "pt_street",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "pt_city",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "pt_state",
        "FieldFlags": "12582912",
        "FieldJustification": "Left",
        "FieldMaxLength": "3"
    },
    {
        "FieldType": "Text",
        "FieldName": "pt_zip",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "pt_AreaCode",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "3"
    },
    {
        "FieldType": "Text",
        "FieldName": "pt_phone",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Button",
        "FieldName": "rel_to_ins",
        "FieldFlags": "0",
        "FieldJustification": "Left",
        "FieldStateOption": [
            "S",
            "Off",
            "M",
            "C",
            "O"
        ]
    },
    {
        "FieldType": "Text",
        "FieldName": "ins_street",
        "FieldFlags": "12582912",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "ins_city",
        "FieldFlags": "12582912",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "ins_state",
        "FieldFlags": "0",
        "FieldJustification": "Left",
        "FieldMaxLength": "4"
    },
    {
        "FieldType": "Text",
        "FieldName": "ins_zip",
        "FieldFlags": "12582912",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "ins_phone area",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "3"
    },
    {
        "FieldType": "Text",
        "FieldName": "ins_phone",
        "FieldFlags": "12582912",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "ins_policy",
        "FieldFlags": "12582912",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "ins_dob_mm",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "ins_dob_dd",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "ins_dob_yy",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "4"
    },
    {
        "FieldType": "Button",
        "FieldName": "ins_sex",
        "FieldFlags": "0",
        "FieldJustification": "Left",
        "FieldStateOption": [
            "MALE",
            "Off",
            "FEMALE"
        ]
    },
    {
        "FieldType": "Text",
        "FieldName": "other_ins_name",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "other_ins_policy",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "ins_signature",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Button",
        "FieldName": "ins_benefit_plan",
        "FieldFlags": "0",
        "FieldJustification": "Left",
        "FieldStateOption": [
            "Off",
            "YES",
            "NO"
        ]
    },
    {
        "FieldType": "Text",
        "FieldName": "ins_plan_name",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "pt_signature",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "pt_date",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "cur_ill_mm",
        "FieldFlags": "8388608",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "cur_ill_dd",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "cur_ill_yy",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "ref_physician",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "id_physician",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "physician number 17a1",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "physician number 17a",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "sim_ill_mm",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "sim_ill_dd",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sim_ill_yy",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "work_mm_from",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "work_dd_from",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "work_yy_from",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "4"
    },
    {
        "FieldType": "Text",
        "FieldName": "work_mm_end",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "work_dd_end",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "work_yy_end",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "4"
    },
    {
        "FieldType": "Text",
        "FieldName": "hosp_mm_from",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "hosp_dd_from",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "hosp_yy_from",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "4"
    },
    {
        "FieldType": "Text",
        "FieldName": "hosp_mm_end",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "hosp_dd_end",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "hosp_yy_end",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "4"
    },
    {
        "FieldType": "Button",
        "FieldName": "lab",
        "FieldFlags": "0",
        "FieldJustification": "Left",
        "FieldStateOption": [
            "Off",
            "YES",
            "NO"
        ]
    },
    {
        "FieldType": "Text",
        "FieldName": "charge",
        "FieldFlags": "0",
        "FieldJustification": "Right"
    },
    {
        "FieldType": "Text",
        "FieldName": "medicaid_resub",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "original_ref",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "prior_auth",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "emg1",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "local1a",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv1_mm_from",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv1_dd_from",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv1_yy_from",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv1_mm_end",
        "FieldFlags": "8388608",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv1_dd_end",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv1_yy_end",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "diag1",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "ch1",
        "FieldFlags": "0",
        "FieldJustification": "Right"
    },
    {
        "FieldType": "Text",
        "FieldName": "day1",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv2_mm_from",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv3_mm_from",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv4_mm_from",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv5_mm_from",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv6_mm_from",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv2_dd_from",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv3_dd_from",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv4_dd_from",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv5_dd_from",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv6_dd_from",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv2_yy_from",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv3_yy_from",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv4_yy_from",
        "FieldFlags": "0",
        "FieldJustification": "Left",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv5_yy_from",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv6_yy_from",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv2_mm_end",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv3_mm_end",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv4_mm_end",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv5_mm_end",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv6_mm_end",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv2_dd_end",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv3_dd_end",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv4_dd_end",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv5_dd_end",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv6_dd_end",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv2_yy_end",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv3_yy_end",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv4_yy_end",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv5_yy_end",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "2"
    },
    {
        "FieldType": "Text",
        "FieldName": "sv6_yy_end",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "place2",
        "FieldFlags": "4194304",
        "FieldJustification": "Center",
        "FieldMaxLength": "3"
    },
    {
        "FieldType": "Text",
        "FieldName": "place3",
        "FieldFlags": "4194304",
        "FieldJustification": "Center",
        "FieldMaxLength": "3"
    },
    {
        "FieldType": "Text",
        "FieldName": "place4",
        "FieldFlags": "4194304",
        "FieldJustification": "Center",
        "FieldMaxLength": "3"
    },
    {
        "FieldType": "Text",
        "FieldName": "place5",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "3"
    },
    {
        "FieldType": "Text",
        "FieldName": "place6",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "3"
    },
    {
        "FieldType": "Text",
        "FieldName": "diag2",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "diag3",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "diag4",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "ch2",
        "FieldFlags": "0",
        "FieldJustification": "Right"
    },
    {
        "FieldType": "Text",
        "FieldName": "ch3",
        "FieldFlags": "0",
        "FieldJustification": "Right"
    },
    {
        "FieldType": "Text",
        "FieldName": "ch4",
        "FieldFlags": "0",
        "FieldJustification": "Right"
    },
    {
        "FieldType": "Text",
        "FieldName": "ch5",
        "FieldFlags": "0",
        "FieldJustification": "Right"
    },
    {
        "FieldType": "Text",
        "FieldName": "ch6",
        "FieldFlags": "0",
        "FieldJustification": "Right"
    },
    {
        "FieldType": "Text",
        "FieldName": "Suppla",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "Supplb",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "Supplc",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "Suppld",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "Supple",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "day2",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "day3",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "day4",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "day5",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "day6",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "emg2",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "emg3",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "emg4",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "emg5",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "emg6",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "local1",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "local2a",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "local2",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "local3a",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "local3",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "local4a",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "local4",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "local5a",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "local5",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "local6a",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "local6",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "tax_id",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "pt_account",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Button",
        "FieldName": "assignment",
        "FieldFlags": "0",
        "FieldJustification": "Left",
        "FieldStateOption": [
            "Off",
            "YES",
            "NO"
        ]
    },
    {
        "FieldType": "Text",
        "FieldName": "t_charge",
        "FieldFlags": "0",
        "FieldJustification": "Right"
    },
    {
        "FieldType": "Text",
        "FieldName": "amt_paid",
        "FieldFlags": "12582912",
        "FieldJustification": "Right"
    },
    {
        "FieldType": "Text",
        "FieldName": "physician_signature",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "physician_date",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "fac_name",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "fac_street",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "fac_location",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "doc_name",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "doc_street",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "doc_location",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "doc_phone area",
        "FieldFlags": "0",
        "FieldJustification": "Left",
        "FieldMaxLength": "3"
    },
    {
        "FieldType": "Text",
        "FieldName": "doc_phone",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "pin",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "grp",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Button",
        "FieldName": "employment",
        "FieldFlags": "0",
        "FieldJustification": "Left",
        "FieldStateOption": [
            "YES",
            "Off",
            "NO"
        ]
    },
    {
        "FieldType": "Button",
        "FieldName": "pt_auto_accident",
        "FieldFlags": "0",
        "FieldJustification": "Left",
        "FieldStateOption": [
            "YES",
            "Off",
            "NO"
        ]
    },
    {
        "FieldType": "Text",
        "FieldName": "accident_place",
        "FieldFlags": "12582912",
        "FieldJustification": "Left",
        "FieldMaxLength": "3"
    },
    {
        "FieldType": "Button",
        "FieldName": "other_accident",
        "FieldFlags": "0",
        "FieldJustification": "Left",
        "FieldStateOption": [
            "YES",
            "Off",
            "NO"
        ]
    },
    {
        "FieldType": "Text",
        "FieldName": "other_ins_plan_name",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "diagnosis1",
        "FieldFlags": "4194304",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "diagnosis4",
        "FieldFlags": "4194304",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "diagnosis3",
        "FieldFlags": "4194304",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "diagnosis2",
        "FieldFlags": "4194304",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "diagnosis5",
        "FieldFlags": "4194304",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "diagnosis6",
        "FieldFlags": "4194304",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "diagnosis7",
        "FieldFlags": "4194304",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "diagnosis8",
        "FieldFlags": "4194304",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "diagnosis9",
        "FieldFlags": "4194304",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "diagnosis10",
        "FieldFlags": "4194304",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "diagnosis11",
        "FieldFlags": "4194304",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "diagnosis12",
        "FieldFlags": "4194304",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Button",
        "FieldName": "ssn",
        "FieldFlags": "0",
        "FieldJustification": "Left",
        "FieldStateOption": [
            "Off",
            "SSN",
            "EIN"
        ]
    },
    {
        "FieldType": "Text",
        "FieldName": "place1",
        "FieldFlags": "0",
        "FieldJustification": "Center",
        "FieldMaxLength": "3"
    },
    {
        "FieldType": "Text",
        "FieldName": "diag6",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "diag5",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "type6",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "type5",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "cpt6",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "cpt5",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "cpt4",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod6",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod5",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod4",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod3",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod2",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod6a",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod5a",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod4a",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod3a",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod2a",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod1a",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod6b",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod5b",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod4b",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod3b",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod2b",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod1b",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod6c",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod5c",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod4c",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod3c",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod1c",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod2c",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "type1",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "type2",
        "FieldNameAlt": "type2",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "type3",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "type4",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "cpt1",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "cpt2",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "cpt3",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "mod1",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "pin1",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "grp1",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "Suppl",
        "FieldFlags": "0",
        "FieldJustification": "Left"
    },
    {
        "FieldType": "Text",
        "FieldName": "plan1",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "plan2",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "plan3",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "plan4",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "plan5",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "plan6",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "epsdt1",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "epsdt3",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "epsdt6",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "epsdt5",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "epsdt4",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    },
    {
        "FieldType": "Text",
        "FieldName": "epsdt2",
        "FieldFlags": "0",
        "FieldJustification": "Center"
    }
  ];


const formFields = document.formFields = {};
const allFields = document.allFields = [];
for (const field of fields) {
  let name = field.FieldName.replace(/ /g, '_');
  if (/^\d/.test(name)) {
    name = 'F' + name;
  }
  field['name'] = name;
  formFields[name] = field;
  allFields.push(field);
}

})();
