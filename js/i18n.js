/* ==========================================================================
   HỒN VIỆT - BILINGUAL LOCALIZATION (Tiếng Việt & English)
   Instant seamless UI language switcher
   ========================================================================== */

const i18nData = {
  vi: {
    brand_sub: "TINH HOA VĂN HÓA",
    nav_heritage: "Di Sản",
    nav_gastronomy: "Mỹ Vị",
    nav_costumes: "Cổ Phục",
    nav_music: "Âm Nhạc",
    nav_festivals: "Lễ Hội",
    nav_experience: "Trải Nghiệm",
    ambient_audio: "Âm Sắc",
    hero_badge: "Di Sản Thế Giới UNESCO & 4.000 Năm Văn Hiến",
    hero_title: "HỒN THIÊNG ĐẤT VIỆT",
    hero_sub: "Khám phá bản sắc 4.000 năm văn hiến – Từ âm hưởng cồng chiêng đại ngàn, mỹ vị ngũ hành tinh tế đến tà áo dài thướt tha bên dòng sông di sản.",
    hero_cta_explore: "Khám Phá Di Sản",
    hero_cta_lantern: "Thả Hoa Đăng Cầu An",
    stat_history: "Năm Lịch Sử Hào Hùng",
    stat_ethnic: "Dân Tộc Anh Em",
    stat_unesco: "Di Sản Thế Giới UNESCO",
    stat_heritage: "Di Sản Phi Vật Thể",
    
    sec_heritage_tag: "Danh Thắng & Non Sông Gấm Vóc",
    sec_heritage_title: "Bản Đồ Di Sản Ba Miền",
    sec_heritage_desc: "Hành trình trải dài từ non cao Tây Bắc, kỳ quan đá vôi Hạ Long, chốn hoàng cung trầm mặc cố đô đến miệt vườn sông nước trù phú.",
    
    filter_all: "Tất Cả",
    filter_north: "Miền Bắc",
    filter_central: "Miền Trung",
    filter_south: "Miền Nam",

    sec_cuisine_tag: "Mỹ Vị Đất Trời & Triết Lý Âm Dương",
    sec_cuisine_title: "Tinh Hoa Ẩm Thực Việt Nam",
    sec_cuisine_desc: "Nghệ thuật ẩm thực kết tinh sự cân bằng tuyệt mỹ giữa Ngũ Hành (Chua - Đắng - Ngọt - Cay - Mặn) cùng nguồn nguyên liệu tự nhiên tươi sạch.",

    sec_costume_tag: "Dòng Chảy Cổ Phục & Thẩm Mỹ Dân Tộc",
    sec_costume_title: "Sắc Hương Cổ Phục & Áo Dài",
    sec_costume_desc: "Mỗi nếp áo, tà lụa và đường kim mũi chỉ là cả một pho sử hào hùng về cốt cách thanh cao, phẩm hạnh đoan trang của người Việt.",

    sec_music_tag: "Thanh Âm Ngàn Năm & Di Sản Nhân Loại",
    sec_music_title: "Thanh Âm Đất Mẹ & Nhạc Cụ Dân Tộc",
    sec_music_desc: "Lắng nghe hồn thiêng sông núi qua tiếng đàn bầu nỉ non, nhã nhạc cung đình tôn nghiêm và không gian cồng chiêng đại ngàn.",

    sec_festivals_tag: "Hồn Quê & Phong Tục Ngàn Đời",
    sec_festivals_title: "Lễ Hội & Phong Tục Truyền Thống",
    sec_festivals_desc: "Nơi cộng đồng giao hòa với tiền nhân đất trời, gìn giữ đạo lý 'Uống nước nhớ nguồn' thiêng liêng đời đời bền vững.",

    sec_exp_tag: "Tương Tác Văn Hóa Trực Quan",
    sec_exp_title: "Góc Trải Nghiệm Tương Tác",
    sec_exp_desc: "Thả chiếc hoa đăng gửi gắm lời nguyện ước an lành và thử thách vốn kiến thức văn hóa dân tộc của bạn.",

    tab_lantern: "🪷 Thả Hoa Đăng Cầu An",
    tab_quiz: "🏮 Đố Vui Văn Hóa",

    footer_desc: "Trang thông tin & bảo tồn di sản văn hóa truyền thống Việt Nam. Tôn vinh vẻ đẹp ngàn năm của dân tộc trong kỷ nguyên hội nhập toàn cầu."
  },
  en: {
    brand_sub: "HERITAGE PORTAL",
    nav_heritage: "Heritage",
    nav_gastronomy: "Gastronomy",
    nav_costumes: "Attire",
    nav_music: "Music",
    nav_festivals: "Festivals",
    nav_experience: "Experience",
    ambient_audio: "Ambience",
    hero_badge: "UNESCO World Heritage & 4,000 Years of Civilization",
    hero_title: "THE SOUL OF VIETNAM",
    hero_sub: "Embark on an enchanting journey through four millennia of culture—from echoing mountain gongs and Yin-Yang gastronomy to graceful silk Ao Dai along heritage rivers.",
    hero_cta_explore: "Explore Heritage",
    hero_cta_lantern: "Release Wish Lantern",
    stat_history: "Years of Glorious History",
    stat_ethnic: "Diverse Ethnic Groups",
    stat_unesco: "UNESCO World Heritages",
    stat_heritage: "Intangible Heritages",
    
    sec_heritage_tag: "Landscapes & Sacred Wonders",
    sec_heritage_title: "Heritage Map Across 3 Regions",
    sec_heritage_desc: "From the majestic karst peaks of the North and imperial citadel of the Center to the lush floating markets of the Southern Delta.",
    
    filter_all: "All Regions",
    filter_north: "Northern Region",
    filter_central: "Central Region",
    filter_south: "Southern Region",

    sec_cuisine_tag: "Culinary Art & Yin-Yang Philosophy",
    sec_cuisine_title: "Essence of Vietnamese Gastronomy",
    sec_cuisine_desc: "Culinary excellence balancing the Five Elements (Sour - Bitter - Sweet - Spicy - Salty) with abundant fresh herbs and ancient recipes.",

    sec_costume_tag: "Traditional Garments & Aesthetics",
    sec_costume_title: "Royal Costumes & Graceful Ao Dai",
    sec_costume_desc: "Every weave of silk and embroidery reflects the dignity, grace, and timeless elegance of the Vietnamese people across dynasties.",

    sec_music_tag: "Millennial Harmonies & Human Legacy",
    sec_music_title: "Echoes of Ancestral Instruments",
    sec_music_desc: "Immerse yourself in the soul of Vietnam through the bending notes of Dan Bau, royal court orchestras, and resonant gongs.",

    sec_festivals_tag: "Timeless Customs & Folk Celebrations",
    sec_festivals_title: "Traditional Festivals & Customs",
    sec_festivals_desc: "Where communal spirit connects with ancestors and nature, honoring the eternal virtue of remembering our roots.",

    sec_exp_tag: "Interactive Cultural Immersion",
    sec_exp_title: "Interactive Experience Zone",
    sec_exp_desc: "Float a glowing lotus lantern with your heartfelt prayer and challenge your knowledge in our cultural quiz.",

    tab_lantern: "🪷 Lantern Ceremony",
    tab_quiz: "🏮 Cultural Quiz",

    footer_desc: "A digital portal dedicated to safeguarding and celebrating Vietnamese cultural heritage and traditions in the modern era."
  }
};

let currentLang = 'vi';

function setLanguage(lang) {
  if (!i18nData[lang]) return;
  currentLang = lang;
  
  // Update UI texts
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18nData[lang][key]) {
      el.textContent = i18nData[lang][key];
    }
  });

  // Update active state on language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  document.documentElement.lang = lang;
}

window.initI18n = function() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      setLanguage(targetLang);
    });
  });
};
