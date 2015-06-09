# Set Up Your Computer - Mac

_Instructions for the **Xadow Wearables Kit for Intel® Edison** on **Mac**_

This setup document will guide you through preparing your computer with Mac-specific drivers required for the Xadow Wearables Kit for Intel® Edison.

---

**Are you using the Intel® Edison Kit for Arduino expansion board?**

You do not need to go through this step. This document is for installing serial drivers for the Xadow programmer board. Continue to [Shell Access - Mac](../shell_access/serial_connection-mac.md).

---

**Table of contents**

* [Download and install FTDI VCP serial drivers](#download-and-install-ftdi-vcp-serial-drivers)


**Related videos**

* Coming soon


# Download and install FTDI VCP serial drivers

FTDI Virtual COM port (VCP) drivers allow your Mac to communicate with the Intel® Edison over USB serial when the Intel® Edison is attached to the Xadow expansion board and programmer.

1. Get the latest FTDI VCP driver installer.

	**Online option:**

	1. Visit [ftdichip.com/Drivers/VCP.htm](http://ftdichip.com/Drivers/VCP.htm). 
	2. Scroll down to the "Currently Supported VCP Drivers" table. 
	3. Click the version number link in the "**x64 (64-bit)**" column for your Mac OS version to download ![file icon](../icons/file_icon_blue.png) _FTDIUSBSerialDriver_version.dmg_ to your computer.
	
	**Hackathon attendees:**

	1. On the USB key: ![folder icon](../icons/folder_icon_blue.png) files → ![folder icon](../icons/folder_icon_blue.png) Mac
	2. Copy ![file icon](../icons/file_icon_blue.png) _FTDIUSBSerialDriver_version.dmg_ to your computer.

2. Click on ![file icon](../icons/file_icon_blue.png)  _FTDIUSBSerialDriver_version.dmg_ to extract the installer package.

3. In the new ![Mac icon](../icons/os_icon_mac.png) Finder window, click on ![file icon](../icons/file_icon_blue.png) _FTDIUSBSerial.pkg_ to start the installer.

4. Follow the installation wizard prompts. Click "**Next**" where needed.	![FTDI USB Serial Driver installation wizard](images/ftdi_drivers-installer_wizard.png)

5. Click "**Finish**" to close the installation wizard.

6. Restart your Mac for driver changes to take effect. **You must restart your computer for driver changes to take effect!**

---

### Next Steps

Gain command line access of your IoT board. Execute special Linux commands to configure your IoT board such as setting up Wi-Fi. 

[Shell Access - Mac »](../shell_access/serial_connection-mac.md)