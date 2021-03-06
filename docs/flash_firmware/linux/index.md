---
layout: default
title: Set up Flash Tool Lite for Linux
parentUrl: ../index.html#install-flash-tool-lite
parentTitle: Flash Firmware using Flash Tool Lite
---

<div class="callout warning" style="margin-top: 1em;" markdown="1">
The Linux installation set up is only for 64 bit operating system. The versions supported are Ubuntu 12.04 LTS 64 bit and above.
</div>

1. Install dependent packages for the tool.

   * Ubuntu 12.04LTS:

      ``` 
      sudo apt-get install gdebi ia32-libs
      ``` 

   * Ubuntu 13.04 64bits and later:

      ``` 
      sudo apt-get install gdebi libncurses5:i386 libstdc++6:i386
      ``` 

2. Get the latest **Flash Tool Lite**.
   
   <div class="callout goto" markdown="1">
   1. On the USB key: <span class="icon folder">downloads</span> → <span class="icon folder">Linux</span> → <span class="icon folder">edison_media</span>
   2. Based on your Linux operating system (32 bit or 64 bit), copy <span class="icon file">phoneflashtoollite_[version]_linux_x86_32.deb</span> or copy <span class="icon file">phoneflashtoollite_[version]_linux_x86_64.deb</span> to your computer.
   </div>

3. Complete the installation either through Terminal or Ubunutu software center.

   * From Ubuntu Terminal:

      ``` 
      sudo gdebi <name_of_flash_tool_lite.deb>
      ```
     
   * From Software Center:
  
      The **Ubuntu Software Center** will handle the installation, double-click on the .deb file and then click **Install Package** and enter the password. The IPL license must be accepted.
  