import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const [photoRes, userRes] = await Promise.all([uploadPhoto(), createUser()]);
  console.log(photoRes);
  return {
    photo: {
      status: photoRes.status,
      body: photoRes.body,
    },
    user: {
      firstName: userRes.firstName,
      lastName: userRes.lastName,
    },
  };
}
