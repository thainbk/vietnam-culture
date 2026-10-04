/* ==========================================================================
   HỒN VIỆT - MASTER CONTROLLER SCRIPT (main.js)
   Interactivity, Hero Petals Canvas, Modals, Filters, Sound Studio
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeroPetals();
  initHeaderScroll();
  initNavigation();
  initHeritageFilters();
  initModalSystem();
  initSoundStudio();
  initExperienceTabs();
  initBackToTop();

  // Initialize companion modules
  if (window.initLanternCeremony) window.initLanternCeremony();
  if (window.initCulturalQuiz) window.initCulturalQuiz();
  if (window.initI18n) window.initI18n();

  // Ambient sound button
  const audioBtn = document.getElementById('ambient-toggle-btn');
  if (audioBtn && window.vietnamAudio) {
    audioBtn.addEventListener('click', () => {
      window.vietnamAudio.toggleAmbient(audioBtn);
    });
  }

  // Lantern Release Button
  const releaseBtn = document.getElementById('release-lantern-btn');
  const wishInput = document.getElementById('user-wish-input');
  if (releaseBtn && window.lanternSystem) {
    releaseBtn.addEventListener('click', () => {
      const text = wishInput ? wishInput.value : '';
      window.lanternSystem.releaseLantern(text);
      if (wishInput) wishInput.value = '';
    });
  }

  // Lantern Color Chips
  document.querySelectorAll('.color-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      document.querySelectorAll('.color-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      if (window.lanternSystem) {
        window.lanternSystem.selectedColor = chip.getAttribute('data-color');
      }
    });
  });
});

/* --- 1. HERO FLOATING LOTUS PETALS CANVAS --- */
function initHeroPetals() {
  const canvas = document.getElementById('lotus-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
  });

  const petals = [];
  const petalCount = 28;

  for (let i = 0; i < petalCount; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 10 + Math.random() * 14,
      speedX: 0.5 + Math.random() * 1.2,
      speedY: 0.8 + Math.random() * 1.5,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.03,
      swayAngle: Math.random() * Math.PI * 2,
      swaySpeed: 0.02 + Math.random() * 0.02,
      opacity: 0.4 + Math.random() * 0.45
    });
  }

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.fillStyle = `rgba(244, 114, 182, ${p.opacity})`;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(p.size * 0.5, -p.size * 0.8, p.size, -p.size * 0.3, 0, p.size);
    ctx.bezierCurveTo(-p.size, -p.size * 0.3, -p.size * 0.5, -p.size * 0.8, 0, 0);
    ctx.fill();

    ctx.restore();
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    petals.forEach(p => {
      p.swayAngle += p.swaySpeed;
      p.x += p.speedX + Math.sin(p.swayAngle) * 0.8;
      p.y += p.speedY;
      p.rotation += p.rotationSpeed;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
      if (p.x > width + 20) {
        p.x = -20;
      }

      drawPetal(p);
    });

    requestAnimationFrame(render);
  }

  render();
}

/* --- 2. HEADER SCROLL & NAV SPY --- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initNavigation() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Active section spy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(sec => {
      const sectionHeight = sec.offsetHeight;
      const sectionTop = sec.offsetTop - 120;
      const sectionId = sec.getAttribute('id');
      const navItem = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (navItem) navItem.classList.add('active');
      } else {
        if (navItem) navItem.classList.remove('active');
      }
    });
  });
}

/* --- 3. REGIONAL HERITAGE FILTERS --- */
function initHeritageFilters() {
  const filterBtns = document.querySelectorAll('.heritage-filters .filter-btn');
  const cards = document.querySelectorAll('.heritage-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-region') === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInBubble 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --- 4. SOUND STUDIO INSTRUMENT CONTROLLERS --- */
function initSoundStudio() {
  const pads = document.querySelectorAll('.instrument-pad');
  pads.forEach(pad => {
    pad.addEventListener('click', () => {
      const instrument = pad.getAttribute('data-instrument');
      pad.classList.add('playing');
      setTimeout(() => pad.classList.remove('playing'), 300);

      if (!window.vietnamAudio) return;

      switch (instrument) {
        case 'danbau':
          window.vietnamAudio.playDanBau();
          break;
        case 'dantranh':
          window.vietnamAudio.playDanTranh();
          break;
        case 'trong':
          window.vietnamAudio.playTrongHoi();
          break;
        case 'congchieng':
          window.vietnamAudio.playCongChieng();
          break;
        case 'saotruc':
          window.vietnamAudio.playSaoTruc();
          break;
        default:
          window.vietnamAudio.playDanTranh();
      }
    });
  });

  // Scale note buttons
  const noteBtns = document.querySelectorAll('.note-btn');
  noteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const note = btn.getAttribute('data-note');
      if (window.vietnamAudio) {
        window.vietnamAudio.playScaleNote(note);
      }
    });
  });
}

