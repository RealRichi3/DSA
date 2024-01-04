function minOperations(nums: number[]): number {
  const rec: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const count = rec[num] ?? 0;
    rec[num] = count + 1;
  }

  function calculateOperations(count: number): number {
    let val = 0;
    if (count === 2 || count === 3) {
      return 1;
    }

    if (count % 3 == 0) {
      return count / 3;
    }

    if (count % 2 == 1) {
      val = count / 3;
    }
    if (count % 3 == 1 || count % 3 == 2) {
      val = parseInt((count / 3).toString().split(".")[0]) + 1;
    }

    return val;
  }

  let opsCount = 0;
  const recValues = Object.values(rec);
  for (let i = 0; i < recValues.length; i++) {
    const count = recValues[i];
    if (count == 1) {
      return -1;
    }

    opsCount += calculateOperations(count);
  }

  return opsCount;
}
