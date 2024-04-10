export default function getFullResponseFromAPI(success) {
  return new Promise((myResolve, myReject) => {
    if (success) {
      myResolve({ status: 200, body: 'Success' });
    } else {
      myReject(new Error('The fake API is not working currently'));
    }
  });
}
