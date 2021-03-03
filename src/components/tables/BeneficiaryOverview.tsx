import React from "react";
import Table from "react-bootstrap/Table";
import { Beneficiary } from "../../shared/store.types";
import RedeemReward from "../buttons/RedeemReward";

type Props = {};

const testData: Beneficiary[] = [
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

const beneficiaryOverviewHeaderMappings = {
    id: null,
    name: "Name",
    currentFunds: "Current Funds",
    purchaseHistory: "Last Purchase",
    fundingHistory: "Last Donation",
    allowedRewards: null,
};

// TODO: Make this reusable (pass in the mapping object as well?)
/**
 * Maps keys from the database to a specific value used for the front end
 * @param headerKey THe key to be searched for in the mappings object
 * @returns A string to use for the front end if found, otherwise null
 */
const mapHeaderByKeys = (headerKey: keyof Beneficiary): string | null => {
    const mappingObjKeys = Object.keys(beneficiaryOverviewHeaderMappings);
    if (mappingObjKeys.includes(headerKey)) {
        return beneficiaryOverviewHeaderMappings[headerKey];
    }

    return null;
};

const BeneficiaryOverview = (props: Props) => {
    // name, currentFunds, purcahseHistory, fundingHistory
    const tableHeaders = Object.keys(testData[0]).map((key, index) => {
        const typeCorrectedKey = key as keyof Beneficiary;
        const mappedKey = mapHeaderByKeys(typeCorrectedKey);
        if (mappedKey !== null) {
            return <th key={index}>{mappedKey}</th>;
        }

        return null;
    });

    const tableBodyRows = testData.map((data, index) => {
        return (
            <tr key={index}>
                <td>{data.name}</td>
                <td>{data.currentFunds}</td>
                <td>{data.purchaseHistory[0].redeemedReward}</td>
                <td>{data.fundingHistory[0].fundsAdded}</td>
                <td>
                    <RedeemReward />
                </td>
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
