import React, { useEffect, useRef } from 'react';
import { NES } from 'jsnes';

const Artnoc: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const romUrl = "src/assets/Contra.nes";

  useEffect(() => {
    const nes = new NES({
      onFrame: (frameBuffer: Uint8Array) => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (context) {
          const imageData = context.createImageData(256, 240);
          for (let i = 0; i < frameBuffer.length; i++) {
            imageData.data[i] = frameBuffer[i];
          }
          context.putImageData(imageData, 0, 0);
        }

        console.log(frameBuffer);
      },
    });

    fetch(romUrl)
      .then((response) => response.arrayBuffer())
      .then((data) => nes.loadROM(new Uint8Array(data)));

    const interval = setInterval(() => nes.frame(), 16);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={256}
      height={240}
      style={{ border: '1px solid black' }}
    ></canvas>
  );
};

export default Artnoc;
