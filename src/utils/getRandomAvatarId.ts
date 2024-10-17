export const getRandomAvatarId = (id: number): number => {
  if (id <= 70) {
    return id;
  }
  return Math.floor(Math.random() * 70) + 1;
};