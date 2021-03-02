import React from "react";
import UserContext from "../app/UserContext";

type Props = {};

const Rewards = (props: Props) => {
    return (
        <UserContext.Consumer>
            {(user) => (
                <div>
                    This is the rewards page
                    The current UserContext ID is {`${user}`}
                </div>
            )}
        </UserContext.Consumer>
    );
};

export default Rewards;
