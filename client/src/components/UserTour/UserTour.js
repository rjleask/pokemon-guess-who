import React, { Component }from "react";
import Tour from "react-user-tour";
import "./UserTour.css";

class UserTour extends Component {
  constructor() {
    super();
    this.state={
        isTourActive: true,
        tourStep: 1
    };
  }

  render() {
    return (
        <div className="tourwrapper">
            <Tour
                active={this.state.isTourActive}
                step={this.state.tourStep}
                onNext={(step) => this.setState({tourStep: step})}
                onBack={(step) => this.setState({tourStep: step})}
                onCancel={() => this.setState({isTourActive: false})}
                steps={[
                    {
                      step: 1,
                      selector: ".maingame",
                      title: <div className="titleTour">Welcome to Pokemon Guess Who!</div>,
                      body: <div className="bodyTour">The goal of this game is to guess the mystery pokemon. You can randomly guess until you are correct. Each incorrect guess is 10 points! Click the "Guess Me!" button to enter a guess.</div>
                    },
                    {
                      step: 2,
                      selector: "#scoredisplay",
                      title: <div className="titleTour">Hints</div>,
                      body: <div className="bodyTour">Struggling? Try a hint! Each hint is 15 points!</div>
                    },
                    {
                      step: 3,
                      selector: "#scoredisplay",
                      title: <div className="titleTour">Show the Type.</div>,
                      body: <div className="bodyTour">This will tell you the main type of the mystery pokemon.</div>
                    },
                    {
                      step: 4,
                      selector: "#scoredisplay",
                      title: <div className="titleTour">Does this pokemon evolve?</div>,
                      body: <div className="bodyTour">This will tell you if the pokemon will eventually evolve. This contains both normal evolution and ones caused by stones and trades!</div>
                    },
                    {
                      step: 5,
                      selector: "#scoredisplay",
                      title: <div className="titleTour">Did this pokemon evolve?</div>,
                      body: <div className="bodyTour">This will tell you if the pokemon did evolve from another pokemon. This contains both normal evolution and ones caused by stones and trades!</div>
                    },
                    {
                      step: 6,
                      selector: "#scoredisplay",
                      title: <div className="titleTour">Good Luck</div>,
                      body: <div className="bodyTour">If you win, you catch the mystery pokemon!</div>
                    }
                ]}
            />
        </div>
    );
}
}

export default UserTour;
