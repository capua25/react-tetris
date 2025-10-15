export default function Home() {
  return (
    <>
    <div className="border_div m-auto w-full max-w-4xl">
        <div className="game">
            <div className="container left">
                <h1>TETRIS</h1>
                <h2>User</h2>
                <div id="user"></div>
                <button id="start-button">START</button>
                <button id="pause-button">PAUSE</button>
                <button id="reset-button">RESET</button>
                <div id="userScores">
                    <h3>User Scores</h3>
                    <div className="list">
                        <ul>

                        </ul>
                    </div>
                </div>
                <button id="delete-scores">DELETE USER SCORES</button>
                <button id="logOut">LOG OUT</button>
            </div>
            <div className="tetris">
                <canvas id="tetris" className="h-full w-80"></canvas>
            </div>
            <div className="container right">
                <div className="next info">
                    <h2>Next</h2>
                    <canvas id="next"></canvas>
                </div>
                <div className="score info">
                    <h2>Score</h2>
                    <div id="score">0</div>
                </div>
                <div className="level info">
                    <h2>Level</h2>
                    <div id="level">0</div>
                </div>
                <div className="lines info">
                    <h2>Lines</h2>
                    <div id="lines">0</div>
                </div>
                <div id="bestScores">
                    <h3>Best Scores</h3>
                    <div className="list">
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section className="modal_container">
        <div className="modal">
            <h1 className="modal_h1">Game Over</h1>
            <h2 className="h2_modal">Your score: </h2>
            <h2 id="score_modal">0</h2>
            <button id="save_score">SAVE SCORE</button>
            <button id="restart_button">RESTART</button>
        </div>
    </section>

    <div className="login_modal">
        <div className="border_login">
            <div className="container login_container">
                <h1>Tetris Game</h1>
                <h2>Login</h2>
                <form className="container" action="#">
                    <label>Username</label>
                    <input type="text" name="username" id="username" placeholder="Enter your username"/>
                    <label>Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password"/>
                    <input id="submit" type="submit" value="LOGIN"/>
                </form>
            </div>
        </div>
    </div>

    <div className="alert_modal">
        <div className="alert">
            <div className="alert_container">
                <h1 className="alert_h1">Alert</h1>
                <h2 className="alert_h2"></h2>
                <button id="alert_button">GOT IT</button>
                <button id="create_user" className="hide_btn">CREATE NEW USER</button>
            </div>
        </div>
    </div>
    </>
  );
}
