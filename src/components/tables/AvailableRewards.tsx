import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Reward } from "../../shared/store.types";
import RedeemReward from "../buttons/RedeemReward";

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
        name: "risitas_1",
        redeemCost: 21,
    },
    {
        id: "2a3b2e37-f9bd-4fa2-a18c-97e175ce915c",
        name: "risitas_2",
        redeemCost: 22,
    },
    {
        id: "3a3b2e37-f9bd-4fa2-a18c-97e175ce915c",
        name: "risitas_3",
        redeemCost: 23,
    },
];

const AvailableRewards = (props: Props) => {
    const rewardCols = testRewards.map((reward, index) => {
        return (
            <Col key={index} className="py-2">
                <RedeemReward reward={reward} />
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
