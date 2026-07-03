// Photo Arrays
const daughterPhotos = [
  "daughter/25F2AF7F-DFED-4A4F-BD39-91078463B674_0.jpg",
  "daughter/39F61E1B-B8CD-4205-881A-6195F7A85E66_0.jpg",
  "daughter/3D4BC7C5-5D9C-4B11-BE2F-1E85CF5C1447_0.jpg",
  "daughter/4FC12C0A-4826-4891-ABE8-A932000C0C94_0.jpg",
  "daughter/5292DCDE-7CF7-4390-A857-15384734EE45_0.jpg",
  "daughter/60000B88-00CA-4974-A9B9-234EF0109311_0.jpg",
  "daughter/62CB457A-00EF-44A5-848B-517B8A6E458C_0.jpg",
  "daughter/89A705E1-0665-445C-A9AF-00FE29A6367D_0.jpg",
  "daughter/A7D913B1-6545-411E-B104-BA36E20C4EE5_0.jpg",
  "daughter/B4138F03-A5FB-43D4-9096-6645F41A8CEF_0.jpg",
  "daughter/B4E54C92-556C-4ADB-A149-7265C76CC8B1_0.jpg",
  "daughter/ED267838-DBF1-4D10-B934-355362BF6069_0.jpg"
];

const sonPhotos = [
  "son/00CADAA8-054A-489B-B391-5B5CFB463EAC_0.jpg",
  "son/19B8F9CB-7086-4C57-ACB6-2B1522935C89_0.jpg",
  "son/2EB0EA70-BD49-4643-89A6-1077309987BF_0.jpg",
  "son/4D13FB26-F04E-4492-88AF-E72D425A2F43_0.jpg",
  "son/50003046-9C65-43BD-8603-68993BFA40FE_0.jpg",
  "son/805B3A54-E9BE-4EC0-A15D-8B9F7708650C_0.jpg",
  "son/A6CE8C95-1058-4A23-89FB-E6A73D9950B7_0.jpg",
  "son/ADA7821B-BA47-4659-A795-F66E7B99B5E9_0.jpg",
  "son/B77345B5-BA70-48F4-A897-E86F52E955EA_0.jpg",
  "son/DBC95337-9026-42EF-ACAB-80C28D0E0011_0.jpg",
  "son/DC84775C-C3F4-404B-AF90-639268E7B4F8_0.jpg",
  "son/DD25EFE6-4B39-4E94-A4D3-2F3A04785C31_0.jpg"
];

