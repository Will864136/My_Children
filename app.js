// Photo Arrays
const daughterPhotos = [
  "new/daughter/5D17D33F-90D5-4B62-9527-1789944AAC63.jpg",
  "new/daughter/S__63488008_0.jpg",
  "new/daughter/S__63488012_0.jpg",
  "new/daughter/S__63488014_0.jpg",
  "new/daughter/S__63488018_0.jpg",
  "new/daughter/S__63488019_0.jpg",
  "new/daughter/S__63488022_0.jpg",
  "new/daughter/S__63488024_0.jpg",
  "new/daughter/S__63488025_0.jpg",
  "new/daughter/S__63488028_0.jpg"
];

const sonPhotos = [
  "new/son/S__63488009_0.jpg",
  "new/son/S__63488013_0.jpg",
  "new/son/S__63488015_0.jpg",
  "new/son/S__63488017_0.jpg",
  "new/son/S__63488020_0.jpg",
  "new/son/S__63488021_0.jpg",
  "new/son/S__63488023_0.jpg",
  "new/son/S__63488026_0.jpg",
  "new/son/S__63488029_0.jpg",
  "new/son/S__63488031_0.jpg"
];

const bothPhotos = [
  "new/both/20DDABEB-B011-41D3-9753-4BDF061B38BE_0.jpg",
  "new/both/227E0A80-F62E-49BB-8D57-4C3267C65FAE_0.jpg",
  "new/both/6ED1F160-A4B1-4189-B3F8-9517B8294C6C_0.jpg",
  "new/both/7B83BBD4-DC13-421E-9B9F-5E46FD8A58C9_0.jpg"
];

// Combine all photos dynamically (alternating for visual variety)
const allPhotos = [];
const maxPhotosCount = Math.max(sonPhotos.length, daughterPhotos.length, bothPhotos.length);
for (let i = 0; i < maxPhotosCount; i++) {
  if (i < bothPhotos.length) allPhotos.push({ url: bothPhotos[i], type: 'both' });
  if (i < sonPhotos.length) allPhotos.push({ url: sonPhotos[i], type: 'boy' });
  if (i < daughterPhotos.length) allPhotos.push({ url: daughterPhotos[i], type: 'girl' });
}

// Zhuazhou Items Definition with custom inline SVGs and i18n keys
const zhuazhouItems = [
  {
    id: "key",
    labelKey: "item_key_label",
    jobKey: "item_key_job",
    svg: `<svg viewBox="0 0 24 24" fill="#C5A059"><path d="M12 2a5 5 0 0 0-5 5v3.17a3 3 0 0 0-2 2.83v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h2v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-7a3 3 0 0 0-2-2.83V7a5 5 0 0 0-5-5zm-3 8V7a3 3 0 0 1 6 0v3h-6z"/></svg>`
  },
  {
    id: "camera",
    labelKey: "item_camera_label",
    jobKey: "item_camera_job",
    svg: `<svg viewBox="0 0 24 24" fill="#C5A059"><circle cx="12" cy="12" r="3"/><path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>`
  },
  {
    id: "chemistry",
    labelKey: "item_chemistry_label",
    jobKey: "item_chemistry_job",
    svg: `<svg viewBox="0 0 24 24" fill="#C5A059"><path d="M19 19L13 8.76V4.5h1c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-4c-.28 0-.5.22-.5.5s.22.5.5.5h1v4.26L5 19c-.55.95.14 2.14 1.24 2.14h11.52c1.1 0 1.79-1.19 1.24-2.14zm-11.4 1.1L12 12.35l4.4 7.75H7.6z"/></svg>`
  },
  {
    id: "mixer",
    labelKey: "item_mixer_label",
    jobKey: "item_mixer_job",
    svg: `<svg viewBox="0 0 24 24" fill="#C5A059"><path d="M12 2a4 4 0 0 0-4 4v7.26c-1.2.66-2 1.94-2 3.4C6 18.9 7.79 22 12 22s6-3.1 6-5.34c0-1.46-.8-2.74-2-3.4V6a4 4 0 0 0-4-4zm2 4v2h-4V6a2 2 0 0 1 4 0zm-4 4.5h4v2h-4v-2zm2 9.5c-2.4 0-4-1.6-4-3.34 0-1.04.54-2 1.5-2.5v2.84a2.5 2.5 0 0 0 5 0v-2.84c.96.5 1.5 1.46 1.5 2.5 0 1.74-1.6 3.34-4 3.34z"/></svg>`
  },
  {
    id: "tools",
    labelKey: "item_tools_label",
    jobKey: "item_tools_job",
    svg: `<svg viewBox="0 0 24 24" fill="#C5A059"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.3C.5 6.7.9 9.8 2.9 11.8c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.5z"/></svg>`
  },
  {
    id: "blocks",
    labelKey: "item_blocks_label",
    jobKey: "item_blocks_job",
    svg: `<svg viewBox="0 0 24 24" fill="#C5A059"><path d="M3 13h8V5H3v8zm2-6h4v4H5V7zm14 6h-6v8h6v-8zm-2 6h-2v-4h2v4zM13 13h8V5h-8v8zm2-6h4v4h-4V7zM3 21h8v-8H3v8zm2-6h4v4H5v-4z"/></svg>`
  },
  {
    id: "airplane",
    labelKey: "item_airplane_label",
    jobKey: "item_airplane_job",
    svg: `<svg viewBox="0 0 24 24" fill="#C5A059"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L14 19v-5.5l7 2.5z"/></svg>`
  },
  {
    id: "abacus",
    labelKey: "item_abacus_label",
    jobKey: "item_abacus_job",
    svg: `<svg viewBox="0 0 24 24" fill="#C5A059"><path d="M2 3h20v2H2V3zm3 3h2v12H5V6zm4 0h2v12H9V6zm4 0h2v12h-2V6zm4 0h2v12h-2V6zM2 19h20v2H2v-2zM4 9h4V7H4v2zm0 6h4v-2H4v2zm12-6h4V7h-4v2zm0 6h4v-2h-4v2z"/></svg>`
  },
  {
    id: "stethoscope",
    labelKey: "item_stethoscope_label",
    jobKey: "item_stethoscope_job",
    svg: `<svg viewBox="0 0 24 24" fill="#C5A059"><path d="M12 3c-2.44 0-4.5 2.06-4.5 4.5 0 2.22 1.66 4.1 3.84 4.44l-2.47 5.75c-.24.57-.86.91-1.48.91-.91 0-1.63-.73-1.63-1.63H4c0 2.06 1.69 3.75 3.75 3.75.91 0 1.83-.34 2.47-.97l3.65-8.52c.22-.05.43-.13.63-.22V21h4v-2h-2v-4c2.25-.03 4.25-1.88 4.25-4.5C21 5.06 14.44 3 12 3zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 5 12 5s2.5 1.12 2.5 2.5S13.38 10 12 10z"/></svg>`
  },
  {
    id: "ball",
    labelKey: "item_ball_label",
    jobKey: "item_ball_job",
    svg: `<svg viewBox="0 0 24 24" fill="#C5A059"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 0 1-5.66-2.34 7.97 7.97 0 0 0 11.32 0A8 8 0 0 1 12 20zm5.66-4.34a7.97 7.97 0 0 1-11.32 0A8 8 0 0 1 12 4a8 8 0 0 1 5.66 11.66z"/></svg>`
  }
];

// Detect browser language and map it to our supported languages
function detectBrowserLanguage() {
  const browserLang = (navigator.language || navigator.userLanguage || "zh-TW").toLowerCase();
  if (browserLang.startsWith("zh")) {
    return "zh-TW";
  }
  if (browserLang.startsWith("ja")) {
    return "ja";
  }
  if (browserLang.startsWith("th")) {
    return "th";
  }
  if (browserLang.startsWith("it")) {
    return "it";
  }
  return "en"; // Default to English for other international users
}

// Global localization state (prioritizing manual selection in localStorage, fallback to browser detection)
let currentLang = localStorage.getItem("twins_party_lang") || detectBrowserLanguage();

