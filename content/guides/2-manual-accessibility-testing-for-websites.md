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
3. [Screen readers](#3-screen-readers)
4. [Colour and display settings](#4-colour-and-display-settings)
5. [Readability](#5-readability)

## 1. Keyboard and other inputs

Many users cannot interact with a website using a mouse or touch screen. Therefore, it's essential to ensure that all features of your website can be accessed with a keyboard or other input methods, such as a switch device.

Verify that you can navigate through all elements that should be tabbable using the tab key, ensuring a visible focus state. Additionally, check that controls and input fields can be activated with the keyboard space-bar control or Return key.

Before you begin testing with a keyboard, check your system and different web browsers installed are configured to highlight items with the Tab key. Whilst Windows support tab-key navigation by default, Mac users may find it needs to be enabled in some browsers.

### Safari

1. Launch Safari and navigate to the menu bar
2. Select "Settings" from the Safari menu
3. Go to the "Advanced" tab
4. Enable the option to "Press Tab to highlight each item on a webpage"

### Google Chrome

1. Open Google Chrome and navigate to the menu bar
2. Select "Settings" from the Chrome menu
3. Scroll down to the "Appearance" section
4. Enable the option "Pressing Tab on a webpage highlights links and form fields"

### Firefox

1. Open Firefox and navigate to the menu bar
2. Select "Settings" from the Firefox menu
3. Scroll down to the "Browsing" section
4. Enable the option "Use the tab key to move focus between form controls and links"

### Tests for Android and iOS

Make sure to test that users with touch screen devices, like iPhones, Android phones, or tablets, can interact with your website using alternative input methods. Connect the device to a Bluetooth keyboard and follow the same procedure as described above for keyboard testing

## 2. Voice control

Test that users can use spoken commands to interact with your website. This type of testing can be particularly helpful to identify issues with the text labels for links, buttons and controls. As with screen readers there is often a few seconds delay between making a command and the voice control software processing the command. This is why it's important to test with different voice control software and make sure your website works optimally for each.

### Voice Control for macOS and iOS

For macOS and iOS users you can test with a built-in tool called Voice Control by accessing it from the Accessibility section of System Settings or from Accessibility Shortcuts in the menu bar if you have this enabled. For testing websites, Voice Control is only fully supported by Safari browser.

### Voice Access for Android

For Android users, you can use Google's Voice Access tool, which can be downloaded from the Play Store. For testing websites, this works best in combination with Chrome browser

### Dragon for Windows

Dragon Professional isn't available for free, and has a high price tag, but if your budget allows, then it's definitely worthwhile testing with it or with older version that might be sourced at a lower price.  

### Voice Access for Windows

For Windows 11 users you can test with the built-in Voice Access feature. This can be started by pressing `Windows key + U` to open Accessibility settings where you'll find a link to Speech. Then you can locate the Voice Access option and turn it on.

## 3. Screen readers

Using a screen reader for testing helps you understand how it reads and navigates a page's content and structure. Aim to test with at least two different screen readers—one on Windows and one on macOS—and include testing on both Android and iOS devices as well.

Testing screen readers on touch screen devices is important because users interact with content differently than on desktop—using gestures, like swipes and taps instead of a keyboard or mouse.

For links to useful resources about how to run and shortcuts to use with screen readers, read our guide on [Testing with Screen Readers](/guides/1-screenreaders).

### VoiceOver for macOS, iPadOS and iOS

All Apple Macs, iPhones, and iPads come with the VoiceOver screen reader built in.

On a Mac, you can turn VoiceOver on or off by pressing `Command (⌘) + F5`, or by navigating to `System Settings > Accessibility > VoiceOver` and enabling it there.

On an iPhone or iPad, go to `Settings > Accessibility > VoiceOver` and toggle it on.

### Narrator, NVDA and JAWS for Windows

To run the built-in Windows Narrator, press `Ctrl + Windows key + Enter`, or go to `Settings > Accessibility > Narrator` and turn it on. 

For NVDA (NonVisual Desktop Access), download it from the official NV Access website, install it, and launch it by clicking the NVDA icon or pressing the assigned shortcut (usually `Ctrl + Alt + N`). 

For JAWS (Job Access With Speech), this requires a separate license; once installed, you can start it from the Start menu or by using its default shortcut, `Insert + J`.

### TalkBack for Android

To run the TalkBack screen reader on Android devices, go to `Settings > Accessibility > TalkBack` and toggle it on. You can also activate it quickly by pressing both volume buttons for three seconds, if the accessibility shortcut is enabled.

## 4. Colour and display settings

Ensure that your website is usable for individuals with visual impairments and colour blindness.

1. Start by checking colour contrast between text and background using tools like the [WebAIM Contrast Checker (external link)](https://webaim.org/resources/contrastchecker/) and [WhoCanUse (external link)](https://www.whocanuse.com/).
2. Use simulators or browser extensions to view your content as someone with different types of colour blindness might, such as Deuteranopia or Protanopia.
3. Test how your website responds to user display settings, including high contrast modes, dark mode, and custom font sizes. Try changing display settings via the operating system (e.g., Windows High Contrast Mode or macOS accessibility settings) and ensure your interface still displays correctly and remains navigable. Check for overlapping text, hidden content, or broken layouts.

## 5. Readability

1. Evaluate the clarity and simplicity of text using tools like the Flesch-Kincaid Grade Level or Hemingway Editor to ensure content is appropriate for the target audience, ideally aiming for a reading age of 9–11 years for general audiences.
2. Check for plain language usage, avoiding jargon, complex sentence structures, and uncommon words.
3. Check for good content hierarchy with proper use of headings, bullet points, and short paragraphs.
4. Also remember to check readability of less obvious content like alternative text for images.
