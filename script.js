
// --- LẤY CÁC THÀNH PHẦN HTML ---
const menuContainer = document.getElementById('menu-container');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const previewContainer = document.getElementById('preview-container');
const deckSelectContainer = document.getElementById('deck-select-container'); 
const modeSelectContainer = document.getElementById('mode-select-container'); // Mới

const startSetMenuBtn = document.getElementById('start-set-menu-btn'); 
const startRandomBtn = document.getElementById('start-random-btn');
const previewMenuBtn = document.getElementById('preview-menu-btn'); 

const deckSelectTitle = document.getElementById('deck-select-title');
const deckListButtons = document.getElementById('deck-list-buttons');
const backToMenuDeckSelect = document.getElementById('back-to-menu-deck-select');

// Nút chọn chế độ mới
const modeSelectTitle = document.getElementById('mode-select-title');
const startSequentialBtn = document.getElementById('start-sequential-btn');
const startDeckRandomBtn = document.getElementById('start-deck-random-btn');
const backToDeckSelectBtn = document.getElementById('back-to-deck-select');

const questionCounter = document.getElementById('question-counter');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackText = document.getElementById('feedback-text');
const nextBtn = document.getElementById('next-btn');

const scoreText = document.getElementById('score-text');

const previewDeckTitle = document.getElementById('preview-deck-title');
const previewContent = document.getElementById('preview-content');

const backToMenuQuiz = document.getElementById('back-to-menu-quiz');
const backToMenuResult = document.getElementById('back-to-menu-result');
const backToMenuPreview = document.getElementById('back-to-menu-preview');

const bgMusic = document.getElementById('bg-music');
const musicToggleBtn = document.getElementById('music-toggle-btn');
const musicSelect = document.getElementById('music-select'); 

// --- BIẾN TRẠNG THÁI TRÒ CHƠI ---
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let wrongAnswers = 0;
let currentAction = ''; 
let selectedDeckData = null; // Lưu trữ dữ liệu của đề đang được chọn

// --- CÁC HÀM XỬ LÝ CHÍNH ---

function showScreen(screen) {
    menuContainer.classList.remove('active');
    quizContainer.classList.remove('active');
    resultContainer.classList.remove('active');
    previewContainer.classList.remove('active');
    deckSelectContainer.classList.remove('active');
    modeSelectContainer.classList.remove('active'); // Thêm
    screen.classList.add('active');
}

// Chức năng: Từ Menu -> Màn hình Chọn Đề
function showDeckSelection(action) {
    currentAction = action; 
    deckListButtons.innerHTML = '';
    
    deckSelectTitle.textContent = (action === 'start') ? 'Chọn đề để ôn tập' : 'Chọn đề để xem trước';
    
    for (const deckKey in allDecks) {
        const deck = allDecks[deckKey];
        const button = document.createElement('button');
        button.textContent = deck.name; 
        button.classList.add('btn');
        
        button.addEventListener('click', () => {
            if (currentAction === 'start') {
                // Nếu chọn chơi, chuyển sang màn hình chọn chế độ
                selectedDeckData = deck;
                showModeSelection(deck);
            } else if (currentAction === 'preview') {
                // Nếu chọn xem trước, hiển thị đề ngay
                showPreview(deck.data, deck.name);
            }
        });
        deckListButtons.appendChild(button);
    }
    
    showScreen(deckSelectContainer);
}

// (Hàm mới) Chức năng: Từ Chọn Đề -> Màn hình Chọn Chế độ
function showModeSelection(deck) {
    modeSelectTitle.textContent = `Chọn Chế độ cho ${deck.name}`;
    
    // Gắn sự kiện cho các nút chế độ chơi
    startSequentialBtn.onclick = () => startQuiz('sequential', deck.data);
    startDeckRandomBtn.onclick = () => startQuiz('deck_random', deck.data);
    
    showScreen(modeSelectContainer);
}


