# Monarch Category Cleanup Script 🧹

Bulk-delete custom categories in [Monarch Money](https://monarchmoney.com/) with a simple JavaScript console script.  
I had hundreds of categories to remove manually — this script automates the process with just a few lines of code.

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
```

The script will:
- Find the matching category row  
- Click to open the modal  
- Click **Delete**, then **Delete Category**  
- Wait between steps so the UI has time to update  
- Repeat `N` times if specified  

---

## ⚠️ Disclaimer

This script is **unofficial** and not affiliated with Monarch Money.  
Use at your own risk. Make sure you know what categories you’re deleting — the action cannot be undone.

---

## 📜 License

MIT License — feel free to copy, modify, and share.
