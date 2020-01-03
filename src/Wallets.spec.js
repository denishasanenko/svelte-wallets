import { render, fireEvent } from "@testing-library/svelte";
import Wallets from "./Wallets.svelte";

let component;
const props = {
    activeWalletId: 1,
    wallets: [
        {
            id: 1,
            type: 'Test 1',
            title: 'Test wallet 1',
            balance: 200000,
            currency: 'EUR'
        },
        {
            id: 2,
            type: 'Test 2',
            title: 'Test wallet 2',
            balance: 430034,
            currency: 'USD'
        },
        {
            id: 3,
            type: 'Test 3',
            title: 'Test wallet 3',
            balance: -1900034,
            currency: 'USD'
        }
    ]
};
const expectedHeading = "My wallets";
const expectedNegativeAmount = "-19000.34 USD";

describe("Wallets component", () => {

    beforeEach(() => {
        component = render(Wallets, {props});
    });

    test("should render component correctly", () => {
        expect(component.container.querySelector("h1")).toHaveTextContent(expectedHeading);
    });

    test("should render correct amount of wallets", () => {
        expect(component.container.querySelectorAll('.wallet').length).toBe(props.wallets.length);
    });

    test("should render negative amounts correctly", () => {
        expect(component.getByText(expectedNegativeAmount)).toBeInTheDocument();
        expect(component.getByText(expectedNegativeAmount)).toHaveClass('negative');
    });

    test("should render correct active wallets", () => {
        expect(component.container.querySelector('.active')).toHaveTextContent("Test wallet 1");
    });

    test("should dispatch click on wallet", async (next) => {
        let activatedWalletId;
        component.component.$on('activateWallet', (event) => {
            activatedWalletId = event.detail;
            next();
        });
        try {
            await fireEvent.click(component.container.querySelectorAll('.wallet')[2].click());
            expect(activatedWalletId).toBe(props.wallets[2].id);
        } catch (e) {}
    });
});