// Translation dictionaries
const i18nDict = {
  "zh-TW": {
    doc_title: "👶🏻👶🏻 隆隆 & 心心 抓周慶生會｜全新邀請函",
    hero_boy_badge: "👦🏻 哥哥 隆隆",
    hero_girl_badge: "👧🏻 妹妹 心心",
    hero_title: "隆隆 & 心心 一歲抓週週歲派對",
    hero_subtitle: "",
    hero_boy_role: "哥哥 (Older Brother)",
    hero_girl_role: "妹妹 (Younger Sister)",
    days_label: "天",
    hours_label: "時",
    minutes_label: "分",
    seconds_label: "秒",
    invitation_greet: "親愛的親朋好友們：",
    invitation_p1: "因為強烈颱風巴威來攪局，不得不將雙寶的聚會延期，非常謝謝大家的體諒、包容與關心！❤️",
    invitation_p2: "經過這幾天的緊急協調與確認，隆隆和心心的抓周大日子終於重新敲定在 8 月 15 日囉！雖然日期改變了，但我們想與大家齊聚、分享雙寶滿周歲喜悅的心情完全沒有變。",
    invitation_p3: "誠摯地邀請您在全新的日子裡，一同前來見證這珍貴的時刻，為兩個寶貝送上最溫暖的祝福！",
    dc_title: "服裝主題 (Dress Code)",
    dc_desc: "建議穿搭<strong>「白色系服裝」</strong>，讓我們一起以純淨的白色，為寶貝們留下最美的紀念！",
    gallery_title: "成長點滴相簿",
    gallery_subtitle: "點擊照片可放大欣賞喔！",
    gallery_tab_all: "全部照片",
    gallery_tab_boy: "隆隆 (Jasper)",
    gallery_tab_girl: "心心 (Serena)",
    gallery_load_more: "載入更多照片",
    intro_title: "什麼是「抓週」？",
    intro_desc: "抓週是東亞傳統的幼兒儀式，在寶寶滿一歲（周歲）時舉行。家長會在一張大墊子上擺放各種代表不同職業或未來的物品，讓寶寶在不經引導的情況下自由爬行並抓取物品。寶寶最先抓取並玩耍的物品，被用來預測其未來的興趣、天賦與職業方向！這是一個充滿趣味、喜悅與祝福的溫馨家族慶典。",
    game_title: "抓週大預測",
    game_subtitle: "親友團站出來！預測隆隆和心心當天會抓到什麼物品呢？",
    game_boy_mat_title: "哥哥 馮宣翰 (Jasper) 的抓週地墊",
    game_boy_mat_desc: "預測隆隆會抓中什麼",
    game_girl_mat_title: "妹妹 馮妍心 (Serena) 的抓週地墊",
    game_girl_mat_desc: "預測心心會抓中什麼",
    game_submit_btn: "送出我的預測",
    game_revote_btn: "再次預測",
    timeline_title: "當日活動日程",
    timeline_subtitle: "派對流程安排，期待與大家共度歡樂時光",
    t1_title: "賓客入場與饗宴開始 🍽️",
    t1_desc: "親友陸續報到入座，現場備有美味精緻的餐點供大家享用與交流。",
    t2_title: "精彩抓週儀式與互動同樂 🎉",
    t2_desc: "隆隆與心心的抓週主秀登場！踩紅龜粿、敲智慧鑼，並看兩位寶貝會選中什麼寶物！期間將伴隨歡樂的猜謎與祝福活動。",
    t3_title: "溫馨大合照與交流 📸",
    t3_desc: "所有親朋好友與隆隆、心心一同拍攝珍貴的大合照，互道祝福，並贈送小禮物作為一歲生日的溫馨紀念。",
    rsvp_title: "線上出席回條 (RSVP)",
    rsvp_subtitle: "因為活動日期有所變更，需要麻煩親友們動動手指，幫我們重新回覆出席意願，以利我們與餐廳統計最終人數與座位安排",
    form_name: "賓客姓名",
    form_name_placeholder: "請輸入您的姓名或家族稱呼",
    form_count: "出席人數",
    form_count_1: "1 人",
    form_count_2: "2 人",
    form_count_3: "3 人",
    form_count_4: "4 人",
    form_count_5: "5 人",
    form_count_6: "6人以上",
    form_attend: "出席意願",
    form_attend_yes: "🎉 會喔！準時赴約",
    form_attend_no: "🥺 無法前往，但送上祝福",
    form_chairs: "嬰兒椅需求",
    form_chairs_0: "不需要",
    form_chairs_1: "1 張",
    form_chairs_2: "2 張",
    form_chairs_3: "3 張",
    form_diet: "飲食習慣與需求",
    form_diet_meat: "皆為一般葷食",
    form_diet_vege: "有素食需求 (請在下方備註說明人數)",
    form_diet_other: "其他飲食需求 / 過敏 (請在下方備註說明)",
    form_wishes: "給寶貝們的祝福語或備註",
    form_wishes_placeholder: "在這裡寫下給隆隆、心心的生日祝福，或任何飲食與座位特殊安排備註喔！",
    form_submit_btn: "送出出席回條",
    success_title: "回條已成功送出！",
    success_desc: "我們已收到您的回覆，非常期待與您在派對見面！❤️",
    success_edit_btn: "修改回覆資料",
    success_another_btn: "填寫另一份回條",
    loc_title: "派對時間與交通",
    loc_subtitle: "請將時間記錄在您的日曆中，期待您光臨 Amour 373 Cafe",
    loc_time_label: "活動時間",
    loc_time_desc: "2026年8月15日 (六)<br>12:00 - 15:00",
    loc_place_label: "派對地點",
    loc_place_desc: "Amour 373 Cafe 2樓",
    loc_address_desc: "桃園市平鎮區廣仁里延平路二段373號",
    loc_reminder_title: "溫馨小提醒：",
    loc_reminder_desc: "餐廳附設大型專屬停車場，開車前來的親友免煩惱停車問題喔！🚗",
    btn_navigation: "一鍵開啟 Google 地圖導航",
    btn_add_calendar: "加到手機日曆",
    admin_trigger_text: "🔒 家長後台管理入口 (僅供家長查看出席統計)",
    admin_title: "家長出席統計後台",
    admin_auth_desc: "請輸入密碼以查看賓客出席資料與投票統計結果",
    admin_pw_placeholder: "輸入密碼 (預設: 1207)",
    admin_login_btn: "登入管理後台",
    admin_stat_total: "出席總人數",
    admin_stat_chairs: "嬰兒椅需求",
    admin_stat_forms: "已回覆表單數",
    admin_list_title: "回條資料明細",
    admin_th_name: "姓名",
    admin_th_attend: "出席",
    admin_th_count: "人數",
    admin_th_chairs: "嬰兒椅",
    admin_th_diet: "飲食",
    admin_th_pred_boy: "哥哥預測",
    admin_th_pred_girl: "妹妹預測",
    admin_th_wishes: "留言祝福",
    admin_btn_clear: "清空所有回條",
    admin_btn_csv: "匯出 CSV 檔",
    footer_copy: "隆隆 & 心心 抓周慶生會邀請函 © 2026",
    footer_wish: "期待您的蒞臨！",
    // Items (Actual set)
    item_key_label: "鑰匙串",
    item_key_job: "包租公/財富自由",
    item_camera_label: "相機",
    item_camera_job: "攝影師",
    item_chemistry_label: "化學實驗組",
    item_chemistry_job: "科學家",
    item_mixer_label: "攪拌器",
    item_mixer_job: "甜點師",
    item_tools_label: "工具組",
    item_tools_job: "工程師",
    item_blocks_label: "積木",
    item_blocks_job: "建築師",
    item_airplane_label: "飛機",
    item_airplane_job: "航空業/旅行家",
    item_abacus_label: "珠算盤",
    item_abacus_job: "金融業",
    item_stethoscope_label: "聽診器",
    item_stethoscope_job: "醫師",
    item_ball_label: "球類",
    item_ball_job: "運動選手",
    vote_chart_title: "預測統計結果",
    tag_voted: "選這",
    cal_modal_title: "選擇加入行事曆方式",
    cal_opt_google: "Google 日曆 (線上)",
    cal_opt_ics: "Apple/Outlook (.ics檔案)",
    cal_opt_cancel: "取消",
    cal_title: "隆隆 & 心心 抓周慶生會 👶🏻👶🏻",
    cal_desc: "親愛的親朋好友們：強烈颱風巴威來攪局後，雙寶聚會重新敲定在 8/15 (六)，誠摯邀請您前來！\\n\\n服裝主題 (Dress Code)：建議穿著白色系衣服。",
    video_title: "寶寶成長影片 🎥",
    video_subtitle: "點擊觀看隆隆和心心學走路的可愛瞬間！",
    crawl_title: "雙寶抓週大預測進行中... 👶🏻👶🏻",
    crawl_boy_reached: "哥哥抓到了 {item}！",
    crawl_girl_reached: "妹妹抓到了 {item}！",
    nickname_story_badge: "隆隆小名的由來",
    nickname_story_content: "馮家按輩份取名，中間那個字是家道隆昌，我爸是馮家英，我是馮道誠，照理來說我兒子應該是馮隆什麼，但怎麼算都算不出好名字，最後取名馮宣翰，但小名就叫隆隆，他們屬蛇，小龍，所以也是龍龍",
    countdown_target_time: "距離 2026年8月15日 12:00 派對開始還有："
  },
  "en": {
    doc_title: "👶🏻👶🏻 Jasper & Serena 1st Birthday Party | New Invitation",
    hero_boy_badge: "👦🏻 Jasper (Older Brother)",
    hero_girl_badge: "👧🏻 Serena (Younger Sister)",
    hero_title: "Jasper & Serena 1st Birthday Party",
    hero_subtitle: "",
    hero_boy_role: "Brother (Jasper)",
    hero_girl_role: "Sister (Serena)",
    days_label: "Days",
    hours_label: "Hrs",
    minutes_label: "Mins",
    seconds_label: "Secs",
    invitation_greet: "Dear Family and Friends,",
    invitation_p1: "Due to Typhoon Bavi, we had to postpone the twins' party. Thank you so much for your understanding, patience, and care! ❤️",
    invitation_p2: "After urgent coordination over the past few days, the new date for Jasper and Serena's Zhuazhou party has been finalized on August 15! Although the date has changed, our excitement to gather and celebrate their first birthday remains the same.",
    invitation_p3: "We sincerely invite you to join us on this new date to witness this precious moment and send your warmest blessings to our two little ones!",
    dc_title: "Dress Code",
    dc_desc: "We suggest wearing <strong>'White attire'</strong>, so we can capture beautiful, pure memories with our babies!",
    gallery_title: "Milestones Gallery",
    gallery_subtitle: "Click on photos to enlarge!",
    gallery_tab_all: "All Photos",
    gallery_tab_boy: "Jasper (Son)",
    gallery_tab_girl: "Serena (Daughter)",
    gallery_load_more: "Load More Photos",
    intro_title: "What is \"Zhuazhou\"?",
    intro_desc: "Zhuazhou is a traditional East Asian ceremony held on a baby's first birthday. Parents place a variety of symbolic items (such as books, stethoscopes, abaci) on a large mat. The baby is then placed on the mat to crawl freely and grab whatever attracts them without guidance. The first items the baby picks up and plays with are symbolically used to predict their future interests, talents, and career paths! It is a fun, joyful celebration filled with warm wishes.",
    game_title: "Zhuazhou Prediction",
    game_subtitle: "Cast your vote! What items do you think Jasper and Serena will grab?",
    game_boy_mat_title: "Jasper's Zhuazhou Mat (Brother)",
    game_boy_mat_desc: "Predict what Jasper will grab",
    game_girl_mat_title: "Serena's Zhuazhou Mat (Sister)",
    game_girl_mat_desc: "Predict what Serena will grab",
    game_submit_btn: "Submit My Prediction",
    game_revote_btn: "Predict Again",
    timeline_title: "Event Schedule",
    timeline_subtitle: "Itinerary of the party, looking forward to celebrating together",
    t1_title: "Guest Arrival & Reception 🍽️",
    t1_desc: "Guests check-in. Delicious food and refreshments will be served.",
    t2_title: "Zhuazhou Ceremony & Fun Games 🎉",
    t2_desc: "The main event begins! Watch Jasper and Serena step on red rice cakes, beat the gong of wisdom, and grab items! Followed by fun quizzes and interactive games.",
    t3_title: "Group Photos & Gathering 📸",
    t3_desc: "All guests take photos with Jasper and Serena, exchange blessings, and receive a special return gift.",
    rsvp_title: "RSVP Reply",
    rsvp_subtitle: "Due to the date change, we kindly ask all guests to reconfirm their attendance to help us finalize seats and catering",
    form_name: "Your Name",
    form_name_placeholder: "Please enter your name or family name",
    form_count: "Number of Guests",
    form_count_1: "1 Person",
    form_count_2: "2 People",
    form_count_3: "3 People",
    form_count_4: "4 People",
    form_count_5: "5 People",
    form_count_6: "6 or more",
    form_attend: "Attendance",
    form_attend_yes: "🎉 Yes, I will attend!",
    form_attend_no: "🥺 Sorry, I cannot make it",
    form_chairs: "Baby Chairs Needed",
    form_chairs_0: "None",
    form_chairs_1: "1 Chair",
    form_chairs_2: "2 Chairs",
    form_chairs_3: "3 Chairs",
    form_diet: "Dietary Preferences",
    form_diet_meat: "Standard (Non-vegetarian)",
    form_diet_vege: "Vegetarian (Please note details below)",
    form_diet_other: "Allergies / Special needs (Note below)",
    form_wishes: "Wishes / Special Notes",
    form_wishes_placeholder: "Leave your blessings for Jasper & Serena, or note any dietary restrictions!",
    form_submit_btn: "Submit RSVP",
    success_title: "RSVP Submitted Successfully!",
    success_desc: "We have received your response, looking forward to seeing you at the party! ❤️",
    success_edit_btn: "Edit RSVP Info",
    success_another_btn: "Submit Another RSVP",
    loc_title: "Date, Time & Venue",
    loc_subtitle: "Add the details to your calendar and easily navigate to Amour 373 Cafe",
    loc_time_label: "Date & Time",
    loc_time_desc: "Saturday, August 15, 2026<br>12:00 PM - 3:00 PM",
    loc_place_label: "Party Location",
    loc_place_desc: "Amour 373 Cafe 2F",
    loc_address_desc: "No. 373, Sec. 2, Yanping Rd., Pingzhen Dist., Taoyuan City",
    loc_reminder_title: "Friendly Reminder:",
    loc_reminder_desc: "The restaurant features a large dedicated on-site parking lot. Parking is worry-free! 🚗",
    btn_navigation: "Open Google Maps Navigation",
    btn_add_calendar: "Add to Calendar",
    admin_trigger_text: "🔒 Parents Admin Dashboard (View Attendance Stats)",
    admin_title: "Parents Admin Dashboard",
    admin_auth_desc: "Enter password to view attendance details and voting data",
    admin_pw_placeholder: "Enter password (Default: 1207)",
    admin_login_btn: "Login to Dashboard",
    admin_stat_total: "Total Attendees",
    admin_stat_chairs: "Baby Chairs",
    admin_stat_forms: "RSVP Forms",
    admin_list_title: "RSVP Submissions Details",
    admin_th_name: "Name",
    admin_th_attend: "Attend",
    admin_th_count: "Guests",
    admin_th_chairs: "Chairs",
    admin_th_diet: "Diet",
    admin_th_pred_boy: "Predict Boy",
    admin_th_pred_girl: "Predict Girl",
    admin_th_wishes: "Blessings & Notes",
    admin_btn_clear: "Clear All Data",
    admin_btn_csv: "Export CSV",
    footer_copy: "Jasper & Serena 1st Birthday Party © 2026",
    footer_wish: "Looking forward to seeing you!",
    // Items (Actual set)
    item_key_label: "Keyring",
    item_key_job: "Landlord/Financial Freedom",
    item_camera_label: "Camera",
    item_camera_job: "Photographer",
    item_chemistry_label: "Chemistry Set",
    item_chemistry_job: "Scientist",
    item_mixer_label: "Whisk/Mixer",
    item_mixer_job: "Pastry Chef",
    item_tools_label: "Tool Set",
    item_tools_job: "Engineer",
    item_blocks_label: "Toy Blocks",
    item_blocks_job: "Architect",
    item_airplane_label: "Airplane",
    item_airplane_job: "Aviation/Traveler",
    item_abacus_label: "Abacus",
    item_abacus_job: "Finance",
    item_stethoscope_label: "Stethoscope",
    item_stethoscope_job: "Doctor",
    item_ball_label: "Sports Ball",
    item_ball_job: "Athlete",
    vote_chart_title: "Prediction Results",
    tag_voted: "Selected",
    cal_modal_title: "Choose Calendar",
    cal_opt_google: "Google Calendar (Online)",
    cal_opt_ics: "Apple/Outlook (.ics file)",
    cal_opt_cancel: "Cancel",
    cal_title: "Jasper & Serena 1st Birthday Party 👶🏻👶🏻",
    cal_desc: "Dear Family and Friends: Due to Typhoon Bavi, the twins' party has been rescheduled to August 15 (Sat). We sincerely invite you to join us!\\n\\nDress Code: White Theme.",
    video_title: "Babies' Milestone Video 🎥",
    video_subtitle: "Click to watch Jasper & Serena taking their first steps!",
    crawl_title: "Zhuazhou Prediction Race... 👶🏻👶🏻",
    crawl_boy_reached: "Jasper grabbed the {item}!",
    crawl_girl_reached: "Serena grabbed the {item}!",
    nickname_story_badge: "Origin of \"Longlong\"",
    nickname_story_content: "The Feng family names children based on generation hierarchy, following the phrase \"Jia Dao Long Chang\" (家道隆昌 - family prosperity). My father is Feng Jiaying (馮家英), I am Feng Daocheng (馮道誠), so logically my son should have \"Long\" (隆) as his middle character. However, we couldn't find a naming combination that felt right. In the end, we named him Feng Xuanhan (馮宣翰), but nickname him \"Longlong\" (隆隆) to preserve his generational character. Also, because they are born in the Year of the Snake (traditionally called \"little dragon\" in Chinese culture), he is also nicknamed \"Longlong\" (龍龍/Little Dragon)!",
    countdown_target_time: "Party starts: August 15, 2026 at 12:00 (Countdown):"
  },
  "ja": {
    doc_title: "👶🏻👶🏻 Jasper & Serena 1歳お誕生日会 | 新しい招待状",
    hero_boy_badge: "👦🏻 お兄ちゃん 隆隆 (Jasper)",
    hero_girl_badge: "👧🏻 妹 馮妍心 (Serena)",
    hero_title: "Jasper & Serena 1歳お誕生日会",
    hero_subtitle: "",
    hero_boy_role: "兄 (Jasper)",
    hero_girl_role: "妹 (Serena)",
    days_label: "日",
    hours_label: "時間",
    minutes_label: "分",
    seconds_label: "秒",
    invitation_greet: "親愛なるご家族、ご友人の皆様へ",
    invitation_p1: "先日は強い台風バーウィーの影響により、急遽ツインズのパーティーを延期することとなり、皆様のご理解とご心配に心より感謝申し上げます！❤️",
    invitation_p2: "この数日間の緊急調整と確認を経て、JasperとSerena of 選び取り（抓週）の新たな日程が8月15日に決定いたしました！日付は変わりましたが、皆様と集まり、二人の1歳の誕生日を一緒にお祝いしたいという私たちの気持ちは少しも変わりません。",
    invitation_p3: "新たな日程にて、この大切な瞬間を共に見守り、二人に温かい祝福を届けていただけますと幸いです！",
    dc_title: "ドレスコード (Dress Code)",
    dc_desc: "当日はぜひ<strong>「白系の服装」</strong>でお越しください。みんなで純粋な白に包まれ、素敵な思い出を作りましょう！",
    gallery_title: "成長のアルバム",
    gallery_subtitle: "写真をクリックすると拡大されます！",
    gallery_tab_all: "すべての写真",
    gallery_tab_boy: "Jasper (息子)",
    gallery_tab_girl: "Serena (娘)",
    gallery_load_more: "写真をもっと読み込む",
    intro_title: "「選び取り（抓週）」とは？",
    intro_desc: "「選び取り（抓週・ジュアジョว）」は、東アジアの伝統的な1歳の誕生日のお祝い儀式です。赤ちゃんの前に様々な職業や未来を象徴するアイテム（本、聴診器、そろばんなど）を並べ、赤ちゃんが自ら進んで最初に手に取ったもので、将来の才能や職業を占うというものです。子供の健やかな成長を願い、家族みんなで温かく見守る笑顔あふれるイベントです。",
    game_title: "選び取り大予想！",
    game_subtitle: "JasperとSerenaが当日何を選ぶか、みんなで予想してみましょう！",
    game_boy_mat_title: "お兄ちゃん Jasper の選び取りマット",
    game_boy_mat_desc: "Jasperは何を選ぶかな？",
    game_girl_mat_title: "妹 Serena の選び取りマット",
    game_girl_mat_desc: "Serenaは何を選ぶかな？",
    game_submit_btn: "予想を送信する",
    game_revote_btn: "再び予測する",
    timeline_title: "当日のスケジュール",
    timeline_subtitle: "楽しいパーティーのタイムライン",
    t1_title: "開場＆お食事スタート 🍽️",
    t1_desc: "受付開始。会場では美味しいお食事をご用意してお待ちしております。",
    t2_title: "選び取り儀式＆お楽しみタイム 🎉",
    t2_desc: "メインイベント！餅を踏み、知恵のドラを叩き、選び取りを行います！クイズやゲームもご用意しています。",
    t3_title: "記念撮影＆交流会 📸",
    t3_desc: "全員で記念撮影を行い、祝福を交わします。ささやかなお土産もご用意しております。",
    rsvp_title: "出席のご返信 (RSVP)",
    rsvp_subtitle: "開催日の変更に伴い、人数と座席の最終調整のため、お手数ですが改めてご出席の確認をお願いいたします",
    form_name: "お名前",
    form_name_placeholder: "お名前またはご家族名をご入力ください",
    form_count: "ご出席人数",
    form_count_1: "1 名",
    form_count_2: "2 名",
    form_count_3: "3 名",
    form_count_4: "4 名",
    form_count_5: "5 名",
    form_count_6: "6 名以上",
    form_attend: "ご出席について",
    form_attend_yes: "🎉 出席します！楽しみにしています",
    form_attend_no: "🥺 欠席します（お祝いの言葉を贈ります）",
    form_chairs: "ベビーチェアのご希望",
    form_chairs_0: "不要",
    form_chairs_1: "1 脚",
    form_chairs_2: "2 脚",
    form_chairs_3: "3 脚",
    form_diet: "お食事のご要望",
    form_diet_meat: "通常のメニュー (肉・魚など)",
    form_diet_vege: "ベジタリアン食希望 (下記に詳細をご記入ください)",
    form_diet_other: "アレルギーなど要望あり (下記にご記入ください)",
    form_wishes: "赤ちゃんたちへのメッセージや備考欄",
    form_wishes_placeholder: "二人へのお祝いのメッセージや、お食事に関するアレルギーなどのご要望はこちらへ！",
    form_submit_btn: "返信を送信する",
    success_title: "ご返信ありがとうございました！",
    success_desc: "ご回答を受け付けました。当日お会いできるのを楽しみにしております！❤️",
    success_edit_btn: "回答を修正する",
    success_another_btn: "別の返信を送る",
    loc_title: "日時＆アクセス",
    loc_subtitle: "カレンダーに登録し、Amour 373 Cafe へのナビをご利用ください",
    loc_time_label: "日時",
    loc_time_desc: "2026年8月15日 (土)<br>12:00 - 15:00",
    loc_place_label: "会場",
    loc_place_desc: "Amour 373 Cafe 2階",
    loc_address_desc: "桃園市平鎮区広仁里延平路二段373号",
    loc_reminder_title: "駐車場について：",
    loc_reminder_desc: "会場には大型専用駐車場が併設されておりますので、お車でお越しの方も安心してお停めいただけます！🚗",
    btn_navigation: "Googleマップでナビを開く",
    btn_add_calendar: "カレンダーに追加する",
    admin_trigger_text: "🔒 管理用ダッシュボード（出席状況の確認）",
    admin_title: "出席統計ダッシュボード",
    admin_auth_desc: "パスワードを入力して出席者詳細および投票統計を表示します",
    admin_pw_placeholder: "パスワード (初期設定: 1207)",
    admin_login_btn: "ログインする",
    admin_stat_total: "出席人数合計",
    admin_stat_chairs: "ベビーチェア数",
    admin_stat_forms: "回答フォーム数",
    admin_list_title: "返信データ一覧",
    admin_th_name: "お名前",
    admin_th_attend: "出席",
    admin_th_count: "人数",
    admin_th_chairs: "椅子",
    admin_th_diet: "食事",
    admin_th_pred_boy: "兄の予測",
    admin_th_pred_girl: "妹の予測",
    admin_th_wishes: "メッセージ・備考",
    admin_btn_clear: "すべてのデータを消去",
    admin_btn_csv: "CSVとして書き出し",
    footer_copy: "Jasper & Serena 1st Birthday Party © 2026",
    footer_wish: "皆様にお会いできるのを楽しみにしています！",
    // Items (Actual set)
    item_key_label: "鍵の束",
    item_key_job: "大家さん/不労所得",
    item_camera_label: "カメラ",
    item_camera_job: "写真家",
    item_chemistry_label: "化学実験セット",
    item_chemistry_job: "科学者",
    item_mixer_label: "泡立て器",
    item_mixer_job: "パティシエ",
    item_tools_label: "工具セット",
    item_tools_job: "エンジニア",
    item_blocks_label: "積木",
    item_blocks_job: "建築家",
    item_airplane_label: "飛行機",
    item_airplane_job: "航空業界/旅行家",
    item_abacus_label: "そろばん",
    item_abacus_job: "金融業",
    item_stethoscope_label: "聴診器",
    item_stethoscope_job: "医師",
    item_ball_label: "ボール",
    item_ball_job: "スポーツ選手",
    vote_chart_title: "予想の集計",
    tag_voted: "選択",
    cal_modal_title: "カレンダーを選択",
    cal_opt_google: "Google カレンダー (ブラウザ)",
    cal_opt_ics: "Apple/Outlook (.icsファイル)",
    cal_opt_cancel: "キャンセル",
    cal_title: "Jasper & Serena 1歳のお誕生日パーティー 👶🏻👶🏻",
    cal_desc: "親愛なる皆様へ：台風の影響により延期となったパーティーは8月15日（土）に開催いたします！ぜひご参加ください。\\n\\nドレスコード：ホワイト",
    video_title: "赤ちゃんの成長ビデオ 🎥",
    video_subtitle: "JasperとSerenaが歩く練習をしている可愛い姿をご覧ください！",
    crawl_title: "選び取り（抓週）競争中... 👶🏻👶🏻",
    crawl_boy_reached: "Jasperくんが {item} を選びました！",
    crawl_girl_reached: "Serenaちゃんが {item} を選びました！",
    nickname_story_badge: "「隆隆（ロンロン）」の由来",
    nickname_story_content: "馮家では世代（輩分）に基づいて命名する伝統があり、祖父の代が「家（Jia）」、父の代が「道（Dao）」、そして息子の代は「家道隆昌」の四字熟語から「隆（Long）」の字を真ん中に使うことになっていました。しかし、姓名判断やバランスを考慮した結果、最終的に「馮宣翰（Feng Xuanhan）」と名付けました。それでも伝統を引き継ぐため、小名（ニックネーム）を「隆隆（ロンロン）」と呼んでいます。また、双子は巳年（ヘビ年＝中国では『小龍』と呼ばれる）生まれであるため、「龍龍」という意味も込められています。",
    countdown_target_time: "新日程：2026年8月15日 12:00 開始まであと："
  },
  "th": {
    doc_title: "👶🏻👶🏻 ปาร์ตี้วันเกิด 1 ขวบ ของ Jasper & Serena | การ์ดเชิญใหม่",
    hero_boy_badge: "👦🏻 พี่ชาย Jasper",
    hero_girl_badge: "👧🏻 น้องสาว Serena",
    hero_title: "ปาร์ตี้วันเกิด 1 ขวบ ของ Jasper & Serena",
    hero_subtitle: "",
    hero_boy_role: "พี่ชาย (Jasper)",
    hero_girl_role: "น้องสาว (Serena)",
    days_label: "วัน",
    hours_label: "ชม.",
    minutes_label: "นาที",
    seconds_label: "วิ",
    invitation_greet: "ถึงญาติสนิทมิตรสหายที่รักทุกท่าน:",
    invitation_p1: "เนื่องจากผลกระทบจากพายุไต้ฝุ่นบาหวี่ก่อนหน้านี้ ทำให้เราจำเป็นต้องเลื่อนงานปาร์ตี้ของสองแฝดออกไป ขอขอบคุณทุกท่านเป็นอย่างยิ่งสำหรับความเข้าใจ ความอดทน และความห่วงใยนะคะ! ❤️",
    invitation_p2: "หลังจากประสานงานและยืนยันอย่างเร่งด่วนในช่วงไม่กี่วันที่ผ่านมา วันจัดงานจับเสี่ยงทายของ Jasper และ Serena ก็เคาะวันใหม่เป็นวันที่ 15 สิงหาคม เรียบร้อยแล้วค่ะ! ถึงแม้ว่าวันที่จัดงานจะเปลี่ยนไป แต่ความตั้งใจของเราที่อยากจะรวมตัวและแบ่งปันความสุขครบรอบหนึ่งปีของสองแฝดกับทุกท่านยังคงเหมือนเดิมไม่เปลี่ยนแปลงเลยค่ะ",
    invitation_p3: "ขอเรียนเชิญทุกท่านร่วมเป็นสักขีพยานในวันใหม่นี้ และส่งมอบคำอวยพรที่อบอุ่นที่สุดให้กับเจ้าตัวเล็กทั้งสองคนร่วมกันนะคะ!",
    dc_title: "ธีมการแต่งกาย (Dress Code)",
    dc_desc: "ขอแนะนำเป็น <strong>'เสื้อผ้าโทนสีขาว'</strong> เพื่อให้พวกเราทุกคนได้บันทึกความทรงจำอันบริสุทธิ์และสวยงามนี้ร่วมกันกับเด็กๆ นะคะ!",
    gallery_title: "คลังภาพการเติบโต",
    gallery_subtitle: "คลิกที่รูปภาพเพื่อขยายใหญ่ได้นะคะ!",
    gallery_tab_all: "รูปภาพทั้งหมด",
    gallery_tab_boy: "Jasper (ลูกชาย)",
    gallery_tab_girl: "Serena (ลูกสาว)",
    gallery_load_more: "โหลดภาพเพิ่มเติม",
    intro_title: "พิธี \"จ๋าโจว\" (Zhuazhou) คืออะไร?",
    intro_desc: "จ๋าโจว (Zhuazhou) หรือ พิธีจับเสี่ยงทายครบรอบหนึ่งปี เป็นประเพณีดั้งเดิมในเอเชียตะวันออก โดยพ่อแม่จะวางสิ่งของสัญลักษณ์ต่างๆ (เช่น หนังสือ, หูฟังแพทย์, ลูกคิด) ไว้บนพรมผืนใหญ่ จากนั้นจะให้เด็กคลานเข้าไปเลือกหยิบสิ่งของเหล่านั้นอย่างอิสระตามความสนใจ ของชิ้นแรกๆ ที่ทารกหยิบขึ้นมาเล่นจะเป็นสัญลักษณ์เสี่ยงทายถึงความสนใจ พรสวรรค์ และเส้นทางอาชีพในอนาคต! เป็นกิจกรรมครอบครัวที่สนุกสนานและเต็มไปด้วยคำอวยพร",
    game_title: "เกมเสี่ยงทายจับสิ่งของ",
    game_subtitle: "ร่วมทายกันเถอะ! คิดว่าในวันงาน Jasper และ Serena จะหยิบของสิ่งไหนกันนะ?",
    game_boy_mat_title: "พรมเสี่ยงทายของพี่ชาย Jasper",
    game_boy_mat_desc: "เดากันเถอะว่า Jasper จะหยิบอะไร",
    game_girl_mat_title: "พรมเสี่ยงทายของน้องสาว Serena",
    game_girl_mat_desc: "เดากันเถอะว่า Serena จะหยิบอะไร",
    game_submit_btn: "ส่งคำทำนายของฉัน",
    game_revote_btn: "ทายอีกครั้ง",
    timeline_title: "กำหนดการในวันงาน",
    timeline_subtitle: "ลำดับเวลากิจกรรมต่างๆ ในปาร์ตี้",
    t1_title: "ยินดีต้อนรับแขกผู้มีเกียรติและเริ่มมื้ออาหาร 🍽️",
    t1_desc: "แขกเข้างานลงทะเบียน มีอาหารและเครื่องดื่มจัดเตรียมไว้รองรับทุกท่านและร่วมพูดคุยสังสรรค์กัน",
    t2_title: "เริ่มพิธีการเสี่ยงทายและร่วมสนุก 🎉",
    t2_desc: "กิจกรรมหลักเริ่มขึ้นแล้ว! มาดู Jasper และ Serena เหยียบขนมมงคล เคาะฆ้องปัญญา และเสี่ยงทายเลือกสิ่งของกัน พร้อมกับกิจกรรมตอบคำถามชิงรางวัล",
    t3_title: "ถ่ายภาพร่วมกันและอำลาอย่างอบอุ่น 📸",
    t3_desc: "ถ่ายรูปรวมของครอบครัวและแขกทุกท่าน มอบคำอวยพร และรับของที่ระลึกครบรอบ 1 ปีแสนน่ารัก",
    rsvp_title: "ตอบรับการเข้าร่วมงาน (RSVP)",
    rsvp_subtitle: "เนื่องจากมีการเปลี่ยนแปลงวันจัดงาน รบกวนแขกทุกท่านช่วยตอบแบบฟอร์มยืนยันการเข้าร่วมงานอีกครั้ง เพื่อความสะดวกในการจัดเตรียมอาหารและที่นั่งนะคะ",
    form_name: "ชื่อผู้เข้าร่วมงาน",
    form_name_placeholder: "โปรดระบุชื่อของคุณหรือครอบครัว",
    form_count: "จำนวนผู้เข้าร่วม",
    form_count_1: "1 ท่าน",
    form_count_2: "2 ท่าน",
    form_count_3: "3 ท่าน",
    form_count_4: "4 ท่าน",
    form_count_5: "5 ท่าน",
    form_count_6: "6 ท่านขึ้นไป",
    form_attend: "การเข้าร่วมงาน",
    form_attend_yes: "🎉 เข้าร่วมค่ะ! ไปแน่นอน",
    form_attend_no: "🥺 ไม่สามารถไปร่วมงานได้ แต่ขอส่งความรักให้",
    form_chairs: "เก้าอี้เด็กหัดนั่ง",
    form_chairs_0: "ไม่ต้องการ",
    form_chairs_1: "1 ตัว",
    form_chairs_2: "2 ตัว",
    form_chairs_3: "3 ตัว",
    form_diet: "ลักษณะอาหารที่ทาน",
    form_diet_meat: "รับประทานอาหารทั่วไป (เนื้อสัตว์)",
    form_diet_vege: "อาหารมังสวิรัติ (โปรดระบุรายละเอียดด้านล่าง)",
    form_diet_other: "แพ้อาหาร / ความต้องการพิเศษ (โปรดระบุด้านล่าง)",
    form_wishes: "คำอวยพรหรือข้อเสนอแนะเพิ่มเติม",
    form_wishes_placeholder: "เขียนคำอวยพรวันเกิดให้น้อง Jasper และ Serena หรือระบุการแพ้อาหารที่นี่ได้เลยนะคะ!",
    form_submit_btn: "ส่งแบบฟอร์ม RSVP",
    success_title: "ส่งข้อมูลเรียบร้อยแล้ว!",
    success_desc: "เราได้รับข้อมูลเรียบร้อยแล้วค่ะ ตั้งหน้าตั้งตารอคอยที่จะพบกันในวันงานนะคะ! ❤️",
    success_edit_btn: "แก้ไขข้อมูลการตอบกลับ",
    success_another_btn: "ส่งอีกหนึ่งคำตอบ",
    loc_title: "เวลาและสถานที่จัดงาน",
    loc_subtitle: "บันทึกเวลาลงปฏิทินของคุณ และนำทางไปยัง Amour 373 Cafe",
    loc_time_label: "เวลาจัดกิจกรรม",
    loc_time_desc: "วันเสาร์ที่ 15 สิงหาคม 2026<br>เวลา 12:00 - 15:00 น.",
    loc_place_label: "สถานที่",
    loc_place_desc: "Amour 373 Cafe ชั้น 2",
    loc_address_desc: "เลขที่ 373 ถ.เหยียนผิง เซกชัน 2, ต.ผิงเจิ้น, เมืองเถาหยวน",
    loc_reminder_title: "ข้อแนะนำเพิ่มเติม:",
    loc_reminder_desc: "ร้านอาหารมีที่จอดรถส่วนตัวขนาดใหญ่ในตัว ไม่ต้องกังวลเรื่องที่จอดรถเลยค่ะ! 🚗",
    btn_navigation: "นำทางโดย Google Maps",
    btn_add_calendar: "เพิ่มลงในปฏิทิน",
    admin_trigger_text: "🔒 หน้าผู้ดูแลระบบสำหรับคุณพ่อคุณแม่ (ดูสถิติเข้าร่วม)",
    admin_title: "สถิติการเข้าร่วมสำหรับคุณพ่อคุณแม่",
    admin_auth_desc: "ป้อนรหัสผ่านเพื่อเข้าชมสถิติแขกและผลทำนาย",
    admin_pw_placeholder: "รหัสผ่าน (ค่าเริ่มต้น: 1207)",
    admin_login_btn: "เข้าสู่ระบบ",
    admin_stat_total: "ผู้ร่วมงานทั้งหมด",
    admin_stat_chairs: "เก้าอี้เด็กที่ต้องการ",
    admin_stat_forms: "แบบฟอร์มที่ตอบแล้ว",
    admin_list_title: "รายละเอียดผู้ตอบรับเข้าร่วมงาน",
    admin_th_name: "ชื่อ",
    admin_th_attend: "เข้าร่วม",
    admin_th_count: "ผู้ร่วม",
    admin_th_chairs: "เก้าอี้เด็ก",
    admin_th_diet: "อาหาร",
    admin_th_pred_boy: "ทายพี่ชาย",
    admin_th_pred_girl: "ทายน้องสาว",
    admin_th_wishes: "คำอวยพร/หมายเหตุ",
    admin_btn_clear: "ล้างข้อมูลทั้งหมด",
    admin_btn_csv: "ดาวน์โหลดไฟล์ CSV",
    footer_copy: "Jasper & Serena 1st Birthday Party © 2026",
    footer_wish: "รอต้อนรับทุกท่านด้วยความยินดีอย่างยิ่งค่ะ!",
    // Items (Actual set)
    item_key_label: "พวงกุญแจ",
    item_key_job: "เจ้าของบ้านเช่า/อิสระการเงิน",
    item_camera_label: "กล้องถ่ายรูป",
    item_camera_job: "ช่างภาพ",
    item_chemistry_label: "ชุดทดลองเคมี",
    item_chemistry_job: "นักวิทยาศาสตร์",
    item_mixer_label: "ที่ตีไข่/ผสมอาหาร",
    item_mixer_job: "คนทำขนมหวาน",
    item_tools_label: "ชุดเครื่องมือช่าง",
    item_tools_job: "วิศวกร",
    item_blocks_label: "บล็อกไม้ตัวต่อ",
    item_blocks_job: "สถาปนิก",
    item_airplane_label: "เครื่องบินของเล่น",
    item_airplane_job: "ธุรกิจการบิน/นักเดินทาง",
    item_abacus_label: "ลูกคิด",
    item_abacus_job: "ธุรกิจการเงิน",
    item_stethoscope_label: "หูฟังแพทย์",
    item_stethoscope_job: "แพทย์",
    item_ball_label: "ลูกบอลกีฬา",
    item_ball_job: "นักกีฬา",
    vote_chart_title: "สถิติการทาย",
    tag_voted: "เลือก",
    cal_modal_title: "เลือกปฏิทิน",
    cal_opt_google: "Google Calendar (ออนไลน์)",
    cal_opt_ics: "Apple/Outlook (ไฟล์ .ics)",
    cal_opt_cancel: "ยกเลิก",
    cal_title: "ปาร์ตี้วันเกิดครบรอบ 1 ปี ของ Jasper & Serena 👶🏻👶🏻",
    cal_desc: "ถึงญาติสนิทมิตรสหายทุกท่าน: เนื่องจากผลกระทบจากพายุไต้ฝุ่นบาหวี่ทำให้งานของสองแฝดเลื่อนไปจัดเป็นวันเสาร์ที่ 15 สิงหาคม ขอเรียนเชิญทุกท่านร่วมปาร์ตี้ค่ะ\\n\\nธีมการแต่งกาย: สีขาว",
    video_title: "วิดีโอพัฒนาการของเด็กๆ 🎥",
    video_subtitle: "คลิกชมความน่ารักของ Jasper และ Serena ตอนหัดเดินกันนะคะ!",
    crawl_title: "การแข่งขันคลานจับของกำลังเริ่มขึ้น... 👶🏻👶🏻",
    crawl_boy_reached: "Jasper หยิบได้ {item}!",
    crawl_girl_reached: "Serena หยิบได้ {item}!",
    nickname_story_badge: "ที่มาของชื่อเล่น \"หลงหลง\"",
    nickname_story_content: "ตระกูลเฝิงตั้งชื่อตามรุ่นตระกูล โดยเรียงตามวลีอักษร 'Jia Dao Long Chang' (家道隆昌 - ความเจริญรุ่งเรืองของตระกูล) คุณพ่อของผมคือ เฝิงเจียอิง (馮家英) ส่วนตัวผมคือ เฝิงเต้าเฉิง (馮道誠) ตามหลักแล้ว ลูกชายของผมควรมีตัวอักษรกลางเป็น 'Long' (隆) แต่หลังจากคำนวณชื่อตามโหราศาสตร์แล้ว ไม่ว่าจะตั้งอย่างไรก็ไม่ลงตัว สุดท้ายจึงตั้งชื่อจริงว่า เฝิงเซวียนฮั่น (馮宣翰) แต่ยังคงสืบทอดอักษรรุ่นด้วยการตั้งชื่อเล่นว่า 'หลงหลง' (隆隆 - Longlong) นอกจากนี้พวกเขายังเกิดในปีมะเส็ง (งูเล็ก ซึ่งในวัฒนธรรมจีนเรียกว่า มังกรน้อย - 小龍) ชื่อนี้จึงพ้องเสียงกับคำว่ามังกร 'หลงหลง' (龍龍) อีกด้วย!",
    countdown_target_time: "นับถอยหลังสู่วันงานใหม่: 15 สิงหาคม 2569 เวลา 12:00 น.:"
  },
  "it": {
    doc_title: "👶🏻👶🏻 1° Compleanno di Jasper & Serena | Nuovo Invito",
    hero_boy_badge: "👦🏻 Fratello Maggiore Jasper",
    hero_girl_badge: "👧🏻 Sorella Minore Serena",
    hero_title: "1° Compleanno di Jasper & Serena",
    hero_subtitle: "",
    hero_boy_role: "Fratello (Jasper)",
    hero_girl_role: "Sorella (Serena)",
    days_label: "Giorni",
    hours_label: "Ore",
    minutes_label: "Min",
    seconds_label: "Sec",
    invitation_greet: "Cari Parenti e Amici,",
    invitation_p1: "A causa del recente tifone Bavi, abbiamo dovuto rimandare la festa dei gemelli. Grazie di cuore per la vostra comprensione, pazienza e affetto! ❤️",
    invitation_p2: "Dopo un rapido coordinamento in questi ultimi giorni, la nuova data per la festa dello Zhuazhou di Jasper e Serena è stata finalmente definita per il 15 Agosto! Anche se la data è cambiata, il nostro desiderio di riunirci e condividere la gioia del loro primo compleanno rimane esattamente lo stesso.",
    invitation_p3: "Vi invitiamo sinceramente a unirvi a noi in questa nuova data per assistere a questo momento prezioso e inviare i vostri migliori auguri ai nostri piccoli!",
    dc_title: "Tema dell'abbigliamento (Dress Code)",
    dc_desc: "Si consiglia un abbigliamento in <strong>'Bianco'</strong> per immortalare insieme con purezza questo bellissimo ricordo!",
    gallery_title: "Galleria dei Ricordi",
    gallery_subtitle: "Clicca sulle foto per ingrandirle!",
    gallery_tab_all: "Tutte le Foto",
    gallery_tab_boy: "Jasper (Figlio)",
    gallery_tab_girl: "Serena (Figlia)",
    gallery_load_more: "Mostra Altre Foto",
    intro_title: "Cos'è lo \"Zhuazhou\"?",
    intro_desc: "Lo Zhuazhou è una cerimonia tradizionale dell'Asia orientale che si tiene per il primo compleanno del bambino. I genitori posizionano vari oggetti simbolici (come libri, stetoscopi, abachi) su un grande tappeto. Il bambino viene adagiato sul tappeto per gattonare liberamente e afferrare ciò che preferisce senza alcuna guida. Il primo oggetto scelto predice simbolicamente i suoi futuri interessi, talenti e carriera! È una celebrazione festosa ricca di auguri e allegria per tutta la famiglia.",
    game_title: "Zhuazhou Pronostico",
    game_subtitle: "Fate il vostro pronostico! Cosa pensate che afferreranno Jasper e Serena alla cerimonia?",
    game_boy_mat_title: "Tappeto Zhuazhou di Jasper",
    game_boy_mat_desc: "Cosa afferrerà Jasper secondo te?",
    game_girl_mat_title: "Tappeto Zhuazhou di Serena",
    game_girl_mat_desc: "Cosa afferrerà Serena secondo te?",
    game_submit_btn: "Invia Pronostico",
    game_revote_btn: "Prevedi di nuovo",
    timeline_title: "Programma della Giornata",
    timeline_subtitle: "Programma dell'evento, non vediamo l'ora di festeggiare insieme",
    t1_title: "Arrivo Ospiti & Rinfresco 🍽️",
    t1_desc: "Accoglienza degli ospiti e avvio del buffet. Cibo delizioso e bevande saranno a disposizione per socializzare.",
    t2_title: "Rito dello Zhuazhou & Giochi 🎉",
    t2_desc: "Inizia lo spettacolo! I gemelli calpesteranno i tortini di riso, suoneranno il gong della saggezza e sceglieranno gli oggetti. Seguiranno giochi interattivi e quiz.",
    t3_title: "Foto di Gruppo & Saluti 📸",
    t3_desc: "Scatti fotografici di tutti gli invitati insieme a Jasper e Serena, scambio di auguri e consegna di un simpatico souvenir.",
    rsvp_title: "Conferma Presenza (RSVP)",
    rsvp_subtitle: "A causa del cambio di data, chiediamo gentilmente a tutti gli ospiti di riconfermare la loro presenza per organizzare i tavoli e il cibo",
    form_name: "Nome dell'ospite",
    form_name_placeholder: "Inserisci il tuo nome o cognome di famiglia",
    form_count: "Numero di partecipanti",
    form_count_1: "1 Persona",
    form_count_2: "2 Persone",
    form_count_3: "3 Persone",
    form_count_4: "4 Persone",
    form_count_5: "5 Persone",
    form_count_6: "6 o più persone",
    form_attend: "Partecipazione",
    form_attend_yes: "🎉 Sì, verrò sicuramente!",
    form_attend_no: "🥺 Purtroppo non posso venire",
    form_chairs: "Seggioloni per bambini",
    form_chairs_0: "Non serve",
    form_chairs_1: "1 Seggiolone",
    form_chairs_2: "2 Seggioloni",
    form_chairs_3: "3 Seggioloni",
    form_diet: "Preferenze Alimentari",
    form_diet_meat: "Menu standard (carne/pesce)",
    form_diet_vege: "Richiesta vegetariana (specifica nei commenti)",
    form_diet_other: "Allergie o altre richieste (specifica sotto)",
    form_wishes: "Auguri per i bambini o note speciali",
    form_wishes_placeholder: "Lascia qui i tuoi auguri per Jasper & Serena, o inserisci note su allergie/sedie!",
    form_submit_btn: "Invia Conferma",
    success_title: "Conferma Inviata con Successo!",
    success_desc: "Abbiamo ricevuto la tua risposta, non vediamo l'ora di vederti alla festa! ❤️",
    success_edit_btn: "Modifica Risposta",
    success_another_btn: "Invia un'altra risposta",
    loc_title: "Orario e Posizione",
    loc_subtitle: "Segna l'evento sul calendario e avvia il navigatore per Amour 373 Cafe",
    loc_time_label: "Orario dell'evento",
    loc_time_desc: "Sabato 15 Agosto 2026<br>12:00 - 15:00",
    loc_place_label: "Luogo dell'evento",
    loc_place_desc: "Amour 373 Cafe 2F",
    loc_address_desc: "No. 373, Sec. 2, Yanping Rd., Pingzhen Dist., Taoyuan",
    loc_reminder_title: "Nota di Viaggio:",
    loc_reminder_desc: "Il ristorante dispone di un ampio parcheggio privato in loco. Parcheggio senza preoccupazioni! 🚗",
    btn_navigation: "Apri Navigatore Google Maps",
    btn_add_calendar: "Aggiungi al Calendario",
    admin_trigger_text: "🔒 Dashboard Genitori (Vedi Statistiche Presenze)",
    admin_title: "Dashboard Amministrativa Genitori",
    admin_auth_desc: "Inserisci la password per vedere i dettagli delle presenze e delle votazioni",
    admin_pw_placeholder: "Password (Predefinita: 1207)",
    admin_login_btn: "Accedi al Dashboard",
    admin_stat_total: "Partecipanti Totali",
    admin_stat_chairs: "Seggioloni Richiesti",
    admin_stat_forms: "Moduli Ricevuti",
    admin_list_title: "Dettaglio delle Risposte Ospiti",
    admin_th_name: "Nome",
    admin_th_attend: "Presenza",
    admin_th_count: "Ospiti",
    admin_th_chairs: "Sedie",
    admin_th_diet: "Menu",
    admin_th_pred_boy: "Pred. Fratello",
    admin_th_pred_girl: "Pred. Sorella",
    admin_th_wishes: "Auguri e Note",
    admin_btn_clear: "Elimina Tutti i Dati",
    admin_btn_csv: "Esporta in CSV",
    footer_copy: "Jasper & Serena 1st Birthday Party © 2026",
    footer_wish: "Non vediamo l'ora di festeggiare con voi!",
    // Items (Actual set)
    item_key_label: "Portachiavi",
    item_key_job: "Proprietario/Rendita",
    item_camera_label: "Fotocamera",
    item_camera_job: "Fotografo",
    item_chemistry_label: "Set Chimico",
    item_chemistry_job: "Scienziato",
    item_mixer_label: "Frusta da Cucina",
    item_mixer_job: "Pasticciere",
    item_tools_label: "Set di Attrezzi",
    item_tools_job: "Ingegnere",
    item_blocks_label: "Blocchi di Legno",
    item_blocks_job: "Architetto",
    item_airplane_label: "Aereo",
    item_airplane_job: "Aviation/Viaggiatore",
    item_abacus_label: "Abaco",
    item_abacus_job: "Settore Finanziario",
    item_stethoscope_label: "Stetoscopio",
    item_stethoscope_job: "Medico",
    item_ball_label: "Pallone Sportivo",
    item_ball_job: "Atleta",
    vote_chart_title: "Risultati dei Pronostici",
    tag_voted: "Scelto",
    cal_modal_title: "Scegli Calendario",
    cal_opt_google: "Google Calendar (Online)",
    cal_opt_ics: "Apple/Outlook (file .ics)",
    cal_opt_cancel: "Annulla",
    cal_title: "Festa di Compleanno 1 Anno Jasper & Serena 👶🏻👶🏻",
    cal_desc: "Cari Parenti e Amici: A causa del tifone Bavi, la festa dei gemelli è stata rimandata a Sabato 15 Agosto. Vi invitiamo a unirvi a noi!\\n\\nDress code: abiti bianchi.",
    video_title: "Video dei Gemelli 🎥",
    video_subtitle: "Clicca per guardare Jasper e Serena mentre fanno i loro primi passi!",
    crawl_title: "Zhuazhou corsa in corso... 👶🏻👶🏻",
    crawl_boy_reached: "Jasper ha afferrato il/la {item}!",
    crawl_girl_reached: "Serena ha afferrato il/la {item}!",
    nickname_story_badge: "L'origine di \"Longlong\"",
    nickname_story_content: "La famiglia Feng segue la tradizione di nominare i figli in base alle generazioni, seguendo la frase di buon auspicio \"Jia Dao Long Chang\" (家道隆昌 - prosperità della famiglia). Mio padre è Feng Jiaying (馮家英), io sono Feng Daocheng (馮道誠), quindi logicamente mio figlio avrebbe dovuto avere \"Long\" (隆) come carattere centrale. Tuttavia, non riuscendo a calcolare un nome di buon auspicio con quel carattere, lo abbiamo chiamato Feng Xuanhan (馮宣翰), mantenendo però il suo carattere generazionale nel soprannome \"Longlong\" (隆隆). Inoltre, essendo nato nell'anno del Serpente (tradizionalmente chiamato \"Piccolo Drago\" nella cultura cinese), viene anche chiamato affettuosamente \"Longlong\" (龍龍 - Piccolo Drago)!",
    countdown_target_time: "Nuova data: 15 Agosto 2026 alle 12:00 - Mancano:"
  }
};

