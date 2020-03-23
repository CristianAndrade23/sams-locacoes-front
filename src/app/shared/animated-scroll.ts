import animateScrollTo, {IOptions} from 'animated-scroll-to';

export class AnimatedScroll {

  public static scroll(offset: number) {
    animateScrollTo(offset, new class implements IOptions {
      cancelOnUserAction: boolean;
      element: HTMLElement | Window;
      maxDuration: number;
      minDuration: number;
      speed: number;
      onComplete(): void {
      }
    });
  }
}
