import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  const [userResult, photoResult] = await Promise.allSettled([userPromise, photoPromise]);

  return [
    { status: userResult.status, value: userResult.value },
    { status: photoResult.status, value: photoResult.value },
  ];
}
