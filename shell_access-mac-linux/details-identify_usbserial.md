## Identify the "usbserial" device name 

Use the `ls /dev/tty.*` command in Terminal to find the device name of the "**usbserial**" connection. You will need the exact device name for use in Establish a serial connection later.

![Animated gif: using Terminal to find the USB device name](images_mac/identify_usbserial-animated.gif)

---

1. Launch Terminal.

  **Option 1:**
  
  1. Launch Spotlight (type Cmd+Space).
  2. Type "terminal". 
  3. Select the "Terminal" app.
  
  **Option 2:**

  1. Go to Applications on your Mac. 
  2. Open Utilities. 
  3. Launch Terminal.app.

2. Use the "ls" command to list any connected devices.

  ```
  ls /dev/tty.*
  ```

3. Look for a device that contains "**cu.usbserial**" or "**tty.usbseria**l".

  ![the device found was "/dev/tty.usbserial-A402YSYU"](images_mac/terminal-usbserial_device_highlighted.png)
  In this case, the device found was "/dev/tty.usbserial-A402YSYU".

---

### Troubleshooting 

**Don't see a "usbserial" device listed?**

* **Do you have the UART/serial cable connected?** Refer to [UART/serial micro-USB cable](../assembly-arduino_expansion_board/details-serial_cable.md).

* Is your IoT board powered on?
