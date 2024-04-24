import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [photoRes, userRes] = await Promise.all([uploadPhoto(), createUser()]);
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
  } catch (error) {
    return error.message;
  }
}
