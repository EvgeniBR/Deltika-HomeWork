 const createXAxis = (data) => {
    let num = 0;
    let labelsArray = [];

    while (data.Data[`${num}.0`] !== undefined) {
      labelsArray.push(data.Data[`${num}.0`].Time);

      num += 10;
    }
    
    return labelsArray;
  };
 const createPressure = (data, title) => {
    let num = 0;
    let preassureArray = [];

    while (data.Data[`${num}.0`] !== undefined) {
      preassureArray.push(data.Data[`${num}.0`][title]);

      num += 10;
    }
    
    return preassureArray;
  };
 const createPressureF = (data , title) => {
    let num = 0;
    let preassureArray = [];

    while (data.Data[`${num}`] !== undefined) {
      preassureArray.push(data.Data[`${num}`][title]);

      num += 10;
    }
    
    return preassureArray;
  };
// eslint-disable-next-line
  export default {
      createXAxis,
      createPressure,
      createPressureF,
  }