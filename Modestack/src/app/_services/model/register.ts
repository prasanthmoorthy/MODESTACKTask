export class DoctorRegister {
    Doctor_ID: number;
    Doctor_First_Name: string;
    Doctor_Last_Name: string;
    Contact_Number: string;
    Country_Name: string;
    State_Name: string;
    City_Name: string;
    Pincode: string;
    Latitude: number;
    Longitude: number;
    Specialization: string;
    Registration_Number: string;
    Is_Valid: boolean;
    IS_Available: boolean;
    Disclaimer: boolean;
    Doctor_Availability: DoctorAvailability[] = [] as any;
    // who is doing the action
    LoginId: number;
}

export class DoctorAvailability {
    Doctor_ID: number;
    Time_Schedule_Type_ID: number;
    Availibility: string;
    Week_Type_ID: number;
    Week: string;
    Week_List_ID: number;
    Day: string;
    From_Minutes: number;
    To_Minutes: number;
    // dropdown
    From_Hour_Select: number;
    From_Minutes_Select: number;
    To_Hour_Select: number;
    To_Minutes_Select: number;
}

export class PatientRegister {
    Patient_ID: number;
    Patient_First_Name: string;
    Patient_Last_Name: string;
    Contact_Number: string;
    Age: number;
    Gender_ID: number;
    Country_Name: string;
    State_Name: string;
    City_Name: string;
    Pincode: string;
    Latitude: number;
    Longitude: number;
    Symptoms_IDs: string;
    Health_History_IDs: string;
    Travel_Information_ID: number;
    Arrival_ID: number;
    Severity_contract_confirmed_cases: number;
    Patient_Severity_Level_ID: number;
    Patient_Severity_Remarks: string;
    Active: number; 
    // who is doing the action
    LoginId: number;
    Gender: string;
    Symptoms: string;
    Health_History: string;
    Travel_Information: string;
    Arrival: string;
    Severity_contract_confirmed_cases_Name: string;
    Patient_Name: string;
    Doctor_Advice: string;
    Doctor_Prescription: string;
    Doctor_Name: string;
    Visited_Date: Date;
}

export class Checkbox { 
    IsActive: boolean;
    Value: string;
}

export class Result {
    Doctor_Contact_Number: string;
    Msg: string;
    Flag: boolean;
    RiskFlag: boolean;
}

export class UpdateDoctorPrescription {
    Doctor_ID: number;
    Patient_Contact_Number: string;
    Doctor_Advice: string;
    Doctor_Prescription: string;
}
