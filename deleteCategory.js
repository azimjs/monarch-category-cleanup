async function deleteCategory(key, times = 1, waitDeleteMs = 5000, waitConfirmMs = 5000) {
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const maxDeleteAttempts = Math.ceil(waitDeleteMs / 1000);
  const maxConfirmAttempts = Math.ceil(waitConfirmMs / 1000);

  for (let i = 0; i < times; i++) {
    const span = Array.from(
      document.querySelectorAll('[class^="ManageCategoryRow__"]')
    ).find(d => d.textContent.includes(key));

    if (!span) {
      console.warn(`Category not found on iteration ${i + 1}:`, key);
      break;
    }

    // Step 1: click the category row
    span.click();
    await sleep(1000); // wait for modal

    // Step 2: wait until "Delete" button appears
    let deleteBtn;
    for (let attempt = 0; attempt < maxDeleteAttempts; attempt++) {
      deleteBtn = Array.from(document.querySelectorAll('button'))
        .find(el => el.textContent.trim() === 'Delete');
      if (deleteBtn) break;
      await sleep(1000);
    }
    if (!deleteBtn) {
      console.warn(`Delete button not found on iteration ${i + 1}`);
      break;
    }
    deleteBtn.click();
    await sleep(1000); // wait for confirm modal

    // Step 3: wait until "Delete Category" button appears
    let confirmBtn;
    for (let attempt = 0; attempt < maxConfirmAttempts; attempt++) {
      confirmBtn = Array.from(document.querySelectorAll('button'))
        .find(el => el.textContent.trim() === 'Delete Category');
      if (confirmBtn) break;
      await sleep(1000);
    }
    if (!confirmBtn) {
      console.warn(`Delete Category button not found on iteration ${i + 1}`);
      break;
    }
    confirmBtn.click();

    await sleep(1000); // final wait
    console.log(`✅ Deleted category "${key}" (iteration ${i + 1}/${times})`);
  }
}
