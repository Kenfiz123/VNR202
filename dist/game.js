(() => {
  'use strict';

  const rounds = [
    {
      question: 'Ngày 2/9/1945, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại quảng trường nào?',
      options: [
        'Quảng trường Lam Sơn',
        'Quảng trường Ba Đình',
        'Quảng trường Đông Kinh Nghĩa Thục',
        'Quảng trường Cách mạng Tháng Tám',
      ],
      correct: 1,
    },
    {
      question: 'Chiến thắng Điện Biên Phủ diễn ra vào năm nào?',
      options: ['1945', '1950', '1954', '1975'],
      correct: 2,
    },
    {
      question: 'Chiến dịch nào kết thúc vào ngày 30/4/1975?',
      options: [
        'Chiến dịch Hồ Chí Minh',
        'Chiến dịch Việt Bắc',
        'Chiến dịch Biên giới',
        'Chiến dịch Điện Biên Phủ',
      ],
      correct: 0,
    },
    {
      question: 'Nguyễn Tất Thành rời bến Nhà Rồng đi tìm đường cứu nước vào năm nào?',
      options: ['1905', '1920', '1930', '1911'],
      correct: 3,
    },
    {
      question: 'Đảng Cộng sản Việt Nam được thành lập vào năm nào?',
      options: ['1925', '1930', '1941', '1945'],
      correct: 1,
    },
    {
      question: 'Đội Việt Nam Tuyên truyền Giải phóng quân được thành lập vào năm nào?',
      options: ['1930', '1941', '1944', '1946'],
      correct: 2,
    },
    {
      question: 'Quốc hội thông qua bản Hiến pháp đầu tiên của nước Việt Nam Dân chủ Cộng hòa vào năm nào?',
      options: ['1946', '1954', '1959', '1980'],
      correct: 0,
    },
    {
      question: 'Hiệp định nào về đình chỉ chiến sự ở Việt Nam được ký năm 1954?',
      options: ['Hiệp định Paris', 'Hiệp định Sơ bộ', 'Hiệp định Élysée', 'Hiệp định Genève'],
      correct: 3,
    },
    {
      question: 'Hiệp định Paris về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam được ký năm nào?',
      options: ['1954', '1973', '1975', '1976'],
      correct: 1,
    },
    {
      question: 'Quốc hội quyết định đặt tên nước là Cộng hòa xã hội chủ nghĩa Việt Nam vào năm nào?',
      options: ['1976', '1975', '1980', '1992'],
      correct: 0,
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
    const showingResult = mode === 'reveal' || mode === 'finished';
    const showingCar = showingResult || mode === 'opening';
    board.hidden = showingCar;
    reveal.hidden = !showingCar;
    quizContent.hidden = showingCar;
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
    garageHint.textContent = canPick
      ? 'Chọn một chiếc xe chưa mở.'
      : 'Trả lời đúng để mở khóa lượt chọn xe.';
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
    if (selectedIndex === null) return;

    const answer = options.children[selectedIndex];
    if (selectedIndex !== rounds[roundIndex].correct) {
      answer.dataset.result = 'wrong';
      answer.setAttribute('aria-pressed', 'false');
      answer.disabled = true;
      selectedIndex = null;
      actionButton.disabled = true;
      showFeedback('Chưa đúng. Hãy thử một đáp án khác!', 'wrong');
      options.querySelector('.answer:not(:disabled)').focus();
      return;
    }

    answer.dataset.result = 'correct';
    for (const button of options.children) {
      button.disabled = true;
    }
    setMode('pick');
    updateBoard();
    actionButton.disabled = true;
    actionLabel.textContent = 'Chọn 1 xe ở bãi đỗ';
    actionIcon.textContent = '←';
    showFeedback('Chính xác! Bạn được mở một chiếc xe.', 'correct');
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
    actionLabel.textContent = finished ? 'Chơi lại' : 'Câu tiếp theo';
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
      case 'reveal':
        roundIndex += 1;
        startRound();
        questionTitle.focus();
        break;
      case 'finished':
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
