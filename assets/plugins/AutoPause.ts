import MediaPlayer from '../MediaPlayer'


class AutoPause {
  private threshold: number;
  private player: MediaPlayer;

  constructor() {
    this.threshold = 0.35;
    this.handleIntersection = this.handleIntersection.bind(this)
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
  }

  run(player: MediaPlayer) {
    this.player = player;

    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,//umbral (Qué porciento del elemento tiene que tener intercepción con el contenedor para que nos avise)
    });

    observer.observe(this.player.media);

    document.addEventListener("visibilitychange", this.handleVisibilityChange)
  }
  
  private handleIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    console.log(entry)
    const isVisible = entry.intersectionRatio >= this.threshold ;

    if(isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  private handleVisibilityChange() {
    const isVisible = document.visibilityState === "visible"
    if(isVisible)
      this.player.play();
    else
      this.player.pause();
  }


}


export default AutoPause;