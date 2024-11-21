import { VideoFacade } from "./video-facade";

const videoData = 'asdasjkdnsakjdas';

const simpleFacade = new VideoFacade();

const encodedVideo = simpleFacade.encode(videoData);
const decodedVideo = simpleFacade.decode(videoData);

console.log(encodedVideo);
console.log(decodedVideo);
