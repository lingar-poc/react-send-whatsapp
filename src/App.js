import logo from './logo.svg';
import './App.css';
import {WhatsAppSender} from "./whatsAppSender";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>

            </header>
            <main className="App">
                <h1>WhatsApp Sender: </h1>

                <WhatsAppSender/>
            </main>

            <p>Do you know the situation when you want to send a whatsApp
                message,
                but you don't want to save the number? </p>
            <p>
                with this sender you can do it.

            </p>

            <a href={"https://github.com/lingar-poc/react-send-whatsapp"}>github repository</a>


            <footer>
                <p>
                    Developed by Izhar Mashkif, a professional web developer,

                    yimprogramming@gmail.com,

                    feel free to contact, I open to new offers (as
                    contractor, thanks).
                </p>

                <p>I am a web developer since 2014. I control well in all
                    software development aspects. Java+Spring Boot at server
                    side, React/Angular at client side. </p>
            </footer>

        </div>
    );
}

export default App;