// Bắt đầu Quiz (đã cập nhật để xử lý 3 chế độ)
function startQuiz(mode, deckData = null) {
    currentQuestionIndex = 0;
    score = 0;
    wrongAnswers = 0;
    
    if (mode === 'sequential') {
        currentQuestions = [...deckData]; // Chơi theo thứ tự (sequential)
    } else if (mode === 'deck_random') {
        currentQuestions = [...deckData].sort(() => Math.random() - 0.5); // Random trong đề
    } else if (mode === 'random') {
        currentQuestions = [...allQuestions].sort(() => Math.random() - 0.5); // Random tất cả
    } else {
        console.error('Lỗi: Chế độ không hợp lệ hoặc thiếu dữ liệu đề');
        return;
    }
    
    showScreen(quizContainer);
    showQuestion();
}


// (Các hàm còn lại giữ nguyên logic và đã sửa lỗi đáp án tổng hợp)
function showQuestion() {
    feedbackText.style.display = 'none';
    nextBtn.style.display = 'none';
    optionsContainer.innerHTML = '';
    
    if (currentQuestionIndex < currentQuestions.length) {
        const q = currentQuestions[currentQuestionIndex];
        questionCounter.textContent = `Câu ${currentQuestionIndex + 1}/${currentQuestions.length}`;
        questionText.textContent = q.cau;
        
        q.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('btn');
            const answerLetter = option.split('.')[0].trim();
            button.dataset.answer = answerLetter;
            button.addEventListener('click', () => selectAnswer(button, answerLetter, q.dap_an, q.giai_thich));
            optionsContainer.appendChild(button);
        });
    } else {
        showResult();
    }
}

function selectAnswer(selectedButton, selectedAnswer, correctAnswer, explanation) {
    Array.from(optionsContainer.children).forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.answer === correctAnswer) {
            btn.classList.add('correct');
        }
    });
    
    if (selectedAnswer === correctAnswer) {
        score++;
    } else {
        wrongAnswers++;
        selectedButton.classList.add('incorrect');
    }
    
    feedbackText.innerHTML = `<b>Đáp án đúng: ${correctAnswer}</b><br>${explanation || 'Không có giải thích.'}`;
    feedbackText.style.display = 'block';
    nextBtn.style.display = 'block';
}

function showResult() {
    scoreText.textContent = `Đúng: ${score} / Sai: ${wrongAnswers} (Tổng: ${currentQuestions.length})`;
    showScreen(resultContainer);
}

function showPreview(deckData, deckName) {
    previewContent.innerHTML = ''; 
    
    if (!deckData) {
         console.error('Lỗi: Không có dữ liệu đề để xem');
         return;
    }
    
    previewDeckTitle.textContent = `Xem trước ${deckName}`;
    
    deckData.forEach((q) => {
        const item = document.createElement('div');
        item.classList.add('preview-item');
        
        const correctLetter = q.dap_an;
        let dapAnHienThi = '';
        
        const correctOptionText = q.options.find(option => option.split('.')[0].trim() === correctLetter);
        
        const isCombinedAnswer = correctOptionText && (
            correctOptionText.toLowerCase().includes('cả') || 
            correctOptionText.toLowerCase().includes('tất cả') ||
            correctOptionText.toLowerCase().includes('đều')
        );

        if (isCombinedAnswer) {
            dapAnHienThi += `<p style="font-weight: bold; color: #28a745;">${correctOptionText}</p>`;
            dapAnHienThi += `<u>Bao gồm nội dung:</u><ul style="margin-top: 5px; padding-left: 20px;">`;
            
            q.options.forEach(optionText => {
                const letter = optionText.split('.')[0].trim();
                
                if (['A', 'B', 'C', 'D'].includes(letter)) {
                    const content = optionText.substring(optionText.indexOf('.') + 1).trim();
                    if (letter !== correctLetter) {
                        dapAnHienThi += `<li><b>${letter}:</b> ${content}</li>`;
                    }
                }
            });
            dapAnHienThi += `</ul>`;
            
        } else {
            const correctOptionText = q.options.find(option => option.split('.')[0].trim() === correctLetter);
            dapAnHienThi = correctOptionText ? `<p style="font-weight: bold; color: #28a745;">${correctOptionText}</p>` : `Đáp án: ${correctLetter} (Không tìm thấy nội dung đầy đủ)`;
        }
        
        item.innerHTML = `
            <div class="preview-q">${q.cau}</div>
            <div class="preview-a">${dapAnHienThi}</div> 
            <div class="preview-e">Giải thích: ${q.giai_thich || 'Không có giải thích.'}</div>
        `;
        
        previewContent.appendChild(item);
    });
    showScreen(previewContainer);
}


