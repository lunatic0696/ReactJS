declare module 'jsnes' {
    export class NES {
      constructor(options?: {
        onFrame?: (frameBuffer: Uint8Array) => void;
        onAudioSample?: (left: number, right: number) => void;
      });
      loadROM(data: Uint8Array): void;
      frame(): void;
    }
  }
  