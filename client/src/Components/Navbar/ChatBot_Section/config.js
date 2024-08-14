// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar";

const config = {
    initialMessages: [createChatBotMessage(`Hello!..`)],
    botName: "WeatherApp",
    customComponents: {
        botAvatar:(props) => <BotAvatar {...props}/>
    },
    customStyles: {
        botMessageBox: {
            backgroundColor:"purple",
        },
        chatButton:{
            backgroundColor:"purple",
        }
    }
}

export default config