let resultElement = document.getElementById('outcome');
    let result = '0';

    function clearResult() {
      result = '0';
      updateResult();
    }

    function appendToResult(value) {
      if (result === '0') {
        result = value;
      } else {
        result += value;
      }
      updateResult();
    }

    function calculateResult() {
      try {
        result = eval(result).toString();
      } catch (error) {
        result = 'Error';
      }
      updateResult();
    }

    function updateResult() {
      resultElement.textContent = result;
    }