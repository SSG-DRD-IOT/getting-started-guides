
## Install a shell session manager (Screen)

Your computer may not have come with a pre-installed shell session manager. Download and install the GNU Screen utility using `sudo apt-get install screen`.

---

1. Launch Terminal.

2. Install **Screen** via the `apt-get install` command.

  ```
  sudo apt-get install screen
  ```

  You may be asked for your root password. Type in your root password and press Enter.

3. Wait for Screen to finish downloading and the installation to complete.

  ![Installing Screen via Terminal](images_linux/install_screen.jpg)

---

You should now have a shell session manager for your Terminal.

To confirm that it has been installed, you can run the `screen` command with the `--help` flag to see what your options are.

```
sudo screen --help
```
