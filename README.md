# Monarch Category Cleanup Script 🧹

Bulk-delete custom categories in [Monarch Money](https://monarchmoney.com/) with a simple JavaScript console script.  
I had hundreds of categories to remove manually — this script automates the process with just a few lines of code.

---

## 🖼️ Why I Created This

When I first started using Monarch, I ended up with **hundreds of duplicate or unwanted categories** — things like:

- `ELECTRONIC WITHDRAWAL`
- `DIVIDEND`
- `ELECTRONIC DEPOSIT`
- `TRANSFER`

Manually deleting each category one by one was frustrating and time-consuming. Monarch doesn’t provide a bulk delete option, so I wrote this script to automate the process.

This repo/script was born out of that pain — now instead of hundreds of clicks, I can delete categories in bulk with a single console command.

For context - Here's how it looked in Monarch for me:

<img width="541" alt="Screenshot 2025-08-31 at 5 24 02 PM" src="https://github.com/user-attachments/assets/5fd01489-17cc-4e09-965b-ffcffb8f4a74" />

---

## 🚀 Usage


1. Open Monarch in your browser and navigate to **Settings → Categories**.
2. Open your browser console (**Right click → Inspect → Console**).
3. Paste the contents of [`deleteCategory.js`](deleteCategory.js) into the console.
4. Run the function:


```js
// Example: delete "ELECTRONIC WITHDRAWAL" 5 times
await deleteCategory("ELECTRONIC WITHDRAWAL", 5);


// Example: delete "DIVIDEND" once
await deleteCategory("DIVIDEND");


// Advanced: configure wait times (in ms)
// waitDeleteMs = max wait for "Delete" button
// waitConfirmMs = max wait for "Delete Category" button
await deleteCategory("PAYMENT", 3, 8000, 12000);
```


### Parameters
- **key** *(string, required)* → The text of the category you want to delete.
- **times** *(number, default = 1)* → How many times to repeat the delete process.
- **waitDeleteMs** *(number, default = 5000)* → Max time to wait for the first **Delete** button.
- **waitConfirmMs** *(number, default = 5000)* → Max time to wait for the **Delete Category** confirmation button.


👉 In most cases, you’ll only need to provide `key` and optionally `times`. The wait times are configurable if your UI is slower to load.


---


## ⚠️ Disclaimer


This script is **unofficial** and not affiliated with Monarch Money.
Use at your own risk. Make sure you know what categories you’re deleting — the action cannot be undone.


---


## 📜 License


MIT License — feel free to copy, modify, and share.
