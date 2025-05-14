let timer;

    function updateClock() {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');

      document.querySelector('.red').textContent = hh;
      document.querySelector('.green').textContent = mm;
      document.querySelector('.blue').textContent = ss;
    }

    function startClock() {
      if (!timer) {
        updateClock(); // update immediately
        timer = setInterval(updateClock, 1000);
      }
    }

    function stopClock() {
      clearInterval(timer);
      timer = null;
    }