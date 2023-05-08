import { alKhobar, archiveBook, balloon, balloons, cake, camera, candy, cateringBG, confetti, dammam, dish_1, dish_2, downArrow, egypt, event_1, event_2, event_3, filter, flowerBG, gifts, jeddah, jordan, locationTick, madina, mecca, messages, notification, oman, perfumeBG, photographer_1, photographer_2, photographer_3, profile, qatar, riyadh, saudiArabia, sort, sudan, tabuk, taif, translate, unitedArabEmirates, Yemen, yemen } from "../assets/images";
import { brandColors } from "../components/Core/basicStyles";
// import {
//   IC_Insulin,
//   IC_Tablets,
//   IC_Other,
//   IC_Blood_SugarOut,
//   IC_BloodPressureAndPulse,
//   IC_Weight,
//   IC_Mind_MentalHealth,
//   IC_Abs,
// } from "./images";
const imageURL = "https://balloons-dezen.s3.ap-south-1.amazonaws.com/"

const SK_KEY =
  "";
const ChartTimeData = [
  { id: 0, name: "Week", slug: 7 },
  { id: 1, name: "Month", slug: 30 },
  { id: 2, name: "Year", slug: 365 },
];
const navigationData = [
  { id: 1, name: "Blood Sugar" },
  { id: 2, name: "Blood Pressure & Pulse" },
  { id: 3, name: "Weight & Waistline" },
  { id: 4, name: "Mind and Mental Health" },
];
const navigationChartData = [
  { id: 1, name: "Blood Sugar" },
  { id: 2, name: "Blood Pressure & Pulse" },
  { id: 3, name: "Weight" },
  { id: 4, name: "Waistline" },
  { id: 5, name: "Mind and Mental Health" },
];

const onboarding_3_Items = [
  { id: 0, name: "Track my Sugar", slug: "trackSugar", checked: false },
  {
    id: 1,
    name: "Get regular tests and health check-ups done",
    slug: "getRegularCheckup",
    checked: false,
  },
  {
    id: 2,
    name: "Need a personalized Diabetes Plan",
    slug: "needPersonalizedDiabetesPlan",
    checked: false,
  },
  { id: 3, name: "Monitor my diet", slug: "monitorDiet", checked: false },
  {
    id: 4,
    name: "Focus on my fitness",
    slug: "focusOnMyFitness",
    checked: false,
  },
  {
    id: 5,
    name: "Medicine Dosage Reminders",
    slug: "medicineDosageReminders",
    checked: false,
  },
  { id: 6, name: "Other", slug: "otherHealthGoal", checked: false },
];
const onboarding_4_Items = [
  {
    name: "Cholesterol/Triglycerides",
    slug: "havingCholesterolOrTriglycerides",
    id: 0,
    checked: false,
  },
  {
    name: "Blood Pressure",
    id: 1,
    slug: "havingBloodPressure",
    checked: false,
  },
  { name: "Diabetes", id: 2, slug: "havingDiabetes", checked: false },
  {
    name: "History of Heart Problems",
    slug: "havingHistoryOfHeartProblem",
    id: 3,
    checked: false,
  },
  { name: "Fatty Liver", id: 4, slug: "havingThyroid", checked: false },
  {
    name: "Kidney Problems",
    id: 5,
    slug: "havingKidneyProblem",
    checked: false,
  },
  {
    name: "Stress and Mental Problems",
    slug: "havingStressAndMentalProblem",
    id: 6,
    checked: false,
  },
  { name: "Obesity", slug: "havingObesity", id: 7, checked: false },
  {
    name: "None of the above",
    slug: "noHealthConditionTrouble",
    id: 8,
    checked: false,
  },
];

