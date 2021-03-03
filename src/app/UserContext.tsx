import { createContext } from "react";
import { Beneficiary } from "../shared/store.types";

type UserContextData = {
    user: Beneficiary | undefined;
    updateUser: (userId: string) => void;
};

export const userContextDataDefaultValue: UserContextData = {
    user: undefined,
    updateUser: () => null,
};

// TODO: skip default creation with undefined ?
const UserContext = createContext<UserContextData>(userContextDataDefaultValue);

export default UserContext;
