class MediaPlayer {
  
  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLElement;
  
  constructor(config: any ) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlayer();
    this.initPlugins();
  }

  private initPlayer() {
    this.container = document.createElement('div');// Así se crea un elemento en el dom
    this.container.style.position = 'relative'; // Así se le añade un estilo a un elemento del dom
    this.media.parentNode.insertBefore(this.container, this.media); // Ponemos el nuevo contenedor al lado de media
    this.container.appendChild(this.media);//Y ponemos media dentro del contenedor
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