import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div class="cards">
                    <div id="card1" class="card" onclick="click1()"></div>
                    <div id="card2" class="card" onclick="click2()"></div>
                    <div id="card3" class="card" onclick="click3()"></div>
                </div>

                <div class="footer">
                    <p id="alanId" class="description"><span style="background-color: green;">Kedi kartını bulmak için kartın
                    üzerine tıklamalısın.</span></p>
                    <p id="kazandiId" class="description" style="display: none;"><span
                        style="background-color: green;">Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <a
                            href="index.html">buraya</a> tıklayabilirsin.</span></p>
                    <p id="kaybettiId" class="description" style="display: none;"><span
                        style="background-color: green;">Kaybettin :( Yeni bir oyun oynamak istersen <a
                            href="index.html">buraya</a> tıklayabilirsin.</span></p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));