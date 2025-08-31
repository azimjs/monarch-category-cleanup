async function deleteCategory(key, times = 1) {
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

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

    // Step 2: click the "Delete" button
    const deleteBtn = Array.from(document.querySelectorAll('button'))
      .find(el => el.textContent.trim() === 'Delete');
    if (!deleteBtn) {
      console.warn(`Delete button not found on iteration ${i + 1}`);
      break;
    }
    deleteBtn.click();
    await sleep(1000); // wait for confirm modal

    // Step 3: click the "Delete Category" button
    const confirmBtn = Array.from(document.querySelectorAll('button'))
      .find(el => el.textContent.trim() === 'Delete Category');
    if (!confirmBtn) {
      console.warn(`Delete Category button not found on iteration ${i + 1}`);
      break;
    }
    confirmBtn.click();

    await sleep(1000); // final wait
    console.log(`✅ Deleted category "${key}" (iteration ${i + 1}/${times})`);
  }
}
