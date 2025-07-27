import { it , expect , describe , vi } from 'vitest';
import { PaymentSummary } from './PaymentSummary';
import { render  , screen , within} from '@testing-library/react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router';
import { formatMoney } from '../../utils/moneyFormat';
import { useLocation } from 'react-router';

vi.mock('axios');

function Location(){
    const location = useLocation();
    return (
        <div data-testid = "url-path">
            {location.pathname}
        </div>
    )
}

describe("Payment Summary component Test" , () =>{
    let payment_summary;
    let loadCart;
    let user;
   

    beforeEach(()=>{
        payment_summary = {
            "totalItems": 24,
            "productCostCents": 26160,
            "shippingCostCents": 0,
            "totalCostBeforeTaxCents": 26160,
            "taxCents": 2616,
            "totalCostCents": 28776
        };
        loadCart = vi.fn();
        user = userEvent.setup();
    });


    it( "check the dollar amounts of payment summary rows"  , () =>{
        render(
            <MemoryRouter>
                <PaymentSummary
                    paymentSummary={payment_summary}
                    loadCart={loadCart}
                 />
            </MemoryRouter>
        );
        expect(screen.getByTestId("items-dollar-amount"))
        .toHaveTextContent("(24)");
        expect(
            within(
                screen.getByTestId("shipping-dollar-amount")
            ).getByText(formatMoney(payment_summary.shippingCostCents))
        ).toBeInTheDocument();
        expect(
            within(
                screen.getByTestId("product-cost-dollar-amount")
            ).getByText(formatMoney(payment_summary.productCostCents))
        ).toBeInTheDocument();
        expect(
            within(
                screen.getByTestId("total-dollar-amount-before-tax")
            ).getByText(formatMoney(payment_summary.totalCostBeforeTaxCents))
        ).toBeInTheDocument();
        expect(
            within(
                screen.getByTestId("tax-dollar-amount")
            ).getByText(formatMoney(payment_summary.taxCents))
        ).toBeInTheDocument();
        expect(
            within(
                screen.getByTestId("total-dollar-amount")
            ).getByText(formatMoney(payment_summary.totalCostCents))
        ).toBeInTheDocument();
    });

    it("test for the place order button" ,async () =>{
        render(
            <MemoryRouter>
                <PaymentSummary
                    paymentSummary={payment_summary}
                    loadCart={loadCart}
                 />
                 <Location />
            </MemoryRouter>
        );

        const placeOrderButton = screen.getByTestId("place-order-button");
        await user.click(placeOrderButton);

        expect(axios.post).toHaveBeenCalled("/api/orders");
        expect(loadCart).toHaveBeenCalled();
        
        expect(
            within(
            screen.getByTestId("url-path")
            ).getByText("/orders")
        ).toBeInTheDocument();
    });
})

 