// State variables
let galleryCurrentTab = 'all';
let galleryVisibleCount = 6;
let lightboxIndex = 0;
let lightboxActivePhotos = [];

let selectedBoyItem = null;
let selectedGirlItem = null;

// Target date: 2026-08-15 12:00:00 (GMT+8)
const TARGET_DATE_TIME = new Date("2026-08-15T12:00:00+08:00").getTime();

// Seed database keys
const MOCK_VOTES_KEY_BOY = "zhuazhou_votes_boy_v1";
const MOCK_VOTES_KEY_GIRL = "zhuazhou_votes_girl_v1";
const USER_VOTED_KEY = "zhuazhou_user_voted_v1";
const RSVPS_KEY = "zhuazhou_rsvps_v1";

// Google Sheets Integration Web App URL (Paste Apps Script URL here)
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwkpwdDyz64qdj-iE4QKZe-5L1B1xuV2IGOcHnS8J1EgmFyVTdoHnf_snsFIFF3vP-H/exec";

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher();
  initCountdown();
  initGallery();
  initPredictionGame();
  initRSVPForm();
  initLocationAndCalendar();
  initAdminBackOffice();
  initFallingBackground();
  initMilestoneVideo();
  
  // Initial translations run
  applyTranslations();
});

/* ==========================================================================
   0. i18n Language Switcher Module
   ========================================================================== */
