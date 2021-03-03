import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import UserContext from "../../app/UserContext";

type Props = {};

const RedeemReward = (props: Props) => {
    const { updateUser } = useContext(UserContext);

    return (
        <Button
            variant="outline-primary"
            block
            onClick={() => updateUser("hardCoded_willbeignored")}
        >
            Redeem Reward
        </Button>
    );
};

export default RedeemReward;
