const telegramAPI = process.env.REACT_APP_Telegram_API;
const chatID = process.env.REACT_APP_Chat_ID;

const telegramUrl = `https://api.telegram.org/bot${telegramAPI}/sendMessage`;

const telegramSend = async text => {
  await fetch(telegramUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatID,
      text,
    }),
  });
};

export { telegramSend };
