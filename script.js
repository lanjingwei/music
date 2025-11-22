// Constants & Data
const LYRICS_人生八苦 = [
  { time: 24.12, text: "生于尘世啼哭中，" },
  { time: 29.41, text: "老来岁月渐消融，" },
  { time: 35.34, text: "病魔缠身苦自知，" },
  { time: 40.32, text: "死别离时恨无穷。" },
  { time: 46.24, text: "爱别离苦最伤情，" },
  { time: 51.58, text: "怨憎会难避逢迎，" },
  { time: 56.99, text: "求不得苦常相伴，" },
  { time: 62.92, text: "五阴炽盛苦海行。" },
  { time: 67.61, text: "无常世间，无我是悟，" },
  { time: 73.32, text: "苦集灭道，指引迷途。" },
  { time: 79.30, text: "慈悲喜舍心常驻，" },
  { time: 84.01, text: "涅槃寂静为归宿。" },
  { time: 90.24, text: "缘起性空，诸行无常，" },
  { time: 96.04, text: "解脱自在，终归净土。" },
  { time: 102.09, text: "人生八苦皆参透，" },
  { time: 106.75, text: "佛法指引，心自安住。" }
];

const LYRICS_听海 = [
  { time: 18.35, text: "月光 琢磨着浪" },
  { time: 24.08, text: "雕成 清冷的窗" },
  { time: 30.01, text: "你立在无人的岸上" },
  { time: 33.81, text: "倒影 比身影更长" },
  { time: 37.95, text: "心是 深海的殿堂" },
  { time: 43.94, text: "藏着 水晶的锋芒" },
  { time: 47.97, text: "太多回音 在四壁回荡" },
  { time: 50.96, text: "却从未抵达过谁的心上" },
  { time: 56.84, text: "我走向这片海" },
  { time: 60.18, text: "听你的 安静与澎湃" },
  { time: 63.60, text: "听每朵浪花 挣扎着盛开" },
  { time: 67.54, text: "拥抱 沉默的未来" },
  { time: 70.44, text: "我走向这片海" },
  { time: 73.83, text: "听你的 骄傲与无奈" },
  { time: 77.48, text: "听你将珍珠 藏得多深多难猜" },
  { time: 83.18, text: "我是那唯一 读懂你的存在" }
];

const LYRICS_微光 = [
  { time: 14.71, text: "晨曦微亮" },
  { time: 18.25, text: "穿上白色衣裳" },
  { time: 21.66, text: "走过长廊" },
  { time: 25.17, text: "奔赴无声的战场" },
  { time: 29.17, text: "仪器鸣响" },
  { time: 32.01, text: "接替彻夜守望" },
  { time: 35.73, text: "人来人往" },
  { time: 38.90, text: "感受这生命的无常" },
  { time: 45.55, text: "我站在这命运的来来往往" },
  { time: 49.69, text: "守护那风中摇曳的微光" },
  { time: 53.17, text: "一半是人间别离的悲伤" },
  { time: 56.55, text: "一半是奇迹绽放的滚烫" },
  { time: 59.97, text: "我没有神明那样的翅膀" },
  { time: 63.65, text: "只是用肩膀" },
  { time: 67.17, text: "筑一道城墙" },
  { time: 70.75, text: "陪你等一等" },
  { time: 73.33, text: "明日的太阳" }
];

const LYRICS_洛神 = [
  { time: 15.33, text: "烟波渺渺 洛水长" },
  { time: 21.36, text: "蒹葭苍苍 伊人彷徨" },
  { time: 29.01, text: "步摇轻晃 入心上" },
  { time: 35.64, text: "梦回千年 旧时模样" },
  { time: 42.69, text: "轻舟已过 山水几行" },
  { time: 49.00, text: "心事如莲 碧波荡" },
  { time: 56.62, text: "眉目如画 胭脂唇上" },
  { time: 62.54, text: "却在我心 深深藏" },
  { time: 68.90, text: "我梦中的洛神啊" },
  { time: 73.04, text: "你在哪一方" },
  { time: 76.57, text: "是否也在等" },
  { time: 78.37, text: "一个归人诉衷肠" },
  { time: 83.06, text: "洛水畔啊" },
  { time: 86.41, text: "谁在轻声唱" },
  { time: 90.56, text: "一曲离殇绕红梁" }
];