function initLanguageSwitcher() {
  const selectEl = document.getElementById("lang-select");
  if (!selectEl) return;
  
  // Set current selected option based on state
  selectEl.value = currentLang;

  selectEl.addEventListener("change", (e) => {
    currentLang = e.target.value;
    localStorage.setItem("twins_party_lang", currentLang);
    
    // Apply layout changes
    applyTranslations();
    
    // Rerender grids and charts for prediction game so item names translate immediately
    reRenderPredictionSection();
  });
}

function applyTranslations() {
  const dict = i18nDict[currentLang] || i18nDict["zh-TW"];

  // 1. Set document title
  document.title = dict.doc_title;

  // 2. Iterate elements with [data-i18n]
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      // Allow HTML tags for formatted nodes like dress code & titles
      el.innerHTML = dict[key];
    }
  });

  // 3. Translate placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });
}

/* ==========================================================================
   1. Countdown Timer Module
   ========================================================================== */
function initCountdown() {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = TARGET_DATE_TIME - now;

    if (distance < 0) {
      daysEl.innerText = "00";
      hoursEl.innerText = "00";
      minutesEl.innerText = "00";
      secondsEl.innerText = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerText = String(days).padStart(2, '0');
    hoursEl.innerText = String(hours).padStart(2, '0');
    minutesEl.innerText = String(minutes).padStart(2, '0');
    secondsEl.innerText = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

/* ==========================================================================
   2. Gallery Module
   ========================================================================== */
function initGallery() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const galleryGrid = document.getElementById("gallery-grid");
  const loadMoreBtn = document.getElementById("load-more-btn");
  
  // Lightbox elements
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");

  function renderGallery() {
    galleryGrid.innerHTML = '';
    
    // Filter active photos based on selection
    let filteredPhotos = [];
    if (galleryCurrentTab === 'all') {
      filteredPhotos = allPhotos;
    } else if (galleryCurrentTab === 'boy') {
      filteredPhotos = sonPhotos.map(url => ({ url, type: 'boy' }));
    } else if (galleryCurrentTab === 'girl') {
      filteredPhotos = daughterPhotos.map(url => ({ url, type: 'girl' }));
    }

    lightboxActivePhotos = filteredPhotos; // cache for lightbox cycling

    // Slice to currently visible count
    const visiblePhotos = filteredPhotos.slice(0, galleryVisibleCount);

    visiblePhotos.forEach((photo, index) => {
      const item = document.createElement("div");
      item.className = `gallery-item ${photo.type}`;
      item.innerHTML = `<img src="${photo.url}" alt="成長照片" loading="lazy">`;
      item.addEventListener("click", () => openLightbox(index));
      galleryGrid.appendChild(item);
    });

    // Check if Load More should show
    if (galleryVisibleCount >= filteredPhotos.length) {
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'block';
    }
  }

  // Tab change handler
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      galleryCurrentTab = btn.getAttribute("data-tab");
      galleryVisibleCount = 6; // Reset page size
      renderGallery();
    });
  });

  // Load more button handler
  loadMoreBtn.addEventListener("click", () => {
    galleryVisibleCount += 6;
    renderGallery();
  });

  // Open Lightbox
  function openLightbox(index) {
    lightboxIndex = index;
    updateLightboxImg();
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden"; // disable background scroll
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = ""; // restore scroll
  }

  function updateLightboxImg() {
    if (lightboxActivePhotos[lightboxIndex]) {
      lightboxImg.src = lightboxActivePhotos[lightboxIndex].url;
    }
  }

  function nextLightbox() {
    lightboxIndex = (lightboxIndex + 1) % lightboxActivePhotos.length;
    updateLightboxImg();
  }

  function prevLightbox() {
    lightboxIndex = (lightboxIndex - 1 + lightboxActivePhotos.length) % lightboxActivePhotos.length;
    updateLightboxImg();
  }

  // Lightbox Event Listeners
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxNext.addEventListener("click", nextLightbox);
  lightboxPrev.addEventListener("click", prevLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextLightbox();
    if (e.key === "ArrowLeft") prevLightbox();
  });

  // Initial draw
  renderGallery();
}

