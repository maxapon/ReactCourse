import '/src/css/Footer.css';

export const Footer = () => {
    return (
        <footer>
            <h3>Footer</h3>
            <p>Some text about cute cats...</p>
            <div>Contact us:
                <ul>
                    <li>
                        <a href=""><img src="/src/resources/facebook.png"/>Facebook</a>
                    </li>
                    <li>
                        <a href=""><img src="/src/resources/twitter.png"/>Twitter(X)</a>
                    </li>
                    <li>
                        <a href=""><img src="/src/resources/telegram.png"/>Telegram</a>
                    </li>
                    <li>
                        <a href=""><img src="/src/resources/youtube.png"/>YouTube</a>
                    </li>
                    <li>
                        <a href=""><img src="/src/resources/cat.png"/>Categram</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}