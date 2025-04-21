// Neon Genesis Evangelion Sound Effects Utility

class SoundEffects {
  constructor() {
    this.isMuted = localStorage.getItem('eva_portfolio_muted') === 'true';
    this.sounds = {};
    this.initialized = false;
  }

  initialize() {
    if (this.initialized) return;
    
    // Create audio elements
    this.sounds = {
      click: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-sci-fi-click-900.mp3'),
      hover: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-futuristic-technological-interface-click-172.mp3'),
      success: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-sci-fi-positive-notification-266.mp3'),
      warning: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-sci-fi-interface-zoom-890.mp3'),
      alert: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-classic-short-alarm-993.mp3'),
      startup: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-computer-startup-1501.mp3')
    };

    // Set volume for all sounds
    Object.values(this.sounds).forEach(sound => {
      sound.volume = 0.3;
    });

    this.initialized = true;
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('eva_portfolio_muted', this.isMuted);
    return this.isMuted;
  }

  play(soundName) {
    if (!this.initialized) this.initialize();
    if (this.isMuted || !this.sounds[soundName]) return;
    
    // Stop and reset the sound before playing to allow rapid triggering
    const sound = this.sounds[soundName];
    sound.currentTime = 0;
    sound.play().catch(e => console.log('Audio play error:', e));
  }

  // Add event listeners to elements
  addButtonSounds() {
    if (!this.initialized) this.initialize();
    
    // Buttons and links
    document.querySelectorAll('button, .eva-button, a')
      .forEach(el => {
        el.addEventListener('click', () => this.play('click'));
        el.addEventListener('mouseenter', () => this.play('hover'));
      });
      
    // Form submission
    document.querySelectorAll('form')
      .forEach(form => {
        form.addEventListener('submit', () => this.play('success'));
      });
      
    // Project cards
    document.querySelectorAll('.project-card')
      .forEach(card => {
        card.addEventListener('mouseenter', () => this.play('warning'));
      });
  }

  // Play startup sound when the page loads
  playStartupSound() {
    if (!this.initialized) this.initialize();
    if (this.isMuted) return;
    
    this.sounds.startup.play().catch(e => console.log('Audio play error:', e));
  }
}

// Create a singleton instance
const soundEffects = new SoundEffects();

export default soundEffects;
