import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import UserContext from "../../app/UserContext";

type Props = {};

const RedeemReward = (props: Props) => {
    const { updateUser } = useContext(UserContext);

    return (
        <Link to="/rewards">
            <Button
                variant="outline-primary"
                block
                onClick={() => updateUser("hardCoded_willbeignored")}
            >
                Redeem Reward
            </Button>
        </Link>
    );
};

export default RedeemReward;