const onboarding_5_Items = [
  { name: "Pain in legs", slug: "havingPainInLegs", id: 0, checked: false },
  {
    name: "Numbness or burning sensation in skin",
    slug: "havingNumbnessOrBurningInSkin",
    id: 1,
    checked: false,
  },
  {
    name: "Frequent Urination",
    slug: "havingFrequentUrination",
    id: 2,
    checked: false,
  },
  { name: "Back Pain", slug: "havingBackPain", id: 3, checked: false },
  {
    name: "Breathing difficulty or shortness of breath",
    slug: "havingBreathingDifficulty",
    id: 4,
    checked: false,
  },
  {
    name: "Blurry or spotty eyesights",
    slug: "havingBlurryOrSpottyEyeSight",
    id: 5,
    checked: false,
  },
  { name: "Sexual issues", slug: "havingSexualIssues", id: 6, checked: false },
  {
    name: "None of the above",
    slug: "noSymptomsFacing",
    id: 7,
    checked: false,
  },
];

let onboarding_6_Items = [];
let onboarding_None = [false];
const radio_props = [
  {
    label: "I take allopathic medicines for my condition(s)",
    id: 0,
    // image: IC_Tablets,
    checked: false,
    slug: "takeAllopathicMedicine",
  },
  {
    label: "I am taking insulin for diabetes",
    slug: "takeInsulinForDiabetes",
    id: 1,
    // image: IC_Insulin,
    checked: false,
  },
  {
    label: "I am taking ayurvedic medicines for my condition(s)",
    slug: "takeAyurvedicMedicine",
    id: 2,
    // image: IC_Tablets,
    checked: false,
  },
  {
    label: "Other",
    slug: "otherMedicineInfo",
    id: 3,
    // image: IC_Other,
    checked: false,
  },
];
const chartTitleData = [
  {
    id: 0,
    title: "Your chart Data",
    // image: IC_Blood_SugarOut
  },
  {
    id: 1,
    title: "Your blood sugar",
    // image: IC_Blood_SugarOut
  },
  {
    id: 2,
    title: "Your blood pressure & pulse",
    // image: IC_BloodPressureAndPulse
  },
  {
    id: 3,
    title: "Your weight",
    // image: IC_Weight
  },
  {
    id: 4,
    title: "Your waistline",
    // image: IC_Abs
  },
  {
    id: 5,
    title: "Your mind and mental health",
    // image: IC_Mind_MentalHealth
  },
];