// Combine all photos dynamically (alternating for visual variety)
const allPhotos = [];
const maxPhotosCount = Math.max(sonPhotos.length, daughterPhotos.length);
for (let i = 0; i < maxPhotosCount; i++) {
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

// Global localization state
let currentLang = localStorage.getItem("twins_party_lang") || "zh-TW";

// Translation dictionaries
const i18nDict = {
  "zh-TW": {
    doc_title: "隆隆 & 心心 一歲抓週派對邀請函",
    hero_boy_badge: "👦🏻 哥哥 隆隆",
    hero_girl_badge: "👧🏻 妹妹 心心",
    hero_title: "隆隆 & 心心<br>1st Birthday Party",
    hero_subtitle: "雙胞胎抓週週歲派對",
    hero_boy_role: "哥哥 (Older Brother)",
    hero_girl_role: "妹妹 (Younger Sister)",
    days_label: "天",
    hours_label: "時",
    minutes_label: "分",
    seconds_label: "秒",
    invitation_greet: "親愛的親朋好友：",
    invitation_p1: "不知不覺，隆隆和心心要滿一歲囉！👶🏻👶🏻",
    invitation_p2: "在這個充滿喜悅與重要紀念價值的日子裡，我們為兩個寶貝準備了熱鬧的抓週儀式與溫馨聚會。",
    invitation_p3: "誠摯地邀請您前來，一同見證這珍貴的時刻，為隆隆與心心送上最溫暖的祝福！",
    dc_title: "服裝主題 (Dress Code)",
    dc_desc: "建議穿搭<strong>「白色系服裝」</strong>，讓我們一起以純淨的白色，為寶貝們留下最美的紀念！",
    gallery_title: "成長點滴相簿",
    gallery_subtitle: "點擊照片可放大欣賞喔！",
    gallery_tab_all: "全部照片",
    gallery_tab_boy: "隆隆 (Jasper)",
    gallery_tab_girl: "心心 (Serena)",
    gallery_load_more: "載入更多照片",
    game_title: "抓週大預測",
    game_subtitle: "親友團站出來！預測隆隆和心心當天會抓到什麼物品呢？",
    game_boy_mat_title: "哥哥 馮宣翰 (Jasper) 的抓週地墊",
    game_boy_mat_desc: "預測隆隆會抓中什麼",
    game_girl_mat_title: "妹妹 馮妍心 (Serena) 的抓週地墊",
    game_girl_mat_desc: "預測心心會抓中什麼",
    game_submit_btn: "送出我的預測",
    timeline_title: "當日活動日程",
    timeline_subtitle: "派對流程安排，期待與大家共度歡樂時光",
    t1_title: "賓客入場與饗宴開始 🍽️",
    t1_desc: "親友陸續報到入座，現場備有美味精緻的餐點供大家享用與交流。",
    t2_title: "精彩抓週儀式與互動同樂 🎉",
    t2_desc: "隆隆與心心的抓週主秀登場！踩紅龜粿、敲智慧鑼，並看兩位寶貝會選中什麼寶物！期間將伴隨歡樂的猜謎與祝福活動。",
    t3_title: "溫馨大合照與交流 📸",
    t3_desc: "所有親朋好友與隆隆、心心一同拍攝珍貴的大合照，互道祝福，並贈送小禮物作為一歲生日的溫馨紀念。",
    rsvp_title: "線上出席回條 (RSVP)",
    rsvp_subtitle: "期待您的蒞臨！請於派對前填寫回條，以利我們為您準備精緻餐點與安排座位",
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
    loc_title: "派對時間與交通",
    loc_subtitle: "請將時間記錄在您的日曆中，期待您光臨 Amour 373 Cafe",
    loc_time_label: "活動時間",
    loc_time_desc: "2026年7月11日 (六)<br>12:00 - 15:00",
    loc_place_label: "派對地點",
    loc_place_desc: "Amour 373 Cafe 2樓",
    loc_address_desc: "桃園市平鎮區廣仁里延平路二段373號",
    loc_reminder_title: "溫馨小提醒：",
    loc_reminder_desc: "餐廳周邊設有停車空間，建議您可以稍微提早出門，以便順利停車與入場。🚗",
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
    admin_th_wishes: "留言祝福",
    admin_btn_clear: "清空所有回條",
    admin_btn_csv: "匯出 CSV 檔",
    footer_copy: "隆隆 & 心心 一歲抓週派對邀請函 © 2026",
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
    cal_title: "隆隆 & 心心 一歲抓週派對 👶🏻👶🏻",
    cal_desc: "不知不覺，隆隆和心心要滿一歲囉！誠摯地邀請您一同來見證寶貝們的週歲喜悅！\\n\\n服裝主題 (Dress Code)：建議穿著白色系衣服。"
  },
  "en": {
    doc_title: "Jasper & Serena 1st Birthday Party Invitation",
    hero_boy_badge: "👦🏻 Jasper (Older Brother)",
    hero_girl_badge: "👧🏻 Serena (Younger Sister)",
    hero_title: "Jasper & Serena<br>1st Birthday Party",
    hero_subtitle: "Twins Zhuazhou Celebration",
    hero_boy_role: "Brother (Jasper)",
    hero_girl_role: "Sister (Serena)",
    days_label: "Days",
    hours_label: "Hrs",
    minutes_label: "Mins",
    seconds_label: "Secs",
    invitation_greet: "Dear Family and Friends,",
    invitation_p1: "Time flies! Jasper and Serena are turning one! 👶🏻👶🏻",
    invitation_p2: "On this joyful and memorable day, we have prepared a traditional Zhuazhou (grab items) ceremony and a warm celebration gathering for our twins.",
    invitation_p3: "We sincerely invite you to come, witness this precious milestone, and shower Jasper and Serena with your warmest wishes!",
    dc_title: "Dress Code",
    dc_desc: "We suggest wearing <strong>'White attire'</strong>, so we can capture beautiful, pure memories with our babies!",
    gallery_title: "Milestones Gallery",
    gallery_subtitle: "Click on photos to enlarge!",
    gallery_tab_all: "All Photos",
    gallery_tab_boy: "Jasper (Son)",
    gallery_tab_girl: "Serena (Daughter)",
    gallery_load_more: "Load More Photos",
    game_title: "Zhuazhou Prediction",
    game_subtitle: "Cast your vote! What items do you think Jasper and Serena will grab?",
    game_boy_mat_title: "Jasper's Zhuazhou Mat (Brother)",
    game_boy_mat_desc: "Predict what Jasper will grab",
    game_girl_mat_title: "Serena's Zhuazhou Mat (Sister)",
    game_girl_mat_desc: "Predict what Serena will grab",
    game_submit_btn: "Submit My Prediction",
    timeline_title: "Event Schedule",
    timeline_subtitle: "Itinerary of the party, looking forward to celebrating together",
    t1_title: "Guest Arrival & Reception 🍽️",
    t1_desc: "Guests check-in. Delicious food and refreshments will be served.",
    t2_title: "Zhuazhou Ceremony & Fun Games 🎉",
    t2_desc: "The main event begins! Watch Jasper and Serena step on red rice cakes, beat the gong of wisdom, and grab items! Followed by fun quizzes and interactive games.",
    t3_title: "Group Photos & Gathering 📸",
    t3_desc: "All guests take photos with Jasper and Serena, exchange blessings, and receive a special return gift.",
    rsvp_title: "RSVP Reply",
    rsvp_subtitle: "We look forward to seeing you! Please fill out the RSVP form to help us prepare seats and catering",
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
    loc_title: "Date, Time & Venue",
    loc_subtitle: "Add the details to your calendar and easily navigate to Amour 373 Cafe",
    loc_time_label: "Date & Time",
    loc_time_desc: "Saturday, July 11, 2026<br>12:00 PM - 3:00 PM",
    loc_place_label: "Party Location",
    loc_place_desc: "Amour 373 Cafe 2F",
    loc_address_desc: "No. 373, Sec. 2, Yanping Rd., Pingzhen Dist., Taoyuan City",
    loc_reminder_title: "Friendly Reminder:",
    loc_reminder_desc: "Parking spaces are available around the restaurant. We suggest arriving slightly early to settle in. 🚗",
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
    cal_desc: "Time flies! Jasper and Serena are turning one! We sincerely invite you to join us.\\n\\nDress Code: White Theme."
  },
  "ja": {
    doc_title: "Jasper & Serena 1歳のお誕生日会 招待状",
    hero_boy_badge: "👦🏻 お兄ちゃん 隆隆 (Jasper)",
    hero_girl_badge: "👧🏻 妹 馮妍心 (Serena)",
    hero_title: "Jasper & Serena<br>1st Birthday Party",
    hero_subtitle: "双子の「選び取り」満1歳パーティー",
    hero_boy_role: "兄 (Jasper)",
    hero_girl_role: "妹 (Serena)",
    days_label: "日",
    hours_label: "時間",
    minutes_label: "分",
    seconds_label: "秒",
    invitation_greet: "親愛なる皆様へ",
    invitation_p1: "あっという間に、JasperとSerenaが1歳の誕生日を迎えることになりました！👶🏻👶🏻",
    invitation_p2: "この喜びにあふれる記念すべき日に、二人のために「選び取り（抓週）の儀式」とささやかなパーティーをご用意いたしました。",
    invitation_p3: "皆様と一緒に大切な瞬間を見守り、温かい祝福を贈っていただければ幸いです。",
    dc_title: "ドレスコード (Dress Code)",
    dc_desc: "当日はぜひ<strong>「白系の服装」</strong>でお越しください。みんなで純粋な白に包まれ、素敵な思い出を作りましょう！",
    gallery_title: "成長のアルバム",
    gallery_subtitle: "写真をクリックすると拡大されます！",
    gallery_tab_all: "すべての写真",
    gallery_tab_boy: "Jasper (息子)",
    gallery_tab_girl: "Serena (娘)",
    gallery_load_more: "写真をもっと読み込む",
    game_title: "選び取り大予想！",
    game_subtitle: "JasperとSerenaが当日何を選ぶか、みんなで予想してみましょう！",
    game_boy_mat_title: "お兄ちゃん Jasper の選び取りマット",
    game_boy_mat_desc: "Jasperは何を選ぶかな？",
    game_girl_mat_title: "妹 Serena の選び取りマット",
    game_girl_mat_desc: "Serenaは何を選ぶかな？",
    game_submit_btn: "予想を送信する",
    timeline_title: "当日のスケジュール",
    timeline_subtitle: "楽しいパーティーのタイムライン",
    t1_title: "開場＆お食事スタート 🍽️",
    t1_desc: "受付開始。会場では美味しいお食事をご用意してお待ちしております。",
    t2_title: "選び取り儀式＆お楽しみタイム 🎉",
    t2_desc: "メインイベント！餅を踏み、知恵のドラを叩き、選び取りを行います！クイズやゲームもご用意しています。",
    t3_title: "記念撮影＆交流会 📸",
    t3_desc: "全員で記念撮影を行い、祝福を交わします。ささやかなお土産もご用意しております。",
    rsvp_title: "出席のご返信 (RSVP)",
    rsvp_subtitle: "皆様のお越しをお待ちしております！お手数ですが、事前にご返信をお願いいたします",
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
    loc_title: "日時＆アクセス",
    loc_subtitle: "カレンダーに登録し、Amour 373 Cafe へのナビをご利用ください",
    loc_time_label: "日時",
    loc_time_desc: "2026年7月11日 (土)<br>12:00 - 15:00",
    loc_place_label: "会場",
    loc_place_desc: "Amour 373 Cafe 2階",
    loc_address_desc: "桃園市平鎮区広仁里延平路二段373号",
    loc_reminder_title: "駐車場について：",
    loc_reminder_desc: "レストラン周辺に駐車スペースがございます。お時間に余裕を持ってお越しいただくことをお勧めします。🚗",
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
    cal_desc: "JasperとSerenaが満1歳を迎えます！選び取りパーティーにぜひご参加ください。\\n\\nドレスコード：ホワイト"
  },
  "th": {
    doc_title: "การ์ดเชิญงานครบรอบ 1 ปี ของ Jasper & Serena",
    hero_boy_badge: "👦🏻 พี่ชาย Jasper",
    hero_girl_badge: "👧🏻 น้องสาว Serena",
    hero_title: "Jasper & Serena<br>1st Birthday Party",
    hero_subtitle: "พิธีจับเสี่ยงทาย (Zhuazhou) ฝาแฝดครบรอบหนึ่งปี",
    hero_boy_role: "พี่ชาย (Jasper)",
    hero_girl_role: "น้องสาว (Serena)",
    days_label: "วัน",
    hours_label: "ชม.",
    minutes_label: "นาที",
    seconds_label: "วิ",
    invitation_greet: "เรียน ครอบครัวและมิตรสหายทุกท่าน,",
    invitation_p1: "เวลาผ่านไปเร็วเหลือเกิน! Jasper และ Serena กำลังจะอายุครบ 1 ขวบแล้วค่ะ! 👶🏻👶🏻",
    invitation_p2: "ในวันแห่งความยินดีนี้ เราได้จัดพิธีจับจับเสี่ยงทายอนาคตตามประเพณีโบราณ (Zhuazhou) และจัดงานพบปะสังสรรค์เล็กๆ ที่แสนอบอุ่นสำหรับลูกน้อยทั้งสองคน",
    invitation_p3: "เราขอเรียนเชิญทุกท่านร่วมเป็นสักขีพยานในช่วงเวลาที่ล้ำค่านี้ และส่งต่อความรักและคำอวยพรที่อบอุ่นที่สุดให้แก่เด็กๆ ด้วยกันนะคะ!",
    dc_title: "ธีมการแต่งกาย (Dress Code)",
    dc_desc: "ขอแนะนำเป็น <strong>'เสื้อผ้าโทนสีขาว'</strong> เพื่อให้พวกเราทุกคนได้บันทึกความทรงจำอันบริสุทธิ์และสวยงามนี้ร่วมกันกับเด็กๆ นะคะ!",
    gallery_title: "คลังภาพการเติบโต",
    gallery_subtitle: "คลิกที่รูปภาพเพื่อขยายใหญ่ได้นะคะ!",
    gallery_tab_all: "รูปภาพทั้งหมด",
    gallery_tab_boy: "Jasper (ลูกชาย)",
    gallery_tab_girl: "Serena (ลูกสาว)",
    gallery_load_more: "โหลดภาพเพิ่มเติม",
    game_title: "เกมเสี่ยงทายจับสิ่งของ",
    game_subtitle: "ร่วมทายกันเถอะ! คิดว่าในวันงาน Jasper และ Serena จะหยิบของสิ่งไหนกันนะ?",
    game_boy_mat_title: "พรมเสี่ยงทายของพี่ชาย Jasper",
    game_boy_mat_desc: "เดากันเถอะว่า Jasper จะหยิบอะไร",
    game_girl_mat_title: "พรมเสี่ยงทายของน้องสาว Serena",
    game_girl_mat_desc: "เดากันเถอะว่า Serena จะหยิบอะไร",
    game_submit_btn: "ส่งคำทำนายของฉัน",
    timeline_title: "กำหนดการในวันงาน",
    timeline_subtitle: "ลำดับเวลากิจกรรมต่างๆ ในปาร์ตี้",
    t1_title: "ยินดีต้อนรับแขกผู้มีเกียรติและเริ่มมื้ออาหาร 🍽️",
    t1_desc: "แขกเข้างานลงทะเบียน มีอาหารและเครื่องดื่มจัดเตรียมไว้รองรับทุกท่านและร่วมพูดคุยสังสรรค์กัน",
    t2_title: "เริ่มพิธีการเสี่ยงทายและร่วมสนุก 🎉",
    t2_desc: "กิจกรรมหลักเริ่มขึ้นแล้ว! มาดู Jasper และ Serena เหยียบขนมมงคล เคาะฆ้องปัญญา และเสี่ยงทายเลือกสิ่งของกัน พร้อมกับกิจกรรมตอบคำถามชิงรางวัล",
    t3_title: "ถ่ายภาพร่วมกันและอำลาอย่างอบอุ่น 📸",
    t3_desc: "ถ่ายรูปรวมของครอบครัวและแขกทุกท่าน มอบคำอวยพร และรับของที่ระลึกครบรอบ 1 ปีแสนน่ารัก",
    rsvp_title: "ตอบรับการเข้าร่วมงาน (RSVP)",
    rsvp_subtitle: "หวังว่าจะได้พบกันนะคะ! กรุณากรอกแบบฟอร์มเพื่อความสะดวกในการจัดเตรียมอาหารและที่นั่ง",
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
    loc_title: "เวลาและสถานที่จัดงาน",
    loc_subtitle: "บันทึกเวลาลงปฏิทินของคุณ และนำทางไปยัง Amour 373 Cafe",
    loc_time_label: "เวลาจัดกิจกรรม",
    loc_time_desc: "วันเสาร์ที่ 11 กรกฎาคม 2026<br>เวลา 12:00 - 15:00 น.",
    loc_place_label: "สถานที่",
    loc_place_desc: "Amour 373 Cafe ชั้น 2",
    loc_address_desc: "เลขที่ 373 ถ.เหยียนผิง เซกชัน 2, ต.ผิงเจิ้น, เมืองเถาหยวน",
    loc_reminder_title: "ข้อแนะนำเพิ่มเติม:",
    loc_reminder_desc: "มีพื้นที่จอดรถรอบร้านอาหาร แนะนำให้เผื่อเวลาเดินทางเล็กน้อยเพื่อความสะดวกในการจอดรถนะคะ 🚗",
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
    cal_desc: "Jasper และ Serena กำลังจะครบ 1 ขวบ! ขอเชิญร่วมปาร์ตี้เสี่ยงทายจับของด้วยกันค่ะ\\n\\nธีมการแต่งกาย: สีขาว"
  },
  "it": {
    doc_title: "Invito al 1° Compleanno di Jasper & Serena",
    hero_boy_badge: "👦🏻 Fratello Maggiore Jasper",
    hero_girl_badge: "👧🏻 Sorella Minore Serena",
    hero_title: "Jasper & Serena<br>1st Birthday Party",
    hero_subtitle: "Festa del primo compleanno e rito Zhuazhou",
    hero_boy_role: "Fratello (Jasper)",
    hero_girl_role: "Sorella (Serena)",
    days_label: "Giorni",
    hours_label: "Ore",
    minutes_label: "Min",
    seconds_label: "Sec",
    invitation_greet: "Cari Parenti e Amici,",
    invitation_p1: "Incredibile ma vero, Jasper e Serena compiono un anno! 👶🏻👶🏻",
    invitation_p2: "In questo giorno pieno di felicità e valore commemorativo, abbiamo preparato il rito tradizionale dello Zhuazhou (la scelta degli oggetti) e una festa calorosa per i nostri due piccoli.",
    invitation_p3: "Vi invitiamo sinceramente a venire, assistere a questo prezioso momento e fare a Jasper e Serena i vostri auguri più affettuosi!",
    dc_title: "Tema dell'abbigliamento (Dress Code)",
    dc_desc: "Si consiglia un abbigliamento in <strong>'Bianco'</strong> per immortalare insieme con purezza questo bellissimo ricordo!",
    gallery_title: "Galleria dei Ricordi",
    gallery_subtitle: "Clicca sulle foto per ingrandirle!",
    gallery_tab_all: "Tutte le Foto",
    gallery_tab_boy: "Jasper (Figlio)",
    gallery_tab_girl: "Serena (Figlia)",
    gallery_load_more: "Mostra Altre Foto",
    game_title: "Zhuazhou Pronostico",
    game_subtitle: "Fate il vostro pronostico! Cosa pensate che afferreranno Jasper e Serena alla cerimonia?",
    game_boy_mat_title: "Tappeto Zhuazhou di Jasper",
    game_boy_mat_desc: "Cosa afferrerà Jasper secondo te?",
    game_girl_mat_title: "Tappeto Zhuazhou di Serena",
    game_girl_mat_desc: "Cosa afferrerà Serena secondo te?",
    game_submit_btn: "Invia Pronostico",
    timeline_title: "Programma della Giornata",
    timeline_subtitle: "Programma dell'evento, non vediamo l'ora di festeggiare insieme",
    t1_title: "Arrivo Ospiti & Rinfresco 🍽️",
    t1_desc: "Accoglienza degli ospiti e avvio del buffet. Cibo delizioso e bevande saranno a disposizione per socializzare.",
    t2_title: "Rito dello Zhuazhou & Giochi 🎉",
    t2_desc: "Inizia lo spettacolo! I gemelli calpesteranno i tortini di riso, suoneranno il gong della saggezza e sceglieranno gli oggetti. Seguiranno giochi interattivi e quiz.",
    t3_title: "Foto di Gruppo & Saluti 📸",
    t3_desc: "Scatti fotografici di tutti gli invitati insieme a Jasper e Serena, scambio di auguri e consegna di un simpatico souvenir.",
    rsvp_title: "Conferma Presenza (RSVP)",
    rsvp_subtitle: "Vi aspettiamo! Vi preghiamo di compilare il modulo per facilitare la preparazione dei tavoli e del cibo",
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
    loc_title: "Orario e Posizione",
    loc_subtitle: "Segna l'evento sul calendario e avvia il navigatore per Amour 373 Cafe",
    loc_time_label: "Orario dell'evento",
    loc_time_desc: "Sabato 11 Luglio 2026<br>12:00 - 15:00",
    loc_place_label: "Luogo dell'evento",
    loc_place_desc: "Amour 373 Cafe 2F",
    loc_address_desc: "No. 373, Sec. 2, Yanping Rd., Pingzhen Dist., Taoyuan",
    loc_reminder_title: "Nota di Viaggio:",
    loc_reminder_desc: "Sono presenti spazi di parcheggio nei dintorni del ristorante. Si consiglia di arrivare un po' in anticipo per parcheggiare. 🚗",
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
    cal_desc: "Jasper e Serena compiono un anno! Vi invitiamo al rito Zhuazhou e alla festa.\\n\\nDress code: abiti bianchi."
  }
};

// State variables
let galleryCurrentTab = 'all';
let galleryVisibleCount = 6;
let lightboxIndex = 0;
let lightboxActivePhotos = [];

let selectedBoyItem = null;
let selectedGirlItem = null;

// Target date: 2026-07-11 12:00:00 (GMT+8)
const TARGET_DATE_TIME = new Date("2026-07-11T12:00:00+08:00").getTime();

// Seed database keys
const MOCK_VOTES_KEY_BOY = "zhuazhou_votes_boy_v1";
const MOCK_VOTES_KEY_GIRL = "zhuazhou_votes_girl_v1";
const USER_VOTED_KEY = "zhuazhou_user_voted_v1";
const RSVPS_KEY = "zhuazhou_rsvps_v1";

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher();
  initCountdown();
  initGallery();
  initPredictionGame();
  initRSVPForm();
  initLocationAndCalendar();
  initAdminBackOffice();
  
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

  if (!boyVotes) {
    boyVotes = { key: 32, camera: 18, chemistry: 12, mixer: 15, tools: 24, blocks: 20, airplane: 28, abacus: 22, stethoscope: 35, ball: 25 };
    localStorage.setItem(MOCK_VOTES_KEY_BOY, JSON.stringify(boyVotes));
  }

  if (!girlVotes) {
    girlVotes = { key: 18, camera: 29, chemistry: 25, mixer: 35, tools: 12, blocks: 22, airplane: 15, abacus: 10, stethoscope: 18, ball: 28 };
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

    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.8 }
    });

    userVoteState = voteData;
    showResults();
  });

  // Display voting results charts
  function showResults() {
    boyGrid.style.display = 'none';
    girlGrid.style.display = 'none';
    submitBtn.style.display = 'none';

    boyChart.style.display = 'flex';
    girlChart.style.display = 'flex';

    renderCharts(boyChart, boyVotes, userVoteState.boyItem, 'boy');
    renderCharts(girlChart, girlVotes, userVoteState.girlItem, 'girl');
  }

  function renderCharts(containerEl, votesObj, userSelectId, gender) {
    const dict = i18nDict[currentLang] || i18nDict["zh-TW"];

    const titleText = dict.vote_chart_title || "預測統計結果";
    const babyNameText = gender === 'boy' ? "Jasper" : "Serena";
    const tagText = dict.tag_voted || "選這";
    const genderTagText = gender === 'boy' ? (currentLang === 'zh-TW' ? '弟弟' : 'Jasper') : (currentLang === 'zh-TW' ? '姊姊' : 'Serena');

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
          ${isUserChoice ? `<span class="your-vote-tag">${genderTagText} ${tagText}</span>` : ''}
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

  // Cache object references globally for language updates
  globalPredictionModule = {
    showResults,
    renderMatGrids,
    hasVoted: () => !!userVoteState
  };

  // Load initial state
  if (userVoteState) {
    showResults();
  } else {
    renderMatGrids();
  }
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

    const rsvpObj = {
      name,
      attend: attendVal,
      count: attendVal === 'yes' ? count : 0,
      chairs: attendVal === 'yes' ? chairs : 0,
      diet: attendVal === 'yes' ? diet : '無',
      wishes: wishes || defaultBlessing,
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

    triggerConfettiExplosion();

    wishesShow.innerText = `「${rsvpObj.wishes}」`;

    formWrapper.style.display = 'none';
    successWrapper.style.display = 'block';
  });

  editBtn.addEventListener("click", () => {
    successWrapper.style.display = 'none';
    formWrapper.style.display = 'block';
  });

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
      const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${calTitle}&dates=20260711T040000Z%2F20260711T070000Z&details=${calDesc}&location=Amour+373+Cafe+(桃園市平鎮區延平路二段373號)&sf=true&output=xml`;
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
        "UID:twins-1st-birthday-20260711",
        "DTSTAMP:20260703T000000Z",
        "DTSTART:20260711T040000Z",
        "DTEND:20260711T070000Z",
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
    const rsvps = JSON.parse(localStorage.getItem(RSVPS_KEY)) || [];
    
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
        <td style="color:var(--color-text-light); font-size:0.8rem; max-width:200px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${r.wishes}">
          ${r.wishes}
        </td>
      `;
      tableBody.appendChild(row);
    });

    if (rsvps.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--color-text-light);">No data.</td></tr>`;
    }

    statTotalAttend.innerText = totalAttendCount;
    statTotalChairs.innerText = totalChairsCount;
    statTotalForms.innerText = formCount;
  }

  clearBtn.addEventListener("click", () => {
    const clearConfirmMsg = currentLang === 'zh-TW'
      ? "確定要清空所有親友回條資料嗎？此操作不可逆！"
      : "Are you sure you want to clear all RSVPs? This action cannot be undone!";
    if (confirm(clearConfirmMsg)) {
      localStorage.removeItem(RSVPS_KEY);
      loadAdminDashboardData();
    }
  });

  downloadBtn.addEventListener("click", () => {
    const rsvps = JSON.parse(localStorage.getItem(RSVPS_KEY)) || [];
    if (rsvps.length === 0) {
      alert("No data to export!");
      return;
    }

    const csvRows = [
      "\ufeffName,Attend,Guests,Baby Chairs,Diet,Wishes,Timestamp"
    ];

    rsvps.forEach(r => {
      const columns = [
        `"${r.name.replace(/"/g, '""')}"`,
        r.attend === 'yes' ? 'Yes' : 'No',
        r.attend === 'yes' ? r.count : 0,
        r.attend === 'yes' ? r.chairs : 0,
        `"${(r.diet || '').replace(/"/g, '""')}"`,
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