const LYRICS_洛阳叹 = [
  { time: 5, text: "西风起，汉陵残，" },
  { time: 10, text: "洛水逝，梦魂牵。" },
  { time: 15, text: "光武业，铜驼闲，" },
  { time: 20, text: "繁华地，今已迁。" },
  { time: 30, text: "洛阳叹，" },
  { time: 35, text: "繁华散，" },
  { time: 40, text: "红颜换，" },
  { time: 45, text: "岁月残。" },
  { time: 50, text: "烽烟乱，" },
  { time: 55, text: "成王败寇皆成憾，" },
  { time: 60, text: "此情长，" },
  { time: 65, text: "悠悠在人间。" }
];

const LYRICS_烟雨行舟 = [
  { time: 22.63, text: "烟雨渺渺，舟行缓，" },
  { time: 29.75, text: "柳岸长堤，桃花映面。" },
  { time: 37.18, text: "一曲箫音，随风散入云间，" },
  { time: 44.25, text: "梦回江南，儿时旧时闲，庭院。" },
  { time: 51.65, text: "青石小巷，油纸伞，" },
  { time: 58.96, text: "伊人独立，笑颜如花绽。" },
  { time: 66.15, text: "岁月悠悠，流水又潺潺，" },
  { time: 73.73, text: "多少心事，付与风中散，如烟" },
  { time: 80.66, text: "晨光熹微，薄雾轻绕，" },
  { time: 87.93, text: "山间小径，露珠点点。" },
  { time: 95.22, text: "一曲琴声，婉转悠扬，" },
  { time: 102.75, text: "心随弦动，思绪万千。" }
];

const LYRICS_老马 = [
  { time: 23.08, text: "夕阳下" },
  { time: 26.07, text: "你的身影" },
  { time: 28.54, text: "拖的好长" },
  { time: 33.08, text: "断了的缰绳" },
  { time: 35.49, text: "静垂在枯草旁" },
  { time: 39.17, text: "浑浊的眼" },
  { time: 41.16, text: "只映出褪色的苍茫" },
  { time: 47.18, text: "风中再嗅不到" },
  { time: 51.75, text: "战场的血与霜" },
  { time: 57.16, text: "蹄铁的旧伤" },
  { time: 59.42, text: "仍隐隐发烫" },
  { time: 62.11, text: "你曾追过风" },
  { time: 64.55, text: "踏碎过月光" },
  { time: 78.62, text: "啊 老马 老马" },
  { time: 81.48, text: "识途又怎样" },
  { time: 84.70, text: "熟悉的路" },
  { time: 86.53, text: "终究回不到过往" }
];

const LYRICS_远黛姑娘 = [
  { time: 26.15, text: "南方的雨 淋湿了弄堂" },
  { time: 32.60, text: "青石板上 走过一位姑娘" },
  { time: 38.49, text: "她的眉眼 像水墨画一样" },
  { time: 45.23, text: "名字好听 叫做远黛姑娘" },
  { time: 51.77, text: "她没撑伞 任细雨沾衣裳" },
  { time: 57.82, text: "回眸一笑 漾开了池塘" },
  { time: 64.50, text: "不说来处 也不问去何方" },
  { time: 70.37, text: "只留下满城 阴晕的清香" },
  { time: 77.24, text: "啊 远黛姑娘" },
  { time: 80.71, text: "像天边那一抹微光" },
  { time: 83.41, text: "看得见轮廓" },
  { time: 86.02, text: "却看不到真实模样" }
];

const LYRICS_风说 = [
  { time: 20.78, text: "窗外的风" },
  { time: 23.02, text: "又一次经过" },
  { time: 25.74, text: "像钥匙" },
  { time: 27.55, text: "解开回忆的锁" },
  { time: 31.21, text: "闭上眼睛" },
  { time: 32.84, text: "听见风在诉说" },
  { time: 35.82, text: "曾经的过客" },
  { time: 41.32, text: "它吻过" },
  { time: 43.90, text: "无人荒漠" },
  { time: 46.36, text: "也看过" },
  { time: 48.86, text: "万家灯火" },
  { time: 63.98, text: "风说" },
  { time: 64.78, text: "你偶尔" },
  { time: 66.31, text: "还是会提起我" },
  { time: 69.42, text: "只是那语气" },
  { time: 71.50, text: "像朋友般洒脱" }
];

