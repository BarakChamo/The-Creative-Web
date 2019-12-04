# Artificial Intelligence and Machine Learning on the web

## Resources

### Browser speech APIs
The `Web Speech API` is an in-browser NLP toolkit for speech-to-text and text-to-speech.
Currently the Web Speech API is only supported on Chrome browsers, both on desktop and mobile.

[Here's a demo of speech-to-text in action.](https://www.google.com/intl/en/chrome/demos/speech.html)
[Here's documentation on how to use the Web Speech API](https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API)

The `Speech Synthesis API` is the counterpart to Web Speech and performs text-to-speech in the browser, meaning you can read text with a human voice!
The Speech Synthesis API has much better support and works on Chrome, Edge and Firefox.

[Here's a demo of Speech Synthesis in action](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/speechsynthesis/)
[Here's the documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)


### Machine Learning in the browser

More complex machine learning models can be implemented using Tensorflow.js, a browser-based implementation of Google's popular machine learning framework.
While in-browser, Tensorflow.js requires a high-level of machine-learning understanding in implementing and re-using models.

`ML5.js`, a wrapper around Tensorflow.js developed at ITP, is a user-oriented library that exposes pre-configured models for easy
use in creative applications. That means we don't need to worry as much about particular model or network implementations, and instead
can use them as tools in our projects immediately.

ML5.js has a good selection of popular networks and easy utilities for integrating models with canvas elements, live video and audio
and interactive elements of your web-based projects.

Here are some examples on web-based machine-learning project:
- [Teachable Machine](https://teachablemachine.withgoogle.com/) - trainable image classifier
- [Pix2Pix](https://affinelayer.com/pixsrv/) - Image inference from outlines
- [PoseNet](https://ml4a.github.io/demos/tfjs/posenet-music.html) and [BodyPix](https://mmlabsprojects.com/) - Pose estimation and body segmentation
- [Google QuickDraw](https://quickdraw.withgoogle.com/)

ml5.js has many more models provided, [you can find them here](https://learn.ml5js.org/docs/#/).

### Bringing it all together
As you can see, machine learning can be used both as an input (using BodyPix, PoseNet, classifiers), as a transformation (using Pix2Pix and generative networks) and even as an output
using text-to-speech, style transfer, etc. There are many ways to enrich your projects and explore both new aesthetics and new interactions using web-based ml.

Here are some projects that combine machine learning using `tensorflow.js` or `ml5.js` with `tone.js`or `three.js` which we learned in class:
- [It's time to dance!](https://itstimetodance-xmas.com/)
- [Pose Music](https://codepen.io/teropa/details/QxLrMp)
- [Neural Beatbox](https://codepen.io/naotokui/pen/NBzJMW)
- [ML Pong](https://am7673.itp.io:3000/)
- [SketchRNN](https://storage.googleapis.com/quickdraw-models/sketchRNN/demo_tfjs/interactive_predict.html)
- [Emoji Caption](https://emoji-caption.glitch.me/)
