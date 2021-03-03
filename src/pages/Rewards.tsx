import React, { useContext } from "react";
import UserContext from "../app/UserContext";

type Props = {};

const Rewards = (props: Props) => {
    const { user } = useContext(UserContext);
    return (
        <div>
            This is the rewards page
            <br />
            {user !== undefined
                ? `The current UserContext's user ID is ${user.id}`
                : "No user currently set, how did you get here?!"}
        </div>
    );
};

export default Rewards;
