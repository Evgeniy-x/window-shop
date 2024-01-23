import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* Проксі сервіс "CORS Anywhere" для обходу CORS помилки*/
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

// const telegramAPI = process.env.REACT_APP_Telegram_API;
// const chatID = process.env.REACT_APP_Chat_ID;
const telegramAPI = '6563904796:AAF3dzjIKZoAE14UOqU-rfzYmmbP_LQ3EXU';
const chatID = '-1001936748257';

const telegramUrl = `https://api.telegram.org/bot${telegramAPI}/sendMessage`;

const telegramSend = async text => {
  try {
    const response = await fetch(proxyUrl + telegramUrl, {
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
      toast.success("Номер відправлено! \nЗ вами зв'яжуться");
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