const SONGS = [
  {
    id: '1',
    title: "人生八苦",
    artist: "原唱",
    durationStr: "03:28",
    src: "muisc/人生八苦.mp3",
    lyrics: LYRICS_人生八苦
  },
  {
    id: '2',
    title: "听海",
    artist: "原唱",
    durationStr: "03:20",
    src: "muisc/听海.mp3",
    lyrics: LYRICS_听海
  },
  {
    id: '3',
    title: "微光",
    artist: "原唱",
    durationStr: "03:18",
    src: "muisc/微光.mp3",
    lyrics: LYRICS_微光
  },
  {
    id: '4',
    title: "洛神",
    artist: "原唱",
    durationStr: "03:28",
    src: "muisc/洛神.mp3",
    lyrics: LYRICS_洛神
  },
  {
    id: '5',
    title: "洛阳叹",
    artist: "原唱",
    durationStr: "03:07",
    src: "muisc/洛阳叹.mp3",
    lyrics: LYRICS_洛阳叹
  },
  {
    id: '6',
    title: "烟雨行舟",
    artist: "原唱",
    durationStr: "03:58",
    src: "muisc/烟雨行舟.mp3",
    lyrics: LYRICS_烟雨行舟
  },
  {
    id: '7',
    title: "老马",
    artist: "原唱",
    durationStr: "03:29",
    src: "muisc/老马.mp3",
    lyrics: LYRICS_老马
  },
  {
    id: '8',
    title: "远黛姑娘",
    artist: "原唱",
    durationStr: "03:18",
    src: "muisc/远黛姑娘.mp3",
    lyrics: LYRICS_远黛姑娘
  },
  {
    id: '9',
    title: "风说",
    artist: "原唱",
    durationStr: "03:33",
    src: "muisc/风说.mp3",
    lyrics: LYRICS_风说
  }
];

// State
let state = {
  playState: 'STOPPED', // 'STOPPED', 'PLAYING', 'PAUSED'
  currentSong: SONGS[0],
  volume: 0.7,
  isMenuOpen: false
};

// DOM Elements
const audio = document.getElementById('main-audio');
const sfxClick = document.getElementById('sfx-click');
const playBtn = document.getElementById('btn-play');
const stopBtn = document.getElementById('btn-stop');
const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');
const openBtn = document.getElementById('open-btn');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const songListContainer = document.getElementById('song-list');
const volumeKnob = document.getElementById('volume-knob');
const clockDisplay = document.getElementById('clock-display');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');
const progressHandle = document.getElementById('progress-handle');
const progressTime = document.getElementById('progress-time');
const songTitleEl = document.getElementById('song-title');
const songArtistEl = document.getElementById('song-artist');
const reels = document.querySelectorAll('.reel');
const tapeLeft = document.getElementById('tape-left');
const tapeRight = document.getElementById('tape-right');
const iconPlay = document.getElementById('icon-play');
const iconPause = document.getElementById('icon-pause');
const ledPlay = document.getElementById('led-play');

// Lyrics Elements
const lyricsContent = document.getElementById('lyrics-content');
const lyricsStopped = document.getElementById('lyrics-stopped');
const lyricsEmpty = document.getElementById('lyrics-empty');
const lyricPrev = document.getElementById('lyric-prev');
const lyricCurrent = document.getElementById('lyric-current');
const lyricNext = document.getElementById('lyric-next');

// --- Initialization ---

function init() {
  updateClock();
  setInterval(updateClock, 60000);
  
  // Set initial volume
  audio.volume = state.volume;
  updateVolumeKnob();
  
  // Load initial song
  loadSong(state.currentSong);
  
  renderSongList();
  updateUI();
}

// --- Audio Control ---

function loadSong(song) {
  state.currentSong = song;
  if (song) {
    audio.src = song.src;
    audio.load();
    songTitleEl.textContent = song.title;
    songArtistEl.textContent = song.artist;
  } else {
    audio.src = "";
    songTitleEl.textContent = "NO TAPE";
    songArtistEl.textContent = "---";
  }
  updateUI();
}

function playAudio() {
  if (!state.currentSong) return;
  
  audio.play().then(() => {
    state.playState = 'PLAYING';
    updateUI();
  }).catch(e => console.error("Playback error:", e));
}

function pauseAudio() {
  audio.pause();
  state.playState = 'PAUSED';
  updateUI();
}

function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
  state.playState = 'STOPPED';
  updateUI();
}

function playClickSound() {
  sfxClick.currentTime = 0;
  sfxClick.play().catch(() => {});
}

function playPreviousSong() {
  const currentIndex = SONGS.findIndex(song => song.id === state.currentSong.id);
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : SONGS.length - 1;
  loadSong(SONGS[prevIndex]);
  if (state.playState === 'PLAYING') {
    setTimeout(() => playAudio(), 100);
  }
}

