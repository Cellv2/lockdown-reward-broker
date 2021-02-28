import React from "react";
import BeneficiaryOverview from "../components/tables/BeneficiaryOverview";

type Props = {};

const Home = (props: Props) => {
    return (
        <div>
            This is the home page
            <BeneficiaryOverview />
        </div>
    );
};

export default Home;
