import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Reward } from "../../shared/store.types";

type Props = {};

const testRewards: Reward[] = [
    {
        id: "40852072-c3b6-4533-ab9f-2f5716a70ad4",
        name: "magic",
        redeemCost: 15,
    },
    {
        id: "6a3b2e37-f9bd-4fa2-a18c-97e175ce915c",
        name: "risitas",
        redeemCost: 20,
    },
    {
        id: "1a3b2e37-f9bd-4fa2-a18c-97e175ce915c",
        name: "risitas",
        redeemCost: 20,
    },
    {
        id: "2a3b2e37-f9bd-4fa2-a18c-97e175ce915c",
        name: "risitas",
        redeemCost: 20,
    },
    {
        id: "3a3b2e37-f9bd-4fa2-a18c-97e175ce915c",
        name: "risitas",
        redeemCost: 20,
    },
];

const AvailableRewards = (props: Props) => {
    const rewardCols = testRewards.map((reward, index) => {
        return (
            <Col key={index} className="py-2">
                <Button
                    variant="outline-primary"
                    block
                    onClick={() => console.log("clicky")}
                >
                    Redeem {reward.name} for {reward.redeemCost}
                </Button>
            </Col>
        );
    });

    return (
        <Container fluid>
            <Row xs={3}>{rewardCols}</Row>
        </Container>
    );
};

export default AvailableRewards;
