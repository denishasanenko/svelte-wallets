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
const expectedBalance = '2000 EUR';

describe("Wallet component", () => {

    beforeEach(() => {
        component = render(Wallet, {props});
    });

    test("should render component correctly", () => {
        expect(component.container.querySelector("h2")).toHaveTextContent(expectedHeading);
    });

    test("should render wallet balance correctly", () => {
        expect(component.container.querySelector(".head .balance")).toHaveTextContent("2000 EUR");
    });

    test("should render wallet expenses correctly", () => {
        expect(component.container.querySelector(".stat .expenses .amount")).toHaveTextContent("430021.41 EUR");
    });

    test("should render wallet last top-up correctly", () => {
        expect(component.container.querySelector(".stat .top-up .amount")).toHaveTextContent("300.32 EUR");
    });

    test("should render correct wallet transaction count", () => {
        expect(component.container.querySelectorAll(".transaction").length).toBe(4);
    });

    test("should render correct transaction date", () => {
        expect(component.container.querySelector(".transaction .time")).toHaveTextContent('payment - Sat Jan 04 2020');
    });

    test("should render correct transaction date", () => {
        expect(component.container.querySelector(".transaction .amount")).toHaveTextContent('-132.2 EUR');
    });

    test("should render placeholder on empty transactions list", () => {
        const newProps = {...props};
        const transactions = newProps.activeWallet.transactions;
        newProps.activeWallet.transactions = [];
        component.rerender({props: newProps});
        expect(component.container.querySelector('.transactions')).toHaveTextContent('You have no operations yet!');
        newProps.activeWallet.transactions = transactions;
    });

});