function playNextSong() {
  const currentIndex = SONGS.findIndex(song => song.id === state.currentSong.id);
  const nextIndex = (currentIndex + 1) % SONGS.length;
  loadSong(SONGS[nextIndex]);
  if (state.playState === 'PLAYING') {
    setTimeout(() => playAudio(), 100);
  }
}

// --- UI Updates ---

function updateUI() {
  // Button States
  const isPlaying = state.playState === 'PLAYING';
  
  if (isPlaying) {
    playBtn.classList.add('shadow-btn-active', 'translate-y-[4px]', 'bg-gradient-to-b', 'from-zinc-300', 'to-zinc-400');
    playBtn.classList.remove('shadow-btn-rest');
    iconPlay.classList.add('hidden');
    iconPause.classList.remove('hidden');
    ledPlay.classList.remove('hidden');
  } else {
    playBtn.classList.remove('shadow-btn-active', 'translate-y-[4px]', 'bg-gradient-to-b', 'from-zinc-300', 'to-zinc-400');
    playBtn.classList.add('shadow-btn-rest');
    iconPlay.classList.remove('hidden');
    iconPause.classList.add('hidden');
    ledPlay.classList.add('hidden');
  }

  // Cassette Animation
  if (isPlaying) {
    reels.forEach(reel => reel.classList.add('animate-spin'));
    // Tape movement simulation
    tapeLeft.style.transform = 'scaleX(0.7)';
    tapeRight.style.transform = 'scaleX(1)';
  } else {
    reels.forEach(reel => reel.classList.remove('animate-spin'));
    // Keep tape position where it is or reset if stopped? 
    if (state.playState === 'STOPPED') {
      tapeLeft.style.transform = 'scaleX(1)';
      tapeRight.style.transform = 'scaleX(0.6)';
    }
  }

  // Lyrics & Screen
  if (state.playState === 'STOPPED') {
    lyricsContent.classList.add('hidden');
    lyricsStopped.classList.remove('hidden');
    lyricsEmpty.classList.add('hidden');
    progressBar.style.width = '0%';
    progressHandle.style.left = '0%';
    progressTime.textContent = "00:00";
  } else {
    lyricsContent.classList.remove('hidden');
    lyricsStopped.classList.add('hidden');
    lyricsEmpty.classList.add('hidden');
  }

  if (!state.currentSong) {
    lyricsContent.classList.add('hidden');
    lyricsStopped.classList.add('hidden');
    lyricsEmpty.classList.remove('hidden');
  }
}

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  clockDisplay.textContent = `${hours}:${minutes}`;
}

