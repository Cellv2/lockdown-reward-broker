import React, { useContext } from "react";
import UserContext from "../app/UserContext";

type Props = {};

const Rewards = (props: Props) => {
    const { user } = useContext(UserContext);
    return (
        <div>
            This is the rewards page
            <br />
            The current UserContext ID is {`${user}`}
        </div>
    );
};

export default Rewards;
