/* ==========================================================================
   HỒN VIỆT - TRADITIONAL SOUND & AUDIO ENGINE (Web Audio API)
   Generates authentic Vietnamese pentatonic instruments without external MP3s
   ========================================================================== */

class VietnamAudioEngine {
  constructor() {
    this.ctx = null;
    this.isAmbientPlaying = false;
    this.ambientTimer = null;
    this.masterGain = null;

    // Traditional Vietnamese Pentatonic Scale (Hò - Xự - Xang - Xê - Cống - Phan)
    // Corresponding approximately to C4, D4, F4, G4, A4, C5 in fundamental frequencies
    this.pentatonicFrequencies = {
      'ho': 261.63,   // C4 (Hò)
      'xu': 293.66,   // D4 (Xự)
      'xang': 349.23, // F4 (Xang)
      'xe': 392.00,   // Xê (Xê)
      'cong': 440.00, // A4 (Cống)
      'phan': 523.25  // C5 (Phan)
    };
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // 1. ĐÀN BẦU (Monochord): Signature pitch bend & vibrato
  playDanBau(baseFreq = 293.66) {
    this.init();
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Subtle pitch bend characteristic of the flexible bamboo whammy rod
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(baseFreq * 0.96, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq, now + 0.15);
    
    // Add vibrato
    const vibrato = this.ctx.createOscillator();
    const vibratoGain = this.ctx.createGain();
    vibrato.frequency.setValueAtTime(5.5, now); // 5.5 Hz vibrato
    vibratoGain.gain.setValueAtTime(4.5, now);
    vibrato.connect(osc.frequency);
    vibrato.start(now);
    vibrato.stop(now + 2.5);

    // Filter warm acoustic resonance
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.Q.setValueAtTime(3, now);

    // Envelope
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.4, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 2.5);
  }

  // 2. ĐÀN TRANH (Vietnamese 16-string Zither): Bright plucked harmonics
  playDanTranh(freq = 440) {
    this.init();
    const now = this.ctx.currentTime;

    // Fundamental + Octave harmonics
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(freq, now);

    osc2.type = 'sawtooth';
    osc2.frequency.setValueAtTime(freq * 2, now);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq * 2.2, now);
    filter.Q.setValueAtTime(2.0, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.35, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

    osc1.connect(gain);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 1.9);
    osc2.stop(now + 1.9);
  }

  // 3. TRỐNG CƠM / TRỐNG HỘI (Festival Drum): Deep acoustic punch
  playTrongHoi() {
    this.init();
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.25);

    gain.gain.setValueAtTime(0.6, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.9);
  }

  // 4. CỒNG CHIÊNG TÂY NGUYÊN (Bronze Gong): Long ringing metallic resonance
  playCongChieng() {
    this.init();
    const now = this.ctx.currentTime;

    const frequencies = [130, 205, 318, 520];
    const gains = [0.4, 0.25, 0.15, 0.08];

    frequencies.forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now);

      g.gain.setValueAtTime(gains[idx], now);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

      osc.connect(g);
      g.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 3.3);
    });
  }

  // 5. SÁO TRÚC (Bamboo Flute): Breathy high harmonic
  playSaoTruc(freq = 587.33) {
    this.init();
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    // Gentle vibrato
    const vib = this.ctx.createOscillator();
    const vibGain = this.ctx.createGain();
    vib.frequency.setValueAtTime(4.8, now);
    vibGain.gain.setValueAtTime(3.2, now);
    vib.connect(osc.frequency);
    vib.start(now);
    vib.stop(now + 1.8);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.28, now + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.7);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 1.8);
  }

  // Play scale note
  playScaleNote(noteKey) {
    const freq = this.pentatonicFrequencies[noteKey] || 440;
    this.playDanTranh(freq);
  }

  // Background Ambient Music Mode (Gentle Meditative Pentatonic Motif)
  toggleAmbient(buttonElement) {
    this.init();
    if (this.isAmbientPlaying) {
      this.stopAmbient();
      if (buttonElement) buttonElement.classList.remove('playing');
    } else {
      this.startAmbient();
      if (buttonElement) buttonElement.classList.add('playing');
    }
  }

  startAmbient() {
    this.isAmbientPlaying = true;
    const melody = [
      { key: 'ho', delay: 0 },
      { key: 'xang', delay: 1200 },
      { key: 'xe', delay: 2400 },
      { key: 'cong', delay: 3600 },
      { key: 'phan', delay: 4800 },
      { key: 'xe', delay: 6000 },
      { key: 'xu', delay: 7200 }
    ];

    let step = 0;
    const loopTime = 9000;

    const playMelodyLoop = () => {
      if (!this.isAmbientPlaying) return;

      melody.forEach(item => {
        setTimeout(() => {
          if (this.isAmbientPlaying) {
            // Alternate between Dan Bau, Dan Tranh, and Sao Truc for rich texture
            if (item.key === 'ho') {
              this.playDanBau(this.pentatonicFrequencies[item.key]);
            } else if (item.key === 'phan' || item.key === 'xe') {
              this.playSaoTruc(this.pentatonicFrequencies[item.key]);
            } else {
              this.playDanTranh(this.pentatonicFrequencies[item.key]);
            }
          }
        }, item.delay);
      });

      this.ambientTimer = setTimeout(playMelodyLoop, loopTime);
    };

    playMelodyLoop();
  }

  stopAmbient() {
    this.isAmbientPlaying = false;
    if (this.ambientTimer) {
      clearTimeout(this.ambientTimer);
      this.ambientTimer = null;
    }
  }
}

// Global instance
window.vietnamAudio = new VietnamAudioEngine();
