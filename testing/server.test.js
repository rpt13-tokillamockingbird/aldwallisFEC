
//  See if we can check out /hundred and see
//   how many records there are
//   check if 1st, 2nd and 99th match.
//   check if they contain the 8 keys.
//  Check out the fakerDB.js
//   Check if hundred() gives 100 records?


const Promise = require('bluebird');
const request = require('request')

let requestPromise = (Promise.promisify(request))


  // console.log(requestPromise('http://localhost:4554/hundred')
  //   .then(d =>
  //     console.log(JSON.parse(d.body).length)
  //   ))

describe('Getting /hundred data with Promises', () => {

  it('should have 100 records', () => {
    return requestPromise('http://localhost:4554/hundred')
    .then(data => {
      expect(data).toBeDefined()
      expect(JSON.parse(data.body).length).toEqual(100);
    })
  })

  it('should have the 9 keys', () => {
    return requestPromise('http://localhost:4554/hundred')
    .then(data => {
      let firstData = JSON.parse(data.body)[0]
      //11, b/c 9 + 2 that are added in automatically. (added in sizing)
      expect(Object.keys(firstData).length).toEqual(11)
    })
  })

  it('shouldn\'t have repeats', () => {
    return requestPromise('http://localhost:4554/hundred')
    .then(data => {
      let arr = [];
      JSON.parse(data.body).map(item => {
        arr.push(item.itemNumber)
        if (arr.includes(item.itemNumber)){
          return false;
        }
      })
    })
  })

})

describe('Priya\'s endpoint ', () => {

  it('should only have one record', () => {
    return requestPromise('http://localhost:4554/priya')
    .then(data => {
      expect(data).toBeDefined();
      expect(JSON.parse(data.body).length).toEqual(100)
    })
  })

  it('should have the 4 keys', () => {
    return requestPromise('http://localhost:4554/priya')
    .then(data => {
      let firstData = JSON.parse(data.body)[0]
      //11, b/c 9 + 2 that are added in automatically. (added in sizing)
      expect(Object.keys(firstData).length).toEqual(6)
    })
  })

})
