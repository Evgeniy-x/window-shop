import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const telegramAPI = process.env.REACT_APP_Telegram_API;
const chatID = process.env.REACT_APP_Chat_ID;

const telegramUrl = `https://api.telegram.org/bot${telegramAPI}/sendMessage`;

const telegramSend = async text => {
  try {
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatID,
        text,
      }),
    });
    if (response.ok) {
    }

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    toast.error('Помилка віправлення');
    console.error(
      'Помилка при відправці повідомлення до Telegram:',
      error.message
    );
  }
};

export { telegramSend };
