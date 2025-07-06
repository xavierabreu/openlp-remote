# OpenLP Remote — Setup Guide (for New Machine)

This guide will walk you through setting up the OpenLP Remote controller on a new Windows computer (like your church PC).

---

## 📦 What's Included

You should have a folder named `OpenLP_Remote` that contains:

- `index.html` – the controller page
- `start_openlp_remote.bat` – the script that starts the local web server
- `README.md` – this guide

---

## 🧰 Requirements

- ✅ A Windows PC
- ✅ Python 3.x installed (required for the local server)
- ✅ OpenLP running on the same network (with remote plugin enabled)

---

## 🧭 Step-by-Step Installation

### 1. 🐍 Install Python

1. Download Python from:  
   https://www.python.org/downloads/windows/

2. Run the installer and **IMPORTANT**:  
   ✅ Check the box that says **"Add Python to PATH"**

3. Complete the installation

4. Verify installation:
   - Open **Command Prompt**
   - Run:
     ```bash
     python --version
     ```

   You should see something like `Python 3.x.x`

---

### 2. 🗂️ Move the Project Folder

1. Copy the `OpenLP_Remote` folder to your church PC  
   (USB drive, email, cloud storage, etc.)

2. Place it somewhere easy to find, like:
   ```
   C:\Users\<YourName>\Documents\OpenLP_Remote
   ```

---

### 3. ▶️ Start the Remote Controller

1. Open the `OpenLP_Remote` folder

2. Double-click:
   ```
   start_openlp_remote.bat
   ```

3. What happens:
   - A local web server starts on port `5500`
   - Your browser opens to:
     ```
     http://localhost:5500
     ```

4. The controller is now live on the PC and visible to other devices on the same Wi-Fi

---

### 4. 📱 Use It on Other Devices

1. On the church PC:
   - Open Command Prompt
   - Run:
     ```
     ipconfig
     ```
   - Find the `IPv4 Address`, like `192.168.0.105`

2. On a phone/tablet (same Wi-Fi):
   - Open a browser
   - Go to:
     ```
     http://192.168.0.105:5500
     ```

3. Set the OpenLP IP and Port on the remote page (default port is `4316`)

4. Tap “Next” or “Previous” to control OpenLP

---

## 🔁 Optional: Auto-start at Login

If you want OpenLP Remote to run automatically every time the PC starts:

1. Press `Win + R`, then type:
   ```
   shell:startup
   ```

2. In the folder that opens, **right-click** inside it →  
   **New → Shortcut**

3. Point it to:
   ```
   C:\Users\<YourName>\Documents\OpenLP_Remote\start_openlp_remote.bat
   ```

4. Save and close. It will now auto-launch when the PC is turned on.

---

## ✅ You're Done!

The OpenLP Remote controller is now hosted on your church PC and accessible by any phone or tablet on the same network.
