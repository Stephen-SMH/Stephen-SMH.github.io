import type { DeepPartial, Dict } from "./types";

/**
 * Burmese — interface labels only. Body copy (bio, experience, projects) falls
 * back to English until translated. TODO: have a native reader review.
 */
export const my: DeepPartial<Dict> = {
  nav: {
    about: "အကြောင်း",
    skills: "ကျွမ်းကျင်မှု",
    experience: "အတွေ့အကြုံ",
    projects: "လုပ်ငန်းများ",
    notes: "မှတ်စုများ",
    contact: "ဆက်သွယ်ရန်",
    menu: "မီနူး",
    downloadCv: "CV ဒေါင်းလုဒ်",
    switchLanguage: "ဘာသာစကား ပြောင်းရန်",
    toggleTheme: "အလင်း / အမှောင် အသွင် ပြောင်းရန်",
    skip: "အကြောင်းအရာသို့ ကျော်သွားရန်",
  },
  hero: { viewWork: "လုပ်ငန်းများ ကြည့်ရန်", downloadCv: "CV ဒေါင်းလုဒ်" },
  about: {
    eyebrow: "အလုပ်လုပ်ပုံ",
    title: "အကြောင်း",
    collabTitle: "ပူးပေါင်းဆောင်ရွက်မှု",
    educationTitle: "ပညာရေး",
    languagesTitle: "ဘာသာစကားများ",
    awardsTitle: "ဆုများ",
    activitiesTitle: "အလုပ်ပြင်ပ လှုပ်ရှားမှုများ",
  },
  skills: { eyebrow: "နေ့စဉ်အသုံးပြုသော ကိရိယာများ", title: "နည်းပညာကျွမ်းကျင်မှု" },
  experience: { eyebrow: "ရာထူးများနှင့် အလုပ်သင်ကာလများ", title: "အတွေ့အကြုံ" },
  projects: { eyebrow: "အင်ဂျင်နီယာလုပ်ငန်း လေ့လာမှုများ", title: "ရွေးချယ်ထားသော လုပ်ငန်းများ", placeholderLabel: "နမူနာ" },
  notes: { eyebrow: "ရှင်းလင်းစွာ တွေးရန် ရေးသားခြင်း", title: "အင်ဂျင်နီယာမှတ်စုများ", placeholderLabel: "နမူနာ" },
  contact: {
    eyebrow: "၂၄ နာရီအတွင်း ပြန်လည်ဖြေကြားပါမည်",
    title: "ဆက်သွယ်ရန်",
    form: {
      name: "အမည်",
      namePh: "သင့်အမည်",
      email: "အီးမေးလ်",
      subject: "ခေါင်းစဉ်",
      subjectPh: "အလုပ်အကိုင်၊ ပရောဂျက်၊ ပူးပေါင်းခြင်း…",
      message: "မက်ဆေ့ချ်",
      messagePh: "လိုအပ်ချက်၊ နယ်ပယ်နှင့် အချိန်ဇယားကို အတိုချုပ်ရေးပါ။",
      send: "မက်ဆေ့ချ် ပို့ရန်",
      opening: "အီးမေးလ်အက်ပ်ကို ဖွင့်နေသည်…",
      invalid: "အကွက်အားလုံးကို မှန်ကန်သော အီးမေးလ်ဖြင့် ဖြည့်ပါ။",
    },
    direct: {
      title: "သို့မဟုတ် တိုက်ရိုက်ဆက်သွယ်ရန်",
      emailLabel: "အီးမေးလ်",
      phoneLabel: "ဖုန်း",
      reveal: "နှိပ်၍ ကြည့်ရန်",
      revealAria: "ဖုန်းနံပါတ် ပြရန်",
      hiddenNote: "စကရက်ပါများ မရယူနိုင်စေရန် ဖျောက်ထားသည်။",
    },
  },
  footer: {
    built: "Next.js, TypeScript နှင့် Tailwind CSS ဖြင့် တည်ဆောက်ထားသည်။",
    rights: "မူပိုင်ခွင့်ရယူထားပါသည်။",
    email: "အီးမေးလ်",
  },
};