const countryList = [
  { id: 0, name: "Yemen", image: Yemen },
  { id: 1, name: "Saudi arabia", image: saudiArabia },
  { id: 2, name: "Qatar", image: qatar },
  { id: 3, name: "Sudan", image: sudan },
  { id: 4, name: "Oman", image: oman },
  { id: 5, name: "Egypt", image: egypt },
  { id: 6, name: "UAE", image: unitedArabEmirates },
  { id: 7, name: "Jordan", image: jordan },
];
const accountSettings = [
  { id: 0, name: "Profile", image: profile, screenName: 'MyProfile', },
  { id: 1, name: "Saved Addresses", image: locationTick, screenName: 'SelectAddress' },
  { id: 2, name: "Select Language", image: translate, screenName: 'ChooseLanguage' },
  { id: 3, name: "Notification Settings", image: notification, screenName: 'Notification' },
];
const menuList = [
  { id: 0, dishType: "Main Dish", dishList: [{ item1: 'Meat Burger', item2: 'برجر لحم' }, { item1: 'Chickens Burger', item2: 'برجر دجاج' }] },
  { id: 1, dishType: "Sides", dishList: [{ item1: 'Fries + Sauce', item2: 'بطاطس + صوص' }] },
  { id: 2, dishType: "Drinks", dishList: [{ item1: 'Soft Drinks', item2: 'المشروبات الغازية' }] },
  { id: 3, dishType: "Note", dishList: [{ item1: 'Service time : 2-3 hours', item2: 'Order Should be made atleast 24 hourse before the events.' }] }
];
const legalPolicies = [
  { id: 0, name: "Terms of use", image: profile },
  { id: 1, name: "Privacy Policy", image: locationTick },
  { id: 2, name: "License", image: translate },
  { id: 3, name: "Returns Policy", image: notification },
];
const notificationList = [
  { id: 0, name: "Pause-All", image: profile },
  { id: 1, name: "In-app", image: locationTick },
  { id: 2, name: "SMS", image: translate },
  { id: 3, name: "Email", image: notification },
  { id: 4, name: "WhatsApp", image: notification },
];
const accountSettings1 = [
  { id: 0, name: "Reviews", image: messages, screenName: 'MyReviews' },
];
const accountSettings2 = [
  { id: 0, name: "Terms, Policies and Licenses", image: archiveBook, screenName: 'LegalPolicies' },
];
const cityList = [
  { id: 0, name: "Riyadh", image: riyadh },
  { id: 1, name: "Taif", image: taif },
  { id: 2, name: "Madina", image: madina },
  { id: 3, name: "Mecca", image: mecca },
  { id: 4, name: "Tabuk", image: tabuk },
  { id: 5, name: "Dammam", image: dammam },
  { id: 6, name: "Jeddah", image: jeddah },
  { id: 7, name: "Al Khobar", image: alKhobar },
];
const paymentList = [
  { id: 0, name: "UPI", image: riyadh },
  { id: 1, name: "Credit/Debit", image: taif },
  { id: 2, name: "Cash on Delivery", image: madina },
  { id: 3, name: "Net Banking", image: mecca },
];
const homeList = [
  {
    id: 26, name: "Flower", image: flowerBG
  },
  { id: 1, name: "Confetti", image: confetti },
  { id: 24, name: "Cake", image: cake },
  { id: 3, name: "Candy", image: candy },
  { id: 4, name: "Gifts", image: gifts },
  { id: 5, name: "Balloons", image: balloons },
  { id: 6, name: "Perfume", image: perfumeBG },
  { id: 7, name: "PhotoShoot", image: camera },
];
const eventList = [
  {
    id: 0, name: "Wedding", image: event_1
  },
  { id: 1, name: "Engagements", image: event_2 },
  { id: 2, name: "Office Party", image: event_3 },
  { id: 3, name: "Corporate Dinner", image: event_1 },
];
const foodList = [
  {
    id: 0, name: "Restaurant Name", image: dish_1
  },
  { id: 1, name: "Restaurant Name", image: dish_2 },
  { id: 2, name: "Office Party", image: dish_2 },
  { id: 3, name: "Corporate Dinner", image: dish_1 },
];
const photographerList = [
  {
    id: 0, name: "Jeddah", image: photographer_1
  },
  { id: 1, name: "Selly", image: photographer_2 },
  { id: 2, name: "Jhon", image: photographer_3 },
  { id: 3, name: "Rozi", image: photographer_1 },
];
const categoryList = [
  {
    id: 0, name: "Flower", image: flowerBG
  },
  { id: 1, name: "Confetti", image: confetti },
  { id: 2, name: "Cake", image: cake },
  { id: 3, name: "Gifts", image: gifts },
  { id: 4, name: "Balloons", image: balloons },
  { id: 5, name: "Perfume", image: perfumeBG },
  { id: 6, name: "Catering", images: cateringBG },
  { id: 7, name: "PhotoShoot", images: camera },
  // { id: 5, name: "Candy", image: candy },
];

const navBarList = [
  { id: 0, name: "FILTER", image: filter },
  { id: 1, name: "Sort", image: sort },
  { id: 2, name: "Brand", image: downArrow },
  { id: 3, name: "Occasion", image: downArrow },
  { id: 4, name: "Type", image: downArrow },
  { id: 5, name: "Discount", image: downArrow },
];

