const myPromise = new Promise((myResolve, myReject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      myResolve('I love you!');
    } else {
      myReject(new Error('Failed'));
    }
  }, 3000);
});

export default function getResponseFromAPI() {
  return myPromise;
}
