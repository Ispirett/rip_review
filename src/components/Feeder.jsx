import {Card, Feed} from "semantic-ui-react";
import React from "react";

export default () => (
    <Card>
        <Card.Content>
            <Card.Header>Recent Activity</Card.Header>
        </Card.Content>
        <Card.Content>
            <Feed>
                <Feed.Event>
                    <Feed.Label image="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"/>
                    <Feed.Content>
                        <Feed.Date content="1 day ago"/>
                        <Feed.Summary>
                            You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                        </Feed.Summary>
                    </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                    <Feed.Label image="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"/>
                    <Feed.Content>
                        <Feed.Date content="3 days ago"/>
                        <Feed.Summary>
                            You added <a>Molly Malone</a> as a friend.
                        </Feed.Summary>
                    </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                    <Feed.Label image="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"/>
                    <Feed.Content>
                        <Feed.Date content="4 days ago"/>
                        <Feed.Summary>
                            You added <a>Elliot Baker</a> to your <a>musicians</a> group.
                        </Feed.Summary>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        </Card.Content>
    </Card>
);


