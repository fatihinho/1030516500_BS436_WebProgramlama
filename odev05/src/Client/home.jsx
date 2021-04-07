import React from "react";
import { Link } from 'react-router-dom'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div class="header">
                <h2 class="title">Kedi Bulmaca</h2>
                <p class="description">Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk tercihte Kedi
    kartını bulamaz isen 2. seçim hakkı tanınacaktır.</p>

                <Link to="/Game">
                    <Button renderAs="button">
                        <span>OYNA</span>
                    </Button>
                </Link>
            </div>
        );
    }
}