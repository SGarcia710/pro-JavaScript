class MediaPlayer {
  
  media: HTMLMediaElement;
  plugins: Array<any>;
  
  constructor(config: any ) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlugins();
  }

  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
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