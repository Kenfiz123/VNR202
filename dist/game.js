(() => {
  'use strict';

  const rounds = [
    {
      question: 'Cuộc Tổng tuyển cử ngày 25/4/1976 có ý nghĩa quan trọng nhất nào?',
      options: [
        'Đánh dấu Việt Nam gia nhập ASEAN',
        'Chính thức mở đầu công cuộc Đổi mới',
        'Tạo cơ sở chính trị và pháp lý cho Nhà nước thống nhất',
        'Đưa Việt Nam trở thành nước xuất khẩu gạo',
      ],
      correct: 2,
      explanation: 'Cuộc bầu cử góp phần xây dựng bộ máy Nhà nước thống nhất sau năm 1975.',
    },
    {
      question: 'Nguyên nhân dẫn đến khủng hoảng kinh tế Việt Nam trước năm 1986 được giải thích đầy đủ nhất như thế nào?',
      options: [
        'Chỉ do hậu quả chiến tranh',
        'Kết hợp khó khăn khách quan với hạn chế trong cơ chế quản lý',
        'Chỉ do thiếu lao động và tài nguyên',
        'Chủ yếu do Việt Nam gia nhập WTO quá muộn',
      ],
      correct: 1,
      explanation: 'Tài liệu nhấn mạnh cả hoàn cảnh chiến tranh, cấm vận và hạn chế của cơ chế tập trung, quan liêu, bao cấp.',
    },
    {
      question: 'Lạm phát năm 1986 của Việt Nam đạt khoảng bao nhiêu?',
      options: [
        '67,1%',
        '120,5%',
        '425,3%',
        '774,7%',
      ],
      correct: 3,
      explanation: 'Văn kiện Đại hội VIII nêu mức lạm phát năm 1986 là 774,7%, phản ánh tình trạng khủng hoảng kinh tế trước Đổi mới.',
    },
    {
      question: 'Đại hội VI của Đảng năm 1986 đánh dấu sự chuyển hướng quan trọng nào?',
      options: [
        'Đổi mới tư duy kinh tế, khắc phục dần cơ chế tập trung bao cấp',
        'Chuyển hoàn toàn sang kinh tế tư bản chủ nghĩa',
        'Ngừng hoạt động kinh tế đối ngoại',
        'Chỉ tập trung phát triển công nghiệp nặng',
      ],
      correct: 0,
      explanation: 'Đại hội VI mở đầu công cuộc Đổi mới toàn diện, trước hết nhấn mạnh đổi mới tư duy kinh tế.',
    },
    {
      question: 'Năm 1989, Việt Nam xuất khẩu khoảng bao nhiêu triệu tấn gạo?',
      options: [
        '0,5 triệu tấn',
        '1,4 triệu tấn',
        '3,8 triệu tấn',
        '5,2 triệu tấn',
      ],
      correct: 1,
      explanation: 'Xuất khẩu khoảng 1,4 triệu tấn gạo là dấu mốc cho sự cải thiện năng lực sản xuất nông nghiệp.',
    },
    {
      question: 'Kết quả nào phản ánh đúng chuyển biến kinh tế Việt Nam giai đoạn 1991–1995?',
      options: [
        'GDP giảm và lạm phát liên tục tăng',
        'GDP tăng 3% và lạm phát giữ ở 774,7%',
        'GDP tăng bình quân 8,2%/năm và lạm phát giảm mạnh',
        'GDP không tăng nhưng kim ngạch xuất khẩu tăng',
      ],
      correct: 2,
      explanation: 'GDP tăng bình quân 8,2%/năm; lạm phát giảm từ 67,1% năm 1991 xuống 12,7% năm 1995.',
    },
    {
      question: 'Theo số liệu công bố cuối năm 2020, GDP Việt Nam đạt khoảng bao nhiêu?',
      options: [
        '343 tỷ USD',
        '143 tỷ USD',
        '543 tỷ USD',
        '743 tỷ USD',
      ],
      correct: 0,
      explanation: 'Quy mô GDP được công bố khoảng 343 tỷ USD, với GDP bình quân đầu người khoảng 3.521 USD.',
    },
    {
      question: 'Theo ước tính công bố cuối năm 2020, tổng kim ngạch xuất nhập khẩu hàng hóa Việt Nam đạt khoảng bao nhiêu?',
      options: [
        '281,5 tỷ USD',
        '343 tỷ USD',
        '421,7 tỷ USD',
        '543,9 tỷ USD',
      ],
      correct: 3,
      explanation: '543,9 tỷ USD là tổng kim ngạch xuất nhập khẩu; 281,5 tỷ USD là kim ngạch xuất khẩu.',
    },
    {
      question: 'Vì sao không thể chỉ dựa vào quy mô GDP để đánh giá toàn diện thành tựu kinh tế?',
      options: [
        'Vì GDP chỉ đo được lượng gạo xuất khẩu',
        'Vì GDP không liên quan đến phát triển kinh tế',
        'Vì còn phải xét năng suất, chất lượng tăng trưởng và tính bền vững',
        'Vì GDP chỉ phản ánh hoạt động đối ngoại',
      ],
      correct: 2,
      explanation: 'Tài liệu phân biệt rõ quy mô kinh tế với chất lượng tăng trưởng và khả năng tự chủ.',
    },
    {
      question: 'Theo chuẩn Tổng cục Thống kê – Ngân hàng Thế giới trong tài liệu, tỷ lệ nghèo Việt Nam năm 2016 còn bao nhiêu?',
      options: [
        '20,7%',
        '9,8%',
        '13,6%',
        '1,6%',
      ],
      correct: 1,
      explanation: 'Tỷ lệ nghèo giảm từ 20,7% năm 2010 xuống 9,8% năm 2016.',
    },
    {
      question: 'Tỷ lệ nghèo nông thôn 13,6% và thành thị 1,6% năm 2016 cho thấy điều gì?',
      options: [
        'Thành quả giảm nghèo chưa phân bố đồng đều giữa các khu vực',
        'Khu vực thành thị có tỷ lệ nghèo cao hơn nông thôn',
        'Việt Nam chưa đạt kết quả giảm nghèo',
        'Hai khu vực có điều kiện sống hoàn toàn giống nhau',
      ],
      correct: 0,
      explanation: 'Sự khác biệt giữa nông thôn và thành thị cho thấy còn khoảng cách về điều kiện sống và cơ hội phát triển.',
    },
    {
      question: 'Chỉ số phát triển con người (HDI) kết hợp những yếu tố nào?',
      options: [
        'Xuất khẩu, nhập khẩu và đầu tư',
        'Dân số, diện tích và tài nguyên',
        'Quốc phòng, đối ngoại và công nghiệp',
        'Sức khỏe, giáo dục và thu nhập',
      ],
      correct: 3,
      explanation: 'HDI cung cấp góc nhìn về chất lượng phát triển con người, không chỉ thu nhập kinh tế.',
    },
    {
      question: 'Di sản văn hóa Việt Nam nào được UNESCO ghi danh năm 2009 theo tài liệu?',
      options: [
        'Đờn ca tài tử Nam Bộ',
        'Dân ca Quan họ Bắc Ninh',
        'Nghệ thuật Bài Chòi Trung Bộ',
        'Dân ca Ví, Giặm Nghệ Tĩnh',
      ],
      correct: 1,
      explanation: 'Dân ca Quan họ Bắc Ninh được ghi danh vào Danh sách di sản văn hóa phi vật thể đại diện của nhân loại năm 2009.',
    },
    {
      question: 'Hiến pháp được Quốc hội thông qua ngày 28/11/2013 có ý nghĩa nổi bật gì?',
      options: [
        'Đánh dấu Việt Nam gia nhập WTO',
        'Thay thế hoàn toàn hệ thống pháp luật',
        'Phát triển khuôn khổ thể chế, quyền con người và quyền công dân',
        'Chính thức khởi đầu chính sách Đổi mới',
      ],
      correct: 2,
      explanation: 'Hiến pháp 2013 là dấu mốc về tổ chức quyền lực nhà nước, quyền con người và quyền công dân.',
    },
    {
      question: 'Thứ tự nào sau đây đúng với các dấu mốc hội nhập quốc tế của Việt Nam?',
      options: [
        'WTO → ASEAN → Tuyên bố bình thường hóa quan hệ với Hoa Kỳ',
        'ASEAN → WTO → Tuyên bố bình thường hóa quan hệ với Hoa Kỳ',
        'WTO → Tuyên bố bình thường hóa quan hệ với Hoa Kỳ → ASEAN',
        'Tuyên bố bình thường hóa quan hệ với Hoa Kỳ → ASEAN → WTO',
      ],
      correct: 3,
      explanation: 'Việt Nam và Hoa Kỳ tuyên bố bình thường hóa quan hệ tháng 7/1995, trước khi Việt Nam gia nhập ASEAN ngày 28/7/1995. Việt Nam trở thành thành viên WTO ngày 11/1/2007.',
    },
    {
      question: 'Trong giai đoạn 2014–2018, Việt Nam đã triển khai bao nhiêu lượt sĩ quan theo hình thức cá nhân tham gia hoạt động gìn giữ hòa bình Liên hợp quốc?',
      options: [
        '29 lượt sĩ quan',
        '59 lượt sĩ quan',
        '92 lượt sĩ quan',
        '129 lượt sĩ quan',
      ],
      correct: 0,
      explanation: 'Trong giai đoạn 2014–2018, Việt Nam triển khai 29 lượt sĩ quan theo hình thức cá nhân tới các phái bộ ở Nam Sudan và Cộng hòa Trung Phi. Số này được thống kê riêng với lực lượng bệnh viện dã chiến.',
    },
    {
      question: 'Việt Nam nhận 192/193 phiếu khi được bầu vào Hội đồng Bảo an Liên hợp quốc năm 2019. Kết quả này thể hiện rõ nhất điều gì?',
      options: [
        'Việt Nam có GDP lớn nhất Đông Nam Á',
        'Việt Nam đã trở thành thành viên thường trực',
        'Mức độ tín nhiệm và uy tín quốc tế của Việt Nam',
        'Việt Nam có quyền phủ quyết tại Liên hợp quốc',
      ],
      correct: 2,
      explanation: 'Số phiếu ủng hộ cao là một chỉ dấu về sự tín nhiệm quốc tế đối với Việt Nam.',
    },
    {
      question: 'Tính theo sức mua tương đương (PPP) năm 2011, năng suất lao động Việt Nam năm 2018 bằng khoảng bao nhiêu so với Thái Lan và Malaysia?',
      options: [
        '19% Thái Lan và 37% Malaysia',
        '37% Thái Lan và 19% Malaysia',
        '70% Thái Lan và 50% Malaysia',
        'Gần bằng cả hai quốc gia',
      ],
      correct: 1,
      explanation: 'Số liệu tính theo sức mua tương đương năm 2011 cho thấy khoảng cách năng suất lao động đáng kể.',
    },
    {
      question: 'Theo ước tính công bố cuối năm 2020, khu vực FDI chiếm 72,2% kim ngạch xuất khẩu hàng hóa (kể cả dầu thô) đặt ra yêu cầu gì?',
      options: [
        'Nâng cao năng lực doanh nghiệp trong nước và khả năng liên kết công nghệ',
        'Ngừng tiếp nhận mọi nguồn vốn nước ngoài',
        'Chỉ tập trung vào doanh nghiệp FDI',
        'Giảm hoàn toàn hoạt động xuất khẩu',
      ],
      correct: 0,
      explanation: 'Tài liệu nhấn mạnh yêu cầu tăng năng lực doanh nghiệp trong nước và khả năng tiếp nhận công nghệ.',
    },
    {
      question: 'Từ vụ án MobiFone mua cổ phần AVG, bài học quan trọng nhất về quản lý nguồn lực là gì?',
      options: [
        'Nên ngừng mọi hoạt động đầu tư lớn',
        'Chỉ cần tăng vốn đầu tư nhà nước',
        'Không cần giám sát nếu dự án có lợi nhuận',
        'Tăng minh bạch, trách nhiệm giải trình và giám sát',
      ],
      correct: 3,
      explanation: 'Đây là bài học về phòng ngừa tham nhũng, lãng phí và sử dụng hiệu quả nguồn lực phát triển.',
    },
  ];

  const carCount = 10;
  const maxDoorAudioSeconds = 8;
  const game = document.getElementById('game');
  const garage = document.getElementById('garage');
  const board = document.getElementById('board');
  const carGrid = document.getElementById('car-grid');
  const garageHint = document.getElementById('garage-hint');
  const reveal = document.getElementById('reveal');
  const revealHeading = document.getElementById('reveal-heading');
  const revealStatus = document.getElementById('reveal-status');
  const carFrame = document.getElementById('car-frame');
  const closedPhoto = document.getElementById('car-photo-closed');
  const doorMotion = document.getElementById('door-motion');
  const doorReveal = document.getElementById('door-reveal');
  const foundCount = document.getElementById('found-count');
  const openedCount = document.getElementById('opened-count');
  const roundNumber = document.getElementById('round-number');
  const questionTitle = document.getElementById('question-title');
  const quizContent = document.getElementById('quiz-content');
  const options = document.getElementById('options');
  const feedback = document.getElementById('feedback');
  const panelKicker = document.getElementById('panel-kicker');
  const actionButton = document.getElementById('action-button');
  const actionLabel = document.getElementById('action-label');
  const actionIcon = document.getElementById('action-icon');
  const result = document.getElementById('result');
  const resultName = document.getElementById('result-name');
  const resultDescription = document.getElementById('result-description');
  const helpButton = document.getElementById('help-button');
  const helpDialog = document.getElementById('help-dialog');
  const doorAudio = document.getElementById('door-audio');
  const doorAudioFile = document.getElementById('door-audio-file');
  const doorAudioStatus = document.getElementById('door-audio-status');

  const openedCars = new Map();
  let occupiedCars;
  let pairsFound = 0;
  let roundIndex = 0;
  let selectedIndex = null;
  let doorAudioUrl;

  function twoDigits(number) {
    return String(number).padStart(2, '0');
  }

  const carButtons = Array.from({ length: carCount }, (_, index) => {
    const number = twoDigits(index + 1);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'car-slot';
    button.dataset.car = number;

    const badge = document.createElement('span');
    badge.className = 'car-number';
    badge.textContent = number;

    const status = document.createElement('span');
    status.className = 'car-slot-status';

    button.append(badge, status);
    button.addEventListener('click', () => openCar(index));
    return { button, number, status };
  });

  function setMode(mode) {
    game.dataset.state = mode;
    const showingResult = mode === 'reveal' || mode === 'finished' || mode === 'exhausted';
    const showingCar = mode === 'reveal' || mode === 'finished' || mode === 'opening';
    board.hidden = showingCar;
    reveal.hidden = !showingCar;
    quizContent.hidden = showingCar || showingResult;
    result.hidden = !showingResult;
  }

  function updateBoard() {
    const canPick = game.dataset.state === 'pick';
    carButtons.forEach(({ button, number, status }, index) => {
      const outcome = openedCars.get(index);
      button.disabled = Boolean(outcome) || !canPick;
      if (outcome) {
        button.dataset.result = outcome;
        status.textContent = outcome === 'found' ? 'Có người' : 'Xe trống';
      } else {
        delete button.dataset.result;
        status.textContent = canPick ? 'Chọn mở' : 'Đang khóa';
      }
      button.setAttribute('aria-label', 'Xe ' + number + ', ' + status.textContent);
    });
    if (game.dataset.state === 'exhausted') {
      garageHint.textContent = 'Đã hết câu hỏi. Bấm Chơi lại để bắt đầu lượt mới.';
    } else {
      garageHint.textContent = canPick
        ? 'Chọn một chiếc xe chưa mở.'
        : 'Trả lời đúng để mở khóa lượt chọn xe.';
    }
  }

  function updateCounts() {
    foundCount.textContent = pairsFound;
    openedCount.textContent = openedCars.size;
  }

  function showFeedback(message, tone) {
    feedback.textContent = message;
    if (tone) {
      feedback.dataset.tone = tone;
    } else {
      delete feedback.dataset.tone;
    }
  }

  function selectAnswer(index) {
    if (game.dataset.state !== 'question') return;
    if (selectedIndex !== null) {
      options.children[selectedIndex].setAttribute('aria-pressed', 'false');
    }
    selectedIndex = index;
    options.children[index].setAttribute('aria-pressed', 'true');
    actionButton.disabled = false;
    showFeedback('');
  }

  function doorAudioDuration() {
    // Playback on the first click also works if the browser deferred preloading.
    const awaitingBuiltInAudio = !doorAudioUrl && !doorAudio.error && doorAudio.readyState === 0;
    const duration = awaitingBuiltInAudio ? Number(doorAudio.dataset.duration) : doorAudio.duration;
    return Number.isFinite(duration) && duration > 0 && duration <= maxDoorAudioSeconds ? duration : 0;
  }

  function startRound() {
    doorAudio.pause();
    if (doorAudio.readyState > 0) doorAudio.currentTime = 0;
    const round = rounds[roundIndex];
    selectedIndex = null;
    delete game.dataset.result;
    delete reveal.dataset.photo;
    setMode('question');
    updateBoard();
    roundNumber.textContent = twoDigits(roundIndex + 1);
    panelKicker.textContent = 'Câu hỏi';
    questionTitle.textContent = round.question;
    options.replaceChildren(...round.options.map((answer, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'answer';
      button.setAttribute('aria-pressed', 'false');

      const key = document.createElement('span');
      key.className = 'answer-key';
      key.textContent = 'ABCD'[index];

      const label = document.createElement('span');
      label.className = 'answer-text';
      label.textContent = answer;

      button.append(key, label);
      button.addEventListener('click', () => selectAnswer(index));
      return button;
    }));

    showFeedback('');
    actionButton.disabled = true;
    actionLabel.textContent = 'Kiểm tra';
    actionIcon.textContent = '→';
  }

  function startGame() {
    const first = Math.floor(Math.random() * carCount);
    const remaining = Math.floor(Math.random() * (carCount - 1));
    // Shift past the first car to keep the second choice distinct.
    const second = remaining >= first ? remaining + 1 : remaining;
    occupiedCars = new Set([first, second]);
    openedCars.clear();
    pairsFound = 0;
    roundIndex = 0;
    updateCounts();
    startRound();
  }

  function checkAnswer() {
    if (game.dataset.state !== 'question' || selectedIndex === null) return;

    const round = rounds[roundIndex];
    const answer = options.children[selectedIndex];
    for (const button of options.children) {
      button.disabled = true;
    }
    options.children[round.correct].dataset.result = 'correct';
    if (selectedIndex !== round.correct) {
      answer.dataset.result = 'wrong';
      setMode('incorrect');
      panelKicker.textContent = 'Đáp án';
      actionButton.disabled = false;
      actionLabel.textContent = roundIndex === rounds.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo';
      actionIcon.textContent = '→';
      showFeedback('Chưa đúng. Đáp án đúng là ' + 'ABCD'[round.correct] + '. ' + round.options[round.correct] + '. ' + round.explanation, 'wrong');
      actionButton.focus();
      return;
    }

    setMode('pick');
    updateBoard();
    actionButton.disabled = true;
    actionLabel.textContent = 'Chọn 1 xe ở bãi đỗ';
    actionIcon.textContent = '←';
    showFeedback('Chính xác! ' + round.explanation + ' Bạn được mở một chiếc xe.', 'correct');
    carGrid.querySelector('.car-slot:not(:disabled)').focus();
  }

  // Each pair marks the same contour feature in the closed and open photos.
  // The hinge, mirror and window corners can follow separate paths on this mesh.
  const doorLandmarks = [
    [229, 92, 226, 91], [418, 92, 287, 76], [418, 117, 279, 111],
    [417, 150, 265, 158], [417, 169, 253, 184], [424, 189, 264, 211],
    [426, 221, 267, 258], [417, 245, 262, 296], [408, 275, 238, 341],
    [408, 311, 229, 365], [191, 311, 184, 307], [187, 278, 178, 280],
    [180, 221, 172, 220], [180, 184, 178, 184], [198, 179, 165, 176],
    [201, 152, 165, 151], [209, 150, 193, 148], [216, 115, 214, 109],
  ];
  const textureLandmarks = [
    ...doorLandmarks,
    // The inner edge starts flush with the closed panel and gains depth as it swings.
    [424, 189, 246, 211], [426, 221, 242, 258], [417, 245, 241, 296], [408, 275, 232, 341],
    // Keep the whole handle inside one patch so a mesh seam cannot split it.
    [358, 193, 205, 207], [416, 193, 234, 215], [416, 213, 234, 239], [358, 213, 205, 231],
  ];
  const doorTriangles = [
    [14, 15, 16], [0, 1, 2], [0, 2, 3], [0, 3, 4],
    [17, 0, 4], [16, 17, 4], [14, 16, 4],
    [14, 18, 13], [14, 4, 18], [18, 22, 13], [18, 23, 22],
    [18, 24, 23], [18, 19, 24], [22, 23, 25], [23, 24, 25],
    [19, 20, 24], [20, 10, 24], [20, 21, 10], [21, 9, 10], [10, 25, 24],
    [10, 11, 25], [11, 12, 25], [12, 22, 25], [12, 13, 22],
  ];
  const innerEdgeTriangles = [
    [4, 5, 18], [18, 5, 6], [18, 6, 19], [19, 6, 7],
    [19, 7, 20], [20, 7, 8], [20, 8, 21], [21, 8, 9],
  ];
  const closedLandmarks = textureLandmarks.map(([x, y]) => [x, y]);
  const openLandmarks = textureLandmarks.map(([, , x, y]) => [x, y]);
  const clampProgress = (value) => Math.min(1, Math.max(0, value));

  function tracePolygon(context, points) {
    context.beginPath();
    context.moveTo(...points[0]);
    for (const point of points.slice(1)) context.lineTo(...point);
    context.closePath();
  }

  function paintDoorTexture(context, photo, texturePoints, frameLandmarks, triangles, opacity = 1) {
    for (const triangle of triangles) {
      const [[x, y], [ux, uy], [vx, vy]] = triangle.map((index) => texturePoints[index]);
      const target = triangle.map((index) => frameLandmarks[index]);
      const [[X, Y], [UX, UY], [VX, VY]] = target;
      const determinant = (ux - x) * (vy - y) - (uy - y) * (vx - x);
      const a = ((UX - X) * (vy - y) - (VX - X) * (uy - y)) / determinant;
      const b = ((UY - Y) * (vy - y) - (VY - Y) * (uy - y)) / determinant;
      const c = ((VX - X) * (ux - x) - (UX - X) * (vx - x)) / determinant;
      const d = ((VY - Y) * (ux - x) - (UY - Y) * (vx - x)) / determinant;
      const centerX = (X + UX + VX) / 3;
      const centerY = (Y + UY + VY) / 3;

      context.save();
      // A small overlap avoids hairlines between triangles. The outer contour clips it.
      tracePolygon(context, target.map(([tx, ty]) => [
        tx + (tx - centerX) * .02, ty + (ty - centerY) * .02,
      ]));
      context.clip();
      context.globalAlpha = opacity;
      context.transform(a, b, c, d, X - a * x - c * y, Y - b * x - d * y);
      context.drawImage(photo, 0, 0, 628, 422);
      context.restore();
    }
  }

  function paintDoorFrame(context, openPhoto, progress) {
    context.clearRect(0, 0, 628, 422);
    doorReveal.style.opacity = Math.min(1, progress * 14);
    if (progress === 0) return;

    const frameLandmarks = textureLandmarks.map(([x, y, openX, openY]) => [
      x + (openX + 5 - x) * progress, y + (openY - y) * progress,
    ]);
    const contour = frameLandmarks.slice(0, doorLandmarks.length);
    const edge = contour.slice(1, 10);
    const release = clampProgress((progress - .88) / .12);
    const points = [[edge[0][0], 0], ...edge, [edge.at(-1)[0], 422]]
      .map(([x, y]) => `${(x - 2 + (146 - x) * release) * 100 / 628}% ${y * 100 / 422}%`);
    doorReveal.style.clipPath = `polygon(${points.join(', ')}, 100% 100%, 100% 0)`;
    if (progress === 1) return;

    const blend = clampProgress((progress - .23) / .28);
    const textureMix = blend * blend * (3 - 2 * blend);
    context.save();
    tracePolygon(context, contour);
    context.clip();
    if (textureMix < 1) paintDoorTexture(context, closedPhoto, closedLandmarks, frameLandmarks, doorTriangles);
    if (textureMix > 0) paintDoorTexture(context, openPhoto, openLandmarks, frameLandmarks, doorTriangles, textureMix);
    paintDoorTexture(context, openPhoto, openLandmarks, frameLandmarks, innerEdgeTriangles);
    context.restore();
  }

  async function animateDoor(delay, openPhoto) {
    const context = doorMotion.getContext('2d');
    if (!context || !doorMotion.animate || !closedPhoto.naturalWidth || !openPhoto.naturalWidth) return;

    const duration = 1120;
    const swing = doorMotion.animate([{ opacity: 1 }, { opacity: 1 }], { duration, delay, fill: 'both' });
    let frame;
    let lastProgress;
    function render() {
      const time = clampProgress((swing.currentTime - delay) / duration);
      const progress = (1 - Math.cos(Math.PI * time)) / 2;
      if (progress !== lastProgress) {
        paintDoorFrame(context, openPhoto, progress);
        lastProgress = progress;
      }
      frame = requestAnimationFrame(render);
    }
    render();
    await swing.finished.catch(() => {});
    cancelAnimationFrame(frame);
    swing.cancel();
    doorReveal.style.removeProperty('clip-path');
    doorReveal.style.removeProperty('opacity');
    context.clearRect(0, 0, 628, 422);
  }

  async function openCar(index) {
    if (game.dataset.state !== 'pick' || openedCars.has(index)) return;

    const outcome = occupiedCars.has(index) ? 'found' : 'empty';
    reveal.dataset.photo = outcome;
    revealHeading.textContent = 'Xe ' + twoDigits(index + 1);

    const audioDuration = doorAudioDuration();
    if (audioDuration) {
      doorAudio.currentTime = 0;
      // Start playback inside the car button's click to retain user activation.
      void doorAudio.play().catch(() => {});
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finishOpening(index, outcome);
      focusReveal();
      return;
    }

    setMode('opening');
    updateBoard();
    carFrame.setAttribute('aria-hidden', 'true');
    revealStatus.textContent = 'Đang mở cửa…';
    revealHeading.setAttribute('aria-label', revealHeading.textContent + ', ' + revealStatus.textContent);
    panelKicker.textContent = 'Mở cửa xe';
    actionLabel.textContent = 'Đang mở cửa…';
    actionIcon.textContent = '';
    focusReveal();

    // Let the first two knocks lead into the swing with the built-in clip.
    const openPhoto = document.getElementById(outcome === 'found' ? 'car-photo-occupied' : 'car-photo-empty');
    await animateDoor(audioDuration && !doorAudioUrl ? 370 : 0, openPhoto);
    finishOpening(index, outcome);
  }

  function finishOpening(index, outcome) {
    const hasPeople = outcome === 'found';
    openedCars.set(index, outcome);
    if (hasPeople) pairsFound += 1;

    const finished = pairsFound === occupiedCars.size;
    setMode(finished ? 'finished' : 'reveal');
    game.dataset.result = outcome;
    carFrame.removeAttribute('aria-hidden');
    updateBoard();
    updateCounts();

    revealStatus.textContent = hasPeople ? 'Có hai người' : 'Xe trống';
    revealHeading.setAttribute('aria-label', revealHeading.textContent + ', ' + revealStatus.textContent);
    panelKicker.textContent = finished ? 'Hoàn thành' : 'Kết quả mở xe';
    if (finished) {
      resultName.textContent = 'Bạn đã tìm đủ hai xe!';
      resultDescription.textContent = 'Bạn mở ' + openedCars.size + ' xe để tìm đủ hai xe có người.';
    } else if (hasPeople) {
      resultName.textContent = 'Tìm thấy hai người!';
      resultDescription.textContent = 'Bạn đã tìm thấy xe đầu tiên có người. Còn một xe nữa.';
    } else {
      resultName.textContent = 'Xe này trống';
      resultDescription.textContent = 'Trả lời câu tiếp theo để mở một chiếc xe khác.';
    }

    actionButton.disabled = false;
    actionLabel.textContent = finished ? 'Chơi lại' : roundIndex === rounds.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo';
    actionIcon.textContent = finished ? '↻' : '→';
  }

  function focusReveal() {
    const stacked = window.matchMedia('(max-width: 900px)').matches;
    revealHeading.focus({ preventScroll: stacked });
    if (stacked) garage.scrollIntoView({ block: 'start' });
  }

  actionButton.addEventListener('click', () => {
    switch (game.dataset.state) {
      case 'question':
        checkAnswer();
        break;
      case 'incorrect':
      case 'reveal':
        if (roundIndex === rounds.length - 1) {
          setMode('exhausted');
          updateBoard();
          panelKicker.textContent = 'Kết quả';
          resultName.textContent = 'Hết câu hỏi';
          resultDescription.textContent = 'Bạn đã tìm được ' + pairsFound + '/2 xe có người và mở ' + openedCars.size + ' xe. Chơi lại để thử lượt mới.';
          actionLabel.textContent = 'Chơi lại';
          actionIcon.textContent = '↻';
          resultName.focus();
        } else {
          roundIndex += 1;
          startRound();
          questionTitle.focus();
        }
        break;
      case 'finished':
      case 'exhausted':
        startGame();
        questionTitle.focus();
        break;
    }
  });

  helpButton.addEventListener('click', () => helpDialog.showModal());
  doorAudioFile.addEventListener('change', () => {
    const file = doorAudioFile.files[0];
    if (!file) return;

    if (doorAudioUrl) URL.revokeObjectURL(doorAudioUrl);
    doorAudioUrl = URL.createObjectURL(file);
    doorAudioStatus.textContent = 'Đang nạp đoạn nhạc…';
    doorAudio.src = doorAudioUrl;
  });
  doorAudio.addEventListener('loadedmetadata', () => {
    if (!doorAudioUrl) return;
    doorAudioStatus.textContent = doorAudioDuration()
      ? 'Đã nạp nhạc mở cửa.'
      : 'Hãy chọn đoạn nhạc dài tối đa 8 giây.';
  });
  doorAudio.addEventListener('error', () => {
    doorAudioStatus.textContent = 'Không đọc được tệp âm thanh này.';
  });
  carGrid.append(...carButtons.map(({ button }) => button));
  startGame();
})();
