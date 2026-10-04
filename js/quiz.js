/* ==========================================================================
   HỒN VIỆT - CULTURAL TRIVIA & QUIZ ENGINE (Đố Vui Khám Phá Văn Hóa Việt)
   Interactive cultural game with score calculation, explanations & certificate
   ========================================================================== */

class VietnamCulturalQuiz {
  constructor() {
    this.questions = [
      {
        question: "Trống đồng Đông Sơn - biểu tượng đỉnh cao của nền văn hóa Đông Sơn thời kỳ đồ đồng - gắn liền với triều đại nào trong truyền thuyết dân tộc?",
        options: [
          "Thời kỳ Nhà Đinh",
          "Thời kỳ Nhà Hùng (Văn Lang)",
          "Thời kỳ Tiền Lê",
          "Thời kỳ Nhà Lý"
        ],
        correct: 1,
        explanation: "Trống đồng Đông Sơn ra đời vào thời kỳ đồ đồng (khoảng thế kỷ VII TCN đến thế kỷ I SCN), phản ánh đỉnh cao trí tuệ và tinh thần đoàn kết của người Việt cổ dưới thời các Vua Hùng dựng nước Văn Lang."
      },
      {
        question: "Di sản phi vật thể nào của Việt Nam được UNESCO ghi danh là Kiệt tác truyền khẩu và phi vật thể của nhân loại đầu tiên vào năm 2003?",
        options: [
          "Dân ca Quan họ Bắc Ninh",
          "Không gian văn hóa Cồng chiêng Tây Nguyên",
          "Nhã nhạc Cung đình Huế",
          "Nghệ thuật Đờn ca tài tử Nam Bộ"
        ],
        correct: 2,
        explanation: "Tháng 11/2003, Nhã nhạc Cung đình Huế chính thức được UNESCO công nhận là Kiệt tác di sản truyền khẩu và phi vật thể của nhân loại, mở đầu cho chuỗi vinh danh di sản phi vật thể của Việt Nam."
      },
      {
        question: "Triết lý âm dương và ngũ hành trong ẩm thực truyền thống Việt Nam quy định 5 vị cơ bản tương ứng với ngũ hành nào?",
        options: [
          "Chua (Mộc), Đắng (Hỏa), Ngọt (Thổ), Cay (Kim), Mặn (Thủy)",
          "Chua (Kim), Đắng (Mộc), Ngọt (Thủy), Cay (Hỏa), Mặn (Thổ)",
          "Chua (Thổ), Đắng (Kim), Ngọt (Mộc), Cay (Thủy), Mặn (Hỏa)",
          "Chua (Thủy), Đắng (Thổ), Ngọt (Kim), Cay (Mộc), Mặn (Hỏa)"
        ],
        correct: 0,
        explanation: "Ẩm thực Việt Nam tuân theo triết lý Ngũ Vị - Ngũ Hành sâu sắc: Vị chua tương ứng hành Mộc, vị đắng tương ứng hành Hỏa, vị ngọt tương ứng hành Thổ, vị cay tương ứng hành Kim, và vị mặn tương ứng hành Thủy."
      },
      {
        question: "Cổ phục 'Áo Nhật Bình' lộng lẫy thời triều Nguyễn thường được may cho tầng lớp nào trong hoàng gia?",
        options: [
          "Binh lính và thị vệ triều đình",
          "Thứ dân trong ngày hội lớn",
          "Hoàng hậu, Công chúa và Cung tần cao cấp",
          "Quan văn hàng ngũ phẩm"
        ],
        correct: 2,
        explanation: "Áo Nhật Bình là thường phục tôn quý của Hoàng thái hậu, Hoàng hậu, Công chúa và triều phục của các bậc Cung tần tứ giai trở lên thời nhà Nguyễn, nổi bật với cổ áo hình chữ nhật viền hoa văn hoa sen, phượng hoàng."
      },
      {
        question: "Nhạc cụ nào chỉ có một dây duy nhất nhưng có thể tạo nên mọi cung bậc nốt nhạc mềm mại nhờ thanh rung uốn lượn?",
        options: [
          "Đàn Nguyệt",
          "Đàn Tranh",
          "Đàn Bầu (Độc huyền cầm)",
          "Đàn Nhị"
        ],
        correct: 2,
        explanation: "Đàn Bầu (Độc huyền cầm) là nhạc cụ độc nhất vô nhị trên thế giới. Chỉ với 1 dây duy nhất và chiếc cần bằng sừng hoặc tre uốn lượn, nghệ nhân có thể gảy ra những âm bồi thánh thót và luyến láy như tiếng hát con người."
      },
      {
        question: "Câu ca dao bất hủ 'Dù ai đi ngược về xuôi / Nhớ ngày Giỗ Tổ mùng mười tháng ba' nhắc tới lễ hội linh thiêng nào?",
        options: [
          "Lễ hội Chùa Hương",
          "Lễ hội Đền Hùng (Phú Thọ)",
          "Lễ hội Hội Lim",
          "Lễ hội Gióng Phù Đổng"
        ],
        correct: 1,
        explanation: "Đó là ngày Giỗ Tổ Hùng Vương diễn ra tại Khu Di tích lịch sử Đền Hùng (Việt Trì, Phú Thọ) vào mùng 10 tháng 3 âm lịch hàng năm để con cháu Lạc Hồng tưởng nhớ công ơn dựng nước."
      },
      {
        question: "Quần thể di sản nào ở Việt Nam được UNESCO công nhận là Di sản Hỗn hợp (cả Văn hóa và Thiên nhiên) duy nhất ở Đông Nam Á?",
        options: [
          "Quần thể danh thắng Tràng An (Ninh Bình)",
          "Vườn quốc gia Phong Nha - Kẻ Bàng",
          "Vịnh Hạ Long (Quảng Ninh)",
          "Hoàng thành Thăng Long"
        ],
        correct: 0,
        explanation: "Năm 2014, Quần thể danh thắng Tràng An (Ninh Bình) đã được UNESCO công nhận là Di sản Thế giới hỗn hợp đầu tiên của Đông Nam Á nhờ vẻ đẹp địa chất kỳ vĩ và di chỉ khảo cổ sinh sống tiền sử của con người."
      },
      {
        question: "Làng gốm Bát Tràng trứ danh bên bờ sông Hồng thuộc địa phận thành phố nào?",
        options: [
          "Hải Phòng",
          "Bắc Ninh",
          "Hà Nội",
          "Nam Định"
        ],
        correct: 2,
        explanation: "Làng gốm cổ Bát Tràng nằm ở tả ngạn sông Hồng, thuộc huyện Gia Lâm, thủ đô Hà Nội. Nơi đây có lịch sử chế tác gốm sứ tinh xảo hơn 700 năm qua."
      }
    ];

    this.currentIndex = 0;
    this.score = 0;
    this.selectedOption = null;
    this.answered = false;

    this.initDOM();
  }

