import logo from "./logo.svg";
import "./App.css";
import Image from "./components/Image";
import React, { useRef, useState } from "react";
import Game from "./Game";

function App() {
  // Fetch image url and render it
  const [imageData, setImageData] = useState({});
  const inputRefAnswer = useRef();
  const [pages, setPages] = useState(0);

  return (
    <div>
      {/* Header */}
      <div className="container green center">
        <img src={require('./assets/imguessr-header-banner.png')} alt="The banner of the website" />
        
      </div>

      {/* First Grid */}
      {pages == 0 ? (
        <div className="row-padding padding-64 container sage main">
          <div className="content">
            <div className="twothird mustard padding-16">
              <h1>How to Play the Game!</h1>
              <p className="padding-16">
                Welcome to IMGUESSR.IO, a game that utilizes DALL-E 2 By OpenAI
                to generate random images. DALL_E 2 has gone rogue and is generating random images without your command. 
                Your task is to guess the prompt that DALL-E was given in order to generate its image.! All difficulties
                give you 60 seconds to guess the image, with new images being
                added every 15 seconds for extra help. Guess the prompt in 60
                seconds to win!
              </p>
              <h5 className="padding-16">
                <strong>Normal</strong> - 1 word prompt for fun, easy, and
                stress free gameplay
              </h5>
              <h5 className="padding-16">
                <strong>Extremely Hard</strong> - 2 word prompt that is
                completely random. For the brave.
              </h5>
              
              <p className="xlarge">Choose your difficulty:</p>
              <div>
                    <button
                  className="button sage"
                  id="normalButton"
                  onClick={goToNormal}
                >
                  Normal
                </button>
                <p> or </p>
                <button className="button sage">
                  Extremely Hard
                </button>
              </div>
            </div>
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
      ) : (
        <Game goBack={goBack} onSubmit={onSubmit} inputRefAnswer={inputRefAnswer}
              onStart={onStart} imageData={imageData}></Game>
      )}
    </div>
  );

  function goBack() {
    setPages(0);
  }

  function goToNormal() {
    setPages(1);
  }

  async function onStart() {
    
    await fetch('/image').then((res) => res.json()
    ).then ((data) => setImageData(data))

  }
  function onSubmit() {
    const answer = inputRefAnswer.current.value

    if (answer === null) return

    if (answer === imageData.word)
      console.log(true)
    else
      console.log(false)
    console.log(imageData.word)
    inputRefAnswer.current.value = null
    //
  }

  function submit() {
    console.log(imageData);
  }
}

export default App;
