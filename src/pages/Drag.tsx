import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

function MyComponent() {
  const scrubberRef = useRef<HTMLDivElement>(null);
  const emptyRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const scrubberWidth = 300;

  useEffect(() => {
    const offsetLeft = scrubberRef.current!.offsetLeft;

    gsap.set(progressRef.current!, {
      scaleX: 0,
      transformOrigin: 'left',
    });

    Draggable.create(emptyRef.current!, {
      type: 'x',
      trigger: scrubberRef.current!,
      bounds: scrubberRef.current!,
      onPress: function (e) {
        gsap.set(this.target, {
          x: this.pointerX - offsetLeft,
        });
        this.update();
        updateProgressBarScale(this);
      },
      onDrag: function () {
        updateProgressBarScale(this);
      },
    });
  }, []);

  function updateProgressBarScale(theDraggable: any) {
    const progress = theDraggable.x / scrubberWidth;
    gsap.set(progressRef.current!, {
      scaleX: progress,
    });
    console.log(theDraggable.x + ' / ' + progress);
  }

  return (
    <div className="scrubber" ref={scrubberRef}>
      <div className="empty" ref={emptyRef}>
        <div className="progress" ref={progressRef}></div>
      </div>
    </div>
  );
}
