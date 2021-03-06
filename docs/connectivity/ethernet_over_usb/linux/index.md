---
layout: default
title: Ethernet over USB - Linux
---

<div id="toc" markdown="1">
* [Forward usb0 connection »](#forward-usb0-connection)
* [Share your computer's WiFi connection (optional) »](#share-your-computers-wifi-connection-optional)
</div>

# Set Up Ethernet over USB - Linux

When you are in a busy or restricted network environment, connect to the Intel® Edison using the device mode micro-USB cable and a virtual Ethernet connection known as "Ethernet over USB". Ethernet over USB uses the RNDIS protocol.

This document will guide you through obtaining an IP address for the Intel® Edison in order to program your board offline using the Intel® IoT Developer Kit IDEs.

## Forward usb0 connection

<div class="tldr" markdown="1">
Use Terminal and the `ifconfig` command to forward connections to the IP address 192.168.2.2 through "usb0" which should be the USB cable. 
</div>

[View detailed instructions »](details-forward_usb0.html){: .link-button .centered}


## Share your computer's WiFi connection (optional)

<div class="tldr" markdown="1">
Turn on Internet Sharing to cut down on Wi-Fi traffic in a crowded room. Sharing your computer's internet connection also means that you can log into networks that have HTML password pages and then share the connection with the Intel® Edison. Internet sharing is an optional step but is highly recommended if you are at a hackathon. 
</div>

[View detailed instructions »](details-share_internet.html){: .link-button .centered}


<div id="next-steps" class="callout done" markdown="1">
You should now have an Ethernet over USB connection set up between your computer and your Intel® Edison. 

[Continue to the next step in the START HERE guide »](../../../index.html#done-connectivity){: .link-button .centered}

For more info, see what you can do [once connected »](../shared/once_connected.html)
</div>