/* ==========================================================================
   3. Zhuazhou Prediction Game Module
   ========================================================================== */
let globalPredictionModule = null; // cached reference for translation rerenders

function initPredictionGame() {
  const boyGrid = document.getElementById("boy-items-grid");
  const girlGrid = document.getElementById("girl-items-grid");
  const submitBtn = document.getElementById("submit-votes-btn");

  const boyChart = document.getElementById("boy-results-chart");
  const girlChart = document.getElementById("girl-results-chart");

  // Load vote storage or Seed standard mock values
  let boyVotes = JSON.parse(localStorage.getItem(MOCK_VOTES_KEY_BOY));
  let girlVotes = JSON.parse(localStorage.getItem(MOCK_VOTES_KEY_GIRL));
  let userVoteState = JSON.parse(localStorage.getItem(USER_VOTED_KEY));

  const initialZeroVotes = { key: 0, camera: 0, chemistry: 0, mixer: 0, tools: 0, blocks: 0, airplane: 0, abacus: 0, stethoscope: 0, ball: 0 };

  if (!boyVotes) {
    boyVotes = { ...initialZeroVotes };
    localStorage.setItem(MOCK_VOTES_KEY_BOY, JSON.stringify(boyVotes));
  }

  if (!girlVotes) {
    girlVotes = { ...initialZeroVotes };
    localStorage.setItem(MOCK_VOTES_KEY_GIRL, JSON.stringify(girlVotes));
  }

  // Draw grids
  function renderMatGrids() {
    boyGrid.innerHTML = '';
    girlGrid.innerHTML = '';
    
    boyGrid.style.display = 'grid';
    girlGrid.style.display = 'grid';
    submitBtn.style.display = 'block';
    
    boyChart.style.display = 'none';
    girlChart.style.display = 'none';

    const dict = i18nDict[currentLang] || i18nDict["zh-TW"];

    // Boy Grid
    zhuazhouItems.forEach(item => {
      const card = createItemCard(item, 'boy', dict);
      boyGrid.appendChild(card);
    });

    // Girl Grid
    zhuazhouItems.forEach(item => {
      const card = createItemCard(item, 'girl', dict);
      girlGrid.appendChild(card);
    });
  }

  function createItemCard(item, gender, dict) {
    const card = document.createElement("div");
    card.className = "mat-item";
    
    const labelText = dict[item.labelKey] || item.label;
    const jobText = dict[item.jobKey] || item.job;

    card.innerHTML = `
      <div class="mat-item-icon">${item.svg}</div>
      <div class="mat-item-label">${labelText}</div>
      <div class="mat-item-job">${jobText}</div>
    `;

    // Restore selected class in case we are rebuilding on language switch
    if (gender === 'boy' && selectedBoyItem === item.id) {
      card.classList.add("selected");
    } else if (gender === 'girl' && selectedGirlItem === item.id) {
      card.classList.add("selected");
    }

    card.addEventListener("click", () => {
      // Trigger a bubble pop bounce animation
      card.classList.add("bounce-effect");
      setTimeout(() => {
        card.classList.remove("bounce-effect");
      }, 400);

      if (gender === 'boy') {
        const active = boyGrid.querySelector(".mat-item.selected");
        if (active) active.classList.remove("selected");
        card.classList.add("selected");
        selectedBoyItem = item.id;
      } else {
        const active = girlGrid.querySelector(".mat-item.selected");
        if (active) active.classList.remove("selected");
        card.classList.add("selected");
        selectedGirlItem = item.id;
      }
      checkSelectionStatus();
    });

    return card;
  }

  function checkSelectionStatus() {
    if (selectedBoyItem && selectedGirlItem) {
      submitBtn.removeAttribute("disabled");
    } else {
      submitBtn.setAttribute("disabled", "true");
    }
  }

  // Handle submit prediction
  submitBtn.addEventListener("click", () => {
    if (!selectedBoyItem || !selectedGirlItem) return;

    const voteData = {
      boyItem: selectedBoyItem,
      girlItem: selectedGirlItem
    };
    localStorage.setItem(USER_VOTED_KEY, JSON.stringify(voteData));

    boyVotes[selectedBoyItem]++;
    girlVotes[selectedGirlItem]++;
    localStorage.setItem(MOCK_VOTES_KEY_BOY, JSON.stringify(boyVotes));
    localStorage.setItem(MOCK_VOTES_KEY_GIRL, JSON.stringify(girlVotes));

    userVoteState = voteData;

    // Trigger 3D Crawling Animation first, then show results
    triggerCrawlingAnimation(selectedBoyItem, selectedGirlItem, () => {
      showResults();
    });
  });

  function triggerCrawlingAnimation(boyItemId, girlItemId, onComplete) {
    const theater = document.getElementById("crawling-theater");
    const runnerBoy = document.getElementById("runner-boy");
    const runnerGirl = document.getElementById("runner-girl");
    const toastOverlay = document.getElementById("crawling-toast-overlay");
    const toastText = document.getElementById("crawling-toast-text");

    if (!theater || !runnerBoy || !runnerGirl) {
      if (onComplete) onComplete();
      return;
    }

    const dict = i18nDict[currentLang] || i18nDict["zh-TW"];

    // 1. Find details of selected items
    const boyItem = zhuazhouItems.find(i => i.id === boyItemId);
    const girlItem = zhuazhouItems.find(i => i.id === girlItemId);

    if (!boyItem || !girlItem) {
      if (onComplete) onComplete();
      return;
    }

    // 2. Render all 10 candidate items on boy's and girl's playmats in circles
    const radius = 38; // Position radius in %
    
    const boyItemsContainer = document.getElementById("boy-playmat-items");
    if (boyItemsContainer) {
      boyItemsContainer.innerHTML = '';
      zhuazhouItems.forEach((item, index) => {
        // Rotate by -90 degrees so first item starts at top-center
        const angle = (index * 36 - 90) * Math.PI / 180;
        const left = 50 + radius * Math.cos(angle);
        const top = 50 + radius * Math.sin(angle);
        
        const itemEl = document.createElement("div");
        itemEl.className = "playmat-stage-item";
        itemEl.id = `boy-stage-item-${item.id}`;
        itemEl.style.left = `${left}%`;
        itemEl.style.top = `${top}%`;
        itemEl.innerHTML = item.svg;
        boyItemsContainer.appendChild(itemEl);
      });
    }

    const girlItemsContainer = document.getElementById("girl-playmat-items");
    if (girlItemsContainer) {
      girlItemsContainer.innerHTML = '';
      zhuazhouItems.forEach((item, index) => {
        const angle = (index * 36 - 90) * Math.PI / 180;
        const left = 50 + radius * Math.cos(angle);
        const top = 50 + radius * Math.sin(angle);
        
        const itemEl = document.createElement("div");
        itemEl.className = "playmat-stage-item";
        itemEl.id = `girl-stage-item-${item.id}`;
        itemEl.style.left = `${left}%`;
        itemEl.style.top = `${top}%`;
        itemEl.innerHTML = item.svg;
        girlItemsContainer.appendChild(itemEl);
      });
    }

    // 3. Reset runners back to center (50%, 50%) & Speech bubble
    runnerBoy.style.left = "50%";
    runnerBoy.style.top = "50%";
    runnerBoy.classList.remove("crawling");

    runnerGirl.style.left = "50%";
    runnerGirl.style.top = "50%";
    runnerGirl.classList.remove("crawling");

    toastOverlay.style.display = "none";

    // Calculate target coordinates for selected items (slightly inside placement radius)
    const crawlRadius = 33; 
    
    const boyIndex = zhuazhouItems.findIndex(i => i.id === boyItemId);
    const boyAngle = (boyIndex * 36 - 90) * Math.PI / 180;
    const boyTargetLeft = 50 + crawlRadius * Math.cos(boyAngle);
    const boyTargetTop = 50 + crawlRadius * Math.sin(boyAngle);

    const girlIndex = zhuazhouItems.findIndex(i => i.id === girlItemId);
    const girlAngle = (girlIndex * 36 - 90) * Math.PI / 180;
    const girlTargetLeft = 50 + crawlRadius * Math.cos(girlAngle);
    const girlTargetTop = 50 + crawlRadius * Math.sin(girlAngle);

    // 4. Show the theater modal
    theater.style.display = "flex";

    // 5. Trigger crawl run after 500ms
    setTimeout(() => {
      runnerBoy.style.left = `${boyTargetLeft}%`;
      runnerBoy.style.top = `${boyTargetTop}%`;
      runnerBoy.classList.add("crawling");

      runnerGirl.style.left = `${girlTargetLeft}%`;
      runnerGirl.style.top = `${girlTargetTop}%`;
      runnerGirl.classList.add("crawling");
    }, 500);

    // 6. When runners reach targets (after 3500ms of transit, total 4000ms)
    setTimeout(() => {
      runnerBoy.classList.remove("crawling");
      runnerGirl.classList.remove("crawling");

      // Bounce target items
      const targetBoyEl = document.getElementById(`boy-stage-item-${boyItemId}`);
      const targetGirlEl = document.getElementById(`girl-stage-item-${girlItemId}`);
      if (targetBoyEl) targetBoyEl.classList.add("hit");
      if (targetGirlEl) targetGirlEl.classList.add("hit");

      // Explode Confetti at each lane's target position
      const rectBoy = targetBoyEl ? targetBoyEl.getBoundingClientRect() : { left: 0, top: 0, width: 0, height: 0 };
      const rectGirl = targetGirlEl ? targetGirlEl.getBoundingClientRect() : { left: 0, top: 0, width: 0, height: 0 };
      
      const xBoy = (rectBoy.left + rectBoy.width / 2) / window.innerWidth;
      const yBoy = (rectBoy.top + rectBoy.height / 2) / window.innerHeight;
      const xGirl = (rectGirl.left + rectGirl.width / 2) / window.innerWidth;
      const yGirl = (rectGirl.top + rectGirl.height / 2) / window.innerHeight;

      // Confetti burst for Boy
      confetti({
        particleCount: 50,
        spread: 40,
        origin: { x: xBoy, y: yBoy }
      });

      // Confetti burst for Girl
      confetti({
        particleCount: 50,
        spread: 40,
        origin: { x: xGirl, y: yGirl }
      });

      // Show localized hit toast
      const boyLabel = dict[boyItem.labelKey] || boyItem.label;
      const girlLabel = dict[girlItem.labelKey] || girlItem.label;

      const boyToast = (dict.crawl_boy_reached || "哥哥抓到了 {item}！").replace("{item}", boyLabel);
      const girlToast = (dict.crawl_girl_reached || "妹妹抓到了 {item}！").replace("{item}", girlLabel);

      toastText.innerText = `${boyToast}\n${girlToast}`;
      toastOverlay.style.display = "block";
    }, 4000);

    // 7. Complete and exit theater (after 6000ms total)
    setTimeout(() => {
      // Fade out theater smoothly
      theater.style.transition = "opacity 0.4s ease";
      theater.style.opacity = "0";

      setTimeout(() => {
        theater.style.display = "none";
        theater.style.opacity = "1";
        theater.style.transition = "";
        if (onComplete) onComplete();
      }, 400);
    }, 6000);
  }

  const revoteBtn = document.getElementById("revote-btn");

  function enableReVote() {
    boyGrid.style.display = 'grid';
    girlGrid.style.display = 'grid';
    submitBtn.style.display = 'block';

    boyChart.style.display = 'none';
    girlChart.style.display = 'none';
    
    selectedBoyItem = null;
    selectedGirlItem = null;
    
    renderMatGrids();
    checkSelectionStatus();
    
    revoteBtn.style.display = 'none';
  }

  revoteBtn.addEventListener("click", enableReVote);

  // Display voting results charts
  function showResults() {
    boyGrid.style.display = 'none';
    girlGrid.style.display = 'none';
    submitBtn.style.display = 'none';

    boyChart.style.display = 'flex';
    girlChart.style.display = 'flex';

    renderCharts(boyChart, boyVotes, userVoteState ? userVoteState.boyItem : null, 'boy');
    renderCharts(girlChart, girlVotes, userVoteState ? userVoteState.girlItem : null, 'girl');
    
    revoteBtn.style.display = 'block';
  }

  function renderCharts(containerEl, votesObj, userSelectId, gender) {
    const dict = i18nDict[currentLang] || i18nDict["zh-TW"];

    const titleText = dict.vote_chart_title || "預測統計結果";
    const babyNameText = gender === 'boy' ? "Jasper" : "Serena";


    containerEl.innerHTML = `
      <h4 style="margin-bottom:10px; font-size:1rem; border-bottom:1px dashed var(--color-border); padding-bottom:5px;">
        📊 ${titleText} (${babyNameText})
      </h4>
    `;

    const totalVotes = Object.values(votesObj).reduce((sum, v) => sum + v, 0);

    const results = Object.entries(votesObj).map(([id, count]) => {
      const details = zhuazhouItems.find(i => i.id === id);
      return {
        id,
        count,
        percent: totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0,
        details
      };
    }).sort((a, b) => b.count - a.count);

    results.forEach(res => {
      const isUserChoice = res.id === userSelectId;
      
      const labelText = dict[res.details.labelKey] || res.details.label;

      const row = document.createElement("div");
      row.className = "result-row";
      row.innerHTML = `
        <div class="result-label-wrapper">
          <span class="result-icon">${res.details.svg}</span>
          <span class="result-text-label">${labelText}</span>
        </div>
        <div class="result-bar-outer">
          <div class="result-bar-inner" data-width="${res.percent}%"></div>
        </div>
        <span class="result-percent num-font">
          ${res.percent}%
        </span>
      `;
      containerEl.appendChild(row);
    });

    // Trigger bar fill animation
    setTimeout(() => {
      containerEl.querySelectorAll(".result-bar-inner").forEach(bar => {
        bar.style.width = bar.getAttribute("data-width");
      });
    }, 100);
  }

  function loadRealVotesFromSheet() {
    if (GOOGLE_SHEET_URL) {
      fetch(GOOGLE_SHEET_URL)
        .then(res => res.json())
        .then(data => {
          const realBoyVotes = { ...initialZeroVotes };
          const realGirlVotes = { ...initialZeroVotes };
          
          data.forEach(r => {
            if (r.predictBoy) {
              const item = zhuazhouItems.find(i => i18nDict["zh-TW"][i.labelKey] === r.predictBoy || i.id === r.predictBoy);
              if (item) realBoyVotes[item.id]++;
            }
            if (r.predictGirl) {
              const item = zhuazhouItems.find(i => i18nDict["zh-TW"][i.labelKey] === r.predictGirl || i.id === r.predictGirl);
              if (item) realGirlVotes[item.id]++;
            }
          });
          
          boyVotes = realBoyVotes;
          girlVotes = realGirlVotes;
          localStorage.setItem(MOCK_VOTES_KEY_BOY, JSON.stringify(boyVotes));
          localStorage.setItem(MOCK_VOTES_KEY_GIRL, JSON.stringify(girlVotes));
          
          if (userVoteState) {
            showResults();
          }
        })
        .catch(err => console.error("Error loading real votes:", err));
    }
  }

  // Cache object references globally for language updates
  globalPredictionModule = {
    showResults,
    renderMatGrids,
    enableReVote,
    hasVoted: () => !!userVoteState
  };

  // Load initial state
  if (userVoteState) {
    showResults();
  } else {
    renderMatGrids();
  }

  // Fetch real-time predictions from Google Sheets if configured
  loadRealVotesFromSheet();
}

