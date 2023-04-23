import { memo, useRef, useEffect, useState } from 'react';


export const GlobeApp = memo(props => {
  const canvasRef = useRef(null);
  const canvasWrapperRef = useRef(null);
  const scrollWrapper = useRef(null);

  const refsToOffset = useRef([]);;

  const [isReady, setIsReady] = useState(false);

  const initZoomOutRef = useRef(null);

  useEffect(() => {
    const { app } = require('./functions/app');
    const { initZoomOut, destroy, init } = app({
      canvasRefEl: canvasRef.current,
      canvasWrapperRefEl: canvasWrapperRef.current,
      // scrollWrapperRefEl: scrollWrapper.current,
      setIsReady,
      refsToOffset: refsToOffset.current,
    });

    init();
    initZoomOutRef.current = initZoomOut;

    return () => {
      destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
        <div className='w-full h-full' ref={canvasWrapperRef}>
          <canvas ref={canvasRef} />
        </div>

        <canvas
          style={{
            visibility: 'hidden',
          }}
          id="canvas"
        />
    </>
  );
});

GlobeApp.displayName = 'GlobeApp';
