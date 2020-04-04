import React, { Component } from 'react';
import { TwitterTimelineEmbed } from "react-twitter-embed";


export default  class Tweets extends Component {
    render() {
        return <div className="col-sm-6">
            <section className="twitterContainer">
                <div className="twitter-embed selfCenter spaceBetween standardWidth">
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="MoHFW_INDIA"
                        options={{
                            height: "1000"
                        }}
                        theme="light"
                        noScrollbar
                    ></TwitterTimelineEmbed>
                </div>
            </section>
        </div>;
    }
}