const bestSellerList = [
  { id: 0, image: balloon, company: "Riyadh", title: 'White Lilies', venderName: 'Vender Name', amount: '349.0', discount: '450.00' },
  { id: 1, image: balloon, company: "Taif", image: flowerBG, title: 'White Lilies', venderName: 'Vender Name', amount: '349.0', discount: '450.00' },
  { id: 2, image: balloon, company: "Madina", title: 'White Lilies', venderName: 'Vender Name', amount: '349.0', discount: '450.00' },
  { id: 3, image: gifts, company: "Mecca", title: 'White Lilies', venderName: 'Vender Name', amount: '349.0', discount: '450.00' },
  { id: 4, image: balloons, company: "Tabuk", title: 'White Lilies', venderName: 'Vender Name', amount: '349.0', discount: '450.00' },
  { id: 5, image: perfumeBG, company: "Dammam", title: 'White Lilies', venderName: 'Vender Name', amount: '349.0', discount: '450.00' },
  { id: 6, image: cake, company: "Jeddah", title: 'White Lilies', venderName: 'Vender Name', amount: '349.0', discount: '450.00' },
];

const bloodPressureColorBarData = [
  { id: 0, name: "Systolic", color: brandColors.messageColor },
  { id: 1, name: "Diastolic", color: brandColors.diastolicColor },
  { id: 2, name: "Pulse", color: brandColors.redColor },
];
const filterList = [
  { id: 0, name: "For Her (65)", color: brandColors.messageColor },
  { id: 1, name: "For Him (85)", color: brandColors.diastolicColor },
  { id: 2, name: "For Kids (15)", color: brandColors.redColor },
  { id: 3, name: "For Babies (03)", color: brandColors.redColor },
];

const weightColorBarData = [
  { id: 0, name: "Weight", color: brandColors.messageColor },
  { id: 1, name: "Target", color: brandColors.redColor },
];
const questionData = {
  question: 'What are you looking to receive?',
  answers: [
    { label: 'Photos', value: 'photos' },
    { label: 'Videos', value: 'videos' },]
}
const questionData2 = {
  question: 'How Long is the shoot?',
  answers: [
    { label: '1 Hour', value: '1' },
    { label: '2 Hours', value: '2' },
    { label: '3 Hours', value: '3' },
    { label: 'Half day', value: 'halfDay' },
    { label: '1 Day', value: '1' },
    { label: '2 Days', value: '2' },
    { label: '3+ Days', value: '3+' }]
}
const questionData3 = {
  question: 'Where is the shoot?',
  answers: [
    { label: 'In a tourist spot', value: 'In a tourist spot' },
    { label: 'At my own place', value: 'At my own place' },
    { label: 'I will book the location', value: 'I will book the location' },
    { label: 'I need help with the location', value: 'I need help with the location' },
    { label: 'others', value: 'others' }]
}
const questionData4 = {
  question: 'What time is the shoot?',
  answers: [
    { label: 'Sunrise', value: 'Sunrise' },
    { label: 'morning (9AM-12pm)', value: 'morning (9AM-12pm)' },
    { label: 'Noon (12PM-2pm)', value: 'Noon (12PM-2pm)' },
    { label: 'afternoon (2PM-5pm)', value: 'afternoon (2PM-5pm)' },
    { label: 'evening (5PM-8pm)', value: 'evening (5PM-8pm)' },
    { label: 'Night', value: 'Night' }]
}
const waistlineColorBarData = [
  { id: 0, name: "Waistline", color: brandColors.messageColor },
  { id: 1, name: "Target", color: brandColors.redColor },
];

