import React from "react";
import Button from "react-bootstrap/Button";
import { Reward } from "../../shared/store.types";

type Props = {
    reward: Reward;
};

const RedeemReward = (props: Props) => {
    const { id, name, redeemCost } = props.reward;
    return (
        <Button
            variant="outline-primary"
            block
            onClick={() => console.log(`clicked on ${id}`)}
        >
            Redeem {name} for {redeemCost}
        </Button>
    );
};

export default RedeemReward;
