import ResultBox from './ResultBox';
import { render, screen, cleanup, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';



  describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
    });
    it('should render proper info about conversion when PLN -> USD', () => {
        
        const testCases = [
            { amount: 100, from: 'PLN', to: 'USD' },
            { amount: 20, from: 'PLN', to: 'USD' },
            { amount: 200, from: 'PLN', to: 'USD' },
            { amount: 345, from: 'PLN', to: 'USD' },
        ]

        for(const testObj of testCases) {

            render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
            const mainDiV = screen.getByTestId("main");
            const amount = testObj.amount.toFixed(2);
            const outputAmount = String((amount/3.5).toFixed(2));
            const output = `PLN ${amount} = $${outputAmount}`
            expect(mainDiV).toHaveTextContent(output);

            cleanup();
        }   
    });
    it('should render proper info about conversion when USD -> PLN', () => {
        
        const testCases = [
            { amount: 100, from: 'USD', to: 'PLN' },
            { amount: 20, from: 'USD', to: 'PLN' },
            { amount: 200, from: 'USD', to: 'PLN' },
            { amount: 145, from: 'USD', to: 'PLN' },
        ]

        for(const testObj of testCases) {

            render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
            const mainDiV = screen.getByTestId("main");
            const amount = testObj.amount.toFixed(2);
            const outputAmount = String((amount*3.5).toFixed(2));
            const output = `$${amount} = PLN ${outputAmount}`
            expect(mainDiV).toHaveTextContent(output);

            cleanup();
        }   
    });
    it('should render proper info about conversion when PLN -> PLN', () => {
        
        const testCases = [
            { amount: 100, from: 'PLN', to: 'PLN'},
            { amount: 20, from: 'PLN', to: 'PLN'},
            { amount: 222, from: 'PLN', to: 'PLN'},
            { amount: 567, from: 'PLN', to: 'PLN'},  
        ]

        for(const testObj of testCases) {

            render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
            const mainDiV = screen.getByTestId("main");
            const amount = testObj.amount.toFixed(2);
            const output = `PLN ${amount} = PLN ${amount}`
            expect(mainDiV).toHaveTextContent(output);

            cleanup();
        }   
    });
    it('should render proper info about conversion when USD -> USD', () => {
        
        const testCases = [
            { amount: 100, from: 'USD', to: 'USD'},
            { amount: 20, from: 'USD', to: 'USD'},
            { amount: 567, from: 'USD', to: 'USD'},
            { amount: 8, from: 'USD', to: 'USD'},  
        ]

        for(const testObj of testCases) {

            render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
            const mainDiV = screen.getByTestId("main");
            const amount = testObj.amount.toFixed(2);
            const output = `$${amount} = $${amount}`
            expect(mainDiV).toHaveTextContent(output);

            cleanup();
        }   
    });
    it('should render proper info about conversion value is below 0', () => {
        
        const testCases = [
            { amount: -100, from: 'USD', to: 'PLN' },
            { amount: -20, from: 'PLN', to: 'USD' },
            { amount: -200, from: 'USD', to: 'PLN' },
            { amount: -145, from: 'PLN', to: 'USD' },
        ]

        for(const testObj of testCases) {

            render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
            const mainDiV = screen.getByTestId("main");
            expect(mainDiV).toHaveTextContent('Wrong value');

            cleanup();
        }   
    });
});