const mindMentalHealthColorBarData = [
  { id: 0, name: "Stress", color: brandColors.barColor },
  { id: 1, name: "Sleep", color: brandColors.bottomColor },
  { id: 2, name: "Energy", color: brandColors.messageColor },
];
const orderDetails = [
  { id: 0, name: "Order Confirmed", date: 'Mon 26th Dec 2022' },
  { id: 1, name: "Your Order is packed", date: 'Mon 26th Dec 2022' },
  { id: 2, name: "Ready to shipped", date: 'Mon 26th Dec 2022' },
  { id: 3, name: "Shipped", date: 'Mon 28th Dec 2022' },
  { id: 4, name: "Delivered at", date: 'Mon 29th Dec 2022' },
];
const bloodSugarChartFields = [
  { field: "fasting", color: brandColors.timeColor },
  { field: "afterMeal", color: brandColors.bottomColor },
  { field: "random", color: brandColors.messageColor },
  { field: "avgGlucose", color: brandColors.redColor },
];
const bloodPressureChartFields = [
  {
    name: "Systolic",
    field: "morningSystolicBP",
    field2: "eveningSystolicBP",
    color: brandColors.messageColor,
  },
  {
    name: "Diastolic",
    field: "morningDiastolicBP",
    field2: "eveningDiastolicBP",
    color: brandColors.diastolicColor,
  },
  {
    name: "Pulse",
    field: "morningPulse",
    field2: "eveningPulse",
    color: brandColors.redColor,
  },
];
const weightChartFields = [
  { field: "weight", color: brandColors.messageColor },
  { field: "targetWeight", color: brandColors.redColor },
];
const waistLineChartFields = [
  { field: "waistline", color: brandColors.messageColor },
  { field: "targetWaistline", color: brandColors.redColor },
];
const mindMentalHealthChartFields = [
  { field: "stressLevel", color: brandColors.timeColor },
  { field: "qualityOfSleep", color: "#C5C6CC" },
  { field: "energyLevel", color: "#84BACE" },
];

const Gujarat = [
  "Surat",
  "Navsari",
  "Vapi",
  "Valsad",
  "Bardoli",
  "Ankleshwar",
  "Bharuch",
];
const venuList = [
  "Party",
  "Wedding",
  "Occasion",
  "Special Dinner",
  "Lunch",
  "Birthday",
  "Commercials",
  "Engagement",
];

const Maharashtra = ["Mumbai", "Thane"];

const states = [
  { value: "Gujarat", label: "Gujarat", city: Gujarat },
  { value: "Maharashtra", label: "Maharashtra", city: Maharashtra },
];

const timeStore = [
  { hr: 7, indicator: "AM" },
  { hr: 8, indicator: "AM" },
  { hr: 9, indicator: "AM" },
  { hr: 10, indicator: "AM" },
  { hr: 11, indicator: "AM" },
  { hr: 12, indicator: "PM" },
  { hr: 1, indicator: "PM" },
  { hr: 2, indicator: "PM" },
  { hr: 3, indicator: "PM" },
  { hr: 4, indicator: "PM" },
  { hr: 5, indicator: "PM" },
  { hr: 6, indicator: "PM" },
  { hr: 7, indicator: "PM" },
  { hr: 8, indicator: "PM" },
  { hr: 9, indicator: "PM" },
];

export {
  bloodSugarChartFields,
  bloodPressureChartFields,
  weightChartFields,
  waistLineChartFields,
  mindMentalHealthChartFields,
  countryList,
  cityList,
  homeList,
  categoryList,
  filterList,
  menuList,
  eventList,
  foodList,
  venuList,
  photographerList,
  bestSellerList,
  questionData,
  questionData2,
  questionData3,
  questionData4,
  navBarList,
  paymentList,
  orderDetails,
  legalPolicies,
  notificationList,
  accountSettings,
  accountSettings1,
  accountSettings2,
  bloodPressureColorBarData,
  mindMentalHealthColorBarData,
  waistlineColorBarData,
  weightColorBarData,
  ChartTimeData,
  navigationData,
  navigationChartData,
  onboarding_3_Items,
  onboarding_4_Items,
  onboarding_5_Items,
  onboarding_6_Items,
  radio_props,
  SK_KEY,
  timeStore,
  chartTitleData,
  states,
  onboarding_None,
  imageURL
};
