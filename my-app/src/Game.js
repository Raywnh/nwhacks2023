import "./App.css";
import { RotatingLines} from 'react-loader-spinner'
function game(props) {
  return (
    <div>
      {/* Game Grid */}
      <div className="gamePage sage">
        <div className=" mustard padding-16 content" id="game-box">   
        <button
          className="button sage padding-large large margin"
          id="normalButton"
          onClick={props.goBack}
        >
          Go Back
        </button>
        
        {(props.pages===1)? (<h1>Normal Mode</h1>) : ((props.pages===2)? <h1>Hard Mode</h1> : <></>)}
        <button className="start-button sage button" onClick={props.onStart}>{!props.started? <h1>Start</h1> : <h1>End</h1>}</button>
        <div className="realGame">
        {props.images[props.imagePointer] === undefined? 
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}/> : <img id="generatedImage" src={props.images[props.imagePointer].link}></img>}
        </div>
        <div className="text-container">
          <label className="text comicSans" > your guess here:</label>
          <input ref={props.inputRefAnswer} className="textInput" type="text" name="text" size="30" />
          <button onClick={props.onSubmit} className="answer-button button sage">Enter</button>
        </div>
        {/* Footer */}
        <footer className="container padding-32 center opacity">
            <p>Made by{"  "} </p>
              
              <a href="https://github.com/rayzhou4" target="_blank">
              <img src={require('./assets/git.png')} alt="Ray Z" id="logo"/>
              <p>Ray Z</p>
              </a>{" "}
              ·{" "}
              <a href="https://github.com/Raywnh" target="_blank">
              <img src={require('./assets/git.png')} alt="Ray Z" id="logo"/>
              <p>Ray H</p>
              </a>{" "}
              ·{" "}
              <a href="https://github.com/migies12" target="_blank">
              <img src={require('./assets/git.png')} alt="Ray Z" id="logo"/>
              <p>Miguel M</p>
              </a>{" "}
              ·{" "}
              <a href="https://github.com/AndyJLi0" target="_blank">
              <img src={require('./assets/git.png')} alt="Ray Z" id="logo"/>
              <p>Andy L</p>
              </a>

          </footer>
        </div>
      </div>
    </div>
  );
}

export default game;
