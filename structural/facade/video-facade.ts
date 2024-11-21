import { VideoEncoder } from "./video-encoder";
import { VideoDecoder } from "./video-decoder";
export class VideoFacade {

    private videoDecoder = new VideoDecoder();
    private videoEncoder = new VideoEncoder();

    decode(videoData: string) {
        return this.videoDecoder.decode(videoData);
    }

    encode(videoData: string) {
        return this.videoEncoder.encode(videoData);
    }


}