/* --- 5. EXPERIENCE TABS --- */
function initExperienceTabs() {
  const tabBtns = document.querySelectorAll('.exp-tab-btn');
  const panels = document.querySelectorAll('.exp-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');

      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(target);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/* --- 6. MODAL SYSTEM --- */
const modalData = {
  halong: {
    title: "Vịnh Hạ Long & Quần Thể Tràng An",
    sub: "Kỳ quan thiên nhiên thế giới UNESCO & Di sản hỗn hợp",
    content: `
      <p><strong>Vịnh Hạ Long</strong> (Quảng Ninh) với gần 2.000 hòn đảo đá vôi kỳ vĩ nổi trên làn nước ngọc bích, là tác phẩm điêu khắc vĩ đại của tạo hóa trải qua hơn 500 triệu năm kiến tạo địa chất. Tên gọi 'Hạ Long' gắn với huyền tích đàn Rồng mẹ và Rồng con hạ giới phun châu nhả ngọc tạo thành bức tường thành vững chãi bảo vệ bờ cõi nước Việt.</p>
      <div class="modal-fact-box">
        <strong>Điểm nhấn di sản:</strong> Động Thiên Cung, Hang Đầu Gỗ, Làng chài Cửa Vạn, Quần thể danh thắng Tràng An (tam cốc, bích động) kết hợp hài hòa giữa khảo cổ tiền sử và thiên nhiên diễm lệ.
      </div>
      <p>Tràng An và Hạ Long không chỉ đại diện cho thẩm mỹ cảnh quan tột đỉnh mà còn là kho tàng sống về lịch sử biến đổi khí hậu và tiến hóa sinh thái của Trái Đất.</p>
    `
  },
  hue: {
    title: "Quần Thể Di Tích Cố Đô Huế",
    sub: "Kinh thành triều Nguyễn & Nhã nhạc Cung đình",
    content: `
      <p>Cố đô Huế từng là thủ phủ xứ Đàng Trong và kinh đô của nước Việt Nam thống nhất dưới triều nhà Nguyễn (1802 - 1945). Nơi đây lưu giữ hệ thống thành quách, cung điện, lăng tẩm hoàng gia đồ sộ và tôn nghiêm bậc nhất Đông Nam Á.</p>
      <div class="modal-fact-box">
        <strong>Di sản kép:</strong> Di sản Văn hóa Thế giới (1993) và Nhã nhạc Cung đình Huế - Di sản Phi vật thể Đại diện của Nhân loại (2003).
      </div>
      <p>Hài hòa tuyệt mỹ bên dòng sông Hương thơ mộng và núi Ngự Bình uy nghi, kiến trúc Huế thể hiện đỉnh cao của nghệ thuật phong thủy truyền thống phương Đông, kết tinh tài hoa của những người thợ thủ công tài ba bậc nhất cả nước.</p>
    `
  },
  hoian: {
    title: "Đô Thị Cổ Hội An & Thánh Địa Mỹ Sơn",
    sub: "Giao thoa văn hóa thương cảng quốc tế thế kỷ 16-17",
    content: `
      <p>Hội An (Quảng Nam) là hình mẫu bảo tồn nguyên vẹn và hiếm có nhất của một đô thị thương cảng truyền thống Đông Nam Á. Từng là điểm dừng chân phồn hoa trên Con đường Tơ lụa và Gốm sứ trên biển, Hội An hội tụ tinh hoa giao thoa giữa văn hóa Việt, Nhật Bản, Trung Hoa và châu Âu.</p>
      <div class="modal-fact-box">
        <strong>Nét đẹp đặc trưng:</strong> Những ngôi nhà cổ mái ngói âm dương phủ rêu phong, Chùa Cầu biểu tượng, phố đèn lồng lung linh và lễ hội đêm rằm huyền ảo trên sông Hoài.
      </div>
      <p>Cách đó không xa là <strong>Thánh địa Mỹ Sơn</strong> - trung tâm tôn giáo và kiến trúc đền tháp gạch nung huyền bí của vương quốc Chăm Pa cổ xưa, minh chứng sống động cho sự đa dạng văn hóa rực rỡ của đất Việt.</p>
    `
  },
  pho: {
    title: "Phở Bò Truyền Thống - Quốc Hồn Ẩm Thực",
    sub: "Triết lý ninh nấu công phu & Bản giao hưởng gia vị",
    content: `
      <p>Phở không đơn thuần là một món ăn, mà là biểu tượng văn hóa đã vượt qua biên giới để ghi dấu ấn sâu đậm trong lòng bạn bè năm châu. Nước dùng phở chuẩn vị được ninh từ xương ống bò tinh chọn trong suốt 10 đến 14 tiếng, kết hợp tinh tế cùng quế hồi, thảo quả, gừng nướng và hành tím than củi.</p>
      <div class="modal-fact-box">
        <strong>Bí quyết ngũ vị:</strong> Bánh phở tráng mỏng mềm mướt, thịt bò tươi thái lát, hòa quyện với hành hoa, mùi tàu, chút giấm tỏi ớt cay nồng và lát chanh tươi mát, tạo nên sự cân bằng âm dương trọn vẹn.
      </div>
      <p>Từ những gánh phở rong kẽo kẹt trên phố cổ Hà Nội xưa đến các nhà hàng sang trọng trên khắp thế giới, bát phở bốc khói nghi ngút luôn mang lại sự ấm áp và tự hào khôn nguôi.</p>
    `
  },
  banhmi: {
    title: "Bánh Mì Việt Nam - Tinh Hoa Ẩm Thực Đường Phố",
    sub: "Sự thăng hoa độc đáo từ tiếp biến văn hóa Đông - Tây",
    content: `
      <p>Từ chiếc baguette kiểu Pháp du nhập vào thế kỷ 19, người Việt Nam đã tài tình cải biến vỏ bánh trở nên xốp mỏng, giòn rụm và đưa vào đó cả một thế giới nhân phong phú: pa-tê gan béo ngậy, bơ thơm bùi, chả lụa, xá xíu, thịt nướng than hoa kết hợp cùng dưa leo, ngò rí và đồ chua giòn ngọt chống ngấy.</p>
      <div class="modal-fact-box">
        <strong>Vinh danh quốc tế:</strong> Từ 'Banh mi' đã được đưa chính thức vào từ điển Oxford (2011) và liên tục được các tạp chí ẩm thực hàng đầu thế giới bầu chọn là một trong những món sandwich ngon nhất hành tinh.
      </div>
      <p>Mỗi vùng miền lại có phiên bản đặc sắc riêng: Bánh mì chả cá Nha Trang, bánh mì xíu mại Đà Lạt, bánh mì que Hải Phòng, hay bánh mì bì Nam Bộ giòn rụm.</p>
    `
  },
  aodai: {
    title: "Áo Dài - Quốc Phục Tôn Vinh Vẻ Đẹp Việt",
    sub: "Nét thanh cao, kín đáo mà quyến rũ vượt thời gian",
    content: `
      <p>Áo Dài là trang phục truyền thống mang tính biểu tượng sâu sắc nhất của người phụ nữ và dân tộc Việt Nam. Trải qua dòng chảy lịch sử từ áo Giao Lĩnh, áo Ngũ Thân thời chúa Nguyễn Phúc Khoát cho đến áo dài Lemur tân thời và áo dài hiện đại ngày nay, tà áo dài luôn giữ vững cốt cách tao nhã.</p>
      <div class="modal-fact-box">
        <strong>Ý nghĩa biểu trưng:</strong> Hai tà áo thướt tha tượng trưng cho sự mềm mại, cổ áo cao thanh lịch, eo áo chít vừa vặn ôm trọn đường cong duyên dáng nhưng vẫn tuyệt đối đoan trang và kín đáo.
      </div>
      <p>Áo dài xuất hiện trong mọi sự kiện trọng đại của đời người Việt: ngày Tết cổ truyền, lễ cưới hỏi trang trọng, các kỳ hội nghị quốc tế và là tà áo trắng tinh khôi của nữ sinh tới trường.</p>
    `
  }
};

function initModalSystem() {
  const overlay = document.getElementById('cultural-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const titleEl = document.getElementById('modal-title');
  const subEl = document.getElementById('modal-sub');
  const bodyEl = document.getElementById('modal-body-content');

  if (!overlay) return;

  function openModal(key) {
    const data = modalData[key];
    if (!data) return;

    titleEl.textContent = data.title;
    subEl.textContent = data.sub;
    bodyEl.innerHTML = data.content;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Attach modal triggers
  document.querySelectorAll('[data-modal]').forEach(el => {
    el.addEventListener('click', () => {
      const key = el.getAttribute('data-modal');
      openModal(key);
    });
  });

  window.openCulturalModal = openModal;
}

/* --- 7. BACK TO TOP BUTTON --- */
function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
