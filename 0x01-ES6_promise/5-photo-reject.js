export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
        console.log(resolve);
        reject(new Error(`${filename} cannot be processed`));
    });
}
