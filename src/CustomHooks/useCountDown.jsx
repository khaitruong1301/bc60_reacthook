import { useState, useEffect } from 'react';

function useCountDown(initialValue) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    // Kiểm tra nếu count đã là 0, không làm gì cả
    if (count === 0) return;

    // Tạo một timer để giảm count sau mỗi giây
    const timerId = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    // Dọn dẹp bằng cách hủy timer khi unmount hoặc count thay đổi
    return () => clearInterval(timerId);
  }, [count]);

  return count;
}

export default useCountDown;