function updateLyrics(currentTime) {
  if (!state.currentSong || !state.currentSong.lyrics) return;
  
  const lyrics = state.currentSong.lyrics;
  let currentIndex = -1;

  for (let i = 0; i < lyrics.length; i++) {
    if (lyrics[i].time <= currentTime) {
      currentIndex = i;
    } else {
      break;
    }
  }

  const getLine = (idx) => (idx >= 0 && idx < lyrics.length) ? lyrics[idx].text : "";

  lyricPrev.textContent = getLine(currentIndex - 1);
  lyricCurrent.textContent = getLine(currentIndex) || (currentIndex === -1 ? "..." : "...");
  lyricNext.textContent = getLine(currentIndex + 1);
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// --- Event Listeners ---

playBtn.addEventListener('click', () => {
  playClickSound();
  if (state.playState === 'PLAYING') {
    pauseAudio();
  } else {
    playAudio();
  }
});

stopBtn.addEventListener('click', () => {
  playClickSound();
  stopAudio();
});

prevBtn.addEventListener('click', () => {
  playClickSound();
  playPreviousSong();
  renderSongList();
});

nextBtn.addEventListener('click', () => {
  playClickSound();
  playNextSong();
  renderSongList();
});

// Modal Logic
openBtn.addEventListener('click', () => {
  playClickSound();
  modalOverlay.classList.remove('hidden');
});

modalClose.addEventListener('click', () => {
  modalOverlay.classList.add('hidden');
});

function renderSongList() {
  songListContainer.innerHTML = '';
  SONGS.forEach(song => {
    const div = document.createElement('div');
    const isSelected = state.currentSong && state.currentSong.id === song.id;
    
    div.className = `p-2 rounded-lg flex justify-between items-center cursor-pointer transition-all border group ${
        isSelected 
        ? 'bg-white/20 backdrop-blur-sm border-amber-400/50' 
        : 'bg-white/5 border-transparent hover:border-white/30 hover:bg-white/10 backdrop-blur-sm'
    }`;
    
    div.innerHTML = `
        <span class="text-xs ${isSelected ? 'text-amber-300 font-semibold' : 'text-gray-200 font-normal'}" style="font-family: 'Georgia', 'Songti SC', '宋体', serif;">
            ${song.title}
        </span>
        <span class="text-[10px] font-mono text-gray-400 ml-2">
            ${song.durationStr}
        </span>
    `;
    
    div.addEventListener('click', () => {
      loadSong(song);
      stopAudio();
      // Small timeout to simulate tape loading
      setTimeout(() => {
          playAudio();
      }, 300);
      modalOverlay.classList.add('hidden');
      renderSongList(); // Re-render to update selection state
    });
    
    songListContainer.appendChild(div);
  });
}

// Audio Events
audio.addEventListener('timeupdate', () => {
  const t = audio.currentTime;
  const duration = audio.duration || 0;
  
  // Update progress bar and handle
  if (duration > 0) {
    const progress = (t / duration) * 100;
    progressBar.style.width = `${progress}%`;
    progressHandle.style.left = `${progress}%`;
  }
  
  // Update time display
  progressTime.textContent = formatTime(t);
  
  // Update lyrics
  updateLyrics(t);
});

audio.addEventListener('ended', () => {
  playNextSong();
  renderSongList();
});

// Volume Knob Logic - Touch & Drag Control
function updateVolumeKnob() {
  // rotation: 0 vol = -135deg, 1 vol = 135deg
  const rotation = -135 + (state.volume * 270);
  volumeKnob.style.transform = `rotate(${rotation}deg)`;
  audio.volume = state.volume;
}

let isDraggingVolume = false;
let startAngle = 0;
let startVolume = 0;

function getAngle(e, rect) {
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const clientX = e.clientX || (e.touches && e.touches[0].clientX);
  const clientY = e.clientY || (e.touches && e.touches[0].clientY);
  const angle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
  return angle;
}

function startDragging(e) {
  e.preventDefault();
  isDraggingVolume = true;
  const rect = volumeKnob.getBoundingClientRect();
  startAngle = getAngle(e, rect);
  startVolume = state.volume;
  volumeKnob.style.cursor = 'grabbing';
}

function drag(e) {
  if (!isDraggingVolume) return;
  e.preventDefault();
  
  const rect = volumeKnob.getBoundingClientRect();
  const currentAngle = getAngle(e, rect);
  let angleDelta = currentAngle - startAngle;
  
  // Convert angle change to volume change (270 degrees = full range)
  const volumeDelta = angleDelta / 270;
  let newVolume = startVolume + volumeDelta;
  
  // Clamp between 0 and 1
  state.volume = Math.min(1, Math.max(0, newVolume));
  updateVolumeKnob();
}

function stopDragging() {
  if (isDraggingVolume) {
    isDraggingVolume = false;
    volumeKnob.style.cursor = 'grab';
  }
}

// Mouse events
volumeKnob.addEventListener('mousedown', startDragging);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', stopDragging);

// Touch events
volumeKnob.addEventListener('touchstart', startDragging, { passive: false });
document.addEventListener('touchmove', drag, { passive: false });
document.addEventListener('touchend', stopDragging);

// Wheel support (legacy)
volumeKnob.addEventListener('wheel', (e) => {
  e.preventDefault();
  const delta = e.deltaY > 0 ? -0.05 : 0.05;
  state.volume = Math.min(1, Math.max(0, state.volume + delta));
  updateVolumeKnob();
});

// Progress Bar Click & Drag
let isDraggingProgress = false;

function updateProgress(e) {
  const rect = progressContainer.getBoundingClientRect();
  const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
  const percentage = x / rect.width;
  const duration = audio.duration || 0;
  
  if (duration > 0) {
    audio.currentTime = percentage * duration;
    const progress = percentage * 100;
    progressBar.style.width = `${progress}%`;
    progressHandle.style.left = `${progress}%`;
  }
}

progressContainer.addEventListener('mousedown', (e) => {
  isDraggingProgress = true;
  updateProgress(e);
});

document.addEventListener('mousemove', (e) => {
  if (isDraggingProgress) {
    updateProgress(e);
  }
});

document.addEventListener('mouseup', () => {
  isDraggingProgress = false;
});

// Start
init();
