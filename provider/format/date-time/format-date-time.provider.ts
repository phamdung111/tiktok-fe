export const formatDateTimeProvider = (time: Date): string => {
  const currentTime = new Date().getTime();
  const timeToCurrent = (currentTime - time.getTime()) / 1000;

  if (timeToCurrent < 60) return "some seconds ago";
  if (timeToCurrent >= 60 && timeToCurrent < 3600) return Math.round(timeToCurrent / 60) + " minutes ago";
  if (timeToCurrent >= 3600 && timeToCurrent < 86400) return Math.round(timeToCurrent / 3600) === 1 ? "1 hour ago" : Math.round(timeToCurrent / 3600) + " hours ago";
  if (timeToCurrent >= 86400 && timeToCurrent < 604800) return Math.round(timeToCurrent / 86400) === 1 ? "1 day ago" : Math.round(timeToCurrent / 86400) + " days ago";
  return time.getDay() + "-" + time.getMonth() + "-" + time.getFullYear();
};
