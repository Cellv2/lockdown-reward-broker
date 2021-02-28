import React from "react";
import Table from "react-bootstrap/Table";

type Props = {};

const testData = [
    {
        id: "6ce580d2-8955-43d4-828f-8651992f5db7",
        name: "child1",
        currentFunds: 10,
        purchaseHistory: [
            {
                timestamp: "thisisatimeIswear",
                fundsBefore: 25,
                redeemedReward: "magic",
                rewardCost: 15,
                fundsAfter: 10,
            },
        ],
        fundingHistory: [
            {
                timestamp: "thisisatimeIswear",
                wasAuthorized: true,
                fundsBefore: 0,
                fundsAdded: 25,
                fundsAfter: 25,
            },
            {
                timestamp: "thisisatimeIswear",
                wasAuthorized: false,
                fundsBefore: 0,
                fundsAdded: 1337,
                fundsAfter: 0,
            },
        ],
    },
];

const BeneficiaryOverview = (props: Props) => {
    // name, currentFunds, purcahseHistory, fundingHistory
    const tableHeaders = Object.keys(testData[0])
        .filter((key) => key !== "id")
        .map((key, index) => <th key={index}>{key}</th>);
    console.log(Object.keys(testData));

    const tableBodyRows = testData.map((data) => {
        return (
            <tr>
                <td>{data.name}</td>
                <td>{data.currentFunds}</td>
                <td>{data.purchaseHistory[0].redeemedReward}</td>
                <td>{data.fundingHistory[0].fundsAdded}</td>
            </tr>
        );
    });

    return (
        <Table striped bordered hover>
            <thead>
                <tr>{tableHeaders}</tr>
            </thead>
            <tbody>{tableBodyRows}</tbody>
        </Table>
    );
};

export default BeneficiaryOverview;