// Function triggered when language switcher updates
function reRenderPredictionSection() {
  if (!globalPredictionModule) return;
  
  if (globalPredictionModule.hasVoted()) {
    globalPredictionModule.showResults();
  } else {
    globalPredictionModule.renderMatGrids();
  }
}

/* ==========================================================================
   4. RSVP Form & Local Storage Integration
   ========================================================================== */
function initRSVPForm() {
  const form = document.getElementById("rsvp-form");
  const formWrapper = document.getElementById("rsvp-form-wrapper");
  const successWrapper = document.getElementById("rsvp-success-wrapper");
  const wishesShow = document.getElementById("success-wishes-show");
  const editBtn = document.getElementById("edit-rsvp-btn");

  const attendRadios = document.getElementsByName("rsvp-attend");
  const babyChairGroup = document.getElementById("baby-chair-group");
  const dietGroup = document.getElementById("diet-group");

  // Toggle fields depending on Attendance radio
  function handleAttendanceToggle() {
    let attendVal = 'yes';
    for (let r of attendRadios) {
      if (r.checked) attendVal = r.value;
    }

    if (attendVal === 'yes') {
      babyChairGroup.style.display = '';
      dietGroup.style.display = '';
    } else {
      babyChairGroup.style.display = 'none';
      dietGroup.style.display = 'none';
    }
  }

  for (let r of attendRadios) {
    r.addEventListener("change", handleAttendanceToggle);
  }
  handleAttendanceToggle(); // initial check

  // Process RSVP Submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("rsvp-name").value.trim();
    const count = parseInt(document.getElementById("rsvp-count").value, 10);
    const chairs = parseInt(document.getElementById("rsvp-chairs").value, 10);
    const diet = document.getElementById("rsvp-diet").value;
    const wishes = document.getElementById("rsvp-wishes").value.trim();

    let attendVal = 'yes';
    for (let r of attendRadios) {
      if (r.checked) attendVal = r.value;
    }

    if (!name) return;

    const defaultBlessing = currentLang === 'zh-TW' 
      ? '生日快樂，健康長大！' 
      : (currentLang === 'en' 
        ? 'Happy Birthday, grow up healthy!' 
        : (currentLang === 'ja' 
          ? 'お誕生日おめでとう！健やかに育ってね！' 
          : (currentLang === 'th' 
            ? 'สุขสันต์วันเกิด ขอให้มีสุขภาพแข็งแรงโตไวๆ นะครับ!' 
            : 'Buon compleanno! Crescete sani e felici!')));

    // Grab prediction selections
    let predictBoy = '無';
    let predictGirl = '無';

    if (selectedBoyItem) {
      const itemDetail = zhuazhouItems.find(item => item.id === selectedBoyItem);
      if (itemDetail) predictBoy = i18nDict["zh-TW"][itemDetail.labelKey] || itemDetail.id;
    } else {
      const savedVotes = JSON.parse(localStorage.getItem(USER_VOTED_KEY));
      if (savedVotes && savedVotes.boyItem) {
        const itemDetail = zhuazhouItems.find(item => item.id === savedVotes.boyItem);
        if (itemDetail) predictBoy = i18nDict["zh-TW"][itemDetail.labelKey] || itemDetail.id;
      }
    }

    if (selectedGirlItem) {
      const itemDetail = zhuazhouItems.find(item => item.id === selectedGirlItem);
      if (itemDetail) predictGirl = i18nDict["zh-TW"][itemDetail.labelKey] || itemDetail.id;
    } else {
      const savedVotes = JSON.parse(localStorage.getItem(USER_VOTED_KEY));
      if (savedVotes && savedVotes.girlItem) {
        const itemDetail = zhuazhouItems.find(item => item.id === savedVotes.girlItem);
        if (itemDetail) predictGirl = i18nDict["zh-TW"][itemDetail.labelKey] || itemDetail.id;
      }
    }

    const rsvpObj = {
      name,
      attend: attendVal,
      count: attendVal === 'yes' ? count : 0,
      chairs: attendVal === 'yes' ? chairs : 0,
      diet: attendVal === 'yes' ? diet : '無',
      wishes: wishes || defaultBlessing,
      predictBoy,
      predictGirl,
      timestamp: new Date().toLocaleString()
    };

    let rsvps = JSON.parse(localStorage.getItem(RSVPS_KEY)) || [];
    const index = rsvps.findIndex(r => r.name.toLowerCase() === name.toLowerCase());
    if (index > -1) {
      rsvps[index] = rsvpObj;
    } else {
      rsvps.push(rsvpObj);
    }

    localStorage.setItem(RSVPS_KEY, JSON.stringify(rsvps));

    // Send to Google Sheets if configured
    if (GOOGLE_SHEET_URL) {
      fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(rsvpObj)
      }).catch(err => console.error("Error sending to Google Sheet:", err));
    }

    triggerConfettiExplosion();

    wishesShow.innerText = `「${rsvpObj.wishes}」`;

    formWrapper.style.display = 'none';
    successWrapper.style.display = 'block';
  });

  editBtn.addEventListener("click", () => {
    successWrapper.style.display = 'none';
    formWrapper.style.display = 'block';
  });

  const anotherBtn = document.getElementById("another-rsvp-btn");
  if (anotherBtn) {
    anotherBtn.addEventListener("click", () => {
      // 1. Reset RSVP form values
      document.getElementById("rsvp-name").value = "";
      document.getElementById("rsvp-count").value = "1";
      document.getElementById("rsvp-chairs").value = "0";
      document.getElementById("rsvp-diet").value = "葷食";
      document.getElementById("rsvp-wishes").value = "";
      document.getElementById("rsvp-attend-yes").checked = true;
      handleAttendanceToggle();

      // 2. Reset prediction game UI
      if (globalPredictionModule) {
        globalPredictionModule.enableReVote();
      }

      // 3. Switch view back to RSVP form
      successWrapper.style.display = 'none';
      formWrapper.style.display = 'block';
    });
  }

  function triggerConfettiExplosion() {
    const end = Date.now() + (2 * 1000); // 2 seconds

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }
}