  initDOM() {
    this.questionEl = document.getElementById('quiz-question');
    this.optionsContainer = document.getElementById('quiz-options');
    this.feedbackBox = document.getElementById('quiz-feedback');
    this.nextBtn = document.getElementById('quiz-next-btn');
    this.stepCountEl = document.getElementById('quiz-step-count');
    this.scoreBadge = document.getElementById('quiz-score');
    this.progressBar = document.getElementById('quiz-progress-bar');
    this.resultView = document.getElementById('quiz-result');
    this.questionCard = document.getElementById('quiz-card-body');

    if (!this.questionEl) return;

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.handleNext());
    }

    this.renderQuestion();
  }

  renderQuestion() {
    if (this.currentIndex >= this.questions.length) {
      this.showResult();
      return;
    }

    const q = this.questions[this.currentIndex];
    this.answered = false;
    this.selectedOption = null;

    if (this.stepCountEl) {
      this.stepCountEl.textContent = `Câu hỏi ${this.currentIndex + 1} / ${this.questions.length}`;
    }

    if (this.progressBar) {
      const progressPercent = ((this.currentIndex + 1) / this.questions.length) * 100;
      this.progressBar.style.width = `${progressPercent}%`;
    }

    this.questionEl.textContent = q.question;
    this.optionsContainer.innerHTML = '';
    this.feedbackBox.className = 'quiz-feedback-box';
    this.feedbackBox.innerHTML = '';
    this.nextBtn.style.display = 'none';

    const letters = ['A', 'B', 'C', 'D'];

    q.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.innerHTML = `
        <span class="option-prefix">${letters[idx]}</span>
        <span class="option-text">${optText}</span>
      `;
      btn.addEventListener('click', () => this.selectOption(idx, btn));
      this.optionsContainer.appendChild(btn);
    });
  }

  selectOption(idx, btnEl) {
    if (this.answered) return;
    this.answered = true;
    this.selectedOption = idx;

    const q = this.questions[this.currentIndex];
    const isCorrect = idx === q.correct;

    const allButtons = this.optionsContainer.querySelectorAll('.quiz-option-btn');

    if (isCorrect) {
      btnEl.classList.add('correct');
      this.score += 10;
      if (this.scoreBadge) {
        this.scoreBadge.textContent = `${this.score} Điểm`;
      }
      if (window.vietnamAudio) {
        window.vietnamAudio.playDanTranh(587.33); // pleasant note
      }
      this.feedbackBox.innerHTML = `
        <div style="color: #34d399; font-weight: 700; margin-bottom: 6px;">✨ Chính xác tuyệt đối!</div>
        <div>${q.explanation}</div>
      `;
    } else {
      btnEl.classList.add('wrong');
      // Highlight correct one
      allButtons[q.correct].classList.add('correct');
      if (window.vietnamAudio) {
        window.vietnamAudio.playTrongHoi();
      }
      this.feedbackBox.innerHTML = `
        <div style="color: #f87171; font-weight: 700; margin-bottom: 6px;">Chưa đúng rồi!</div>
        <div>${q.explanation}</div>
      `;
    }

    this.feedbackBox.classList.add('active');
    this.nextBtn.style.display = 'inline-flex';
    this.nextBtn.textContent = this.currentIndex === this.questions.length - 1 ? 'Xem Kết Quả' : 'Câu Tiếp Theo';
  }

  handleNext() {
    this.currentIndex++;
    this.renderQuestion();
  }

  showResult() {
    if (this.questionCard) this.questionCard.style.display = 'none';
    if (this.resultView) {
      this.resultView.classList.add('active');

      const maxScore = this.questions.length * 10;
      let badge = '🏮';
      let title = '';
      let desc = '';

      if (this.score === maxScore) {
        badge = '👑';
        title = 'Đại Sứ Văn Hóa Việt Nam';
        desc = `Xuất sắc! Bạn đạt trọn vẹn ${this.score}/${maxScore} điểm. Sự am hiểu của bạn về cội nguồn, mỹ vị và di sản văn hiến ngàn năm thật đáng khâm phục!`;
      } else if (this.score >= maxScore * 0.75) {
        badge = '🪷';
        title = 'Nhà Khám Phá Di Sản Tài Ba';
        desc = `Tuyệt vời! Bạn đạt ${this.score}/${maxScore} điểm. Bạn sở hữu vốn kiến thức sâu sắc và niềm đam mê nồng nhiệt với văn hóa truyền thống Việt Nam!`;
      } else if (this.score >= maxScore * 0.5) {
        badge = '🎋';
        title = 'Người Bạn Tri Kỷ Của Đất Việt';
        desc = `Khá lắm! Bạn đạt ${this.score}/${maxScore} điểm. Cùng tiếp tục tìm hiểu thêm nhiều trang sử và phong tục tươi đẹp của nước nhà nhé!`;
      } else {
        badge = '⛵';
        title = 'Lữ Khách Mới Bắt Đầu';
        desc = `Bạn đạt ${this.score}/${maxScore} điểm. Hành trình khám phá di sản 4.000 năm văn hiến luôn chào đón bạn với bao điều kỳ thú!`;
      }

      this.resultView.innerHTML = `
        <div class="quiz-result-badge">${badge}</div>
        <h3 class="quiz-result-title">${title}</h3>
        <p class="quiz-result-desc">${desc}</p>
        <div style="margin-bottom: 28px;">
          <div class="badge badge-red" style="font-size: 1rem; padding: 8px 24px;">Điểm số cuối cùng: ${this.score} / ${maxScore}</div>
        </div>
        <button class="btn btn-primary" onclick="window.culturalQuiz.restart()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
          Thử Thách Lại Từ Đầu
        </button>
      `;
    }
  }

  restart() {
    this.currentIndex = 0;
    this.score = 0;
    if (this.scoreBadge) this.scoreBadge.textContent = '0 Điểm';
    if (this.questionCard) this.questionCard.style.display = 'block';
    if (this.resultView) this.resultView.classList.remove('active');
    this.renderQuestion();
  }
}

// Global initialization
window.initCulturalQuiz = function() {
  window.culturalQuiz = new VietnamCulturalQuiz();
};
