class MediaPlayer {
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlugins();
  }
  _initPlugins() {
    const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      media: this.media,
      get muted() {
        return this.media.muted;
      },
      set muted(value) {
        this.media.muted = value;
      }
    };
    this.plugins.forEach(plugin => {
      plugin.run(player);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  toggleVideo() {
    if (this.media.paused === true) {
      this.play();
    }
    else {
      this.pause();
    }
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
  toggleAudio() {
    if (this.media.muted) {
      this.unmute();
    }
    else {
      this.mute();
    }
  }
}

export default MediaPlayer;