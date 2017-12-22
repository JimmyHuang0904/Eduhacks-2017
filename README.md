Flash Card VR
==================

### Description

This was developed in EduHacks 2017 and is still in it's early prototype stages. The app is meant 
to be played on Gear VR/ Google Cardboard which simulates flash cards that the user can traverse 
through by movie their head. At the moment, we added on-trigger when you tilt your head up, down, 
and sideways.

* Up         : Displays the answer to the flash card
* Down       : Traverses through the flash card
* Right side : Change background

So far, the flash cards and the background can be customized to the users discretion; It is 
foreseeable that more customizable assets can be implemented.

### Purpose

The purpose of this was to be able to customize the user environment when studying to help them focus
better. VR is a unique take on what may be possible in interactive study sessions.

### Usage

This project requires the user to have npm installed
Update your react-vr client through npm

```
npm update -g react-vr-cli
```

then start the web app (convertible to VR!)

```
npm start
```

It will be hosted on http://localhost:8081/vr/ by default

### Demonstration

I made a short clip of the app in action. This test environment uses the mouse to simulate what happens
when your head moves in VR.

![Flash Card Video Demonstration](FlashCardVR.mp4)