// --- HÀM XỬ LÝ NHẠC NỀN ---
function updateMusicPlayer() {
    const selectedFile = musicSelect.value;
    if (selectedFile === "none") {
        bgMusic.pause();
        bgMusic.removeAttribute('src');
        musicToggleBtn.textContent = 'Bật Nhạc 🎵';
        musicToggleBtn.disabled = true;
        return;
    }
    musicToggleBtn.disabled = false;
    if (!bgMusic.src || !bgMusic.src.endsWith(selectedFile)) {
        bgMusic.src = selectedFile;
        bgMusic.load(); 
        const playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                musicToggleBtn.textContent = 'Tắt Nhạc ⏸️';
            }).catch(error => {
                console.log("Tự động phát bị chặn.", error);
                musicToggleBtn.textContent = 'Bật Nhạc 🎵'; 
            });
        }
    } else {
         musicToggleBtn.textContent = bgMusic.paused ? 'Bật Nhạc 🎵' : 'Tắt Nhạc ⏸️';
    }
}

function toggleMusic() {
    if (musicSelect.value === "none") return; 
    if (bgMusic.paused) {
        bgMusic.play().catch(e => console.log("Không thể phát nhạc: ", e));
        musicToggleBtn.textContent = 'Tắt Nhạc ⏸️';
    } else {
        bgMusic.pause();
        musicToggleBtn.textContent = 'Bật Nhạc 🎵';
    }
}


// --- GẮN SỰ KIỆN ---

window.addEventListener('load', () => {
    // Khởi tạo nhạc mặc định
    bgMusic.src = musicSelect.value;
    bgMusic.load();
    const playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            musicToggleBtn.textContent = 'Tắt Nhạc ⏸️';
            musicToggleBtn.disabled = false;
        }).catch(error => {
            musicToggleBtn.textContent = 'Bật Nhạc 🎵';
            musicToggleBtn.disabled = false;
        });
    }

    // Gắn sự kiện cho các điều khiển
    musicSelect.addEventListener('change', updateMusicPlayer);
    musicToggleBtn.addEventListener('click', toggleMusic);
    
    if (musicSelect.value === 'none') {
        musicToggleBtn.disabled = true;
    }

    // Gắn sự kiện cho các nút menu chính
    startSetMenuBtn.addEventListener('click', () => showDeckSelection('start'));
    startRandomBtn.addEventListener('click', () => startQuiz('random')); 
    previewMenuBtn.addEventListener('click', () => showDeckSelection('preview'));

    // Gắn sự kiện quay lại
    backToMenuDeckSelect.addEventListener('click', () => showScreen(menuContainer));
    backToMenuQuiz.addEventListener('click', () => showScreen(menuContainer));
    backToMenuResult.addEventListener('click', () => showScreen(menuContainer));
    backToMenuPreview.addEventListener('click', () => showScreen(menuContainer));
    
    // Gắn sự kiện cho nút Quay lại chọn đề trên màn hình chọn chế độ
    backToDeckSelectBtn.addEventListener('click', () => showScreen(deckSelectContainer));
    
    // Nút tiếp theo (Quiz)
    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        showQuestion();
    });
});