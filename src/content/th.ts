import type { DeepPartial, Dict } from "./types";

/**
 * Thai — interface labels only. Body copy (bio, experience, projects) falls
 * back to English until translated. TODO: have a native reader review.
 */
export const th: DeepPartial<Dict> = {
  nav: {
    about: "เกี่ยวกับ",
    skills: "ทักษะ",
    experience: "ประสบการณ์",
    projects: "ผลงาน",
    notes: "บันทึก",
    contact: "ติดต่อ",
    menu: "เมนู",
    downloadCv: "ดาวน์โหลด CV",
    switchLanguage: "เปลี่ยนภาษา",
    toggleTheme: "สลับธีมสว่าง / มืด",
    skip: "ข้ามไปยังเนื้อหา",
  },
  hero: { viewWork: "ดูผลงาน", downloadCv: "ดาวน์โหลด CV" },
  about: {
    eyebrow: "แนวทางการทำงาน",
    title: "เกี่ยวกับ",
    collabTitle: "การทำงานร่วมกัน",
    educationTitle: "การศึกษา",
    languagesTitle: "ภาษา",
    awardsTitle: "รางวัล",
    activitiesTitle: "กิจกรรมนอกงาน",
  },
  skills: { eyebrow: "เครื่องมือประจำวัน", title: "ทักษะทางเทคนิค" },
  experience: { eyebrow: "ตำแหน่งงานและการฝึกงาน", title: "ประสบการณ์" },
  projects: { eyebrow: "กรณีศึกษาทางวิศวกรรม", title: "ผลงานที่คัดสรร", placeholderLabel: "ตัวอย่าง" },
  notes: { eyebrow: "เขียนเพื่อคิดให้ชัด", title: "บันทึกทางวิศวกรรม", placeholderLabel: "ตัวอย่าง" },
  contact: {
    eyebrow: "ตอบกลับภายใน 24 ชั่วโมง",
    title: "ติดต่อ",
    form: {
      name: "ชื่อ",
      namePh: "ชื่อของคุณ",
      email: "อีเมล",
      subject: "หัวข้อ",
      subjectPh: "ตำแหน่งงาน โปรเจกต์ การทำงานร่วมกัน…",
      message: "ข้อความ",
      messagePh: "อธิบายสั้น ๆ เกี่ยวกับความต้องการ ขอบเขต และกรอบเวลา",
      send: "ส่งข้อความ",
      opening: "กำลังเปิดแอปอีเมล…",
      invalid: "กรุณากรอกทุกช่องและใช้อีเมลที่ถูกต้อง",
    },
    direct: {
      title: "หรือติดต่อโดยตรง",
      emailLabel: "อีเมล",
      phoneLabel: "โทรศัพท์",
      reveal: "คลิกเพื่อแสดง",
      revealAria: "แสดงหมายเลขโทรศัพท์",
      hiddenNote: "ซ่อนไว้เพื่อป้องกันบอตเก็บข้อมูล",
    },
  },
  footer: {
    built: "สร้างด้วย Next.js, TypeScript และ Tailwind CSS",
    rights: "สงวนลิขสิทธิ์",
    email: "อีเมล",
  },
};