/* ==========================================================================
   5. Calendar Integration Module
   ========================================================================== */
function initLocationAndCalendar() {
  const addCalBtn = document.getElementById("add-calendar-btn");

  addCalBtn.addEventListener("click", () => {
    const dict = i18nDict[currentLang] || i18nDict["zh-TW"];

    const titleText = dict.cal_modal_title || "選擇加入行事曆方式";
    const optGoogleText = dict.cal_opt_google || "Google 日曆 (線上)";
    const optIcsText = dict.cal_opt_ics || "Apple/Outlook (.ics檔案)";
    const cancelText = dict.cal_opt_cancel || "取消";

    const menu = document.createElement("div");
    menu.style.position = 'fixed';
    menu.style.top = '50%';
    menu.style.left = '50%';
    menu.style.transform = 'translate(-50%, -50%)';
    menu.style.background = '#FFFFFF';
    menu.style.boxShadow = 'var(--shadow-medium)';
    menu.style.borderRadius = 'var(--radius-md)';
    menu.style.padding = '25px';
    menu.style.zIndex = '2000';
    menu.style.width = '300px';
    menu.style.textAlign = 'center';
    menu.id = 'calendar-options-modal';

    menu.innerHTML = `
      <h3 style="margin-bottom:15px; font-size:1.1rem; color:var(--color-text-dark);">${titleText}</h3>
      <div style="display:flex; flex-direction:column; gap:12px;">
        <button class="action-btn map-btn" id="cal-opt-google" style="padding:10px;">${optGoogleText}</button>
        <button class="action-btn cal-btn" id="cal-opt-ics" style="padding:10px;">${optIcsText}</button>
        <button class="edit-rsvp-btn" id="cal-opt-cancel" style="margin-top:5px;">${cancelText}</button>
      </div>
    `;

    const overlay = document.createElement("div");
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0,0,0,0.4)';
    overlay.style.zIndex = '1999';
    overlay.id = 'calendar-overlay';

    document.body.appendChild(overlay);
    document.body.appendChild(menu);

    const cleanMenu = () => {
      document.getElementById('calendar-options-modal').remove();
      document.getElementById('calendar-overlay').remove();
    };

    overlay.addEventListener("click", cleanMenu);
    document.getElementById("cal-opt-cancel").addEventListener("click", cleanMenu);

    // Google Calendar Option
    document.getElementById("cal-opt-google").addEventListener("click", () => {
      const calTitle = encodeURIComponent(dict.cal_title || "隆隆 & 心心 一歲抓週派對 👶🏻👶🏻");
      const calDesc = encodeURIComponent(dict.cal_desc || "不知不覺，隆隆和心心要滿一歲囉！");
      const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${calTitle}&dates=20260815T040000Z%2F20260815T070000Z&details=${calDesc}&location=Amour+373+Cafe+(桃園市平鎮區延平路二段373號)&sf=true&output=xml`;
      window.open(googleUrl, '_blank');
      cleanMenu();
    });

    // ICS Download Option
    document.getElementById("cal-opt-ics").addEventListener("click", () => {
      const rawTitle = dict.cal_title || "隆隆 & 心心 一歲抓週派對 👶🏻👶🏻";
      const rawDesc = (dict.cal_desc || "不知不覺，隆隆和心心要滿一歲囉！").replace(/\\n/g, "\n");
      
      const icsLines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Zhuazhou Twins Party//NONSGML v1.0//EN",
        "BEGIN:VEVENT",
        "UID:twins-1st-birthday-20260815",
        "DTSTAMP:20260703T000000Z",
        "DTSTART:20260815T040000Z",
        "DTEND:20260815T070000Z",
        `SUMMARY:${rawTitle}`,
        `DESCRIPTION:${rawDesc.replace(/\n/g, "\\n")}`,
        "LOCATION:Amour 373 Cafe (桃園市平鎮區延平路二段373號)",
        "END:VEVENT",
        "END:VCALENDAR"
      ].join("\r\n");

      const blob = new Blob([icsLines], { type: "text/calendar;charset=utf-8" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "twins-zhuazhou-party.ics";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      cleanMenu();
    });
  });
}

/* ==========================================================================
   6. Parents Admin Dashboard (Back-Office)
   ========================================================================== */
function initAdminBackOffice() {
  const trigger = document.getElementById("admin-trigger");
  const modal = document.getElementById("admin-modal");
  const closeBtn = document.getElementById("admin-close-btn");
  
  const authWrapper = document.getElementById("admin-auth-wrapper");
  const contentWrapper = document.getElementById("admin-content-wrapper");
  const loginBtn = document.getElementById("admin-login-btn");
  const passwordInput = document.getElementById("admin-password");
  
  let currentLoadedRsvps = [];

  const statTotalAttend = document.getElementById("stat-total-attend");
  const statTotalChairs = document.getElementById("stat-total-chairs");
  const statTotalForms = document.getElementById("stat-total-forms");
  
  const tableBody = document.getElementById("admin-table-body");
  const downloadBtn = document.getElementById("admin-download-btn");
  const clearBtn = document.getElementById("admin-clear-btn");

  const ADMIN_PASSWORD_DEFAULT = "1207";

  trigger.addEventListener("click", () => {
    modal.classList.add("active");
    passwordInput.value = '';
    authWrapper.style.display = 'flex';
    contentWrapper.style.display = 'none';
  });

  const closeModal = () => modal.classList.remove("active");
  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  loginBtn.addEventListener("click", () => {
    if (passwordInput.value === ADMIN_PASSWORD_DEFAULT) {
      authWrapper.style.display = 'none';
      contentWrapper.style.display = 'block';
      loadAdminDashboardData();
    } else {
      alert(currentLang === 'zh-TW' 
        ? "密碼錯誤！(提示：預設密碼是雙胞胎的出生月日 1207)" 
        : "Incorrect password! (Hint: default is 1207)");
    }
  });

  function loadAdminDashboardData() {
    if (GOOGLE_SHEET_URL) {
      tableBody.innerHTML = `<tr><td colspan="8" style="text-align:center; color:var(--color-text-light);">Loading data from Google Sheets...</td></tr>`;
      
      fetch(GOOGLE_SHEET_URL)
        .then(res => res.json())
        .then(data => {
          currentLoadedRsvps = data;
          renderTableData(data);
        })
        .catch(err => {
          console.error("Error fetching from Google Sheet:", err);
          const rsvps = JSON.parse(localStorage.getItem(RSVPS_KEY)) || [];
          currentLoadedRsvps = rsvps;
          renderTableData(rsvps);
        });
    } else {
      const rsvps = JSON.parse(localStorage.getItem(RSVPS_KEY)) || [];
      currentLoadedRsvps = rsvps;
      renderTableData(rsvps);
    }
  }

  function renderTableData(rsvps) {
    let totalAttendCount = 0;
    let totalChairsCount = 0;
    let formCount = rsvps.length;

    tableBody.innerHTML = '';

    rsvps.forEach(r => {
      if (r.attend === 'yes') {
        totalAttendCount += r.count;
        totalChairsCount += r.chairs;
      }

      const row = document.createElement("tr");
      row.innerHTML = `
        <td style="font-weight:600;">${r.name}</td>
        <td>${r.attend === 'yes' ? '💚 Yes' : '💔 No'}</td>
        <td class="num-font">${r.attend === 'yes' ? r.count : '-'}</td>
        <td class="num-font">${r.attend === 'yes' ? r.chairs : '-'}</td>
        <td>${r.attend === 'yes' ? r.diet : '-'}</td>
        <td>${r.predictBoy || '-'}</td>
        <td>${r.predictGirl || '-'}</td>
        <td style="color:var(--color-text-light); font-size:0.8rem; max-width:180px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${r.wishes}">
          ${r.wishes}
        </td>
      `;
      tableBody.appendChild(row);
    });

    if (rsvps.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="8" style="text-align:center; color:var(--color-text-light);">No data.</td></tr>`;
    }

    statTotalAttend.innerText = totalAttendCount;
    statTotalChairs.innerText = totalChairsCount;
    statTotalForms.innerText = formCount;
  }

  clearBtn.addEventListener("click", () => {
    const pwPrompt = currentLang === 'zh-TW'
      ? "請輸入管理員清空密碼以執行此操作："
      : "Please enter the admin clear password to proceed:";
    const inputPw = prompt(pwPrompt);

    if (inputPw === null) return; // User cancelled prompt

    if (inputPw === "20250713") {
      const clearConfirmMsg = currentLang === 'zh-TW'
        ? "確定要清空本機的所有親友回條資料嗎？此操作不可逆！"
        : "Are you sure you want to clear all local RSVPs? This action cannot be undone!";
      if (confirm(clearConfirmMsg)) {
        localStorage.removeItem(RSVPS_KEY);
        loadAdminDashboardData();
      }
    } else {
      alert(currentLang === 'zh-TW'
        ? "密碼錯誤，無法清空資料！"
        : "Incorrect password, cannot clear data!");
    }
  });

  downloadBtn.addEventListener("click", () => {
    if (currentLoadedRsvps.length === 0) {
      alert("No data to export!");
      return;
    }

    const csvRows = [
      "\ufeffName,Attend,Guests,Baby Chairs,Diet,Predict Boy,Predict Girl,Wishes,Timestamp"
    ];

    currentLoadedRsvps.forEach(r => {
      const columns = [
        `"${r.name.replace(/"/g, '""')}"`,
        r.attend === 'yes' ? 'Yes' : 'No',
        r.attend === 'yes' ? r.count : 0,
        r.attend === 'yes' ? r.chairs : 0,
        `"${(r.diet || '').replace(/"/g, '""')}"`,
        `"${(r.predictBoy || '無').replace(/"/g, '""')}"`,
        `"${(r.predictGirl || '無').replace(/"/g, '""')}"`,
        `"${(r.wishes || '').replace(/"/g, '""')}"`,
        r.timestamp
      ];
      csvRows.push(columns.join(','));
    });

    const csvContent = csvRows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Zhuazhou_RSVP_${new Date().toISOString().slice(0,10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

/* ==========================================================================
   6. Falling Background Particles Module
   ========================================================================== */
function initFallingBackground() {
  const container = document.body;
  const items = [
    { type: 'emoji', value: '🧸' },
    { type: 'emoji', value: '🎈' },
    { type: 'emoji', value: '🎂' },
    { type: 'emoji', value: '🍭' },
    { type: 'emoji', value: '🎁' },
    { type: 'emoji', value: '🌟' },
    { type: 'emoji', value: '🎀' },
    { type: 'emoji', value: '🦖' },
    // Pastels Mickey Ears SVG
    { type: 'svg', value: `<svg viewBox="0 0 100 100" style="width:100%; height:100%;"><circle cx="50" cy="55" r="30" /><circle cx="20" cy="25" r="18" /><circle cx="80" cy="25" r="18" /></svg>` },
    // Pastels Hello Kitty Bow SVG
    { type: 'svg', value: `<svg viewBox="0 0 100 100" style="width:100%; height:100%;"><circle cx="50" cy="50" r="12" /><path d="M50 50 C25 25, 25 75, 50 50 Z" /><path d="M50 50 C75 25, 75 75, 50 50 Z" /></svg>` }
  ];

  const colors = [
    '#BDE0FE', // pastel blue
    '#FFC6FF', // pastel pink
    '#FAD2E1', // pastel soft pink
    '#FDFFB6', // pastel yellow
    '#CAFFBF', // pastel green
    '#A0C4FF', // pastel indigo
    '#FFADAD'  // pastel red
  ];

  setInterval(() => {
    // Limit to 20 concurrent items to be super performant
    if (document.querySelectorAll(".falling-item").length > 20) return;

    const item = items[Math.floor(Math.random() * items.length)];
    const el = document.createElement("div");
    el.className = "falling-item";

    const size = Math.random() * 20 + 20; // 20px to 40px
    const duration = Math.random() * 8 + 8; // 8s to 16s
    const swayX = Math.random() * 100 - 50; // -50px to 50px
    
    el.style.left = `${Math.random() * 95}vw`;
    el.style.animationDuration = `${duration}s`;
    el.style.setProperty('--sway-x', `${swayX}px`);

    if (item.type === 'emoji') {
      el.innerText = item.value;
      el.style.fontSize = `${size}px`;
    } else {
      el.innerHTML = item.value;
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.display = 'inline-block';
      
      // Colorize the SVG path
      const svg = el.querySelector("svg");
      if (svg) {
        svg.style.fill = colors[Math.floor(Math.random() * colors.length)];
        svg.style.opacity = '0.4'; // gentle transparency so it's not distracting
      }
    }

    container.appendChild(el);

    // Clean up
    setTimeout(() => {
      el.remove();
    }, (duration + 1) * 1000);
  }, 1200); // spawn every 1.2 seconds
}

/* ==========================================================================
   7. Milestone Video Module
   ========================================================================== */
function initMilestoneVideo() {
  const videoCover = document.getElementById("video-cover");
  const videoEl = document.getElementById("milestone-video");

  if (!videoCover || !videoEl) return;

  videoCover.addEventListener("click", () => {
    // Hide custom cover overlay smoothly
    videoCover.style.opacity = '0';
    videoCover.style.pointerEvents = 'none';
    videoCover.style.visibility = 'hidden';

    // Play video
    videoEl.play().catch(err => {
      console.warn("Autoplay failed, displaying browser native play controls:", err);
    });
  });

  // Listen to video events to show cover again if video finishes or is reset
  videoEl.addEventListener("ended", () => {
    // Show custom cover overlay again
    videoCover.style.opacity = '1';
    videoCover.style.pointerEvents = 'auto';
    videoCover.style.visibility = 'visible';
  });
}
