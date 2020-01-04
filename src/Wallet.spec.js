import { render } from "@testing-library/svelte";
import Wallet from "./Wallet.svelte";

let component;
const props = {
    activeWallet: {
        id: 1,
        type: 'Test 1',
        title: 'Test wallet 1',
        balance: 200000,
        currency: 'EUR',
        lastTopUp: 30032,
        expenses: 43002141,
        transactions: [
            {
                id: 1,
                category: 'home',
                title: 'Home',
                timestamp: 1578136544987,
                operation: 'payment',
                amount: -13220
            },
            {
                id: 2,
                category: 'topUp',
                title: 'Top-up',
                timestamp: 1578136544987,
                operation: 'received',
                amount: 40000
            },
            {
                id: 3,
                category: 'home',
                title: 'Home',
                timestamp: 1578136544987,
                operation: 'payment',
                amount: -13220
            },
            {
                id: 4,
                category: 'topUp',
                title: 'Top-up',
                timestamp: 1578136544987,
                operation: 'received',
                amount: 40000
            }
         ]
    }
};
const expectedHeading = 'Test wallet 1';

describe("Wallet component", () => {

    beforeEach(() => {
        component = render(Wallet, {props});
    });

    test("should render component correctly", () => {
        expect(component.container.querySelector("h2")).toHaveTextContent(expectedHeading);
    });

});
