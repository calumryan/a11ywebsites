---
title: Manual Accessibility Testing for Websites
tags: 
---

## Why do manual accessibility testing?

To make a website as accessible as possible, we must perform manual tests throughout the lifetime of a website. Manual testing helps us to identify accessibility issues early on, and hopefully before they become a barrier for our users.

Manual testing also offers a different perspective for everyone involved in testing so that we're able to experience allowing us to experience the various ways a website functions when using assistive technologies or customised configurations.

More than likely there will be less obvious issues that can be difficult to find without lived experience of accessibility testing, aswell as understanding the context of a page and its content. This is why it's important to prioritise usability testing with real users alongside other testing methods.

1. [Keyboard and other inputs](#1-keyboard-and-other-inputs)
2. [Voice control](#2-voice-control)

## 1. Keyboard and other inputs
Many users cannot interact with a website using a mouse or touch screen. Therefore, it's essential to ensure that all features of your website can be accessed with a keyboard or other input methods, such as a switch device. 

Verify that you can navigate through all elements that should be tabbable using the tab key, ensuring a visible focus state. Additionally, check that controls and input fields can be activated with the keyboard space-bar control or Return key.

Before you begin testing with a keyboard, check your system and different web browsers installed are configured to highlight items with the Tab key. Whilst Windows support tab-key navigation by default, Mac users may find it needs to be enabled in some browsers.

### Safari
1. Launch Safari and navigate to the menu bar.
2. Select "Settings" from the Safari menu.
3. Go to the "Advanced" tab.
4. Enable the option to "Press Tab to highlight each item on a webpage".

### Google Chrome
1. Open Google Chrome and navigate to the menu bar.
2. Select "Settings" from the Chrome menu.
3. Scroll down to the "Appearance" section.
4. Enable the option "Pressing Tab on a webpage highlights links and form fields".

### Firefox
1. Open Firefox and navigate to the menu bar.
2. Select "Settings" from the Firefox menu.
3. Scroll down to the "Browsing" section.
4. Enable the option "Use the tab key to move focus between form controls and links"

### Tests for Android and iOS
Make sure to test that users with touch screen devices, like iPhones, Android phones, or tablets, can interact with your website using alternative input methods. Connect the device to a Bluetooth keyboard and follow the same procedure as described above for keyboard testing.

## 2. Voice control
Test that users can use spoken commands to interact with your website. This type of testing can help identify issues with the text labels for links, buttons and controls.

### Voice Control for macOS and iOS
For macOS and iOS users you can test with a built-in tool called Voice Control by accessing it from the Accessibility section of System Settings or from Accessibility Shortcuts in the menu bar if you have this enabled. For testing websites, Voice Control is only fully supported by Safari browser.

### Voice Access for Android
For Android users, you can use Google's Voice Access tool, which can be downloaded from the Play Store. For testing websites, this works best in combination with Chrome browser

## Dragon for Windows


## 3. Screen readers

## 4. Colour and display settings

## 5. Readability
