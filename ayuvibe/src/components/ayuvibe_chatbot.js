import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


const AyuvibeChatbot = () => {

  const steps = [
      {
          id: '0',
          message: 'Hey!',

          // This calls the next id
          // i.e. id 1 in this case
          trigger: '1',
      }, {
          id: '1',

          // This message appears in
          // the bot chat bubble
          message: 'Please write your username',
          trigger: '2'
      }, {
          id: '2',

          // Here we want the user
          // to enter input
          user: true,
          trigger: '3',
      }, {
          id: '3',
          message: " hi {previousValue}, how can I help you?",
          end: true
      }
  ];

// Creating our own theme
const theme = {
    background: '#C9FF8F',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};

// Set some properties of the bot
const config = {
    botAvatar: "img.png",
    floating: true,
};


  return (
    <div>
        <ThemeProvider theme={theme}>
            <ChatBot

                // This appears as the header
                // text for the chat bot
                headerTitle="AyuVibe Chatbot"
                steps={steps}
                {...config}

            />
          </ThemeProvider>
    </div>
  );
}

export default AyuvibeChatbot;
