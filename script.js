function copyLink() {
  const telegramURL = "https://t.me/+aqkhrd_xYq1kOTBl";
  navigator.clipboard.writeText(telegramURL).then(() => {
    alert("Telegram link copied to clipboard!");
  });
}