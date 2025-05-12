function customPromiseAllWait(promises) {
    return new Promise((resolve, reject) => {
      const results = new Array(promises.length);
      let settledCount = 0;
      let firstError = null;
  
      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then(result => {
            results[index] = result;
          })
          .catch(error => {
            if (firstError === null) {
              firstError = error;
            }
          })
          .finally(() => {
            settledCount++;
            if (settledCount === promises.length) {
              if (firstError !== null) {
                reject(firstError);
              } else {
                resolve(results);
              }
            }
          });
      });
    });
  }
  function allOrAggregateError(promises) {
    return Promise.allSettled(promises).then(results => {
      const errors = [];
      const values = [];
  
      results.forEach((res, i) => {
        if (res.status === 'fulfilled') {
          values[i] = res.value;
        } else {
          errors.push(res.reason);
        }
      });
  
      if (errors.length > 0) {
        throw new AggregateError(errors, 'One or more promises failed');
      }
  
      return values;
    });
  }

  